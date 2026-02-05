// src/components/ServicesSection.jsx
import React, { useEffect, useMemo, useState } from "react";

const WIDE_VIDEOS = [
  "https://www.pexels.com/download/video/9419481/",
  "https://www.pexels.com/download/video/7640074/",
  "https://www.pexels.com/download/video/7278400/",
];

const TALL_VIDEOS = [
  "https://www.pexels.com/download/video/7857988/",
  "https://www.pexels.com/download/video/7591975/",
  "https://www.pexels.com/download/video/6914904/",
];

function VideoCycleCard({
  title,
  subtitle,
  videos,
  className = "",
  overlayStrength = "from-black/70 via-black/25 to-transparent",
}) {
  const [idx, setIdx] = useState(0);

  const safeVideos = useMemo(
    () => (Array.isArray(videos) && videos.length ? videos : []),
    [videos]
  );

  useEffect(() => {
    if (safeVideos.length <= 1) return;
    const t = setInterval(() => {
      setIdx((p) => (p + 1) % safeVideos.length);
    }, 3800);
    return () => clearInterval(t);
  }, [safeVideos.length]);

  return (
    <div
      className={[
        "relative overflow-hidden rounded-[28px]",
        "shadow-[0_22px_60px_rgba(0,0,0,0.18)] ring-1 ring-black/10",
        className,
      ].join(" ")}
    >
      <video
        key={safeVideos[idx] || idx}
        className="absolute inset-0 h-full w-full object-cover"
        src={safeVideos[idx]}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="pointer-events-none absolute inset-0 bg-black/5" />
      <div
        className={[
          "pointer-events-none absolute inset-0",
          `bg-gradient-to-t ${overlayStrength}`,
        ].join(" ")}
      />

      <div className="absolute bottom-0 left-0 right-0 p-8">
        <h3 className="text-[34px] font-extrabold leading-[1.05] text-white">
          {title}
        </h3>
        <p className="mt-3 max-w-md text-[15px] font-medium leading-6 text-white/85">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        {/* header */}
        <div className="text-center">
          <div className="text-[12px] font-bold tracking-widest text-orange-500">
            RECENT WORKSHOPS
          </div>
          <h2 className="mt-4 text-[54px] font-black leading-[1.02] tracking-tight text-black md:text-[64px]">
            TRUSTED BY TEAMS WHO CARE
          </h2>
        </div>

        {/* 3-card layout (PDF style) */}
        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          <VideoCycleCard
            className="h-[420px]"
            videos={WIDE_VIDEOS}
            title="Meditation & Creative Flow"
            subtitle="Guided meditation and mindful creative practices to reset focus and mental clarity."
          />

          <VideoCycleCard
            className="h-[420px]"
            videos={TALL_VIDEOS}
            title="Reflect, Symbolise & Create"
            subtitle="Creative expression that slows thinking, surfaces insight, and restores balance."
            overlayStrength="from-black/60 via-black/20 to-transparent"
          />

          <VideoCycleCard
            className="h-[420px]"
            videos={WIDE_VIDEOS}
            title="Create, Play & Collaborate"
            subtitle="Game-based workshops designed to strengthen collaboration and engagement."
          />
        </div>
      </div>
    </section>
  );
}
