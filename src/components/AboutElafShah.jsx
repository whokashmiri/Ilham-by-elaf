// src/components/AboutElafShah.jsx
import React from "react";
import { Briefcase, Sparkles } from "lucide-react";
import Elaf from "../assets/Elaf.jpg";

export default function AboutElafShah() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20">
      {/* calm animated background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(170,200,255,0.22),transparent)] blur-3xl animate-aeFloatA" />
        <div className="absolute bottom-[-220px] right-[-200px] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle_at_center,rgba(200,170,255,0.18),transparent)] blur-3xl animate-aeFloatB" />

        {/* soft glass edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-white/25 backdrop-blur-2xl [mask-image:linear-gradient(to_right,black,transparent)]" />
        <div className="absolute inset-y-0 right-0 w-32 bg-white/25 backdrop-blur-2xl [mask-image:linear-gradient(to_left,black,transparent)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Photo */}
          <div className="relative mx-auto w-full max-w-[420px]">
            <div className="relative overflow-hidden rounded-[32px] shadow-[0_30px_70px_rgba(0,0,0,0.18)] ring-1 ring-black/10">
              {/* replace src with real photo */}
              <img
                src={Elaf}
                alt="Elaf Shah"
                className="h-[520px] w-full object-cover"
              />

              {/* soft vignette */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* floating label */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-2xl bg-white/80 px-5 py-3 text-[13px] font-semibold text-black shadow-[0_18px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl">
              Workplace Wellbeing & Creative Performance
            </div>
          </div>

          {/* Content */}
          <div className="max-w-xl">
            <div className="text-[12px] font-bold tracking-widest text-black/40">
              ABOUT ELAF SHAH
            </div>

            <h2 className="mt-6 text-[46px] font-black leading-[1.05] tracking-tight text-black md:text-[56px]">
              Workplace Wellbeing &<br />
              Creative Performance
              <br />
              Consultant
            </h2>

            <p className="mt-6 text-[15px] leading-6 text-black/55">
              Elaf blends deep business expertise with evidence-based
              mindfulness and somatic practices—designed to support clarity,
              resilience, and sustainable performance in modern workplaces.
            </p>

            {/* experience list */}
            <div className="mt-8 space-y-4 text-[14px] leading-6 text-black/60">
              <Item text="8 years of Business Analysis & Digital Transformation experience" />
              <Item text="Worked across healthcare, insurance, fintech, consultancy, and real estate" />
              <Item text="Experience supporting corporate, startup, and governmental environments" />
              <Item text="Applies mindfulness, Ayurveda, and somatic-based approaches in a corporate-safe way" />
            </div>

            {/* highlight strip */}
            <div className="mt-10 rounded-[24px] border border-black/10 bg-white/70 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white shadow-[0_18px_35px_rgba(0,0,0,0.25)]">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[15px] font-extrabold text-black">
                    Sustainable performance at work
                  </div>
                  <div className="mt-1 text-[13px] leading-5 text-black/55">
                    Practices grounded in neuroscience, mindfulness, and
                    embodied awareness—adapted for professional environments.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* animations */}
      <style>{`
        @keyframes aeFloatA {
          0% { transform: translate(0,0) scale(1); }
          50% { transform: translate(80px,40px) scale(1.08); }
          100% { transform: translate(0,0) scale(1); }
        }
        @keyframes aeFloatB {
          0% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-70px,-40px) scale(1.06); }
          100% { transform: translate(0,0) scale(1); }
        }
        .animate-aeFloatA { animation: aeFloatA 18s ease-in-out infinite; }
        .animate-aeFloatB { animation: aeFloatB 22s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

function Item({ text }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-[6px] inline-block h-2 w-2 rounded-full bg-black/40" />
      <span>{text}</span>
    </div>
  );
}
