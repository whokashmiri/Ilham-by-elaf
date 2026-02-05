// src/components/TestimonialsGrid.jsx
import React from "react";

/**
 * Component 1: TestimonialsGrid (matches screenshot)
 * - Small orange label "TESTIMONIALS"
 * - Big centered heading (2 lines)
 * - Small black pill button centered
 * - 3x3 grid of cards (with partial faded cards at far left/right like edges)
 * - Each card: avatar + name + dot + stars, short text
 * - Side columns are faded to mimic “cut off / lighter” look
 */

const DATA = [
  {
    name: "ENOLA",
    stars: 5,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
    text: "This team refined our footage into content that finally feels polished, impactful, and built to win.",
  },
  {
    name: "BILLY",
    stars: 5,
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=120&q=80",
    text: "Our videos now carry real momentum and clarity thanks to their sharp pacing and creative direction.",
  },
  {
    name: "RASHANE",
    stars: 5,
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80",
    text: "Working with them improved retention, lifted engagement, and made our content feel truly premium.",
  },
  {
    name: "LENA",
    stars: 5,
    avatar:
      "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=120&q=80",
    text: "They understand modern platforms deeply; our content finally looks and performs the way it should.",
  },
  {
    name: "ABEL",
    stars: 5,
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=120&q=80",
    text: "The team brought clarity, energy, and structure to our footage, making every clip more engaging.",
  },
  {
    name: "DANIEL",
    stars: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
    text: "Their pacing and storytelling transformed our videos into content that viewers actually finish watching.",
  },
  {
    name: "EVA",
    stars: 5,
    avatar:
      "https://images.unsplash.com/photo-1546539789-0e3f3c6b36f1?auto=format&fit=crop&w=120&q=80",
    text: "Their process is smooth, fast, and reliable—every deliverable feels crafted with real precision.",
  },
  {
    name: "REBECCA",
    stars: 5,
    avatar:
      "https://images.unsplash.com/photo-1544005316-04ce0e3f5c79?auto=format&fit=crop&w=120&q=80",
    text: "We’ve never had content perform this well before; their editing genuinely elevated our brand voice.",
  },
  {
    name: "JASON",
    stars: 5,
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80",
    text: "They turned simple clips into high-performing videos that consistently drive stronger results for us.",
  },
];

function Stars({ count = 5, faded = false }) {
  return (
    <div className={["flex items-center gap-1", faded ? "text-orange-400/45" : "text-orange-500"].join(" ")}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 17.27l5.18 3.05-1.39-5.97 4.63-4.01-6.09-.52L12 4l-2.33 5.82-6.09.52 4.63 4.01-1.39 5.97L12 17.27z"
          />
        </svg>
      ))}
    </div>
  );
}

function Card({ item, dim = false }) {
  return (
    <div
      className={[
        "rounded-[18px] border border-black/10 bg-white",
        "px-6 py-5",
        "shadow-[0_18px_45px_rgba(0,0,0,0.06)]",
        "transition-opacity duration-200",
        dim ? "opacity-35" : "opacity-100",
      ].join(" ")}
    >
      <div className="flex items-center gap-3">
        <img
          src={item.avatar}
          alt=""
          className="h-8 w-8 rounded-full object-cover ring-1 ring-black/10"
        />
        <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-black/55">
          <span>{item.name}</span>
          <span className="mx-1 inline-block h-1 w-1 rounded-full bg-black/25" />
          <Stars count={item.stars} faded={dim} />
        </div>
      </div>

      <p
        className={[
          "mt-4 text-[13px] leading-5",
          dim ? "text-black/25" : "text-black/45",
        ].join(" ")}
      >
        {item.text}
      </p>
    </div>
  );
}

export default function TestimonialsGrid() {
  // Duplicate data for infinite scroll effect
  const duplicatedData = [...DATA, ...DATA, ...DATA];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="text-center">
          <div className="text-[12px] font-bold tracking-widest text-orange-500">
            TESTIMONIALS
          </div>

          <h2 className="mx-auto mt-6 max-w-2xl text-[44px] font-black leading-[1.06] tracking-tight text-black md:text-[52px]">
            Trusted by individuals
            <br />
            and teams
          </h2>

          <div className="mt-6 flex justify-center">
            <button className="rounded-xl bg-black px-5 py-3 text-[12px] font-semibold text-white shadow-[0_18px_45px_rgba(0,0,0,0.22)] hover:bg-black/90">
              Level up your Productivity
            </button>
          </div>
        </div>

        {/* carousel area */}
        <div className="relative mt-14 overflow-hidden">
          {/* Row 1: Left to right, slow */}
          <div className="mb-6 flex animate-scroll-left-slow gap-6">
            {duplicatedData.slice(0, 9).map((item, idx) => (
              <div key={`${item.name}-${idx}`} className="flex-shrink-0 w-80">
                <Card item={item} />
              </div>
            ))}
          </div>

          {/* Row 2: Right to left, medium */}
          <div className="mb-6 flex animate-scroll-right-medium gap-6">
            {duplicatedData.slice(3, 12).map((item, idx) => (
              <div key={`${item.name}-${idx}-row2`} className="flex-shrink-0 w-80">
                <Card item={item} />
              </div>
            ))}
          </div>

          {/* Row 3: Left to right, fast */}
          <div className="flex animate-scroll-left-fast gap-6">
            {duplicatedData.slice(6, 15).map((item, idx) => (
              <div key={`${item.name}-${idx}-row3`} className="flex-shrink-0 w-80">
                <Card item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-left-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right-medium {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes scroll-left-fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll-left-slow {
          animation: scroll-left-slow 40s linear infinite;
        }
        .animate-scroll-right-medium {
          animation: scroll-right-medium 30s linear infinite;
        }
        .animate-scroll-left-fast {
          animation: scroll-left-fast 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
