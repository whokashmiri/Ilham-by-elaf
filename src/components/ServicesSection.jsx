import React from "react";
import v1 from "../assets/v1 (1).mov";
import v2 from "../assets/v1 (3).mov";
import v3 from "../assets/v1 (2).mov";

function VideoCard({ src, className = "" }) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-[28px]",
        "shadow-[0_22px_60px_rgba(0,0,0,0.18)] ring-1 ring-black/10",
        className,
      ].join(" ")}
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={src}
        autoPlay
        muted
        loop
        playsInline
      />
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

        {/* 3-card layout */}
        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          <VideoCard className="h-[420px]" src={v1} />
          <VideoCard className="h-[420px]" src={v2} />
          <VideoCard className="h-[420px]" src={v3} />
        </div>
      </div>
    </section>
  );
}
