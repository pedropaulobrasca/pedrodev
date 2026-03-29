import { useRef, useEffect } from 'react';

interface BlobConfig {
  cx: number;
  cy: number;
  radius: number;
  color: string;
  speed: number;
  seed: number;
  freqs: [number, number, number];
  amps: [number, number, number];
}

const BLOBS: BlobConfig[] = [
  {
    cx: 0.25, cy: 0.4, radius: 0.3,
    color: 'rgba(201, 162, 39, 0.18)',
    speed: 0.4, seed: 0,
    freqs: [2, 3, 5], amps: [0.3, 0.15, 0.08],
  },
  {
    cx: 0.75, cy: 0.6, radius: 0.25,
    color: 'rgba(232, 212, 139, 0.14)',
    speed: 0.35, seed: 2.5,
    freqs: [2, 4, 3], amps: [0.25, 0.12, 0.1],
  },
  {
    cx: 0.5, cy: 0.5, radius: 0.35,
    color: 'rgba(201, 162, 39, 0.10)',
    speed: 0.3, seed: 5,
    freqs: [3, 2, 4], amps: [0.2, 0.18, 0.06],
  },
  {
    cx: 0.6, cy: 0.35, radius: 0.2,
    color: 'rgba(91, 168, 157, 0.12)',
    speed: 0.45, seed: 3.5,
    freqs: [2, 5, 3], amps: [0.28, 0.1, 0.12],
  },
];

const STEPS = 80;
const BLUR_RADIUS = 60;

export function MorphingBlobs() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;

    function resize() {
      w = canvas!.offsetWidth;
      h = canvas!.offsetHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();

    let time = 0;

    function drawBlob(blob: BlobConfig) {
      const cx =
        blob.cx * w +
        Math.sin(time * blob.speed * 0.4 + blob.seed) * w * 0.04;
      const cy =
        blob.cy * h +
        Math.cos(time * blob.speed * 0.3 + blob.seed * 1.5) * h * 0.04;
      const baseR = blob.radius * Math.min(w, h);

      ctx!.beginPath();

      for (let i = 0; i <= STEPS; i++) {
        const angle = (i / STEPS) * Math.PI * 2;
        const r =
          baseR +
          baseR *
            blob.amps[0] *
            Math.sin(
              angle * blob.freqs[0] + time * blob.speed + blob.seed,
            ) +
          baseR *
            blob.amps[1] *
            Math.sin(
              angle * blob.freqs[1] +
                time * blob.speed * 0.7 +
                blob.seed * 2,
            ) +
          baseR *
            blob.amps[2] *
            Math.cos(
              angle * blob.freqs[2] +
                time * blob.speed * 0.4 +
                blob.seed * 3,
            );

        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);

        if (i === 0) ctx!.moveTo(x, y);
        else ctx!.lineTo(x, y);
      }

      ctx!.closePath();
      ctx!.fillStyle = blob.color;
      ctx!.fill();
    }

    function animate() {
      ctx!.clearRect(0, 0, w, h);
      time += 0.005;

      ctx!.filter = `blur(${BLUR_RADIUS}px)`;

      for (const blob of BLOBS) {
        drawBlob(blob);
      }

      ctx!.filter = 'none';

      animRef.current = requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
