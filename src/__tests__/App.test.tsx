import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import App from '../App'

vi.mock('@vercel/analytics/react', () => ({ Analytics: () => null }))

describe('App', () => {
  it('renders the main application shell', () => {
    const { container } = render(<App />)
    expect(container.querySelector('#main-content')).toBeInTheDocument()
  })

  it('renders the primary skip link for accessibility', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /skip to main content/i })).toBeInTheDocument()
  })
})
