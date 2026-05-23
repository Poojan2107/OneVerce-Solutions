import { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react'

interface AudioContextProps {
  soundEnabled: boolean
  toggleSound: () => void
  playHover: () => void
  playClick: () => void
  playSuccess: () => void
}

const AudioUIContext = createContext<AudioContextProps | undefined>(undefined)

type AudioContextWindow = Window & { webkitAudioContext?: typeof AudioContext }

function getAudioContextClass(): typeof AudioContext | null {
  if (typeof window === 'undefined') return null
  return window.AudioContext || (window as AudioContextWindow).webkitAudioContext || null
}

export function AudioUIProvider({ children }: { children: ReactNode }) {
  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => {
    const saved = localStorage.getItem('oneverce_audio_enabled')
    return saved === 'true'
  })

  const audioCtxRef = useRef<AudioContext | null>(null)

  useEffect(() => {
    localStorage.setItem('oneverce_audio_enabled', soundEnabled.toString())
  }, [soundEnabled])

  useEffect(() => {
    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close()
        audioCtxRef.current = null
      }
    }
  }, [])

  const getCtx = (): AudioContext | null => {
    if (!soundEnabled) return null
    const Ctx = getAudioContextClass()
    if (!Ctx) return null

    if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') {
      audioCtxRef.current = new Ctx()
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume()
    }
    return audioCtxRef.current
  }

  const toggleSound = () => setSoundEnabled(prev => !prev)

  const playHover = () => {
    const ctx = getCtx()
    if (!ctx) return

    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = 'triangle'
    osc.frequency.setValueAtTime(800, ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.04)

    gain.gain.setValueAtTime(0.015, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04)

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start()
    osc.stop(ctx.currentTime + 0.04)
  }

  const playClick = () => {
    const ctx = getCtx()
    if (!ctx) return

    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = 'sine'
    osc.frequency.setValueAtTime(400, ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(900, ctx.currentTime + 0.08)

    gain.gain.setValueAtTime(0.03, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08)

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start()
    osc.stop(ctx.currentTime + 0.08)
  }

  const playSuccess = () => {
    const ctx = getCtx()
    if (!ctx) return

    const now = ctx.currentTime

    const playNote = (freq: number, start: number, duration: number) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'sine'
      osc.frequency.setValueAtTime(freq, start)
      gain.gain.setValueAtTime(0.02, start)
      gain.gain.exponentialRampToValueAtTime(0.001, start + duration)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start(start)
      osc.stop(start + duration)
    }

    playNote(523.25, now, 0.15)
    playNote(659.25, now + 0.06, 0.15)
    playNote(783.99, now + 0.12, 0.25)
  }

  return (
    <AudioUIContext.Provider
      value={{ soundEnabled, toggleSound, playHover, playClick, playSuccess }}
    >
      {children}
    </AudioUIContext.Provider>
  )
}

export function useAudioUI() {
  const context = useContext(AudioUIContext)
  if (!context) {
    throw new Error('useAudioUI must be used within an AudioUIProvider')
  }
  return context
}
