// src/components/ClientBaseCarousel.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Phone, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Fixes:
 * ✅ 3 cards FULL visible + ~10% peek from previous/next (both sides)
 * ✅ True infinite loop feel (no visible "end") using clones + seamless teleport
 * ✅ Arrow click no longer "snaps back" (we temporarily lock correction while animating)
 * ✅ Smaller cards so 3 fit nicely on common widths
 */

const ITEMS = [
  {
    title: "Podcast Hosts",
    desc: "Long-form creators turning\nepisodes into viral clips.",
    image:
     
      "https://images.pexels.com/photos/7363293/pexels-photo-7363293.jpeg"
  },
  {
    title: "Content Creators",
    desc: "Creators building audiences\nacross YouTube, TikTok, and Reels.",
    image: "https://images.pexels.com/photos/31185782/pexels-photo-31185782.jpeg",
  },
  {
    title: "Personal Brands",
    desc: "Founders, coaches, and operators\ngrowing through content.",
    image: "https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg",
  },
  {
    title: "DTC Brands",
    desc: "Ecommerce brands building trust\nwith content that converts.",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Spacial Brands",
    desc: "Ecommerce brands building trust\nwith content that converts.",
    image: "https://images.pexels.com/photos/23496678/pexels-photo-23496678.jpeg",
  },
];

