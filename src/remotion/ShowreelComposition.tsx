import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from 'remotion';

const BRAND = {
  bg: '#0A0A0A',
  text: '#F5F5F7',
  gold: '#C9A227',
  goldLight: '#E8D48B',
  secondary: '#86868B',
  muted: '#6E6E73',
  glass: 'rgba(255,255,255,0.06)',
  glassBorder: 'rgba(255,255,255,0.1)',
};

const FONT =
  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif';
const MONO = '"SF Mono", "Fira Code", Menlo, Consolas, monospace';

export const SHOWREEL_FPS = 30;
export const SHOWREEL_DURATION = 300;
export const SHOWREEL_WIDTH = 1280;
export const SHOWREEL_HEIGHT = 720;

function useSceneFade(
  fadeInDuration: number,
  fadeOutStart: number,
  totalFrames: number,
) {
  const frame = useCurrentFrame();
  const fadeIn =
    fadeInDuration > 0
      ? interpolate(frame, [0, fadeInDuration], [0, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
        })
      : 1;
  const fadeOut = interpolate(frame, [fadeOutStart, totalFrames], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return fadeIn * fadeOut;
}

function BackgroundEffects() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pulse = interpolate(
    Math.sin((frame / (fps * 3)) * Math.PI * 2),
    [-1, 1],
    [0.02, 0.06],
  );

  return (
    <>
      <AbsoluteFill
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse 60% 60% at center, rgba(201,162,39,${pulse}) 0%, transparent 70%)`,
        }}
      />
    </>
  );
}

function TerminalScene() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const COMMAND = 'whoami';
  const OUTPUT = [
    { text: 'Pedro Brasca', color: BRAND.gold, bold: true },
    { text: 'FullStack Developer', color: BRAND.text, bold: false },
    { text: '5+ anos de experiencia', color: BRAND.secondary, bold: false },
  ];

  const promptVisible = frame >= 0;
  const charsTyped = Math.max(0, Math.floor((frame - 5) * 0.5));
  const commandText = COMMAND.slice(
    0,
    Math.min(COMMAND.length, charsTyped),
  );
  const commandDone = charsTyped >= COMMAND.length;

  const cursorVisible = Math.floor(frame / 10) % 2 === 0;

  const boxSpring = spring({ frame, fps, config: { damping: 200 } });

  const commandEndFrame = 5 + Math.ceil(COMMAND.length / 0.5);
  const outputStart = commandEndFrame + 12;

  const fadeOut = interpolate(frame, [75, 90], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        opacity: fadeOut,
      }}
    >
      <div
        style={{
          background: BRAND.glass,
          border: `1px solid ${BRAND.glassBorder}`,
          borderRadius: 16,
          padding: '28px 40px',
          fontFamily: MONO,
          fontSize: 26,
          lineHeight: 2,
          opacity: boxSpring,
          transform: `scale(${interpolate(boxSpring, [0, 1], [0.92, 1])})`,
          width: '65%',
          maxWidth: 700,
        }}
      >
        <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
          {['#FF5F57', '#FFBD2E', '#28CA42'].map((color) => (
            <div
              key={color}
              style={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: color,
              }}
            />
          ))}
        </div>

        <div>
          {promptVisible && (
            <>
              <span style={{ color: BRAND.gold }}>$ </span>
              <span style={{ color: BRAND.text }}>{commandText}</span>
              {!commandDone && cursorVisible && (
                <span style={{ color: BRAND.gold, fontWeight: 300 }}>|</span>
              )}
            </>
          )}
        </div>

        {commandDone &&
          OUTPUT.map((line, i) => {
            const lineDelay = outputStart + i * 8;
            const lineOpacity = interpolate(frame - lineDelay, [0, 10], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
            const lineY = interpolate(frame - lineDelay, [0, 10], [8, 0], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
            return (
              <div
                key={i}
                style={{
                  color: line.color,
                  fontWeight: line.bold ? 600 : 400,
                  opacity: lineOpacity,
                  transform: `translateY(${lineY}px)`,
                  fontSize: line.bold ? 28 : 22,
                }}
              >
                {line.text}
              </div>
            );
          })}
      </div>
    </AbsoluteFill>
  );
}

function NameScene() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const NAME = 'PEDRO BRASCA';
  const opacity = useSceneFade(15, 75, 90);

  const labelSpring = spring({
    frame: frame - 5,
    fps,
    config: { damping: 200 },
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        opacity,
      }}
    >
      <div
        style={{
          fontFamily: FONT,
          fontSize: 16,
          color: BRAND.gold,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: 28,
          opacity: labelSpring,
          transform: `translateY(${interpolate(labelSpring, [0, 1], [12, 0])}px)`,
        }}
      >
        Desenvolvedor FullStack Freelancer
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          fontFamily: FONT,
          fontSize: 96,
          fontWeight: 600,
          letterSpacing: '-0.02em',
          lineHeight: 1,
        }}
      >
        {NAME.split('').map((char, i) => {
          const s = spring({
            frame: frame - 10 - i * 2,
            fps,
            config: { damping: 200 },
          });
          return (
            <span
              key={i}
              style={{
                color: BRAND.text,
                opacity: s,
                transform: `translateY(${interpolate(s, [0, 1], [40, 0])}px)`,
                display: 'inline-block',
                minWidth: char === ' ' ? '0.35em' : undefined,
              }}
            >
              {char}
            </span>
          );
        })}
      </div>

      <div
        style={{
          height: 2,
          background: `linear-gradient(90deg, transparent, ${BRAND.gold}, transparent)`,
          marginTop: 24,
          width: interpolate(
            spring({ frame: frame - 36, fps, config: { damping: 200 } }),
            [0, 1],
            [0, 400],
          ),
        }}
      />
    </AbsoluteFill>
  );
}

function StatsScene() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const stats = [
    { value: '5+', label: 'Anos de experiencia' },
    { value: '3', label: 'Empresas atendidas' },
    { value: '19', label: 'Tecnologias dominadas' },
  ];

  const opacity = useSceneFade(15, 60, 75);

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        opacity,
      }}
    >
      <div style={{ display: 'flex', gap: 120 }}>
        {stats.map((stat, i) => {
          const s = spring({
            frame: frame - 5 - i * 8,
            fps,
            config: { damping: 200 },
          });
          return (
            <div
              key={i}
              style={{
                textAlign: 'center' as const,
                opacity: s,
                transform: `scale(${interpolate(s, [0, 1], [0.5, 1])})`,
                fontFamily: FONT,
              }}
            >
              <div
                style={{
                  fontSize: 80,
                  fontWeight: 700,
                  color: BRAND.gold,
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: 15,
                  color: BRAND.secondary,
                  marginTop: 14,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase' as const,
                }}
              >
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
}

function TechScene() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const techs = [
    'React',
    'Node.js',
    'TypeScript',
    'Next.js',
    'NestJS',
    'PostgreSQL',
    'Docker',
    'Prisma',
    'Tailwind CSS',
  ];

  const opacity = useSceneFade(15, 45, 60);

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        opacity,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap' as const,
          justifyContent: 'center',
          gap: 16,
          maxWidth: 750,
          fontFamily: FONT,
        }}
      >
        {techs.map((tech, i) => {
          const s = spring({
            frame: frame - 5 - i * 3,
            fps,
            config: { damping: 15, stiffness: 200 },
          });
          return (
            <div
              key={i}
              style={{
                background: BRAND.glass,
                border: `1px solid ${BRAND.glassBorder}`,
                borderRadius: 10,
                padding: '12px 28px',
                fontSize: 20,
                color: BRAND.text,
                opacity: s,
                transform: `scale(${interpolate(s, [0, 1], [0.7, 1])})`,
              }}
            >
              {tech}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
}

function LogoScene() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const s = spring({ frame: frame - 5, fps, config: { damping: 200 } });
  const fadeOut = interpolate(frame, [30, 45], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        opacity: s * fadeOut,
      }}
    >
      <div
        style={{
          fontFamily: FONT,
          fontSize: 56,
          fontWeight: 700,
          letterSpacing: '-0.02em',
        }}
      >
        <span style={{ color: BRAND.text }}>pedro</span>
        <span style={{ color: BRAND.gold }}>dev</span>
      </div>
    </AbsoluteFill>
  );
}

export function ShowreelComposition() {
  return (
    <AbsoluteFill style={{ backgroundColor: BRAND.bg }}>
      <BackgroundEffects />

      <Sequence from={0} durationInFrames={90} premountFor={15}>
        <TerminalScene />
      </Sequence>

      <Sequence from={75} durationInFrames={90} premountFor={15}>
        <NameScene />
      </Sequence>

      <Sequence from={150} durationInFrames={75} premountFor={15}>
        <StatsScene />
      </Sequence>

      <Sequence from={210} durationInFrames={60} premountFor={15}>
        <TechScene />
      </Sequence>

      <Sequence from={255} durationInFrames={45} premountFor={15}>
        <LogoScene />
      </Sequence>
    </AbsoluteFill>
  );
}
