// src/components/TestimonialsCarousel.jsx
import React, { useMemo } from "react";


const DEFAULT_ITEMS = [
  {
    quote: "Their edits doubled our\nwatch time in weeks flat!!",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    stars: 5,
  },
  {
    quote: "Our content finally looks\npremium and sharp now!!",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=200&q=80",
    stars: 5,
  },
  {
    quote: "Their edits doubled our\nwatch time in weeks flat!!",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
    stars: 5,
  },
  {
    quote: "Amazing quality and fast\nturnaround time!",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    stars: 5,
  },
   {
    quote: "Amazing quality and fast\nturnaround time!",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    stars: 5,
  },
];


function StarRow({ count = 5 }) {
  return (
    <div className="flex items-center gap-1 text-yellow-500">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 17.27l5.18 3.05-1.39-5.97 4.63-4.01-6.09-.52L12 4l-2.33 5.82-6.09.52 4.63 4.01-1.39 5.97L12 17.27z"
          />
        </svg>
      ))}
    </div>
  );
}

function ReviewCell({ item }) {
  return (
    <div className="cell flex flex-col items-center text-center">
      <div className="flex items-center gap-2 w-full">
        {/* Image on left */}
        <div className="relative shrink-0">
          <img
            src={item.avatar}
            alt=""
            className="h-24 w-24 rounded-full object-cover shadow-[0_18px_35px_rgba(0,0,0,0.10)]"
          />
          {/* soft shadow under avatar */}
          <div className="pointer-events-none absolute -bottom-8 left-1/2 h-16 w-24 -translate-x-1/2 rounded-full bg-black/10 blur-2xl" />
        </div>

        {/* Stars and review on right */}
        <div className="flex-1 text-left">
          <div className="mb-3">
            <StarRow count={item.stars ?? 5} />
          </div>

          {/* quote */}
          <div className="text-[18px] font-semibold leading-[1.15] tracking-tight text-black/60 whitespace-pre-line">
            {item.quote}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsCarousel({
  items = DEFAULT_ITEMS,
  seconds = 22, // 속도: 숫자 낮을수록 빠름
}) {
  // ✅ 2번만 복제하고 -50% 이동 => 점프 없이 무한
  const loop = useMemo(() => [...items, ...items], [items]);

  return (
    <section className="w-full bg-white">
      <div className="relative mx-auto w-full max-w-[1600px] overflow-hidden py-14">
        {/* ✅ 실제 “끝 흐림/페이드”는 마스크가 담당 (가장 중요) */}
        <div className="relative marquee-mask">
          {/* ✅ 트랙 */}
          <div
            className="track flex items-center"
            style={{ animationDuration: `${seconds}s` }}
          >
            {loop.map((item, idx) => (
              <ReviewCell key={idx} item={item} />
            ))}
          </div>

          {/* ✅ 끝 “부드러운” 블러 커튼 (날카롭지 않게 그라데이션) */}
          <div className="pointer-events-none absolute inset-0 z-10">
            {/* left curtain */}
            <div className="absolute left-0 top-0 h-full w-[150px] blur-curtain-left" />
            {/* right curtain */}
            <div className="absolute right-0 top-0 h-full w-[150px] blur-curtain-right" />
          </div>
        </div>

        <style>{`
          /* Display 4 reviews at once */
          .cell{
            width: calc(100% / 4);
            padding: 0 56px;
            box-sizing: border-box;
            flex: 0 0 auto;
          }

          /* Smooth infinite scrolling animation */
          .track{
            will-change: transform;
            animation-name: marquee;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          
          @keyframes marquee{
            0%{ transform: translateX(0); }
            100%{ transform: translateX(-50%); }
          }

          /* Smooth fade mask at the edges */
          .marquee-mask{
            -webkit-mask-image: linear-gradient(
              to right,
              rgba(0,0,0,0) 0%,
              rgba(0,0,0,0.15) 3%,
              rgba(0,0,0,0.35) 6%,
              rgba(0,0,0,0.55) 9%,
              rgba(0,0,0,0.75) 12%,
              rgba(0,0,0,1) 15%,
              rgba(0,0,0,1) 85%,
              rgba(0,0,0,0.75) 88%,
              rgba(0,0,0,0.55) 91%,
              rgba(0,0,0,0.35) 94%,
              rgba(0,0,0,0.15) 97%,
              rgba(0,0,0,0) 100%
            );
            mask-image: linear-gradient(
              to right,
              rgba(0,0,0,0) 0%,
              rgba(0,0,0,0.15) 3%,
              rgba(0,0,0,0.35) 6%,
              rgba(0,0,0,0.55) 9%,
              rgba(0,0,0,0.75) 12%,
              rgba(0,0,0,1) 15%,
              rgba(0,0,0,1) 85%,
              rgba(0,0,0,0.75) 88%,
              rgba(0,0,0,0.55) 91%,
              rgba(0,0,0,0.35) 94%,
              rgba(0,0,0,0.15) 97%,
              rgba(0,0,0,0) 100%
            );
          }

          /* Smooth blur gradient from fully opaque at edge to transparent at inner side */
          /* Left side curtain - blur increases from center outward */
          .blur-curtain-left{
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            background: linear-gradient(
              to right,
              rgba(255,255,255,0.95) 0%,
              rgba(255,255,255,0.92) 5%,
              rgba(255,255,255,0.88) 10%,
              rgba(255,255,255,0.82) 15%,
              rgba(255,255,255,0.74) 20%,
              rgba(255,255,255,0.64) 25%,
              rgba(255,255,255,0.52) 30%,
              rgba(255,255,255,0.40) 40%,
              rgba(255,255,255,0.28) 50%,
              rgba(255,255,255,0.18) 65%,
              rgba(255,255,255,0.08) 80%,
              rgba(255,255,255,0.00) 100%
            );
          }
          
          /* Right side curtain - mirror effect */
          .blur-curtain-right{
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            background: linear-gradient(
              to left,
              rgba(255,255,255,0.95) 0%,
              rgba(255,255,255,0.92) 5%,
              rgba(255,255,255,0.88) 10%,
              rgba(255,255,255,0.82) 15%,
              rgba(255,255,255,0.74) 20%,
              rgba(255,255,255,0.64) 25%,
              rgba(255,255,255,0.52) 30%,
              rgba(255,255,255,0.40) 40%,
              rgba(255,255,255,0.28) 50%,
              rgba(255,255,255,0.18) 65%,
              rgba(255,255,255,0.08) 80%,
              rgba(255,255,255,0.00) 100%
            );
          }

          /* Responsive: 1 item on mobile, 2 on tablet, 4 on desktop */
          @media (max-width: 1023px){
            .cell{ width: calc(100% / 2); padding: 0 40px; }
          }
          @media (max-width: 640px){
            .cell{ width: 100%; padding: 0 22px; }
          }

          /* Accessibility: respect motion preferences */
          @media (prefers-reduced-motion: reduce){
            .track{ animation: none !important; transform: none !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
