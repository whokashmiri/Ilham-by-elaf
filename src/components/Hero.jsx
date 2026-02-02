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
      {/* Background gradient + subtle lines */}
      <div className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          {/* top glow gradient */}
          <div className="absolute -top-28 left-0 right-0 h-[420px] bg-[radial-gradient(1200px_420px_at_35%_0%,rgba(255,120,160,0.55),rgba(255,170,230,0.35),rgba(200,170,255,0.22),rgba(255,255,255,0))]" />
          {/* second glow */}
          <div className="absolute -top-40 right-0 h-[520px] w-[820px] bg-[radial-gradient(680px_520px_at_70%_20%,rgba(255,150,220,0.45),rgba(190,170,255,0.20),rgba(255,255,255,0))]" />
          {/* subtle vertical center line */}
          <div className="absolute inset-y-0 left-1/2 w-px bg-black/5" />
          {/* subtle left line */}
          <div className="absolute inset-y-0 left-[96px] w-px bg-black/5 hidden md:block" />
        </div>

        {/* Page container */}
        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-8 md:px-10">
          {/* Top left floating icon */}
          <div className="absolute left-6 top-8 md:left-10">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black shadow-[0_18px_35px_rgba(0,0,0,0.28)]">
              <Video className="h-5 w-5 text-white" />
            </div>
          </div>

          {/* Nav */}
          <header className="flex items-center justify-center">
            <nav className="relative flex w-full items-center justify-center">
              <ul className="flex items-center gap-8 text-[15px] font-medium text-black/80">
                <li className="cursor-pointer hover:text-black">About</li>
                <li className="cursor-pointer hover:text-black">Services</li>
                <li className="cursor-pointer hover:text-black">Pricing</li>
                <li className="cursor-pointer hover:text-black">Blog</li>
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
          {/* IMPORTANT: items-stretch makes left + right equal height on lg */}
          <main className="mt-10 grid items-center gap-10 lg:mt-20 lg:grid-cols-2">
            {/* Left */}
            {/* Reveal animation: starts blurred and fades in */}
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
                  <button className="group inline-flex items-center justify-center rounded-2xl bg-black px-6 py-4 text-[14px] font-semibold text-white shadow-[0_18px_45px_rgba(0,0,0,0.35)] hover:translate-y-[-1px] hover:shadow-[0_22px_60px_rgba(0,0,0,0.40)] active:translate-y-[0px]">
                    Transform my videos
                    <ArrowUpRight className="ml-2 h-4 w-4 opacity-80 transition group-hover:opacity-100" />
                  </button>

                  <button className="inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-4 text-[14px] font-semibold text-black/80 shadow-[0_14px_35px_rgba(0,0,0,0.10)] ring-1 ring-black/10 hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)]">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-black/5 ring-1 ring-black/10">
                      <Play className="h-4 w-4" />
                    </span>
                    View showreel
                  </button>
                </div>
              </div>
            </section>

            {/* Right media */}
            {/* Make it stretch to match left */}
            <section className="relative flex items-stretch justify-center lg:justify-end">
              <div className="relative w-full max-w-[640px]">
                {/* media card */}
                {/* Match height to left section on large screens */}
                <div className="relative h-[330px] overflow-hidden rounded-[28px] bg-black shadow-[0_28px_70px_rgba(0,0,0,0.22)] ring-1 ring-black/10 sm:h-[360px] md:h-[390px] lg:h-full lg:min-h-[420px]">
                  {/* VIDEO */}
                  <video
                    className="h-full w-full object-cover"
                    src={VIDEO_URL}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />

                  {/* subtle glass overlay like player */}
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.05),rgba(0,0,0,0.12))]" />

                </div>

  
              </div>
            </section>
          </main>

          {/* Local CSS animation (Tailwind-only, no extra deps) */}
          <style>{`
            @keyframes heroIn {
              0% { opacity: 0; transform: translateY(10px); filter: blur(10px); }
              100% { opacity: 1; transform: translateY(0); filter: blur(0px); }
            }
            .animate-heroIn {
              animation: heroIn 900ms ease-out both;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}
