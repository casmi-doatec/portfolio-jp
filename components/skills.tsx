"use client";

import { useState, useEffect, useRef } from "react";

const categories = [
  {
    id: "01",
    title: "AI・LLM",
    en: "Artificial Intelligence",
    skills: ["OpenAI API", "Anthropic Claude API", "Google Gemini API", "LangChain", "LangGraph", "RAG", "AI Agent開発", "MCP"],
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
    skills: ["Python / FastAPI / Django", "Node.js / NestJS / Express", "PHP / Laravel", "Ruby on Rails"],
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
    skills: ["AWS (EC2 / ECS / Lambda / S3 / RDS)", "GCP", "Docker", "Terraform", "Vercel"],
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
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-32 lg:py-44 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className={`flex items-end justify-between mb-20 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-jp-sakura" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground">Skills</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black tracking-tighter">技術スタック</h2>
          </div>
          <p className="hidden lg:block text-sm text-muted-foreground leading-[2] max-w-xs text-right font-serif">
            AIからインフラまで<br />一気通貫で対応
          </p>
        </div>

        {/* Category rows */}
        <div>
          {categories.map((cat, i) => (
            <div
              key={cat.id}
              className={`group relative border-t border-border transition-colors duration-500 ${
                hoveredIdx === i ? "bg-secondary/50" : ""
              } ${isVisible ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.07}s` }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Left accent bar on hover */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-[2px] bg-jp-sakura transition-transform duration-500 origin-top ${
                  hoveredIdx === i ? "scale-y-100" : "scale-y-0"
                }`}
              />

              <div className="py-8 lg:py-10 pl-6 lg:pl-8 grid grid-cols-12 gap-4 lg:gap-8 items-center">

                {/* Number */}
                <div className="col-span-1">
                  <span className="text-[10px] tracking-[0.3em] font-mono text-jp-sakura">{cat.id}</span>
                </div>

                {/* Title block */}
                <div className="col-span-11 lg:col-span-3">
                  <h3 className="text-base lg:text-lg font-black tracking-tight leading-tight">{cat.title}</h3>
                  <p className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground mt-0.5">{cat.en}</p>
                </div>

                {/* Skills */}
                <div className="col-span-12 lg:col-span-8 flex flex-wrap gap-x-5 gap-y-2 lg:pl-4">
                  {cat.skills.map((skill, si) => (
                    <span
                      key={skill}
                      className="text-[11px] lg:text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed"
                      style={{ transitionDelay: `${si * 20}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-border" />
        </div>

        {/* Stats row */}
        <div className={`mt-20 grid grid-cols-3 gap-px bg-border ${isVisible ? "animate-slide-up animation-delay-800" : "opacity-0"}`}>
          <div className="bg-background px-8 py-10 flex flex-col justify-center">
            <p className="text-4xl lg:text-5xl font-black tracking-tighter">8<span className="text-jp-sakura">+</span></p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-2">年の実務経験</p>
          </div>
          <div className="bg-background px-8 py-10 flex flex-col justify-center">
            <p className="text-4xl lg:text-5xl font-black tracking-tighter">30<span className="text-jp-sakura">+</span></p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-2">プロジェクト</p>
          </div>
          <div className="bg-background px-8 py-10 flex flex-col justify-center">
            <p className="text-4xl lg:text-5xl font-black tracking-tighter">7<span className="text-jp-sakura">+</span></p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-2">技術領域</p>
          </div>
        </div>

      </div>
    </section>
  );
}
