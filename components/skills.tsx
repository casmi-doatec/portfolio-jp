"use client";

import { useState, useEffect, useRef } from "react";
import { SkillsOrbit } from "./skills-orbit";

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "AI・LLM",
      en: "AI / LLM",
      skills: ["OpenAI API", "Anthropic Claude API", "Google Gemini API", "LangChain", "LangGraph", "RAG", "AI Agent開発", "MCP"],
    },
    {
      title: "フロントエンド",
      en: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Vue.js"],
    },
    {
      title: "バックエンド",
      en: "Backend",
      skills: ["Python（FastAPI・Django）", "Node.js（NestJS・Express）", "PHP（Laravel）", "Ruby on Rails"],
    },
    {
      title: "モバイルアプリ",
      en: "Mobile",
      skills: ["Flutter", "React Native"],
    },
    {
      title: "クラウド・インフラ",
      en: "Cloud / Infra",
      skills: ["AWS（EC2・ECS・Lambda・S3・RDS）", "Docker", "Terraform"],
    },
    {
      title: "データベース",
      en: "Database",
      skills: ["PostgreSQL", "MySQL", "Redis", "Supabase", "Firebase"],
    },
    {
      title: "AI・MLOps",
      en: "AI / MLOps",
      skills: ["PyTorch", "TensorFlow", "vLLM", "Model Deployment"],
    },
  ];

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
        <div className="space-y-20">
          {/* Header */}
          <div
            className={`space-y-4 ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
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

          {/* Skills — satellite orbit visualization */}
          <div className={`${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <SkillsOrbit />
          </div>

          {/* Bottom stat */}
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
