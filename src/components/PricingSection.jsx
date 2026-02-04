// src/components/PricingSection.jsx
import React from "react";
import { Phone } from "lucide-react";

/**
 * Pricing section (matches screenshot)
 * - Top orange label "PRICING"
 * - Big centered heading (two lines)
 * - 3 pricing cards
 * - Middle card has smooth animated gradient background
 * - Left/Right cards are white with subtle border + big shadow button
 */

export default function PricingSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        {/* Header */}
        <div className="text-center">
          <div className="text-[12px] font-bold tracking-widest text-orange-500">
            PRICING
          </div>
          <h2 className="mx-auto mt-6 max-w-3xl text-[54px] font-black leading-[1.02] tracking-tight text-black md:text-[64px]">
            Find the right plan
            <br />
            for your content
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {/* Left */}
          <PlanCard
            tag="IGNITE"
            price="$650"
            desc={"Best for one-off videos\n& first-time clients"}
            items={[
              "1 fully edited, platform-ready video",
              "Professional color grading",
              "Up to 2 revision rounds",
              "3—5 day turnaround",
            ]}
            buttonLabel="Start your project"
            buttonVariant="dark"
          />

          {/* Middle (animated gradient) */}
          <FeaturedPlanCard />

          {/* Right */}
          <PlanCard
            tag="VELOCITY"
            price="$2,450/m"
            desc={"Designed for brands, podcasts\n& agencies that rely on content."}
            items={[
              "Up to 12 edited videos per month",
              "Multi-platform delivery",
              "Unlimited revisions",
              "Dedicated editor & priority delivery",
            ]}
            buttonLabel="Book a call"
            buttonVariant="dark"
          />
        </div>
      </div>
    </section>
  );
}

function PlanCard({ tag, price, desc, items, buttonLabel, buttonVariant }) {
  return (
    <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
      <div className="text-[12px] font-bold tracking-widest text-orange-500">
        {tag}
      </div>

      <div className="mt-4 text-[52px] font-black tracking-tight text-black">
        {price}
      </div>

      <div className="mt-2 text-[18px] leading-7 text-black/55 whitespace-pre-line">
        {desc}
      </div>

      <div className="my-8 h-px w-full bg-black/15" />

      <ul className="space-y-4 text-[16px] leading-6 text-black/55">
        {items.map((t) => (
          <li key={t} className="flex gap-4">
            <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-black/55" />
            <span>{t}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <button
          className={[
            "w-full rounded-2xl px-6 py-4 text-[15px] font-semibold",
            "shadow-[0_18px_45px_rgba(0,0,0,0.25)]",
            "transition-transform duration-200 active:translate-y-0",
            "hover:translate-y-[-1px]",
            buttonVariant === "dark"
              ? "bg-black text-white hover:bg-black/90"
              : "bg-white text-black ring-1 ring-black/10 hover:bg-black/5",
          ].join(" ")}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}

function FeaturedPlanCard() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-black/10 shadow-[0_28px_70px_rgba(0,0,0,0.14)]">
      {/* animated gradient background */}
      <div className="absolute inset-0 animate-gradientMove bg-[radial-gradient(circle_at_20%_20%,rgba(255,70,210,0.95),rgba(255,255,255,0)_45%),radial-gradient(circle_at_85%_30%,rgba(200,120,255,0.95),rgba(255,255,255,0)_48%),radial-gradient(circle_at_60%_95%,rgba(255,150,90,0.9),rgba(255,255,255,0)_52%),radial-gradient(circle_at_25%_80%,rgba(120,60,255,0.9),rgba(255,255,255,0)_55%)] bg-[length:180%_180%]" />

      {/* soft inner haze like screenshot */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.12),rgba(255,255,255,0.08))]" />

      {/* content */}
      <div className="relative p-6">
        <div className="text-[12px] font-bold tracking-widest text-black/85">
          MOMENTUM
        </div>

        <div className="mt-4 text-[52px] font-black tracking-tight text-black">
          $1,250/m
        </div>

        <div className="mt-2 text-[18px] leading-7 text-black/75">
          Built for creators and small
          <br />
          brands posting regularly.
        </div>

        <div className="my-8 h-px w-full bg-black/15" />

        <ul className="space-y-4 text-[16px] leading-6 text-black/75">
          {[
            "Up to 6 edited videos per month",
            "Short-form + long-form",
            "Platform-native optimization",
            "Up to 3 revision rounds per video",
          ].map((t) => (
            <li key={t} className="flex gap-4">
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-black/70" />
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-[15px] font-semibold text-black shadow-[0_18px_45px_rgba(0,0,0,0.18)] ring-1 ring-black/10 hover:bg-white/90 transition">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-black/5 ring-1 ring-black/10">
              <Phone className="h-4 w-4" />
            </span>
            Start growing
          </button>
        </div>
      </div>

      {/* local keyframes */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 20%; transform: scale(1); }
          50% { background-position: 100% 80%; transform: scale(1.03); }
          100% { background-position: 0% 20%; transform: scale(1); }
        }
        .animate-gradientMove{
          animation: gradientMove 10s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce){
          .animate-gradientMove{ animation:none !important; }
        }
      `}</style>
    </div>
  );
}
