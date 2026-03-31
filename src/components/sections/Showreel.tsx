import { Player } from '@remotion/player';
import {
  ShowreelComposition,
  SHOWREEL_FPS,
  SHOWREEL_DURATION,
  SHOWREEL_WIDTH,
  SHOWREEL_HEIGHT,
} from '../../remotion/ShowreelComposition';

export function Showreel() {
  return (
    <section className="py-0 md:py-32 bg-surface-base">
      <div className="max-w-5xl mx-auto px-0 sm:px-6 lg:px-8">
        <div className="sm:rounded-2xl overflow-hidden sm:border border-glass-border shadow-2xl shadow-brand-primary/5">
          <Player
            component={ShowreelComposition}
            durationInFrames={SHOWREEL_DURATION}
            fps={SHOWREEL_FPS}
            compositionWidth={SHOWREEL_WIDTH}
            compositionHeight={SHOWREEL_HEIGHT}
            autoPlay
            loop
            style={{ width: '100%' }}
          />
        </div>
      </div>
    </section>
  );
}
