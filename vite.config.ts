import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vitest/config'
import { loadEnv, ViteDevServer } from 'vite'
import { IncomingMessage, ServerResponse } from 'http'
import fs from 'fs'
import { VitePWA } from 'vite-plugin-pwa'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      react(),
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['logo.jpeg', 'favicon.svg', 'robots.txt', 'sitemap.xml'],
        manifest: {
          name: 'Oneverce Solutions | Premium Digital Engineering & Experience Studio',
          short_name: 'Oneverce',
          description:
            'Elite digital engineering and systems design studio specializing in conversion rates, custom AI tools, and high-performance SaaS development.',
          theme_color: '#050505',
          background_color: '#050505',
          display: 'standalone',
          start_url: '/',
          scope: '/',
          icons: [
            {
              src: 'favicon.svg',
              sizes: 'any',
              type: 'image/svg+xml',
              purpose: 'any',
            },
            {
              src: 'favicon.svg',
              sizes: 'any',
              type: 'image/svg+xml',
              purpose: 'maskable',
            },
            {
              src: 'logo.jpeg',
              sizes: '192x192',
              type: 'image/jpeg',
            },
            {
              src: 'logo.jpeg',
              sizes: '512x512',
              type: 'image/jpeg',
            },
          ],
        },
      }),
      visualizer({
        filename: './dist/stats.html',
        open: false,
        gzipSize: true,
        brotliSize: true,
      }),
      {
        name: 'api-audit-mock',
        configureServer(server: ViteDevServer) {
          server.middlewares.use(
            async (req: IncomingMessage, res: ServerResponse, next: () => void) => {
              const logMessage = (msg: string) => {
                const timestamp = new Date().toISOString()
                const logLine = `[${timestamp}] ${msg}`
                console.log(logLine)
                try {
                  fs.appendFileSync('./middleware.log', logLine + '\n')
                } catch (e) {
                  // ignore log write errors
                }
              }

              const urlPath = req.url ? req.url.split('?')[0] : ''
              if (urlPath === '/api/audit' && req.method === 'POST') {
                logMessage(`Middleware received: ${req.method} ${req.url}`)
                let bodyStr = ''
                req.on('data', (chunk: string | Buffer) => {
                  bodyStr += chunk
                })
                req.on('end', async () => {
                  try {
                    logMessage(`End of request body: "${bodyStr}"`)
                    const body = JSON.parse(bodyStr)
                    const url = body.url

                    // Check if we have a GEMINI_API_KEY
                    const apiKey = env.GEMINI_API_KEY || process.env.GEMINI_API_KEY

                    // If we are in E2E tests, or if there is no valid GEMINI_API_KEY, return a high-fidelity mock.
                    const isTest =
                      process.env.NODE_ENV === 'test' ||
                      env.NODE_ENV === 'test' ||
                      req.headers['user-agent']?.includes('Playwright')
                    if (
                      isTest ||
                      !apiKey ||
                      apiKey === 'your_gemini_api_key_here' ||
                      apiKey === 'MY_GEMINI_API_KEY'
                    ) {
                      logMessage('Returning mocked high-fidelity response.')
                      res.writeHead(200, { 'Content-Type': 'application/json' })
                      res.end(
                        JSON.stringify({
                          scores: {
                            performance: 95,
                            ux: 90,
                            strategy: 88,
                            conversion: 92,
                          },
                          content: `[SYSTEM BRIEFING]
Target URL: ${url}
Audit completed successfully. The target website shows excellent layout and optimal structure.
We detected the following points:
- Excellent visual hierarchy and response speed.
- Minor latency issues on secondary script executions.
- Conversion opportunities identified on checkout flows.`,
                        }),
                      )
                      return
                    }

                    logMessage(`Calling real Gemini API for URL: ${url}`)
                    // Otherwise, call the actual API logic
                    const { GoogleGenerativeAI } = await import('@google/generative-ai')
                    const genAI = new GoogleGenerativeAI(apiKey)
                    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })

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
                    const result = await model.generateContent(AUDIT_PROMPT(url))
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

                    res.writeHead(200, { 'Content-Type': 'application/json' })
                    res.end(JSON.stringify({ content, scores }))
                  } catch (err: unknown) {
                    const errorMessage =
                      err instanceof Error ? err.stack || err.message : String(err)
                    logMessage(`Error in handler: ${errorMessage}`)
                    res.writeHead(500, { 'Content-Type': 'application/json' })
                    res.end(JSON.stringify({ error: errorMessage }))
                  }
                })
              } else {
                next()
              }
            },
          )
        },
      },
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./src/test/setup.ts'],
      include: ['src/**/*.{test,spec}.{ts,tsx}'],
      exclude: ['**/node_modules/**', '**/e2e/**', '**/dist/**'],
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom')) {
                return 'vendor-react'
              }
              if (id.includes('motion')) {
                return 'vendor-motion'
              }
              if (id.includes('@vercel/analytics')) {
                return 'vendor-analytics'
              }
              if (id.includes('lucide-react')) {
                return 'vendor-icons'
              }
              return 'vendor'
            }
          },
        },
      },
    },
  }
})
