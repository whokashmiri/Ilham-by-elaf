// src/components/Navbar.jsx
import React from "react";
import ilham from "../assets/ilham.png"

export default function Navbar() {
  return (
    <header className="relative z-20">

        
      {/* Glass bar */}
      <div className="mx-auto  max-w-7xl px-6 pt-6 md:px-10">
        <div className="relative rounded-2xl border border-black/10 bg-white backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.10)]">
          {/* smooth edges (not sharp) */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/40" />
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            {/* Brand */}
           <div className="flex h-14  w-16  items-center justify-center rounded-xl ">
  <img 
    src={ilham}
    alt="ILHAM Logo" 
    className="h-14 w-16"
  />
</div>


            {/* Links */}
            <nav className="hidden items-center gap-8 text-[15px] font-medium text-black/80 md:flex">
              <a className="hover:text-black hover:font-semibold" href="#about">
                About
              </a>
              <a
                className="hover:text-black hover:font-semibold"
                href="#services"
              >
                Services
              </a>
              <a className="hover:text-black hover:font-semibold" href="#pricing">
                Pricing
              </a>
              <a className="hover:text-black hover:font-semibold" href="#blog">
                Blog
              </a>
            </nav>

            {/* CTA */}
            <button className="rounded-2xl bg-white/70 px-6 py-3 text-[15px] font-semibold text-black shadow-[0_16px_40px_rgba(0,0,0,0.10)] ring-1 ring-black/10 hover:bg-white">
              Book a call
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
