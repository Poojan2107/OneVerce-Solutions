import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ContactModal from '../components/ContactModal'

vi.mock('../context/AudioUIContext', () => ({
  useAudioUI: () => ({
    playHover: vi.fn(),
    playClick: vi.fn(),
    soundEnabled: false,
  }),
}))

describe('ContactModal', () => {
  it('renders nothing when isOpen is false', () => {
    render(<ContactModal isOpen={false} onClose={vi.fn()} />)
    expect(
      screen.queryByRole('heading', { name: /Project Initiation Portal/i }),
    ).not.toBeInTheDocument()
  })

  it('renders the modal heading when isOpen is true', () => {
    render(<ContactModal isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByRole('heading', { name: /Project Initiation Portal/i })).toBeInTheDocument()
  })

  it('renders the close button', () => {
    render(<ContactModal isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByRole('button', { name: /Close form/i })).toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', () => {
    const onClose = vi.fn()
    render(<ContactModal isOpen={true} onClose={onClose} />)
    fireEvent.click(screen.getByRole('button', { name: /Close form/i }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('renders the form inputs', () => {
    render(<ContactModal isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument()
  })
})
