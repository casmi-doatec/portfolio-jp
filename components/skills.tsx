"use client";

import { useState, useEffect, useRef } from "react";

const CATEGORIES = [
  {
    id: "01", title: "AI・LLM", en: "Artificial Intelligence",
    skills: ["OpenAI API", "Claude API", "Gemini API", "LangChain", "LangGraph", "RAG", "AI Agent", "MCP"],
  },
  {
    id: "02", title: "フロントエンド", en: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS"],
  },
  {
    id: "03", title: "バックエンド", en: "Backend",
    skills: ["Python / FastAPI", "Node.js / NestJS", "PHP / Laravel", "Ruby on Rails"],
  },
  {
    id: "04", title: "モバイルアプリ", en: "Mobile",
    skills: ["Flutter", "Dart", "React Native", "Firebase", "FCM"],
  },
  {
    id: "05", title: "クラウド・インフラ", en: "Cloud / Infra",
    skills: ["AWS (EC2/Lambda/S3)", "GCP", "Docker", "Terraform", "Vercel"],
  },
  {
    id: "06", title: "データベース", en: "Database",
    skills: ["PostgreSQL", "MySQL", "Redis", "Supabase", "Firestore"],
  },
  {
    id: "07", title: "AI・MLOps", en: "ML Operations",
    skills: ["PyTorch", "TensorFlow", "OpenCV", "vLLM", "Model Deploy"],
  },
];

// SVG viewBox: 0 0 1200 700
// (x, y) = branch tip coordinate in SVG space → where the card anchors (bottom-center)
const TIPS = [
  { catIdx: 0, x: 105,  y: 180 }, // AI・LLM
  { catIdx: 1, x: 258,  y: 218 }, // Frontend
  { catIdx: 2, x: 372,  y: 312 }, // Backend
  { catIdx: 3, x: 558,  y: 165 }, // Mobile
  { catIdx: 4, x: 758,  y: 188 }, // Cloud
  { catIdx: 5, x: 946,  y: 252 }, // Database
  { catIdx: 6, x: 1092, y: 180 }, // MLOps
];

