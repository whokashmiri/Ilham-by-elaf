// src/components/ResultsCaseStudy.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";

const VIDEO_URL = "https://www.w3schools.com/html/mov_bbb.mp4"; // replace with your mp4

function useInViewOnce(ref, { threshold = 0.25, rootMargin = "0px" } = {}) {
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [ref, seen, threshold, rootMargin]);

  return seen;
}

function useCountUp({
  from = 123,
  to = 500,
  durationMs = 1200,
  start = false,
  formatter = (n) => String(Math.round(n)),
}) {
  const rafRef = useRef(null);
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!start) return;

    // reset to "from" when starting
    setValue(from);

    const t0 = performance.now();
    const d = Math.max(300, durationMs);

    const tick = (t) => {
      const p = Math.min(1, (t - t0) / d);
      const e = 1 - Math.pow(1 - p, 3); // easeOutCubic
      const v = from + (to - from) * e;
      setValue(v);
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [from, to, durationMs, start]);

  return useMemo(() => formatter(value), [value, formatter]);
}

export default function ResultsCaseStudy() {
  const sectionRef = useRef(null);

  // ✅ starts ONLY when the component enters the viewport (once)
  const start = useInViewOnce(sectionRef, {
    threshold: 0.35,
    rootMargin: "0px 0px -10% 0px",
  });

  const subscriberGrowth = useCountUp({
    from: 123,
    to: 187,
    durationMs: 1100,
    start,
    formatter: (n) => `+${Math.round(n)}%`,
  });

  const newViews = useCountUp({
    from: 123,
    to: 244000,
    durationMs: 1400,
    start,
    formatter: (n) => {
      const v = Math.round(n);
      return v >= 1000 ? `${Math.round(v / 1000)}k` : String(v);
    },
  });

  return (
    <section ref={sectionRef} className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        {/* top */}
        <div className="text-center">
          <div className="text-[12px] font-bold tracking-widest text-orange-500">
            RESULTS
          </div>

          <h2 className="mx-auto mt-6 max-w-3xl text-[54px] font-black leading-[1.02] tracking-tight text-black md:text-[64px]">
            Content outcomes you
            <br />
            can actually measure
          </h2>
        </div>

        {/* case study */}
        <div className="mt-14 grid items-center gap-14 lg:grid-cols-2">
          {/* left video card */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[720px] overflow-hidden rounded-[28px] shadow-[0_30px_70px_rgba(0,0,0,0.16)] ring-1 ring-black/10">
              <div className="aspect-[16/9] w-full">
                <video
                  className="h-full w-full object-cover"
                  src={VIDEO_URL}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.03),rgba(0,0,0,0.06))]" />
            </div>
          </div>

          {/* right content */}
          <div className="max-w-xl">
            <div className="text-[12px] font-bold tracking-widest text-black/40">
              CLIENT SUCCESS
            </div>

            <h3 className="mt-6 text-[44px] font-black leading-[1.03] tracking-tight text-black md:text-[52px]">
              Scaling a <span className="text-orange-500">finance channel</span>
              <br />
              with performance edits
            </h3>

            <p className="mt-6 text-[15px] leading-6 text-black/55">
              A personal finance creator partnered with us to sharpen pacing,
              tighten structure, and optimise content for long-form YouTube and
              short-form distribution.
            </p>

            <div className="mt-14 grid grid-cols-2 gap-10">
              <div>
                <div className="text-[56px] font-black tracking-tight text-black">
                  {subscriberGrowth}
                </div>
                <div className="mt-2 text-[12px] font-bold tracking-widest text-black/45">
                  SUBSCRIBER GROWTH
                </div>
              </div>

              <div>
                <div className="text-[56px] font-black tracking-tight text-black">
                  {newViews}
                </div>
                <div className="mt-2 text-[12px] font-bold tracking-widest text-black/45">
                  NEW VIEWS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
