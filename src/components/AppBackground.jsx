// src/components/AppBackground.jsx
import React from "react";

export default function AppBackground({ children }) {
  return (
    <div className="min-h-screen w-full bg-[#f6f0f4]">
      <div className="relative min-h-screen overflow-hidden">
        {/* Global animated background */}
        <div className="pointer-events-none absolute inset-0">
          {/* moving blobs */}
          <div className="absolute -top-48 -left-48 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,120,160,0.55),rgba(255,255,255,0))] blur-2xl animate-floatA" />
          <div className="absolute -top-40 right-[-180px] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle_at_center,rgba(170,130,255,0.45),rgba(255,255,255,0))] blur-2xl animate-floatB" />
          <div className="absolute bottom-[-260px] left-[10%] h-[680px] w-[680px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,190,90,0.32),rgba(255,255,255,0))] blur-2xl animate-floatC" />
          <div className="absolute bottom-[-220px] right-[8%] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle_at_center,rgba(120,220,255,0.28),rgba(255,255,255,0))] blur-2xl animate-floatD" />

          {/* subtle guide lines */}
          <div className="absolute inset-y-0 left-1/2 w-px bg-black/5" />
          <div className="absolute inset-y-0 left-[96px] w-px bg-black/5 hidden md:block" />

          {/* noise */}
          <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%2240%22 height=%2240%22 filter=%22url(%23n)%22 opacity=%220.35%22/%3E%3C/svg%3E')]" />

          {/* smooth glass edges */}
          <div className="absolute inset-y-0 left-0 w-36 bg-white/25 [mask-image:linear-gradient(to_right,rgba(0,0,0,1),rgba(0,0,0,0))] backdrop-blur-2xl" />
          <div className="absolute inset-y-0 right-0 w-36 bg-white/25 [mask-image:linear-gradient(to_left,rgba(0,0,0,1),rgba(0,0,0,0))] backdrop-blur-2xl" />
        </div>

        {/* Your app pages/components */}
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}
