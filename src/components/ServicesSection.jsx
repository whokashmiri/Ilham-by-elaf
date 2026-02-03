// src/components/ServicesSection.jsx
import React, { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Exact layout (like screenshot):
 * - Center heading + small "SERVICES" label
 * - Grid:
 *   [ BIG WIDE (video) spans 2 cols ] [ BIG TALL (video) spans 1 col, 2 rows ]
 *   [ SMALL IMAGE ] [ SMALL IMAGE ]   [ (tall continues) ]
 *
 * Two big cards:
 * - Each has 3 videos and auto-cycles smoothly
 * Two small cards:
 * - Images
 */

const WIDE_VIDEOS = [
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/beer.mp4",
];

const TALL_VIDEOS = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/beer.mp4",
];

const IMG_THUMBNAILS =
  "https://images.unsplash.com/photo-1520975958225-2bcb6b2f2a5a?auto=format&fit=crop&w=1600&q=80";
const IMG_COLOR =
  "https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0d?auto=format&fit=crop&w=1600&q=80";

function VideoCycleCard({
  title,
  subtitle,
  videos,
  className = "",
  overlayStrength = "from-black/70 via-black/20 to-transparent",
  textAlign = "left",
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

  const prev = () => {
    if (!safeVideos.length) return;
    setIdx((p) => (p - 1 + safeVideos.length) % safeVideos.length);
  };

  const next = () => {
    if (!safeVideos.length) return;
    setIdx((p) => (p + 1) % safeVideos.length);
  };

  return (
    <div
      className={[
        "relative overflow-hidden rounded-[28px] shadow-[0_22px_60px_rgba(0,0,0,0.18)] ring-1 ring-black/10",
        className,
      ].join(" ")}
    >
      {/* video */}
      <video
        key={safeVideos[idx] || idx}
        className="absolute inset-0 h-full w-full object-cover"
        src={safeVideos[idx]}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* soft focus like screenshot */}
      <div className="pointer-events-none absolute inset-0 bg-black/5" />
      <div className="pointer-events-none absolute inset-0 [filter:saturate(1.08)]" />

      {/* bottom-left overlay */}
      <div
        className={[
          "pointer-events-none absolute inset-0",
          `bg-gradient-to-t ${overlayStrength}`,
        ].join(" ")}
      />

      {/* center arrows control (like screenshot’s small arrows control) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center gap-1 rounded-full bg-black/70 px-2 py-2 ring-1 ring-white/10 backdrop-blur">
          <button
            type="button"
            onClick={prev}
            className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full text-white/90 hover:bg-white/10"
            aria-label="Previous"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={next}
            className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full text-white/90 hover:bg-white/10"
            aria-label="Next"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* text */}
      <div
        className={[
          "absolute bottom-0 left-0 right-0 p-8",
          textAlign === "right" ? "text-right" : "text-left",
        ].join(" ")}
      >
        <h3 className="text-[38px] font-extrabold leading-[1.05] text-white drop-shadow-sm">
          {title}
        </h3>
        <p className="mt-3 max-w-md text-[15px] font-medium leading-6 text-white/85 drop-shadow-sm">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

function ImageCard({ title, subtitle, image, className = "" }) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-[22px] shadow-[0_18px_45px_rgba(0,0,0,0.16)] ring-1 ring-black/10",
        className,
      ].join(" ")}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* bottom overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-[30px] font-extrabold leading-[1.05] text-white drop-shadow-sm">
          {title}
        </h3>
        <p className="mt-2 max-w-sm text-[14px] font-medium leading-6 text-white/85 drop-shadow-sm">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        {/* header */}
        <div className="text-center">
          <div className="text-[12px] font-bold tracking-widest text-orange-500">
            SERVICES
          </div>
          <h2 className="mt-4 text-[54px] font-black leading-[1.02] tracking-tight text-black md:text-[64px]">
            Everything you need
            <br />
            to scale your content
          </h2>
        </div>

        {/* grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* BIG WIDE (video) */}
          <VideoCycleCard
            className="h-[340px] lg:col-span-2 lg:h-[360px]"
            videos={WIDE_VIDEOS}
            title="Long-form content"
            subtitle="Structured for retention, clarity, and watch-time growth."
          />

          {/* BIG TALL (video) spans 2 rows */}
          <VideoCycleCard
            className="h-[360px] lg:row-span-2 lg:h-[600px]"
            videos={TALL_VIDEOS}
            title={
              <>
                Short-
                <br />
                form edits
              </>
            }
            subtitle="Built to stop the scroll and multiply engagement."
            overlayStrength="from-black/55 via-black/10 to-transparent"
          />

          {/* SMALL IMAGE */}
          <ImageCard
            className="h-[220px]"
            image={IMG_THUMBNAILS}
            title="Thumbnails"
            subtitle="Creating high-quality visuals as clicks starts before the video plays."
          />

          {/* SMALL IMAGE */}
          <ImageCard
            className="h-[220px]"
            image={IMG_COLOR}
            title="Color grading"
            subtitle="Adjusting colors to make your videos more attractive to view."
          />
        </div>
      </div>
    </section>
  );
}
