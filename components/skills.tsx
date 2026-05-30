"use client";

import { useState, useEffect, useRef } from "react";

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
      kanji: "知",
      skills: ["OpenAI API", "Claude API", "LangChain", "RAG"],
    },
    {
      title: "ML・画像処理",
      kanji: "眼",
      skills: ["Python", "OpenCV"],
    },
    {
      title: "言語",
      kanji: "語",
      skills: ["Python", "TypeScript", "JavaScript", "PHP", "Kotlin", "Java", "Ruby"],
    },
    {
      title: "フロントエンド",
      kanji: "面",
      skills: ["React", "Next.js", "Vue", "Nuxt", "Tailwind CSS"],
    },
    {
      title: "バックエンド",
      kanji: "裏",
      skills: ["FastAPI", "Node.js", "Laravel", "Ruby on Rails", "Prisma", "MySQL", "PostgreSQL"],
    },
    {
      title: "インフラ・ツール",
      kanji: "基",
      skills: ["AWS", "Google Cloud", "Docker", "Firebase", "Salesforce", "Kintone", "Stripe", "Git"],
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

          {/* Skills grid - zen garden inspired layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-jp-sakura/[0.06]">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`bg-background p-8 lg:p-10 group hover:bg-secondary/30 transition-all duration-700 relative overflow-hidden ${
                  isVisible ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Kanji watermark */}
                <span className="absolute -bottom-4 -right-2 text-[7rem] font-display text-foreground/[0.025] select-none group-hover:text-jp-sakura/[0.05] transition-colors duration-700">
                  {category.kanji}
                </span>

                <div className="relative space-y-6">
                  <div className="space-y-3">
                    <span className="text-[10px] tracking-[0.3em] text-jp-sakura/40 font-mono">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-bold tracking-tight">
                      {category.title}
                    </h3>
                    <div className="h-[2px] w-8 bg-gradient-to-r from-jp-sakura/50 to-transparent group-hover:w-16 transition-all duration-700" />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1.5 border border-foreground/8 text-muted-foreground hover:border-jp-sakura/30 hover:text-foreground transition-all duration-500 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom stat */}
          <div
            className={`flex items-center justify-center gap-12 pt-4 ${
              isVisible ? "animate-slide-up animation-delay-800" : "opacity-0"
            }`}
          >
            <div className="text-center space-y-2">
              <p className="text-5xl lg:text-6xl font-black tracking-tighter">25+</p>
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
