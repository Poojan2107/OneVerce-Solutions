import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import Navbar from '../components/Navbar'

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

vi.mock('./Magnetic', () => ({
  default: ({ children }: { children: React.ReactNode }) => children,
}))

vi.mock('./ContactModal', () => ({
  default: ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) =>
    isOpen ? (
      <div data-testid='contact-modal'>
        <button onClick={onClose}>Close</button>
      </div>
    ) : null,
}))

describe('Navbar', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the logo and brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Oneverce')).toBeInTheDocument()
    expect(screen.getByText('Systems_Studio')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Capabilities')).toBeInTheDocument()
    expect(screen.getByText('Work')).toBeInTheDocument()
    expect(screen.getByText('Team')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders the mobile menu button', () => {
    render(<Navbar />)
    const menuButton = screen.getByRole('button', { name: /Open menu/i })
    expect(menuButton).toBeInTheDocument()
  })

  it('opens mobile menu when hamburger is clicked', async () => {
    render(<Navbar />)
    const menuButton = screen.getByRole('button', { name: /Open menu/i })
    fireEvent.click(menuButton)
    expect(screen.getByRole('button', { name: /Close menu/i })).toBeInTheDocument()
  })
})