function Card({ item, isDimmed = false }) {
  return (
    <div
      className={[
        // ↓ Smaller so 3 fit + edge peeks
        "relative h-[380px] w-[320px] shrink-0 overflow-hidden rounded-[28px]",
        "shadow-[0_30px_70px_rgba(0,0,0,0.16)] ring-1 ring-black/10",
        isDimmed ? "opacity-30" : "opacity-100",
        "transition-opacity duration-300",
      ].join(" ")}
    >
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-8">
        <h3 className="text-[32px] font-extrabold leading-[1.05] text-white drop-shadow-sm">
          {item.title}
        </h3>
        <p className="mt-4 max-w-[320px] text-[15px] font-medium leading-6 text-white/85 whitespace-pre-line drop-shadow-sm">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export default function ClientBaseCarousel() {
  const scrollerRef = useRef(null);

  // prevent "snap back" while arrow animation runs
  const isProgrammaticRef = useRef(false);
  const programmaticTimerRef = useRef(null);

  // clones: [A][A][A]
  const base = ITEMS;
  const baseLen = base.length;
  const triple = useMemo(() => [...base, ...base, ...base], []);
  const [active, setActive] = useState(baseLen); // start in middle copy

  // ids for scroll targets
  const snapIds = useMemo(
    () => triple.map((_, i) => `client-snap-${i}`),
    [triple]
  );

  const scrollToIndex = (i, smooth = true) => {
    const el = document.getElementById(snapIds[i]);
    if (!el) return;

    // lock correction briefly so it won't "bounce"
    isProgrammaticRef.current = true;
    clearTimeout(programmaticTimerRef.current);
    programmaticTimerRef.current = setTimeout(() => {
      isProgrammaticRef.current = false;
    }, 520);

    el.scrollIntoView({
      behavior: smooth ? "smooth" : "auto",
      inline: "center",
      block: "nearest",
    });
    setActive(i);
  };

  // initial jump to middle copy without animation
  useEffect(() => {
    requestAnimationFrame(() => scrollToIndex(baseLen, false));
    return () => clearTimeout(programmaticTimerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const computeClosest = () => {
    const root = scrollerRef.current;
    if (!root) return baseLen;

    const cards = Array.from(root.querySelectorAll("[data-card='1']"));
    const center = root.scrollLeft + root.clientWidth / 2;

    let best = baseLen;
    let bestDist = Infinity;

    cards.forEach((c, idx) => {
      const rect = c.getBoundingClientRect();
      const rootRect = root.getBoundingClientRect();
      const cardCenter =
        (rect.left - rootRect.left) + rect.width / 2 + root.scrollLeft;

      const d = Math.abs(cardCenter - center);
      if (d < bestDist) {
        bestDist = d;
        best = idx;
      }
    });

    return best;
  };

  // seamless teleport back into middle copy
  const correctIfNeeded = (idx) => {
    // middle copy = [N .. 2N-1]
    if (idx < baseLen) {
      scrollToIndex(idx + baseLen, false);
      return idx + baseLen;
    }
    if (idx >= baseLen * 2) {
      scrollToIndex(idx - baseLen, false);
      return idx - baseLen;
    }
    return idx;
  };

  const onScroll = () => {
    const closest = computeClosest();
    setActive(closest);
  };

  // scroll-end correction (only when user scrolls, not programmatic arrow scroll)
  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;

    let t;
    const onScrollEndish = () => {
      clearTimeout(t);
      t = setTimeout(() => {
        if (isProgrammaticRef.current) return;
        const closest = computeClosest();
        const fixed = correctIfNeeded(closest);
        setActive(fixed);
      }, 140);
    };

    root.addEventListener("scroll", onScrollEndish, { passive: true });
    return () => {
      root.removeEventListener("scroll", onScrollEndish);
      clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Arrow controls: always move 1 step, loop feels endless
  const prev = () => scrollToIndex(active - 1, true);
  const next = () => scrollToIndex(active + 1, true);

  // dimming based on base item index
  const activeBase = ((active % baseLen) + baseLen) % baseLen;

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        {/* top */}
        <div className="flex items-start justify-between gap-8">
          <div>
            <div className="text-[12px] font-bold tracking-widest text-orange-500">
              CLIENT BASE
            </div>
            <h2 className="mt-5 max-w-3xl text-[52px] font-black leading-[1.02] tracking-tight text-black md:text-[62px]">
              Built for those who value
              <br />
              content as a result-driver
            </h2>
          </div>

          <button className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-3 text-[15px] font-semibold text-black shadow-[0_16px_40px_rgba(0,0,0,0.10)] ring-1 ring-black/10 hover:bg-black/5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-black/5 ring-1 ring-black/10">
              <Phone className="h-4 w-4" />
            </span>
            Book a call
          </button>
        </div>

        {/* carousel */}
        <div className="relative mt-12">
          {/* soft edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-40 bg-white/90 [mask-image:linear-gradient(to_right,rgba(0,0,0,1),rgba(0,0,0,0))]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-40 bg-white/90 [mask-image:linear-gradient(to_left,rgba(0,0,0,1),rgba(0,0,0,0))]" />

          {/* track */}
          <div
            ref={scrollerRef}
            onScroll={onScroll}
            className={[
              "no-scrollbar flex gap-8 overflow-x-auto pb-12 pt-2",
              "scroll-smooth snap-x snap-mandatory",
              // IMPORTANT: padding controls “10% peeks”
              // tweak these values to increase/decrease the peek
              "px-[8%] md:px-[10%]",
            ].join(" ")}
          >
            {triple.map((item, i) => {
              const thisBase = i % baseLen;
              return (
                <div
                  id={snapIds[i]}
                  key={`${item.title}-${i}`}
                  data-card="1"
                  className="snap-center"
                  onClick={() => scrollToIndex(i, true)}
                  role="button"
                  tabIndex={0}
                >
                  <Card item={item} isDimmed={thisBase !== activeBase} />
                </div>
              );
            })}
          </div>

          {/* nav buttons bottom-left */}
          <div className="absolute -bottom-1 left-6 z-20 flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-[0_18px_40px_rgba(0,0,0,0.25)] hover:bg-black/90"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-[0_18px_40px_rgba(0,0,0,0.25)] hover:bg-black/90"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <style>{`
            .no-scrollbar::-webkit-scrollbar{ display:none; }
            .no-scrollbar{ scrollbar-width:none; -ms-overflow-style:none; }
          `}</style>
        </div>
      </div>
    </section>
  );
}
