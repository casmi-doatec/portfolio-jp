"use client";

import { useState, useEffect, useRef } from "react";

const categories = [
  {
    id: "01",
    title: "AI・LLM",
    en: "Artificial Intelligence",
    skills: [
      "OpenAI API", "Anthropic Claude API", "Google Gemini API",
      "LangChain", "LangGraph", "RAG", "AI Agent開発", "MCP",
    ],
  },
  {
    id: "02",
    title: "フロントエンド",
    en: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS"],
  },
  {
    id: "03",
    title: "バックエンド",
    en: "Backend",
    skills: [
      "Python / FastAPI / Django",
      "Node.js / NestJS / Express",
      "PHP / Laravel",
      "Ruby on Rails",
    ],
  },
  {
    id: "04",
    title: "モバイルアプリ",
    en: "Mobile",
    skills: ["Flutter", "Dart", "React Native", "Firebase", "FCM"],
  },
  {
    id: "05",
    title: "クラウド・インフラ",
    en: "Cloud / Infrastructure",
    skills: ["AWS EC2 / ECS / Lambda / S3 / RDS", "GCP", "Docker", "Terraform", "Vercel"],
  },
  {
    id: "06",
    title: "データベース",
    en: "Database",
    skills: ["PostgreSQL", "MySQL", "Redis", "Supabase", "Firebase Firestore"],
  },
  {
    id: "07",
    title: "AI・MLOps",
    en: "Machine Learning Ops",
    skills: ["PyTorch", "TensorFlow", "OpenCV", "vLLM", "Model Deployment"],
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
      className="py-32 lg:py-44 px-6 lg:px-12 bg-secondary/40"
    >
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {categories.map((cat, i) => (
            <div
              key={cat.id}
              className={`bg-background p-8 group hover:bg-secondary transition-colors duration-300 ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div className="space-y-5">
                {/* Category header */}
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[10px] tracking-[0.4em] text-jp-sakura font-mono mb-2">{cat.id}</p>
                    <h3 className="text-base font-bold tracking-tight">{cat.title}</h3>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-0.5">{cat.en}</p>
                  </div>
                  <div className="w-8 h-[2px] bg-jp-sakura mt-2 group-hover:w-12 transition-all duration-300" />
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] px-2.5 py-1 border border-border text-muted-foreground group-hover:border-jp-sakura/40 group-hover:text-foreground transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
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
