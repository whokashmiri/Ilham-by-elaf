// src/components/Hero.jsx
import React from "react";
import {
  Video,
  Play,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

const VIDEO_URL =
  "https://www.pexels.com/download/video/7414973/"; // <-- replace with your video

export default function Hero() {
  return (
    <div className="min-h-screen w-full bg-[#f6f0f4]">
      <div className="relative min-h-screen overflow-hidden">
        {/* ✅ Animated background (more colors + smooth motion) */}
        <div className="pointer-events-none absolute inset-0">
          {/* big moving gradient blobs */}
          <div className="absolute -top-48 -left-48 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,120,160,0.55),rgba(255,255,255,0))] blur-2xl animate-floatA" />
          <div className="absolute -top-40 right-[-180px] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle_at_center,rgba(170,130,255,0.45),rgba(255,255,255,0))] blur-2xl animate-floatB" />
          <div className="absolute bottom-[-260px] left-[10%] h-[680px] w-[680px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,190,90,0.32),rgba(255,255,255,0))] blur-2xl animate-floatC" />
          <div className="absolute bottom-[-220px] right-[8%] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle_at_center,rgba(120,220,255,0.28),rgba(255,255,255,0))] blur-2xl animate-floatD" />

          {/* subtle vertical center line */}
          <div className="absolute inset-y-0 left-1/2 w-px bg-black/5" />
          {/* subtle left line */}
          <div className="absolute inset-y-0 left-[96px] w-px bg-black/5 hidden md:block" />

          {/* very light noise overlay */}
          <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%2240%22 height=%2240%22 filter=%22url(%23n)%22 opacity=%220.35%22/%3E%3C/svg%3E')]" />
        </div>

        {/* Page container */}
        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-8 md:px-10">
          {/* Top left floating icon */}
        <div className="absolute left-6 top-8 md:left-10">
  <div className="flex items-center justify-center rounded-xl bg-black px-4 py-2 shadow-[0_18px_35px_rgba(0,0,0,0.28)]">
    <span className="text-[12px] font-bold tracking-widest text-white">
      ILHAM <span className="opacity-60">BY</span> ELAF
    </span>
  </div>
</div>


          {/* Nav */}
          <header className="flex items-center justify-center  ">
            <nav className="relative flex w-full items-center justify-center">
              <ul className="flex items-center gap-8 text-[15px] font-medium text-black/80 transition-colors duration-200">
                <li className="cursor-pointer hover:text-black hover:font-semibold">About</li>
                <li className="cursor-pointer hover:text-black hover:font-semibold">Services</li>
                <li className="cursor-pointer hover:text-black hover:font-semibold">Pricing</li>
                <li className="cursor-pointer hover:text-black hover:font-semibold">Blog</li>
              </ul>

              {/* CTA right */}
              <div className="absolute right-0">
                <button className="rounded-2xl bg-white px-6 py-3 text-[15px] font-semibold text-black shadow-[0_16px_40px_rgba(0,0,0,0.10)] ring-1 ring-black/5 hover:shadow-[0_18px_50px_rgba(0,0,0,0.14)]">
                  Book a call
                </button>
              </div>
            </nav>
          </header>

          {/* Hero */}
          <main className="mt-10 grid items-center gap-10 lg:mt-20 lg:grid-cols-2">
            {/* Left */}
            <section className="max-w-xl lg:max-w-none">
              <div className="animate-heroIn space-y-3">
                {/* badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-white/40 px-3 py-2 text-[12px] font-semibold tracking-wide text-black/70 ring-1 ring-black/5 backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                  <span>3 SPOTS LEFT FOR JUNE</span>
                </div>

                <h1 className="mt-8 text-[56px] font-black leading-[0.95] tracking-tight text-black md:text-[72px]">
                  Turning raw
                  <br />
                  footage into
                  <br />
                  impactful results
                </h1>

                <p className="mt-6 max-w-md text-[15px] leading-6 text-black/55">
                  We turn ideas into polished videos that feel intentional,
                  fast-paced, and impossible to click away from.
                </p>

                {/* buttons */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  {/* ✅ Shutter text + yellow hover */}
                  <ShutterButton
                    variant="dark"
                    onClick={() => {}}
                    label=""
                    hoverLabel="Download My Portfolio"

                      icon={
                      <span className="ml-2 flex h-6 w-6 items-center justify-center rounded-lg bg-black/5 ring-1 ring-black/10">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    }

                    
                  />

                  {/* ✅ White button with shutter text + yellow highlight */}
                  <ShutterButton
                    variant="light"
                    onClick={() => {}}
                    label=""
                    hoverLabel="Follow On Instagram"
                    icon={
                      <span className="ml-2 flex h-6 w-6 items-center justify-center rounded-lg bg-black/5 ring-1 ring-black/10">
                        <Play className="h-4 w-4" />
                      </span>
                    }
                  />
                </div>
              </div>
            </section>

            {/* Right media */}
            <section className="relative flex items-stretch justify-center lg:justify-end">
              <div className="relative w-full max-w-[640px]">
                <div className="relative h-[330px] overflow-hidden rounded-[28px] bg-black shadow-[0_28px_70px_rgba(0,0,0,0.22)] ring-1 ring-black/10 sm:h-[360px] md:h-[390px] lg:h-full lg:min-h-[420px]">
                  <video
                    className="h-full w-full object-cover"
                    src={VIDEO_URL}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.05),rgba(0,0,0,0.12))]" />
                </div>
              </div>
            </section>
          </main>

          {/* Animations (kept local, no deps) */}
          <style>{`
            /* initial text reveal */
            @keyframes heroIn {
              0% { opacity: 0; transform: translateY(10px); filter: blur(10px); }
              100% { opacity: 1; transform: translateY(0); filter: blur(0px); }
            }
            .animate-heroIn { animation: heroIn 900ms ease-out both; }

            /* background float loops */
            @keyframes floatA {
              0% { transform: translate(0,0) scale(1); }
              50% { transform: translate(80px, 40px) scale(1.08); }
              100% { transform: translate(0,0) scale(1); }
            }
            @keyframes floatB {
              0% { transform: translate(0,0) scale(1); }
              50% { transform: translate(-70px, 60px) scale(1.06); }
              100% { transform: translate(0,0) scale(1); }
            }
            @keyframes floatC {
              0% { transform: translate(0,0) scale(1); }
              50% { transform: translate(90px, -40px) scale(1.10); }
              100% { transform: translate(0,0) scale(1); }
            }
            @keyframes floatD {
              0% { transform: translate(0,0) scale(1); }
              50% { transform: translate(-90px, -30px) scale(1.07); }
              100% { transform: translate(0,0) scale(1); }
            }
            .animate-floatA { animation: floatA 12s ease-in-out infinite; }
            .animate-floatB { animation: floatB 14s ease-in-out infinite; }
            .animate-floatC { animation: floatC 16s ease-in-out infinite; }
            .animate-floatD { animation: floatD 18s ease-in-out infinite; }

            /* shutter text (slides vertically) */
            .shutter {
              display: inline-block;
              position: relative;
              height: 1.1em;
              overflow: hidden;
              line-height: 1.1em;
            }
            .shutter > span {
              display: block;
              transition: transform 320ms cubic-bezier(.2,.8,.2,1);
            }
            .shutter .t1 { transform: translateY(0%); }
            .shutter .t2 { transform: translateY(0%); }
            .group:hover .shutter .t1 { transform: translateY(-110%); }
            .group:hover .shutter .t2 { transform: translateY(-110%); }

            /* for the second line, we stack both lines and shift container */
            .stack {
              transform: translateY(0%);
            }
            .group:hover .stack {
              transform: translateY(-110%);
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}

/**
 * ShutterButton
 * - On hover: background becomes yellow, text does "shutter" slide
 * - No external library needed
 */
function ShutterButton({
  variant = "dark",
  label,
  hoverLabel,
  icon,
  onClick,
}) {
  const text1 = (label && label.trim()) || hoverLabel || "Button";
  const text2 = (hoverLabel && hoverLabel.trim()) || text1;

  const base =
    "group relative inline-flex items-center justify-center rounded-2xl px-6 py-4 text-[14px] font-semibold transition-all duration-300 active:translate-y-[0px]";
  const dark =
    "bg-black text-white shadow-[0_18px_45px_rgba(0,0,0,0.35)] hover:shadow-[0_22px_60px_rgba(0,0,0,0.40)] hover:translate-y-[-1px]";
  const light =
    "bg-white text-black/80 shadow-[0_14px_35px_rgba(0,0,0,0.10)] ring-1 ring-black/10 hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)] hover:translate-y-[-1px]";

  const hoverYellow = "hover:bg-yellow-300 hover:text-black";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${base} ${variant === "dark" ? dark : light} ${hoverYellow}`}
    >
      {/* ✅ SHUTTER TEXT */}
      <span className="relative h-[1.1em] overflow-hidden leading-[1.1em]">
        {/* default line */}
        <span className="block transition-transform duration-300 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:-translate-y-[110%]">
          {text1}
        </span>

        {/* hover line (starts below, slides in) */}
        <span className="absolute left-0 top-0 block translate-y-[110%] transition-transform duration-300 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:translate-y-0">
          {text2}
        </span>
      </span>

      {icon}
    </button>
  );
}

