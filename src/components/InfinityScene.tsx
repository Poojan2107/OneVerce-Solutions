import { useEffect, useRef } from 'react';

export default function InfinityScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Handle resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const colors = ['#00f0f0', '#0070b0', '#f05060', '#f09010', '#f0f070'];
    
    // Create 1000 high-performance particles
    const particleCount = 1000;
    const particles = Array.from({ length: particleCount }).map((_, i) => {
      const offset = (i / particleCount) * Math.PI * 2;
      return {
        offset,
        speed: 0.002 + Math.random() * 0.003,
        size: Math.random() > 0.98 ? 3 : 0.8 + Math.random() * 1.2,
        baseOpacity: 0.2 + Math.random() * 0.6,
        color: colors[Math.floor((offset / (Math.PI * 2)) * colors.length)] || colors[0],
        zOffset: Math.random() * Math.PI * 2
      };
    });

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      const time = Date.now() * 0.001;
      const centerX = width / 2;
      const centerY = height / 2;
      
      // Depth sorting is computationally expensive, but canvas drawing is fast
      // Sort particles by Z to simulate real 3D depth layering
      const sortedParticles = particles.map(p => {
        const t = (time * p.speed * 200 + p.offset) % (Math.PI * 2);
        
        // Lemniscate of Bernoulli
        const scale = 550;
        const x = (scale * Math.cos(t)) / (1 + Math.sin(t) * Math.sin(t));
        const y = (scale * Math.sin(t) * Math.cos(t)) / (1 + Math.sin(t) * Math.sin(t));
        
        // Complex 3D rotation and depth
        const z = Math.sin(t * 3 + time * 0.5) * 150;
        
        // Apply a slow global rotation to the whole scene
        const angle = time * 0.1;
        const rotX = x * Math.cos(angle) - z * Math.sin(angle);
        const rotZ = x * Math.sin(angle) + z * Math.cos(angle);
        
        // Perspective projection
        const fov = 1000;
        const pScale = fov / (fov + rotZ);
        const finalX = centerX + rotX * pScale;
        const finalY = centerY + y * pScale;
        
        return { ...p, finalX, finalY, pScale, rotZ };
      }).sort((a, b) => b.rotZ - a.rotZ);

      // Render particles
      sortedParticles.forEach(p => {
        const opacity = p.baseOpacity * p.pScale * (0.5 + Math.sin(time * 2 + p.offset) * 0.5);
        
        ctx.beginPath();
        ctx.arc(p.finalX, p.finalY, p.size * p.pScale, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = opacity;
        ctx.fill();
        
        // Add subtle glow to larger particles
        if (p.size > 2) {
          ctx.shadowBlur = 15 * p.pScale;
          ctx.shadowColor = p.color;
        } else {
          ctx.shadowBlur = 0;
        }
      });

      // Subtle Background Core Glow
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 400);
      gradient.addColorStop(0, 'rgba(0, 240, 240, 0.05)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.globalAlpha = 1;
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen opacity-80"
      style={{ filter: 'contrast(1.2) brightness(1.2)' }}
    />
  );
}
