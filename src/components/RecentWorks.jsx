// src/components/RecentWorks.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Play, Image as ImageIcon, Video as VideoIcon } from "lucide-react";
import keeta1 from "../assets/keeta (1).jpeg"
import keeta3 from "../assets/keeta (2).jpeg"

import keeta2 from "../assets/keeta (2).jpeg"

/**
 * RECENT WORKS (fits your existing style)
 * - Top: 3 image cards
 * - Each card has: title + short text + 3 buttons
 * - Clicking a button:
 *   1) sets active "work + tab"
 *   2) smooth scrolls to the detail area (1 viewport height down-ish)
 * - Detail area:
 *   - shows 1 of 3 components for the selected card
 *   - each detail: image + video + two paragraphs
 *
 * Drop-in: <RecentWorks />
 */

const WORKS = [
  {
    id: "finance",
    title: "The Reflective Canvas",
    subtitle: "Meditative Poetry & Painting Workshop.",
    cover:
      keeta1,
  },
  {
    id: "podcast",
    title: "Drawn from Within",
    subtitle: "Meditative Painting Workshop.",
    cover:
      keeta2,
  },
  {
    id: "brand",
    title: "Brand Campaign",
    subtitle: "Premium storytelling and color to elevate brand presence.",
    cover:
      keeta3,
  },
];

const TABS = [
  { id: "story", label: "Story", icon: ImageIcon },
  { id: "edit", label: "Edit", icon: VideoIcon },
  { id: "results", label: "Results", icon: Play },
];

// simple shared video url (replace per work/tab if you want)
const VIDEO_URL = "https://www.pexels.com/download/video/4312168/";

export default function RecentWorks() {
  const [activeWorkIdx, setActiveWorkIdx] = useState(0);
  const [activeTab, setActiveTab] = useState("story");

  const detailsRef = useRef(null);

  const activeWork = WORKS[activeWorkIdx];

  const onSelect = (workIdx, tabId) => {
    setActiveWorkIdx(workIdx);
    setActiveTab(tabId);

    // smooth scroll to details (roughly ~1 viewport down)
    requestAnimationFrame(() => {
      const el = detailsRef.current;
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        {/* header */}
        <div className="text-center">
          <div className="text-[12px] font-bold tracking-widest text-orange-500">
            RECENT WORKS
          </div>
          <h2 className="mx-auto mt-6 max-w-3xl text-[54px] font-black leading-[1.02] tracking-tight text-black md:text-[64px]">
            A few projects we’ve
            <br />
            shaped end-to-end
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-6 text-black/55">
            Pick a project, then choose what you want to see: story direction,
            editing approach, or measured results.
          </p>
        </div>

        {/* cards */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {WORKS.map((w, idx) => (
            <WorkCard
              key={w.id}
              work={w}
              active={idx === activeWorkIdx}
              activeTab={idx === activeWorkIdx ? activeTab : null}
              onPickTab={(tabId) => onSelect(idx, tabId)}
            />
          ))}
        </div>

        {/* details */}
        <div ref={detailsRef} className="mt-16 scroll-mt-6">
          <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)] md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[12px] font-bold tracking-widest text-black/40">
                  SELECTED PROJECT
                </div>
                <div className="mt-3 text-[34px] font-black tracking-tight text-black">
                  {activeWork.title}
                </div>
                <div className="mt-2 text-[14px] text-black/55">
                  {activeWork.subtitle}
                </div>
              </div>

              {/* tab switch (also available down here) */}
              <div className="flex flex-wrap gap-3">
                {TABS.map((t) => (
                  <TabPill
                    key={t.id}
                    active={activeTab === t.id}
                    onClick={() => onSelect(activeWorkIdx, t.id)}
                    icon={t.icon}
                    label={t.label}
                  />
                ))}
              </div>
            </div>

            <div className="mt-10">
              <WorkDetailRouter
                workId={activeWork.id}
                tab={activeTab}
                cover={activeWork.cover}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- UI Pieces ---------------------------- */

function WorkCard({ work, active, activeTab, onPickTab }) {
  return (
    <div
      className={[
        "rounded-[28px] border border-black/10 bg-white",
        "shadow-[0_20px_50px_rgba(0,0,0,0.08)]",
        "overflow-hidden",
      ].join(" ")}
    >
      <div className="relative h-[220px]">
        <img
          src={work.cover}
          alt={work.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* soft overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.10),rgba(0,0,0,0.22))]" />
      </div>

      <div className="p-6">
        <div className="text-[18px] font-black tracking-tight text-black">
          {work.title}
        </div>
        <div className="mt-2 text-[13px] leading-5 text-black/55">
          {work.subtitle}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {TABS.map((t) => (
            <SmallActionButton
              key={t.id}
              active={active && activeTab === t.id}
              icon={t.icon}
              label={t.label}
              onClick={() => onPickTab(t.id)}
            />
          ))}
        </div>

        {/* subtle active hint */}
        <div className="mt-5">
          <div
            className={[
              "h-px w-full",
              active ? "bg-black/15" : "bg-black/10",
            ].join(" ")}
          />
        </div>
      </div>
    </div>
  );
}

function SmallActionButton({ icon: Icon, label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-[12px] font-semibold",
        "ring-1 transition",
        active
          ? "bg-black text-white ring-black/10 shadow-[0_16px_40px_rgba(0,0,0,0.16)]"
          : "bg-white text-black/70 ring-black/10 hover:bg-black/5",
      ].join(" ")}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-black/5 ring-1 ring-black/10">
        <Icon className="h-4 w-4" />
      </span>
      {label}
    </button>
  );
}

