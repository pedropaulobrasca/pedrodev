import { useState, useRef, useEffect } from 'react';

export function FluidBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.setAttribute('muted', '');

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return;

    function onCanPlay() {
      video?.play().then(() => setVideoReady(true)).catch(() => {});
    }

    if (video.readyState >= 3) {
      onCanPlay();
    } else {
      video.addEventListener('canplay', onCanPlay, { once: true });
    }

    function onVisibilityChange() {
      if (!video) return;
      if (document.hidden) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    }

    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      video.removeEventListener('canplay', onCanPlay);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <img
        src="/hero-bg.jpeg"
        alt=""
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          videoReady ? 'opacity-0' : 'opacity-100'
        }`}
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />

      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          videoReady ? 'opacity-100' : 'opacity-0'
        }`}
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero-bg.jpeg"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
