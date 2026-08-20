"use client";

import { useState, useEffect, useRef } from "react";

const categories = [
  {
    id: "01",
    title: "AI・LLM",
    en: "Artificial Intelligence",
    color: "#b87878",
    span: "lg:col-span-2",
    skills: [
      "OpenAI API", "Anthropic Claude API", "Google Gemini API",
      "LangChain", "LangGraph", "RAG", "AI Agent開発", "MCP",
    ],
  },
  {
    id: "02",
    title: "フロントエンド",
    en: "Frontend",
    color: "#6a8bbf",
    span: "lg:col-span-1",
    skills: ["React", "TypeScript", "Next.js", "Vue.js"],
  },
  {
    id: "03",
    title: "バックエンド",
    en: "Backend",
    color: "#6aaa88",
    span: "lg:col-span-1",
    skills: [
      "Python（FastAPI・Django）",
      "Node.js（NestJS・Express）",
      "PHP（Laravel）",
      "Ruby on Rails",
    ],
  },
  {
    id: "04",
    title: "モバイルアプリ",
    en: "Mobile",
    color: "#b89a5a",
    span: "lg:col-span-1",
    skills: ["Flutter", "React Native"],
  },
  {
    id: "05",
    title: "クラウド・インフラ",
    en: "Cloud / Infrastructure",
    color: "#8a6abf",
    span: "lg:col-span-1",
    skills: ["AWS（EC2・ECS・Lambda・S3・RDS）", "Docker", "Terraform"],
  },
  {
    id: "06",
    title: "データベース",
    en: "Database",
    color: "#5aa0aa",
    span: "lg:col-span-1",
    skills: ["PostgreSQL", "MySQL", "Redis", "Supabase", "Firebase"],
  },
  {
    id: "07",
    title: "AI・MLOps",
    en: "Machine Learning Ops",
    color: "#bf8a50",
    span: "lg:col-span-2",
    skills: ["PyTorch", "TensorFlow", "vLLM", "Model Deployment"],
  },
];

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-32 lg:py-44 px-6 lg:px-12 relative"
    >
      <div className="absolute bottom-20 right-10 text-[12rem] font-display text-foreground/[0.02] select-none pointer-events-none leading-none">
        技術
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="space-y-20">

          {/* Header */}
          <div
            className={`grid lg:grid-cols-12 gap-8 items-end ${isVisible ? "animate-slide-up" : "opacity-0"}`}
          >
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-jp-sakura/60" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground">Skills</span>
                <span className="text-xs text-jp-sakura/40 font-display">技術スタック</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-black tracking-tighter">技術スタック</h2>
              <div className="h-[2px] w-16 bg-gradient-to-r from-jp-sakura/60 to-transparent" />
            </div>
            <div className="lg:col-span-6">
              <p className="text-sm text-muted-foreground font-light leading-[2.2] font-serif">
                AIからインフラまで、フルスタックで一気通貫して対応できるのが強みです。プロジェクトに合わせて技術を選び、最適な形で組み合わせます。
              </p>
            </div>
          </div>

          {/* Skills rows */}
          <div className="divide-y divide-foreground/[0.06]">
            {categories.map((cat, i) => (
              <div
                key={cat.id}
                className={`group grid lg:grid-cols-12 gap-6 py-8 lg:py-10 hover:bg-foreground/[0.01] transition-colors duration-500 ${
                  isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                {/* Left - category info */}
                <div className="lg:col-span-4 flex items-start gap-5">
                  <span
                    className="text-[9px] tracking-[0.35em] font-mono pt-1 shrink-0"
                    style={{ color: cat.color + "80" }}
                  >
                    {cat.id}
                  </span>
                  <div className="space-y-1">
                    <div
                      className="w-5 h-[2px] mb-2 transition-all duration-500 group-hover:w-8"
                      style={{ background: cat.color }}
                    />
                    <h3 className="text-base lg:text-lg font-bold tracking-tight">{cat.title}</h3>
                    <p className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground/40">{cat.en}</p>
                  </div>
                </div>

                {/* Right - skills */}
                <div className="lg:col-span-8 flex flex-wrap gap-2 items-center">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] tracking-wide px-3 py-1.5 text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-default"
                      style={{
                        borderBottom: `1px solid ${cat.color}30`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom stats */}
          <div
            className={`flex items-center justify-center gap-12 border-t border-foreground/[0.06] pt-12 ${
              isVisible ? "animate-slide-up animation-delay-800" : "opacity-0"
            }`}
          >
            <div className="text-center space-y-2">
              <p className="text-5xl lg:text-6xl font-black tracking-tighter">30<span className="text-jp-sakura">+</span></p>
              <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground">フレームワーク・ツール</p>
            </div>
            <div className="w-px h-16 bg-jp-sakura/15" />
            <div className="text-center space-y-2">
              <p className="text-5xl lg:text-6xl font-black tracking-tighter">8<span className="text-jp-sakura">+</span></p>
              <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground">年の実務経験</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