function TabPill({ active, onClick, icon: Icon, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-[12px] font-semibold",
        "ring-1 transition",
        active
          ? "bg-black text-white ring-black/10 shadow-[0_16px_40px_rgba(0,0,0,0.16)]"
          : "bg-white text-black/70 ring-black/10 hover:bg-black/5",
      ].join(" ")}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
        <Icon className="h-4 w-4" />
      </span>
      {label}
    </button>
  );
}

/* ---------------------------- Detail Router ---------------------------- */

function WorkDetailRouter({ workId, tab, cover }) {
  // You can swap content per workId if needed
  const content = getDetailContent(workId);

  if (tab === "story") {
    return <DetailStory cover={cover} video={VIDEO_URL} {...content.story} />;
  }
  if (tab === "edit") {
    return <DetailEdit cover={cover} video={VIDEO_URL} {...content.edit} />;
  }
  return <DetailResults cover={cover} video={VIDEO_URL} {...content.results} />;
}

function DetailLayout({ title, kicker, cover, video, p1, p2 }) {
  return (
    <div className="grid items-start gap-10 lg:grid-cols-2">
      {/* media */}
      <div className="space-y-6">
        {/* image */}
        <div className="relative overflow-hidden rounded-[24px] shadow-[0_28px_70px_rgba(0,0,0,0.12)] ring-1 ring-black/10">
          <div className="aspect-[16/10]">
            <img
              src={cover}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.06),rgba(0,0,0,0.10))]" />
        </div>

        {/* video */}
        <div className="relative overflow-hidden rounded-[24px] bg-black shadow-[0_28px_70px_rgba(0,0,0,0.14)] ring-1 ring-black/10">
          <div className="aspect-[16/9]">
            <video
              className="h-full w-full object-cover"
              src={video}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05),rgba(255,255,255,0))]" />
        </div>
      </div>

      {/* text */}
      <div className="max-w-xl">
        <div className="text-[12px] font-bold tracking-widest text-orange-500">
          {kicker}
        </div>

        <h3 className="mt-5 text-[44px] font-black leading-[1.05] tracking-tight text-black">
          {title}
        </h3>

        <p className="mt-6 text-[15px] leading-6 text-black/55">{p1}</p>
        <p className="mt-4 text-[15px] leading-6 text-black/55">{p2}</p>

        <div className="mt-8 h-px w-full bg-black/10" />

        <div className="mt-6 text-[12px] font-bold tracking-widest text-black/35">
          ASK ILHAM
        </div>
      </div>
    </div>
  );
}

/* ---------------------------- 3 Detail Components ---------------------------- */

function DetailStory({ cover, video, title, p1, p2 }) {
  return (
    <DetailLayout
      kicker="STORY"
      title={title}
      cover={cover}
      video={video}
      p1={p1}
      p2={p2}
    />
  );
}

function DetailEdit({ cover, video, title, p1, p2 }) {
  return (
    <DetailLayout
      kicker="EDIT"
      title={title}
      cover={cover}
      video={video}
      p1={p1}
      p2={p2}
    />
  );
}

function DetailResults({ cover, video, title, p1, p2 }) {
  return (
    <DetailLayout
      kicker="RESULTS"
      title={title}
      cover={cover}
      video={video}
      p1={p1}
      p2={p2}
    />
  );
}

/* ---------------------------- Content Map ---------------------------- */

function getDetailContent(workId) {
  // defaults (you can customize per workId)
  const base = {
    story: {
      title: "A clear hook + structure that holds attention",
      p1: "We start by identifying the strongest opening moment, then outline a simple structure that makes the viewer feel progress every 10–15 seconds.",
      p2: "The goal is clarity first: remove filler, reinforce the main idea, and land a clean ending that naturally leads to the next video.",
    },
    edit: {
      title: "Fast pacing without feeling rushed",
      p1: "We use pattern interrupts (punch-ins, b-roll, captions, beat cuts) to maintain momentum while keeping the narrative easy to follow.",
      p2: "Color, audio, and text styling are tuned to platform-native expectations so the content feels premium but still organic.",
    },
    results: {
      title: "Metrics you can actually measure",
      p1: "We track retention graphs, average view duration, and saves/shares to see what edits improved watch time and what to repeat.",
      p2: "Deliverables are consistent and scalable—so you can publish more often without sacrificing quality.",
    },
  };

  // per-project tweaks (optional)
  if (workId === "finance") {
    return {
      story: {
        ...base.story,
        title: "Finance content that stays simple (and sticky)",
      },
      edit: {
        ...base.edit,
        title: "Clean, confident edits for trust + authority",
      },
      results: {
        ...base.results,
        title: "Retention + trust signals move together",
      },
    };
  }

  if (workId === "podcast") {
    return {
      story: {
        ...base.story,
        title: "Clip selection that feels inevitable",
      },
      edit: {
        ...base.edit,
        title: "Punchy cuts built for short-form",
      },
      results: {
        ...base.results,
        title: "More clips, more reps, more winners",
      },
    };
  }

  if (workId === "brand") {
    return {
      story: {
        ...base.story,
        title: "Brand storytelling that looks expensive",
      },
      edit: {
        ...base.edit,
        title: "Color + sound design that elevates",
      },
      results: {
        ...base.results,
        title: "Premium look, better conversion",
      },
    };
  }

  return base;
}
