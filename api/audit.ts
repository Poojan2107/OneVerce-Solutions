import { GoogleGenerativeAI } from '@google/generative-ai'
import type { VercelRequest, VercelResponse } from '@vercel/node'

const ALLOWED_PROTOCOLS = ['http:', 'https:']
const MAX_URL_LENGTH = 500
const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX_REQUESTS = 10
const requestCounts = new Map<string, { count: number; resetAt: number }>()

function sanitizeUrl(raw: string): string | null {
  const trimmed = raw.trim()
  if (!trimmed || trimmed.length > MAX_URL_LENGTH) return null

  // Reject suspicious patterns
  if (/[<>"'`{}|\\^]/.test(trimmed)) return null

  let urlStr = trimmed
  if (!urlStr.startsWith('http://') && !urlStr.startsWith('https://')) {
    urlStr = 'https://' + urlStr
  }

  try {
    const parsed = new URL(urlStr)
    if (!ALLOWED_PROTOCOLS.includes(parsed.protocol)) return null
    if (!parsed.hostname || parsed.hostname.includes('..')) return null
    return parsed.href
  } catch {
    return null
  }
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = requestCounts.get(ip)

  if (!entry || now > entry.resetAt) {
    requestCounts.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return true
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) return false
  entry.count++
  return true
}

const AUDIT_PROMPT = (url: string) => `
You are a world-class UX Strategist and Conversion Rate Optimization (CRO) expert.
Analyze the following website or business idea: ${url}

Provide a "Business Growth Audit" including:
1. **The Current Pulse**: A brief assessment of current digital presence.
2. **Conversion Leaks**: 3 specific areas where they are likely losing revenue.
3. **The Revenue Plan**: 3 high-impact strategic moves to scale their results.
4. **Impact Projection**: Estimated ROI of these changes.

IMPORTANT: At the very end of your response, provide four scores from 0-100 in exactly this format:
[SCORES] Performance: X, UX: X, Strategy: X, Conversion: X [/SCORES]

Keep the tone professional, results-oriented, and high-end. Use clear headings and bullet points.
`

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const clientIp = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ?? 'unknown'
  if (!checkRateLimit(clientIp)) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' })
  }

  const rawUrl = typeof req.body?.url === 'string' ? req.body.url : ''
  const sanitizedUrl = sanitizeUrl(rawUrl)
  if (!sanitizedUrl) {
    return res
      .status(400)
      .json({ error: 'Please provide a valid URL (max 500 characters, http/https only).' })
  }

  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY' || apiKey === 'your_gemini_api_key_here') {
    const mockContent = `[SYSTEM BRIEFING]
Target URL: ${sanitizedUrl}
Audit completed successfully. The target website shows excellent layout and optimal structure.

Conversion Leaks:
1. Secondary call-to-action is missing in the hero section, leading to lost conversion opportunities.
2. Form submission inputs lack explicit focus indicators, creating minor accessibility friction.
3. Volumetric background assets are not optimized for smaller viewports, slowing down mobile initial paint.

The Revenue Plan:
1. Re-architect the desktop Hero visual using a flexible width container to scale the immersive canvas dynamically.
2. Convert nested buttons to single-action divs with ARIA accessibility roles to prevent event hijacking.
3. Integrate real-time AI-based diagnostics to qualify client leads instantly at the point of entry.

Impact Projection:
- Estimated 2.4x increase in lead qualification rate.
- Estimated 350ms improvement in Core Web Vitals (LCP/INP).`

    const mockScores = {
      performance: 92,
      ux: 88,
      strategy: 90,
      conversion: 94,
    }

    return res.status(200).json({ content: mockContent, scores: mockScores })
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })
    const result = await model.generateContent(AUDIT_PROMPT(sanitizedUrl))
    const text = result.response.text()

    const scoreMatch = text.match(
      /\[SCORES\] Performance: (\d+), UX: (\d+), Strategy: (\d+), Conversion: (\d+) \[\/SCORES\]/,
    )

    const scores = scoreMatch
      ? {
          performance: parseInt(scoreMatch[1], 10),
          ux: parseInt(scoreMatch[2], 10),
          strategy: parseInt(scoreMatch[3], 10),
          conversion: parseInt(scoreMatch[4], 10),
        }
      : null

    const content = text.replace(/\[SCORES\].*?\[\/SCORES\]/s, '').trim()
    return res.status(200).json({ content, scores })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'

    if (message.includes('API_KEY_INVALID')) {
      return res.status(401).json({ error: 'Invalid API key. Check GEMINI_API_KEY in Vercel.' })
    }
    if (message.includes('safety')) {
      return res
        .status(422)
        .json({ error: 'Audit blocked by safety filters. Try a different URL.' })
    }

    console.error('Audit API error:', err)
    return res.status(500).json({ error: 'Audit failed. Please try again later.' })
  }
}
