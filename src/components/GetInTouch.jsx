// src/components/GetInTouch.jsx
import React from "react";
import { Mail, Phone, Linkedin, Calendar, ArrowUpRight } from "lucide-react";

/**
 * Get in Touch (matches your premium + calm style)
 * - Glass card
 * - Soft animated background accents
 * - Clickable email/phone/linkedin/calendly
 */

export default function GetInTouch() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20">
      {/* calm background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(140,200,255,0.18),transparent)] blur-3xl animate-gitA" />
        <div className="absolute bottom-[-260px] right-[-220px] h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle_at_center,rgba(200,170,255,0.16),transparent)] blur-3xl animate-gitB" />

        {/* smooth glass edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-white/25 backdrop-blur-2xl [mask-image:linear-gradient(to_right,black,transparent)]" />
        <div className="absolute inset-y-0 right-0 w-32 bg-white/25 backdrop-blur-2xl [mask-image:linear-gradient(to_left,black,transparent)]" />

        {/* tiny noise */}
        <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%2240%22 height=%2240%22 filter=%22url(%23n)%22 opacity=%220.25%22/%3E%3C/svg%3E')]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left text */}
          <div className="max-w-xl">
            <div className="text-[12px] font-bold tracking-widest text-orange-500">
              GET IN TOUCH
            </div>

            <h2 className="mt-6 text-[46px] font-black leading-[1.05] tracking-tight text-black md:text-[56px]">
              Let’s shape an experience
              <br />
              that fits your organization
            </h2>

            <p className="mt-6 text-[15px] leading-6 text-black/55 whitespace-pre-line">
              Whether you’re planning a wellbeing initiative, a cultural event,
              or a leadership offsite, we’ll shape the experience to fit your
              organization.
            </p>

            <div className="mt-6 space-y-3 text-[15px] leading-6 text-black/60">
              <div>• Book a 15-minute discovery call.</div>
              <div>
                • Or share your event’s theme, date and headcount; we’ll send a
                proposal within 24 hours.
              </div>
            </div>
          </div>

          {/* Right glass card */}
          <div className="relative">
            <div className="rounded-[28px] border border-black/10 bg-white/70 p-7 shadow-[0_25px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl">
              <div className="text-[12px] font-bold tracking-widest text-black/45">
                CONTACT
              </div>

              <div className="mt-6 space-y-4">
                <ContactRow
                  icon={Mail}
                  label="Email"
                  value="Elaf.a.shah@gmail.com"
                  href="mailto:Elaf.a.shah@gmail.com"
                />
                {/* <ContactRow
                  icon={Phone}
                  label="Phone"
                  value="+966 537959098"
                  href="tel:+966537959098"
                /> */}
                <ContactRow
                  icon={Linkedin}
                  label="LinkedIn"
                  value="linkedin.com/in/elafshah"
                  href="https://linkedin.com/in/elafshah"
                />
                <ContactRow
                  icon={Calendar}
                  label="Calendly"
                  value="calendly.com/elaf-a-shah/cal"
                  href="https://calendly.com/elaf-a-shah/cal"
                />
              </div>

              <div className="my-7 h-px w-full bg-black/10" />

              {/* CTA buttons */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://calendly.com/elaf-a-shah/cal"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex w-full items-center justify-center rounded-2xl bg-black px-6 py-4 text-[14px] font-semibold text-white shadow-[0_18px_45px_rgba(0,0,0,0.22)] transition hover:-translate-y-[1px] hover:bg-black/90"
                >
                  Book a discovery call
                  <ArrowUpRight className="ml-2 h-4 w-4 opacity-80 transition group-hover:opacity-100" />
                </a>

                <a
                  href="mailto:Elaf.a.shah@gmail.com?subject=Workshop%20Proposal%20Request&body=Hi%20Elaf%2C%0A%0ATheme%3A%20%0ADate%3A%20%0AHeadcount%3A%20%0ALocation%3A%20%0A%0AThank%20you!"
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-6 py-4 text-[14px] font-semibold text-black shadow-[0_18px_45px_rgba(0,0,0,0.10)] ring-1 ring-black/10 transition hover:-translate-y-[1px] hover:bg-black/5"
                >
                  Request a proposal
                </a>
              </div>
            </div>

            {/* tiny floating badge */}
            <div className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-2xl bg-white/80 px-5 py-3 text-[12px] font-semibold text-black/55 shadow-[0_18px_40px_rgba(0,0,0,0.10)] backdrop-blur-xl">
              Reply within 24 hours for proposals
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gitA {
          0% { transform: translate(0,0) scale(1); }
          50% { transform: translate(70px,40px) scale(1.06); }
          100% { transform: translate(0,0) scale(1); }
        }
        @keyframes gitB {
          0% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-80px,-45px) scale(1.06); }
          100% { transform: translate(0,0) scale(1); }
        }
        .animate-gitA { animation: gitA 18s ease-in-out infinite; }
        .animate-gitB { animation: gitB 22s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="group flex items-center justify-between rounded-2xl border border-black/10 bg-white/60 px-4 py-4 shadow-[0_16px_40px_rgba(0,0,0,0.05)] transition hover:-translate-y-[1px] hover:bg-white"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black/5 ring-1 ring-black/10">
          <Icon className="h-5 w-5 text-black/70" />
        </span>
        <div>
          <div className="text-[12px] font-bold tracking-widest text-black/40">
            {label}
          </div>
          <div className="mt-0.5 text-[14px] font-semibold text-black/70">
            {value}
          </div>
        </div>
      </div>

      <ArrowUpRight className="h-4 w-4 text-black/35 transition group-hover:text-black/60" />
    </a>
  );
}
