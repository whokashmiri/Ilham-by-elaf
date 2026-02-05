// src/components/MeditationCreativeFlow.jsx
import React from "react";
import { Sparkles, Wind, Brain, Palette } from "lucide-react";

/**
 * Animated + calm colors
 * - soft moving gradient blobs
 * - gentle float on cards
 * - subtle shimmer line
 * - fits your current typography + rounded cards style
 */

export default function MeditationCreativeFlow() {
  return (
    <section className="w-full bg-white">
      <div className="relative overflow-hidden">
        {/* Calm animated background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(120,220,255,0.28),rgba(255,255,255,0))] blur-2xl animate-mcfFloatA" />
          <div className="absolute -top-56 right-[-220px] h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle_at_center,rgba(170,130,255,0.22),rgba(255,255,255,0))] blur-2xl animate-mcfFloatB" />
          <div className="absolute bottom-[-260px] left-[18%] h-[720px] w-[720px] rounded-full bg-[radial-gradient(circle_at_center,rgba(140,255,200,0.18),rgba(255,255,255,0))] blur-2xl animate-mcfFloatC" />
          <div className="absolute bottom-[-220px] right-[12%] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,190,140,0.16),rgba(255,255,255,0))] blur-2xl animate-mcfFloatD" />

          {/* subtle center guide */}
          <div className="absolute inset-y-0 left-1/2 w-px bg-black/5" />
          {/* smooth glass edges */}
          <div className="absolute inset-y-0 left-0 w-36 bg-white/20 [mask-image:linear-gradient(to_right,rgba(0,0,0,1),rgba(0,0,0,0))] backdrop-blur-2xl" />
          <div className="absolute inset-y-0 right-0 w-36 bg-white/20 [mask-image:linear-gradient(to_left,rgba(0,0,0,1),rgba(0,0,0,0))] backdrop-blur-2xl" />

          {/* tiny noise */}
          <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%2240%22 height=%2240%22 filter=%22url(%23n)%22 opacity=%220.25%22/%3E%3C/svg%3E')]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10">
          {/* Header */}
          <div className="text-center">
            <div className="text-[12px] font-bold tracking-widest text-black/45">
              OUR SOLUTION
            </div>
            <h2 className="mx-auto mt-6 max-w-3xl text-[46px] font-black leading-[1.06] tracking-tight text-black md:text-[56px]">
              Meditation &amp;
              <br />
              Creative Flow
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-6 text-black/55">
              Guided meditation to reset the nervous system, soothe the
              subconscious, and regain focus—paired with mindful structure that
              unlocks calm, clarity, and ideas.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            <FeatureCard
              icon={Wind}
              title="Guided meditation"
              text="Reset the nervous system, soften internal noise, and return to a steady baseline."
              accent="bg-[radial-gradient(circle_at_center,rgba(120,220,255,0.22),rgba(255,255,255,0))]"
            />
            <FeatureCard
              icon={Brain}
              title="Mindfulness exercises"
              text="Practical tools to manage stress, reduce mental load, and regain attention control."
              accent="bg-[radial-gradient(circle_at_center,rgba(170,130,255,0.18),rgba(255,255,255,0))]"
            />
            <FeatureCard
              icon={Palette}
              title="Structured creative flow"
              text="Gentle prompts that unlock insight and ideas—without pressure or overthinking."
              accent="bg-[radial-gradient(circle_at_center,rgba(140,255,200,0.16),rgba(255,255,255,0))]"
            />
          </div>

          {/* Calm CTA strip */}
          <div className="mt-10 rounded-[28px] border border-black/10 bg-white/60 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white shadow-[0_18px_35px_rgba(0,0,0,0.18)]">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[16px] font-extrabold text-black">
                    Calm focus in minutes
                  </div>
                  <div className="mt-1 text-[13px] leading-5 text-black/55">
                    A light, repeatable protocol teams can return to whenever
                    mental load spikes.
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="group inline-flex items-center justify-center rounded-2xl bg-black px-6 py-4 text-[14px] font-semibold text-white shadow-[0_18px_45px_rgba(0,0,0,0.25)] transition hover:-translate-y-[1px] hover:bg-black/90"
              >
                Explore the session
                <span className="ml-3 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10 transition group-hover:bg-white/15">
                  <Sparkles className="h-4 w-4" />
                </span>
              </button>
            </div>
          </div>

          {/* Local animations */}
          <style>{`
            @keyframes mcfFloatA { 0%{transform:translate(0,0) scale(1)} 50%{transform:translate(70px,40px) scale(1.06)} 100%{transform:translate(0,0) scale(1)} }
            @keyframes mcfFloatB { 0%{transform:translate(0,0) scale(1)} 50%{transform:translate(-80px,60px) scale(1.05)} 100%{transform:translate(0,0) scale(1)} }
            @keyframes mcfFloatC { 0%{transform:translate(0,0) scale(1)} 50%{transform:translate(90px,-40px) scale(1.08)} 100%{transform:translate(0,0) scale(1)} }
            @keyframes mcfFloatD { 0%{transform:translate(0,0) scale(1)} 50%{transform:translate(-90px,-30px) scale(1.06)} 100%{transform:translate(0,0) scale(1)} }
            .animate-mcfFloatA{animation:mcfFloatA 14s ease-in-out infinite;}
            .animate-mcfFloatB{animation:mcfFloatB 16s ease-in-out infinite;}
            .animate-mcfFloatC{animation:mcfFloatC 18s ease-in-out infinite;}
            .animate-mcfFloatD{animation:mcfFloatD 20s ease-in-out infinite;}

            @keyframes softLift { 0%{ transform:translateY(0);} 50%{ transform:translateY(-6px);} 100%{ transform:translateY(0);} }
            .animate-softLift{ animation:softLift 6.5s ease-in-out infinite; }
          `}</style>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, text, accent }) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white/70 p-7 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl animate-softLift">
      {/* soft accent blob */}
      <div className={`pointer-events-none absolute -top-20 left-1/2 h-56 w-[520px] -translate-x-1/2 rounded-full ${accent} blur-2xl`} />

      {/* subtle shimmer line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,rgba(0,0,0,0),rgba(0,0,0,0.12),rgba(0,0,0,0))]" />

      <div className="relative">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black/5 ring-1 ring-black/10">
            <Icon className="h-5 w-5 text-black/70" />
          </div>
          <div className="text-[12px] font-bold tracking-widest text-black/45">
            MODULE
          </div>
        </div>

        <h3 className="mt-5 text-[24px] font-black leading-[1.12] tracking-tight text-black">
          {title}
        </h3>

        <p className="mt-3 text-[14px] leading-6 text-black/55">{text}</p>

        <div className="mt-6 h-px w-full bg-black/10" />

        <div className="mt-4 text-[12px] font-semibold text-black/40">
          Calm • Clear • Creative
        </div>
      </div>
    </div>
  );
}
