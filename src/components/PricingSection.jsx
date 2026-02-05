// src/components/PricingSection.jsx
import React from "react";
import { Phone } from "lucide-react";

/**
 * Updated to your NEW content:
 * - Section label: OUR EXPERIENCE TIERS
 * - 3 cards:
 *   Left: Core
 *   Middle: Customizable, retreat-style experience (animated gradient)
 *   Right: Customized workshop designed around your event or theme
 * - Includes the footnote: *Pricing varies...
 */

export default function PricingSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        {/* Header */}
        <div className="text-center">
          <div className="text-[12px] font-bold tracking-widest text-orange-500">
            OUR EXPERIENCE TIERS
          </div>
          <h2 className="mx-auto mt-6 max-w-4xl text-[54px] font-black leading-[1.02] tracking-tight text-black md:text-[64px]">
            Choose the right format
            <br />
            for your team or event
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-6 text-black/55">
            Three tiers designed for corporate-safe wellbeing and creative
            performance—ranging from structured workshops to retreat-style
            experiences.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {/* Left: Core */}
          <PlanCard
            tag="Core"
            price="From 3,000 – 5,000 SAR"
            desc={"Standard workshop."}
            meta={[
              { k: "Duration", v: "2 hours" },
              { k: "Delivery", v: "Onsite / In office premises" },
              { k: "Attendees", v: "20–40 individuals" },
            ]}
            idealWhen={[
              "Teams want a structured engagement session.",
            ]}
            buttonLabel="Enquire"
            buttonVariant="dark"
          />

          {/* Middle: Retreat-style (animated gradient) */}
          <FeaturedPlanCard />

          {/* Right: Customized workshop */}
          <PlanCard
            tag="Customized"
            price="From 6,000 – 9,000 SAR"
            desc={"Customized workshop designed around your event or theme."}
            meta={[
              { k: "Duration", v: "2–3 hours" },
              { k: "Delivery", v: "Onsite / In office premises" },
              { k: "Attendees", v: "20–40 individuals" },
              {
                k: "Theme",
                v: "Of your choosing (Breast Cancer awareness, Saudi National Day)",
              },
              { k: "Agenda", v: "Customized to your theme" },
            ]}
            idealWhen={[
              "Event is hosted — Mother’s Day, National Day.",
            ]}
            buttonLabel="Book a call"
            buttonVariant="dark"
            withPhone
          />
        </div>

        <div className="mt-10 text-center text-[12px] font-semibold text-black/40">
          *Pricing varies by group size, duration, location, and customization.
        </div>
      </div>
    </section>
  );
}

function PlanCard({
  tag,
  price,
  desc,
  meta = [],
  idealWhen = [],
  buttonLabel,
  buttonVariant,
  withPhone = false,
}) {
  return (
    <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
      <div className="text-[12px] font-bold tracking-widest text-orange-500">
        {tag}
      </div>

      <div className="mt-4 text-[38px] font-black tracking-tight text-black md:text-[42px]">
        {price}
      </div>

      <div className="mt-3 text-[16px] leading-7 text-black/55 whitespace-pre-line">
        {desc}
      </div>

      <div className="my-7 h-px w-full bg-black/15" />

      {/* meta */}
      <div className="space-y-3 text-[14px] leading-6 text-black/60">
        {meta.map((m) => (
          <div key={m.k} className="flex gap-3">
            <div className="w-[86px] shrink-0 font-semibold text-black/50">
              {m.k}:
            </div>
            <div>{m.v}</div>
          </div>
        ))}
      </div>

      {/* ideal when */}
      <div className="mt-6">
        <div className="text-[12px] font-bold tracking-widest text-black/45">
          IDEAL WHEN
        </div>
        <ul className="mt-3 space-y-3 text-[14px] leading-6 text-black/60">
          {idealWhen.map((t) => (
            <li key={t} className="flex gap-3">
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-black/45" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <button
          className={[
            "flex w-full items-center justify-center gap-3 rounded-2xl px-6 py-4 text-[15px] font-semibold",
            "shadow-[0_18px_45px_rgba(0,0,0,0.22)]",
            "transition-transform duration-200 active:translate-y-0 hover:translate-y-[-1px]",
            buttonVariant === "dark"
              ? "bg-black text-white hover:bg-black/90"
              : "bg-white text-black ring-1 ring-black/10 hover:bg-black/5",
          ].join(" ")}
        >
          {withPhone && (
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
              <Phone className="h-4 w-4" />
            </span>
          )}
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

      {/* inner haze */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.12),rgba(255,255,255,0.08))]" />

      {/* content */}
      <div className="relative p-6">
        <div className="text-[12px] font-bold tracking-widest uppercase text-black/85">
          Retreat-style
        </div>

        <div className="mt-4 text-[38px] font-black tracking-tight text-black md:text-[42px]">
          By proposal
        </div>

        <div className="mt-3 text-[16px] leading-7 text-black/80">
          Customizable, retreat-style experience.
        </div>

        <div className="my-7 h-px w-full bg-black/15" />

        <div className="space-y-3 text-[14px] leading-6 text-black/75">
          <MetaLine k="Duration" v="3–6 hours" />
          <MetaLine k="Delivery" v="Offsite (of your preference)" />
          <MetaLine k="Attendees" v="20–40 individuals" />
          <MetaLine k="Theme" v="Of your choosing (Annual Retreat, Ramadan Iftar)" />
          <MetaLine
            k="Agenda"
            v="Customized to your theme, includes outdoor activities of your choice."
          />
        </div>

        <div className="mt-6">
          <div className="text-[12px] font-bold tracking-widest text-black/70">
            IDEAL WHEN
          </div>
          <ul className="mt-3 space-y-3 text-[14px] leading-6 text-black/80">
            <li className="flex gap-3">
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-black/70" />
              <span>Organizations want a leadership retreat or offsite.</span>
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-[15px] font-semibold text-black shadow-[0_18px_45px_rgba(0,0,0,0.18)] ring-1 ring-black/10 hover:bg-white/90 transition">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-black/5 ring-1 ring-black/10">
              <Phone className="h-4 w-4" />
            </span>
            Request proposal
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
        .animate-gradientMove{ animation: gradientMove 10s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce){
          .animate-gradientMove{ animation:none !important; }
        }
      `}</style>
    </div>
  );
}

function MetaLine({ k, v }) {
  return (
    <div className="flex gap-3">
      <div className="w-[86px] shrink-0 font-semibold text-black/70">{k}:</div>
      <div>{v}</div>
    </div>
  );
}
