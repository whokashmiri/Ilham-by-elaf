import React, { useRef, useState } from "react";
import { Play, Image as ImageIcon, Video as VideoIcon } from "lucide-react";

import keeta1 from "../assets/keeta (1).jpeg";
import keeta2 from "../assets/keeta (3).jpeg";
import keeta3 from "../assets/keeta (2).png";

// 👇 logos (replace with your real files)
import logo1 from "../assets/keeta logo.png";
import logo2 from "../assets/riyadhwriters.png";
import logo3 from "../assets/ilham.png";

/**
 * RECENT WORKS
 */

const WORKS = [
  {
    id: "finance",
    title: "The Reflective Canvas",
    subtitle: "Meditative Poetry & Painting Workshop.",
    cover: keeta2,
    logo: logo1,
  },
  {
    id: "podcast",
    title: "Drawn from Within",
    subtitle: "Meditative Painting Workshop.",
    cover: keeta1,
    logo: logo2,
  },
  {
    id: "brand",
    title: "Brand Essence Workshop",
    subtitle: "Premium storytelling and color to elevate brand presence.",
    cover: keeta3,
    logo: logo3,
  },
];

const TABS = [
  { id: "format", label: "Format", icon: ImageIcon },
  { id: "edit", label: "Feedback", icon: VideoIcon },
  { id: "results", label: "What They Wanted", icon: Play },
];

const VIDEO_URL = "https://www.pexels.com/download/video/4312168/";

export default function RecentWorks() {
  const [activeWorkIdx, setActiveWorkIdx] = useState(0);
  const [activeTab, setActiveTab] = useState("format");
  const detailsRef = useRef(null);

  const activeWork = WORKS[activeWorkIdx];

  const onSelect = (workIdx, tabId) => {
    setActiveWorkIdx(workIdx);
    setActiveTab(tabId);

    requestAnimationFrame(() => {
      detailsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        {/* Header */}
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

        {/* Cards */}
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

        {/* Details */}
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

/* ---------------------------- Card ---------------------------- */

function WorkCard({ work, active, activeTab, onPickTab }) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
      {/* Image */}
      <div className="relative h-[320px]">
        <img
          src={work.cover}
          alt={work.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.08),rgba(0,0,0,0.25))]" />

        {/* logo (TOP) */}
        <div className="absolute left-4 top-4 rounded-xl bg-white/90 px-2 py-1 shadow-lg backdrop-blur">
          <img src={work.logo} alt="Logo" className="h-10 w-14" />
        </div>
      </div>

      {/* Content */}
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

        <div className="mt-5 h-px w-full bg-black/10" />
      </div>
    </div>
  );
}

/* ---------------------------- Buttons ---------------------------- */

function SmallActionButton({ icon: Icon, label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-[12px] font-semibold ring-1 transition",
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
        "inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-[12px] font-semibold ring-1 transition",
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

/* ---------------------------- Details ---------------------------- */

function WorkDetailRouter({ workId, tab, cover }) {
  const content = getDetailContent(workId);

  if (tab === "format")
    return <DetailStory cover={cover} video={VIDEO_URL} {...content.format} />;
  if (tab === "edit")
    return <DetailEdit cover={cover} video={VIDEO_URL} {...content.edit} />;
  return (
    <DetailResults cover={cover} video={VIDEO_URL} {...content.results} />
  );
}

function DetailLayout({ title, kicker, cover, video, p1, p2 }) {
  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="space-y-6">
        <div className="overflow-hidden rounded-[24px] ring-1 ring-black/10">
          <img src={cover} className="aspect-[16/10] w-full object-cover" />
        </div>

        <div className="overflow-hidden rounded-[24px] ring-1 ring-black/10">
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-xl">
        <div className="text-[12px] font-bold tracking-widest text-orange-500">
          {kicker}
        </div>
        <h3 className="mt-5 text-[44px] font-black">{title}</h3>
        <p className="mt-6 text-black/55">{p1}</p>
        <p className="mt-4 text-black/55">{p2}</p>
      </div>
    </div>
  );
}

const DetailStory = (props) => <DetailLayout kicker="FORMAT" {...props} />;
const DetailEdit = (props) => <DetailLayout kicker="FEEDBACK" {...props} />;
const DetailResults = (props) => (
  <DetailLayout kicker="WHAT THEY WANTED" {...props} />
);

/* ---------------------------- Content ---------------------------- */

function getDetailContent(workId) {
  if (workId === "finance") {
    return {
      format: {
        title: "Workshop Format",
        p1: "• Duration: 2 hours\n• Participants: 30\n• Customized agenda",
        p2:
          "Designed to balance reflection, creativity, and emotional grounding.",
      },
      edit: {
        title: "Participant Feedback",
        p1: "Participants felt calmer, clearer, and more focused.",
        p2: "Teams highlighted deeper engagement and collaboration.",
      },
      results: {
        title: "What They Wanted",
        p1: "A relaxing, creative workshop.",
        p2: "Helping participants slow down and reconnect.",
      },
    };
  }

  if (workId === "podcast") {
    return {
      format: {
        title: "Workshop Format",
        p1: "• Duration: 3 hours\n• Participants: 35\n• Custom theme",
        p2: "Longer reflection and creative exploration.",
      },
      edit: {
        title: "Participant Feedback",
        p1: "A shift from burnout to clarity.",
        p2: "A safe space to slow down.",
      },
      results: {
        title: "What They Wanted",
        p1: "Mental wellbeing & creativity.",
        p2: "Relief from stress and renewed energy.",
      },
    };
  }

  return {
    format: {
      title: "Workshop Format",
      p1: "• Half-day immersive\n• Team-based\n• Brand-aligned",
      p2: "Mindfulness + storytelling.",
    },
    edit: {
      title: "Participant Feedback",
      p1: "Stronger emotional connection.",
      p2: "More confident collaboration.",
    },
    results: {
      title: "What They Wanted",
      p1: "A meaningful brand experience.",
      p2: "Shared creative language.",
    },
  };
}
