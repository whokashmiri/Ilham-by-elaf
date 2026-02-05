// src/components/WorkshopFormats.jsx
import React from "react";
import { Brush, Users, Leaf } from "lucide-react";

export default function WorkshopFormats() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20">
      {/* calm animated background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(140,200,255,0.22),transparent)] blur-3xl animate-wfA" />
        <div className="absolute -bottom-48 right-[-200px] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle_at_center,rgba(200,170,255,0.18),transparent)] blur-3xl animate-wfB" />
        <div className="absolute inset-y-0 left-0 w-32 bg-white/30 backdrop-blur-2xl [mask-image:linear-gradient(to_right,black,transparent)]" />
        <div className="absolute inset-y-0 right-0 w-32 bg-white/30 backdrop-blur-2xl [mask-image:linear-gradient(to_left,black,transparent)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* header */}
        <div className="max-w-3xl">
          <div className="text-[12px] font-bold tracking-widest text-black/40">
            OUR WORKSHOP FORMATS
          </div>
          <h2 className="mt-6 text-[46px] font-black leading-[1.05] tracking-tight text-black md:text-[56px]">
            Experiences designed to
            <br />
            restore clarity & creativity
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-6 text-black/55">
            Each format blends mindfulness with creative expression—supporting
            mental clarity, collaboration, and purposeful action.
          </p>
        </div>

        {/* cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <FormatCard
            icon={Brush}
            title="Reflect, Symbolise & Create"
            points={[
              "Guided meditation to slow the pace and support clarity",
              "Symbolism or creative writing to surface insights",
              "Intuitive painting, crafting, or collaging",
            ]}
            outcomes="Clarity · perspective · alignment · calming"
            accent="from-blue-200/30 to-purple-200/30"
          />

          <FormatCard
            icon={Users}
            title="Create, Play & Collaborate"
            points={[
              "Game-based creative workshop",
              "Mindfulness exercise to sharpen focus",
              "Collaborative artistic games and shared idea-building",
            ]}
            outcomes="Engagement · focus · creative confidence · team connection"
            accent="from-emerald-200/30 to-sky-200/30"
          />

          <FormatCard
            icon={Leaf}
            title="Reflect, Write & Move"
            points={[
              "Meditation-led outdoor grounding practice",
              "Goal-oriented writing for purpose and direction",
              "Light outdoor movement (walking, yoga, hiking, etc.)",
            ]}
            outcomes="Mental detox · adventurous · intentional · focus"
            accent="from-amber-200/30 to-rose-200/30"
          />
        </div>
      </div>

      {/* animations */}
      <style>{`
        @keyframes wfA {
          0% { transform: translate(0,0) scale(1); }
          50% { transform: translate(80px,40px) scale(1.08); }
          100% { transform: translate(0,0) scale(1); }
        }
        @keyframes wfB {
          0% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-70px,-50px) scale(1.06); }
          100% { transform: translate(0,0) scale(1); }
        }
        .animate-wfA { animation: wfA 18s ease-in-out infinite; }
        .animate-wfB { animation: wfB 22s ease-in-out infinite; }

        @keyframes floatSoft {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }
        .animate-floatSoft { animation: floatSoft 6.5s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

function FormatCard({ icon: Icon, title, points, outcomes, accent }) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white/70 p-7 shadow-[0_25px_60px_rgba(0,0,0,0.06)] backdrop-blur-xl animate-floatSoft">
      {/* soft accent */}
      <div
        className={`pointer-events-none absolute -top-24 left-1/2 h-56 w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-r ${accent} blur-3xl`}
      />

      <div className="relative">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/5 ring-1 ring-black/10">
            <Icon className="h-5 w-5 text-black/70" />
          </div>
          <div className="text-[12px] font-bold tracking-widest text-black/40">
            FORMAT
          </div>
        </div>

        <h3 className="mt-5 text-[26px] font-black leading-[1.1] tracking-tight text-black">
          {title}
        </h3>

        <ul className="mt-5 space-y-3 text-[14px] leading-6 text-black/55">
          {points.map((p, i) => (
            <li key={i}>• {p}</li>
          ))}
        </ul>

        <div className="mt-6 h-px w-full bg-black/10" />

        <div className="mt-4 text-[13px] font-semibold text-black/45">
          Outcomes:
        </div>
        <div className="mt-1 text-[13px] text-black/55">{outcomes}</div>
      </div>
    </div>
  );
}
