import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Hero from '../components/Hero'

vi.mock('./InfinityScene', () => ({
  default: () => <div data-testid='infinity-scene' />,
}))

vi.mock('../hooks/useCoarsePointer', () => ({
  useCoarsePointer: () => false,
}))

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByText('Oneverce')).toBeInTheDocument()
  })

  it('renders the subtitle text', () => {
    render(<Hero />)
    expect(screen.getByText(/high-fidelity digital infrastructure/i)).toBeInTheDocument()
  })

  it('renders the CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText('Initiate Venture')).toBeInTheDocument()
    expect(screen.getByText('Sector Archive')).toBeInTheDocument()
  })

  it('renders the status badge', () => {
    render(<Hero />)
    expect(screen.getByText('Next Generation Studio')).toBeInTheDocument()
  })

  it('accepts isPreloading prop', () => {
    const { rerender } = render(<Hero isPreloading={true} />)
    expect(screen.getByText('Oneverce')).toBeInTheDocument()

    rerender(<Hero isPreloading={false} />)
    expect(screen.getByText('Oneverce')).toBeInTheDocument()
  })
})
