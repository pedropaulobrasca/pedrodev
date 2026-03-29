import { useRef, useEffect } from 'react';

interface BeamConfig {
  offset: number;
  amplitude: number;
  color: string;
  coreWidth: number;
  speed: number;
  phase: number;
}

const GOLD = '#C9A227';
const GOLD_LIGHT = '#E8D48B';
const AMBER = '#D4960A';
const TEAL = '#5BA89D';

const BEAMS_DESKTOP: BeamConfig[] = [
  { offset: -0.40, amplitude: 200, color: GOLD,       coreWidth: 1.5, speed: 0.80, phase: 0.0 },
  { offset: -0.28, amplitude: 160, color: TEAL,       coreWidth: 0.8, speed: 0.50, phase: 1.5 },
  { offset: -0.22, amplitude: 140, color: GOLD_LIGHT, coreWidth: 1.2, speed: 0.60, phase: 1.2 },
  { offset: -0.12, amplitude: 110, color: AMBER,      coreWidth: 1.8, speed: 0.90, phase: 2.4 },
  { offset: -0.04, amplitude: 90,  color: GOLD,       coreWidth: 1.3, speed: 0.70, phase: 3.6 },
  { offset:  0.04, amplitude: 90,  color: GOLD_LIGHT, coreWidth: 1.5, speed: 0.75, phase: 4.8 },
  { offset:  0.12, amplitude: 110, color: GOLD,       coreWidth: 1.2, speed: 0.85, phase: 0.8 },
  { offset:  0.22, amplitude: 140, color: AMBER,      coreWidth: 1.6, speed: 0.65, phase: 2.0 },
  { offset:  0.28, amplitude: 160, color: TEAL,       coreWidth: 0.8, speed: 0.55, phase: 4.0 },
  { offset:  0.40, amplitude: 200, color: GOLD_LIGHT, coreWidth: 1.4, speed: 0.70, phase: 3.2 },
];

const BEAMS_MOBILE: BeamConfig[] = [
  { offset: -0.35, amplitude: 140, color: GOLD,       coreWidth: 1.2, speed: 0.70, phase: 0.0 },
  { offset: -0.15, amplitude: 100, color: GOLD_LIGHT, coreWidth: 1.0, speed: 0.60, phase: 1.5 },
  { offset: -0.05, amplitude: 80,  color: AMBER,      coreWidth: 1.4, speed: 0.80, phase: 2.8 },
  { offset:  0.05, amplitude: 80,  color: GOLD,       coreWidth: 1.2, speed: 0.75, phase: 4.0 },
  { offset:  0.15, amplitude: 100, color: TEAL,       coreWidth: 0.7, speed: 0.50, phase: 1.0 },
  { offset:  0.35, amplitude: 140, color: GOLD_LIGHT, coreWidth: 1.2, speed: 0.65, phase: 3.5 },
];

const GLOW_PASSES = [
  { widthMul: 16,  alpha: 0.008 },
  { widthMul: 8,   alpha: 0.02 },
  { widthMul: 4,   alpha: 0.045 },
  { widthMul: 2,   alpha: 0.10 },
  { widthMul: 1,   alpha: 0.35 },
];

export function AuroraBeams() {
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
    let beams: BeamConfig[] = [];

    function resize() {
      w = canvas!.offsetWidth;
      h = canvas!.offsetHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      beams = w < 768 ? BEAMS_MOBILE : BEAMS_DESKTOP;
    }
    resize();

    let time = 0;

    function drawBeam(beam: BeamConfig) {
      const cx = w / 2;
      const cy = h / 2;
      const sigma = h * 0.2;
      const steps = 60;

      const points: [number, number][] = [];

      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const y = t * h;

        const dist = (y - cy) / sigma;
        const convergence = Math.exp(-dist * dist * 0.5);
        const spread = beam.amplitude * (1 - convergence * 0.93);

        const wave1 = Math.sin(t * Math.PI * 2 + time * beam.speed + beam.phase) * spread;
        const wave2 = Math.sin(t * Math.PI * 3.7 + time * beam.speed * 0.6 + beam.phase * 1.4) * spread * 0.25;

        const x = cx + wave1 + wave2 + beam.offset * w * 0.4;
        points.push([x, y]);
      }

      for (const pass of GLOW_PASSES) {
        ctx!.beginPath();
        ctx!.moveTo(points[0][0], points[0][1]);

        for (let i = 1; i < points.length - 1; i++) {
          const mx = (points[i][0] + points[i + 1][0]) / 2;
          const my = (points[i][1] + points[i + 1][1]) / 2;
          ctx!.quadraticCurveTo(points[i][0], points[i][1], mx, my);
        }

        const last = points[points.length - 1];
        ctx!.lineTo(last[0], last[1]);

        ctx!.strokeStyle = beam.color;
        ctx!.lineWidth = beam.coreWidth * pass.widthMul;
        ctx!.globalAlpha = pass.alpha;
        ctx!.lineCap = 'round';
        ctx!.stroke();
      }

      ctx!.globalAlpha = 1;
    }

    function animate() {
      ctx!.clearRect(0, 0, w, h);
      time += 0.006;

      ctx!.globalCompositeOperation = 'lighter';

      const grad = ctx!.createRadialGradient(
        w / 2, h / 2, 0,
        w / 2, h / 2, Math.min(w, h) * 0.35,
      );
      grad.addColorStop(0, 'rgba(201, 162, 39, 0.05)');
      grad.addColorStop(1, 'transparent');
      ctx!.globalAlpha = 1;
      ctx!.fillStyle = grad;
      ctx!.fillRect(0, 0, w, h);

      for (const beam of beams) {
        drawBeam(beam);
      }

      ctx!.globalCompositeOperation = 'source-over';

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