const VBW = 1200;
const VBH = 700;

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-32 lg:py-44 px-6 lg:px-12 bg-secondary/40">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Header */}
        <div className={`space-y-6 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-jp-sakura" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground">Skills</span>
            <span className="text-xs text-jp-sakura font-display">技術スタック</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tighter">技術スタック</h2>
          <p className="text-sm text-muted-foreground leading-[2] max-w-xl font-serif">
            AIからインフラまで一気通貫で対応できるのが強みです。プロジェクトに合わせて最適な技術を選定・組み合わせます。
          </p>
        </div>

        {/* ── Fantasy Tree (desktop) ── */}
        <div
          className={`hidden lg:block relative w-full ${isVisible ? "animate-fade-in animation-delay-400" : "opacity-0"}`}
          style={{ paddingBottom: `${(VBH / VBW) * 100}%` }}
        >
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox={`0 0 ${VBW} ${VBH}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* ── Root tendrils (fantasy multi-trunk base) ── */}
            {[
              ["M 548 700 C 552 668 562 636 576 598", "4"],
              ["M 566 700 C 568 668 574 636 582 598", "5"],
              ["M 584 700 C 584 668 587 636 590 598", "6"],
              ["M 600 700 C 600 668 600 636 600 598", "7"],
              ["M 616 700 C 616 668 613 636 610 598", "6"],
              ["M 634 700 C 632 668 626 636 618 598", "5"],
              ["M 652 700 C 648 668 638 636 624 598", "4"],
            ].map(([d, w], i) => (
              <path key={i} d={d as string}
                stroke="var(--color-foreground)" strokeWidth={w as string}
                strokeLinecap="round" opacity="0.28" />
            ))}

            {/* ── Trunk (three-strand braid effect) ── */}
            <path d="M 586 600 C 588 570 592 540 594 492"
              stroke="var(--color-foreground)" strokeWidth="7" strokeLinecap="round" opacity="0.38" />
            <path d="M 600 600 C 600 568 600 536 600 492"
              stroke="var(--color-foreground)" strokeWidth="9" strokeLinecap="round" opacity="0.42" />
            <path d="M 614 600 C 612 570 608 540 606 492"
              stroke="var(--color-foreground)" strokeWidth="7" strokeLinecap="round" opacity="0.38" />

            {/* ── Left main branch ── */}
            <path d="M 593 493 C 500 465 390 415 300 366"
              stroke="var(--color-foreground)" strokeWidth="6" strokeLinecap="round" opacity="0.34" />

            {/* ── Right main branch ── */}
            <path d="M 607 493 C 700 465 810 415 900 366"
              stroke="var(--color-foreground)" strokeWidth="6" strokeLinecap="round" opacity="0.34" />

            {/* ── Center shoot → Mobile ── */}
            <path d="M 600 490 C 593 420 572 330 558 165"
              stroke="var(--color-foreground)" strokeWidth="4" strokeLinecap="round" opacity="0.28" />

            {/* ── Left sub-branches ── */}
            <path d="M 300 366 C 238 340 158 268 105 180"
              stroke="var(--color-foreground)" strokeWidth="3" strokeLinecap="round" opacity="0.24" />
            <path d="M 300 366 C 291 335 274 278 258 218"
              stroke="var(--color-foreground)" strokeWidth="3" strokeLinecap="round" opacity="0.24" />
            <path d="M 300 366 C 328 352 354 334 372 312"
              stroke="var(--color-foreground)" strokeWidth="3" strokeLinecap="round" opacity="0.24" />

            {/* ── Left decorative twigs ── */}
            <path d="M 380 405 C 375 390 364 378 350 368"
              stroke="var(--color-foreground)" strokeWidth="1.5" strokeLinecap="round" opacity="0.14" />
            <path d="M 440 386 C 433 372 420 362 408 356"
              stroke="var(--color-foreground)" strokeWidth="1.5" strokeLinecap="round" opacity="0.14" />
            <path d="M 220 392 C 215 378 208 366 198 356"
              stroke="var(--color-foreground)" strokeWidth="1.5" strokeLinecap="round" opacity="0.14" />

            {/* ── Right sub-branches ── */}
            <path d="M 900 366 C 854 322 800 256 758 188"
              stroke="var(--color-foreground)" strokeWidth="3" strokeLinecap="round" opacity="0.24" />
            <path d="M 900 366 C 920 332 938 290 946 252"
              stroke="var(--color-foreground)" strokeWidth="3" strokeLinecap="round" opacity="0.24" />
            <path d="M 900 366 C 956 322 1042 248 1092 180"
              stroke="var(--color-foreground)" strokeWidth="3" strokeLinecap="round" opacity="0.24" />

            {/* ── Right decorative twigs ── */}
            <path d="M 820 405 C 825 390 836 378 850 368"
              stroke="var(--color-foreground)" strokeWidth="1.5" strokeLinecap="round" opacity="0.14" />
            <path d="M 760 412 C 768 398 780 388 792 382"
              stroke="var(--color-foreground)" strokeWidth="1.5" strokeLinecap="round" opacity="0.14" />
            <path d="M 980 342 C 986 328 995 318 1006 312"
              stroke="var(--color-foreground)" strokeWidth="1.5" strokeLinecap="round" opacity="0.14" />

            {/* ── Branch tip nodes ── */}
            {TIPS.map((t) => (
              <g key={t.catIdx}>
                {/* Outer glow ring */}
                <circle cx={t.x} cy={t.y} r={14}
                  fill="var(--color-jp-sakura)" opacity="0.12" />
                {/* Main dot */}
                <circle cx={t.x} cy={t.y} r={6}
                  fill="var(--color-jp-sakura)" opacity={hovered === t.catIdx ? 1 : 0.7} />
                {/* Inner highlight */}
                <circle cx={t.x} cy={t.y} r={2.5}
                  fill="white" opacity="0.75" />
              </g>
            ))}
          </svg>

          {/* ── Skill cards (HTML, overlaid on SVG) ── */}
          {TIPS.map((tip) => {
            const cat = CATEGORIES[tip.catIdx];
            const lx = (tip.x / VBW) * 100;
            const ty = (tip.y / VBH) * 100;
            const isHov = hovered === tip.catIdx;
            return (
              <div
                key={tip.catIdx}
                className="absolute z-10 cursor-default"
                style={{
                  left: `${lx}%`,
                  top: `${ty}%`,
                  transform: "translate(-50%, calc(-100% - 16px))",
                }}
                onMouseEnter={() => setHovered(tip.catIdx)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className="bg-card p-3 w-40 transition-all duration-300 shadow-sm"
                  style={{
                    border: `1px solid ${isHov ? "var(--color-jp-sakura)" : "var(--color-border)"}`,
                  }}
                >
                  <p className="text-[8px] tracking-[0.3em] font-mono mb-1"
                    style={{ color: "var(--color-jp-sakura)" }}>
                    {cat.id}
                  </p>
                  <p className="text-[12px] font-bold tracking-tight leading-tight mb-1 text-foreground">
                    {cat.title}
                  </p>
                  <p className="text-[8px] tracking-[0.1em] uppercase text-muted-foreground mb-2 leading-tight">
                    {cat.en}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {cat.skills.map((s) => (
                      <span key={s}
                        className="text-[7px] px-1.5 py-0.5 border border-border text-muted-foreground leading-tight">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Mobile fallback: grid ── */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {CATEGORIES.map((cat, i) => (
            <div
              key={cat.id}
              className={`bg-background p-8 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <p className="text-[10px] tracking-[0.4em] text-jp-sakura font-mono mb-2">{cat.id}</p>
              <h3 className="text-base font-bold tracking-tight mb-0.5">{cat.title}</h3>
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-4">{cat.en}</p>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((s) => (
                  <span key={s} className="text-[11px] px-2.5 py-1 border border-border text-muted-foreground">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 gap-px bg-border ${isVisible ? "animate-slide-up animation-delay-800" : "opacity-0"}`}>
          <div className="bg-background px-10 py-8 flex items-center gap-6">
            <p className="text-5xl font-black tracking-tighter">30<span className="text-jp-sakura">+</span></p>
            <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground leading-relaxed">フレームワーク<br />・ツール</p>
          </div>
          <div className="bg-background px-10 py-8 flex items-center gap-6">
            <p className="text-5xl font-black tracking-tighter">8<span className="text-jp-sakura">+</span></p>
            <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground leading-relaxed">年の<br />実務経験</p>
          </div>
        </div>

      </div>
    </section>
  );
}
