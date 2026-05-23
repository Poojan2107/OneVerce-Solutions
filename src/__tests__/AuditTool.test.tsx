import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import AuditTool from '../components/AuditTool'

vi.mock('../context/AudioUIContext', () => ({
  useAudioUI: () => ({
    playHover: vi.fn(),
    playClick: vi.fn(),
    playSuccess: vi.fn(),
    soundEnabled: false,
    toggleSound: vi.fn(),
  }),
  AudioUIProvider: ({ children }: { children: React.ReactNode }) => children,
}))

describe('AuditTool', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the audit section with heading', () => {
    render(<AuditTool />)
    expect(screen.getByRole('heading', { name: /Audit Your Conversion/i })).toBeInTheDocument()
  })

  it('renders the URL input field', () => {
    render(<AuditTool />)
    expect(screen.getByLabelText(/Website URL to audit/i)).toBeInTheDocument()
  })

  it('renders the initiate button', () => {
    render(<AuditTool />)
    expect(screen.getByRole('button', { name: /Initiate Free Audit/i })).toBeInTheDocument()
  })

  it('starts analysis when form is submitted', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
        status: 503,
      } as Response),
    )

    render(<AuditTool />)

    const input = screen.getByLabelText(/Website URL to audit/i)
    const button = screen.getByRole('button', { name: /Initiate Free Audit/i })

    fireEvent.change(input, { target: { value: 'https://example.com' } })
    fireEvent.click(button)

    await waitFor(() => {
      expect(screen.getByRole('status')).toBeInTheDocument()
    })
  })

  it('shows error message when API is not configured', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
        status: 503,
      } as Response),
    )

    render(<AuditTool />)

    const input = screen.getByLabelText(/Website URL to audit/i)
    const button = screen.getByRole('button', { name: /Initiate Free Audit/i })

    fireEvent.change(input, { target: { value: 'https://example.com' } })
    fireEvent.click(button)

    await waitFor(
      () => {
        expect(screen.getByText(/AI audit is not configured/i)).toBeInTheDocument()
      },
      { timeout: 5000 },
    )
  })

  it('shows results when API returns valid response', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            content: 'Test audit content',
            scores: { performance: 80, ux: 75, strategy: 70, conversion: 65 },
          }),
      } as Response),
    )

    render(<AuditTool />)

    const input = screen.getByLabelText(/Website URL to audit/i)
    const button = screen.getByRole('button', { name: /Initiate Free Audit/i })

    fireEvent.change(input, { target: { value: 'https://example.com' } })
    fireEvent.click(button)

    await waitFor(
      () => {
        expect(screen.getByText('80%')).toBeInTheDocument()
      },
      { timeout: 5000 },
    )
  })
})
