// src/components/ImpactSection.jsx
import React from "react";
import {
  Sparkles,
  Brain,
  Wind,
  Palette,
  ArrowDownRight,
  CheckCircle2,
} from "lucide-react";

/**
 * Modern "IMPACT" section
 * - Fits your existing aesthetic: big type, soft borders, light shadows, subtle gradient accent
 * - Three blocks:
 *   1) Problem (mental overload)
 *   2) During the workshop (2 bullets)
 *   3) Impact (Post-workshop + Sustained at work)
 */

export default function ImpactSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        {/* Header */}
        <div className="text-center">
          <div className="text-[12px] font-bold tracking-widest text-orange-500">
            IMPACT
          </div>
          <h2 className="mx-auto mt-6 max-w-3xl text-[46px] font-black leading-[1.06] tracking-tight text-black md:text-[56px]">
            When employees are mentally overloaded,
            <br />
            performance quietly declines
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-6 text-black/55">
            Their ability to think clearly, solve problems, and innovate drops.
            Breathwork + mindful creative expression reset the nervous system so
            focus and clarity return.
          </p>
        </div>

        {/* Content grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {/* Card 1: The problem */}
          <div className="rounded-[28px] border border-black/10 bg-white p-7 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white shadow-[0_18px_35px_rgba(0,0,0,0.18)]">
                <Brain className="h-5 w-5" />
              </div>
              <div className="text-[13px] font-bold tracking-widest text-black/55">
                THE CHALLENGE
              </div>
            </div>

            <h3 className="mt-6 text-[26px] font-black leading-[1.12] tracking-tight text-black">
              Mental overload blocks
              <br />
              clear thinking
            </h3>

            <p className="mt-4 text-[14px] leading-6 text-black/55">
              When stress stays elevated, it becomes harder to think clearly,
              solve problems, and innovate. Teams move faster—but with less
              clarity.
            </p>

            <div className="mt-6 rounded-2xl border border-black/10 bg-black/[0.02] p-4">
              <div className="flex items-start gap-3">
                <ArrowDownRight className="mt-0.5 h-4 w-4 text-orange-500" />
                <p className="text-[13px] leading-5 text-black/60">
                  Breathwork + mindful creative expression help downshift the
                  stress response and restore focus.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: During workshop */}
          <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white p-7 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
            {/* soft animated-feel gradient accent (static but modern) */}
            <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,140,80,0.28),rgba(255,255,255,0))] blur-2xl" />

            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white shadow-[0_18px_35px_rgba(0,0,0,0.18)]">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div className="text-[13px] font-bold tracking-widest text-black/55">
                  DURING THE WORKSHOP
                </div>
              </div>

              <h3 className="mt-6 text-[26px] font-black leading-[1.12] tracking-tight text-black">
                Reset the nervous system,
                <br />
                restore clarity
              </h3>

              <div className="mt-6 space-y-4">
                <Bullet
                  icon={Wind}
                  title="Guided breathwork"
                  text="Regulate stress and shift the body into a calmer state."
                />
                <Bullet
                  icon={Palette}
                  title="Mindful creative expression"
                  text="Slow thinking, reduce mental noise, and regain focus."
                />
              </div>
            </div>
          </div>

          {/* Card 3: Impact (post + sustained) */}
          <div className="rounded-[28px] border border-black/10 bg-white p-7 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white shadow-[0_18px_35px_rgba(0,0,0,0.18)]">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div className="text-[13px] font-bold tracking-widest text-black/55">
                OUTCOMES
              </div>
            </div>

            <h3 className="mt-6 text-[26px] font-black leading-[1.12] tracking-tight text-black">
              From calm state → better work
            </h3>

            <div className="mt-6 space-y-6">
              <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-5">
                <div className="text-[12px] font-bold tracking-widest text-black/55">
                  POST-WORKSHOP IMPACT
                </div>
                <ul className="mt-3 space-y-2 text-[14px] leading-6 text-black/60">
                  <li>• Stress response downshifts</li>
                  <li>• Calmer nervous system and clearer thinking</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-5">
                <div className="text-[12px] font-bold tracking-widest text-black/55">
                  SUSTAINED IMPACT ON WORK
                </div>
                <ul className="mt-3 space-y-2 text-[14px] leading-6 text-black/60">
                  <li>• Clearer decision-making</li>
                  <li>• Calmer communication</li>
                  <li>• Stronger collaboration</li>
                  <li>• Better ideation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Small footer line */}
        <div className="mx-auto mt-10 max-w-3xl text-center text-[12px] font-semibold tracking-wide text-black/35">
          Built for teams who want calm focus — without losing momentum.
        </div>
      </div>
    </section>
  );
}

function Bullet({ icon: Icon, title, text }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-black/10 bg-white p-4 shadow-[0_14px_35px_rgba(0,0,0,0.04)]">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-black/5 ring-1 ring-black/10">
        <Icon className="h-5 w-5 text-orange-500" />
      </div>
      <div>
        <div className="text-[15px] font-extrabold text-black">{title}</div>
        <div className="mt-1 text-[13px] leading-5 text-black/55">{text}</div>
      </div>
    </div>
  );
}
