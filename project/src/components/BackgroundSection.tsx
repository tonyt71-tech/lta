import React, { useEffect, useRef, useState } from 'react';

type Testimonial = { quote: string; author: string };

const ITEMS: Testimonial[] = [
  { quote: 'Coach was patient and clear. My serve improved in two weeks.', author: 'A.M.' },
  { quote: 'Great with kids. The group lessons are affordable and fun.', author: 'J.R.' },
  { quote: 'The coaching and consistency built real confidence.', author: 'S.K.' },
  { quote: 'Footwork drills and video review helped me finally fix my forehand.', author: 'B.T.' },
];

export default function BackgroundSection() {
  const [index, setIndex] = useState(0);
  const timer = useRef<number | null>(null);

  // auto-advance
  useEffect(() => {
    const tick = () => setIndex((i) => (i + 1) % ITEMS.length);
    timer.current = window.setInterval(tick, 5000);
    return () => { if (timer.current) window.clearInterval(timer.current); };
  }, []);

  return (
    <section className="relative mountain-bg">
      <div className="dark-scrim absolute inset-0" aria-hidden />
      <div className="relative page-wrap py-16 md:py-24">
        {/* Responsive row: 1 card on mobile, up to 3 on desktop */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleTriplet(index).map((t, i) => (
            <article key={i} className="testimonial-card card-surface">
              <p className="testimonial-quote">“{t.quote}”</p>
              <p className="testimonial-author">— {t.author}</p>
            </article>
          ))}
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {ITEMS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${i === index ? 'w-8 bg-[var(--wim-green)]' : 'w-2.5 bg-white/70'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/** returns three consecutive items starting from idx, wrapping as needed */
function visibleTriplet(idx: number): Testimonial[] {
  const out: Testimonial[] = [];
  for (let k = 0; k < 3; k++) out.push(ITEMS[(idx + k) % ITEMS.length]);
  return out;
}
