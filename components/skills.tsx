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
      {/* Background decorative */}
      <div className="absolute bottom-20 right-10 text-[12rem] font-display text-foreground/[0.02] select-none pointer-events-none leading-none">
        技術
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="space-y-16">

          {/* Header */}
          <div
            className={`space-y-4 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-jp-sakura/60" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
                Skills
              </span>
              <span className="text-xs text-jp-sakura/40 font-display">
                技術スタック
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black tracking-tighter">
              技術スタック
            </h2>
            <div className="h-[2px] w-16 bg-gradient-to-r from-jp-sakura/60 to-transparent" />
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {categories.map((cat, i) => (
              <div
                key={cat.id}
                className={`${cat.span} group relative bg-background border border-foreground/[0.06] p-7 lg:p-8 flex flex-col gap-5 hover:border-foreground/[0.12] transition-colors duration-500 ${
                  isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{
                  borderTop: `2px solid ${cat.color}`,
                  animationDelay: `${i * 0.07}s`,
                }}
              >
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <span
                      className="text-[9px] tracking-[0.35em] font-mono"
                      style={{ color: cat.color + "99" }}
                    >
                      {cat.id}
                    </span>
                    <h3 className="text-base lg:text-lg font-bold tracking-tight leading-tight">
                      {cat.title}
                    </h3>
                    <p className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground/40">
                      {cat.en}
                    </p>
                  </div>
                  {/* Accent dot */}
                  <div
                    className="w-2 h-2 rounded-full mt-1 opacity-40 group-hover:opacity-70 transition-opacity duration-500"
                    style={{ background: cat.color }}
                  />
                </div>

                {/* Divider */}
                <div
                  className="h-px w-full"
                  style={{
                    background: `linear-gradient(to right, ${cat.color}30, transparent)`,
                  }}
                />

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] tracking-wide px-2.5 py-1 text-muted-foreground border border-foreground/[0.07] hover:text-foreground transition-colors duration-300 cursor-default"
                      style={{
                        borderColor: `${cat.color}22`,
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
            className={`flex items-center justify-center gap-12 pt-4 ${
              isVisible ? "animate-slide-up animation-delay-800" : "opacity-0"
            }`}
          >
            <div className="text-center space-y-2">
              <p className="text-5xl lg:text-6xl font-black tracking-tighter">30+</p>
              <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
                フレームワーク・ツール
              </p>
            </div>
            <div className="w-px h-16 bg-jp-sakura/15" />
            <div className="text-center space-y-2">
              <p className="text-5xl lg:text-6xl font-black tracking-tighter">8+</p>
              <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
                年の実務経験
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
