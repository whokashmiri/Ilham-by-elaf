// src/components/FooterEditr.jsx
import React from "react";
import { Video } from "lucide-react";

/**
 * Component 2: FooterEditr (matches screenshot bottom)
 * - Left: logo icon + "ilham" + short description + created by line
 * - Right: 3 columns links (About/Services/Pricing etc.)
 * - Bottom: giant faded gradient word (ilham) partially visible
 */

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-white">
      {/* top divider spacing */}
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-14 md:px-10">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* left */}
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-2">
              
              <div className="flex items-center justify-center rounded-xl bg-black px-4 py-2 shadow-[0_18px_35px_rgba(0,0,0,0.18)]">
              <span className="text-[12px] font-bold tracking-widest text-white">
                ILHAM <span className="opacity-60">BY</span> ELAF
              </span>
            </div>
            </div>

            <p className="mt-4 text-[13px] leading-5 text-black/45">
              We help creators and brands turn raw footage into impactful,
              results-driven content.
            </p>

            <div className="mt-6 space-y-2 text-[12px] text-black/45">
              <div>
                Created by{" "}
                <span className="font-semibold text-orange-500">WhoKashmiri</span>
              </div>
              <div>© 2025 browser.supply. Framer templates</div>
            </div>
          </div>

          {/* right links */}
          <div className="grid grid-cols-3 gap-10 text-[12px] font-semibold text-black/70">
            <div className="space-y-3">
              <a className="block hover:text-black" href="#">
                About
              </a>
              <a className="block hover:text-black" href="#">
                Services
              </a>
              <a className="block hover:text-black" href="#">
                Pricing
              </a>
            </div>

            <div className="space-y-3">
              <a className="block hover:text-black" href="#">
                Blog
              </a>
              <a className="block hover:text-black" href="#">
                Terms
              </a>
              <a className="block hover:text-black" href="#">
                404
              </a>
            </div>

            <div className="space-y-3">
              <a className="block hover:text-black" href="#">
                X (Twitter)
              </a>
              <a className="block hover:text-black" href="#">
                YouTube
              </a>
              <a className="block hover:text-black" href="#">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* giant word with gradient + fade (bottom) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[-120px] h-screen overflow-hidden md:bottom-[-140px]">
        <div className="absolute inset-0 bg-[radial-gradient(900px_220px_at_50%_20%,rgba(255,140,80,0.30),rgba(255,140,80,0)),radial-gradient(900px_260px_at_20%_80%,rgba(200,120,255,0.26),rgba(200,120,255,0)),radial-gradient(900px_260px_at_80%_80%,rgba(255,80,170,0.22),rgba(255,80,170,0))]" />
        <div className="absolute inset-x-0 bottom-0 flex justify-center">
          <div className="select-none text-[180px] font-black tracking-tight text-black/10 md:text-[220px] lg:text-[260px]">
            ILHAM
          </div>
        </div>
      </div>
    </footer>
  );
}
