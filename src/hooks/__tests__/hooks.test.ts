import { renderHook } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { useCoarsePointer } from '../useCoarsePointer'
import { usePrefersReducedMotion } from '../usePrefersReducedMotion'

describe('Custom Hooks', () => {
  describe('useCoarsePointer', () => {
    it('should return true when pointer is coarse', () => {
      vi.stubGlobal(
        'matchMedia',
        vi.fn().mockImplementation(query => ({
          matches: query === '(pointer: coarse)',
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
        })),
      )

      const { result } = renderHook(() => useCoarsePointer())
      expect(result.current).toBe(true)
    })

    it('should return false when pointer is not coarse', () => {
      vi.stubGlobal(
        'matchMedia',
        vi.fn().mockImplementation(_query => ({
          matches: false,
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
        })),
      )

      const { result } = renderHook(() => useCoarsePointer())
      expect(result.current).toBe(false)
    })
  })

  describe('usePrefersReducedMotion', () => {
    it('should return true when prefers-reduced-motion is reduce', () => {
      vi.stubGlobal(
        'matchMedia',
        vi.fn().mockImplementation(query => ({
          matches: query === '(prefers-reduced-motion: reduce)',
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
        })),
      )

      const { result } = renderHook(() => usePrefersReducedMotion())
      expect(result.current).toBe(true)
    })

    it('should return false when prefers-reduced-motion is no-preference', () => {
      vi.stubGlobal(
        'matchMedia',
        vi.fn().mockImplementation(_query => ({
          matches: false,
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
        })),
      )

      const { result } = renderHook(() => usePrefersReducedMotion())
      expect(result.current).toBe(false)
    })
  })
})
