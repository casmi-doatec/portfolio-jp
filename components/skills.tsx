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
      title: "AI・LLM・ML",
      kanji: "知",
      skills: [
        { name: "OpenAI API", level: 90 },
        { name: "Claude API", level: 85 },
        { name: "RAG", level: 80 },
        { name: "LangChain", level: 75 },
        { name: "Whisper", level: 70 },
        { name: "PyTorch", level: 65 },
        { name: "pgvector", level: 70 },
        { name: "Pinecone", level: 68 },
      ],
    },
    {
      title: "フロントエンド",
      kanji: "面",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 95 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Vue / Nuxt", level: 80 },
        { name: "Flutter", level: 75 },
        { name: "Three.js", level: 68 },
      ],
    },
    {
      title: "バックエンド",
      kanji: "裏",
      skills: [
        { name: "TypeScript", level: 92 },
        { name: "Node.js", level: 88 },
        { name: "Python", level: 88 },
        { name: "FastAPI", level: 85 },
        { name: "Laravel / PHP", level: 78 },
        { name: "Ruby on Rails", level: 72 },
      ],
    },
    {
      title: "データベース",
      kanji: "蓄",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 85 },
        { name: "Prisma", level: 82 },
        { name: "Firebase", level: 80 },
        { name: "Supabase", level: 80 },
        { name: "Redis", level: 75 },
      ],
    },
    {
      title: "インフラ・DevOps",
      kanji: "基",
      skills: [
        { name: "Git / GitHub", level: 92 },
        { name: "Docker", level: 82 },
        { name: "AWS", level: 80 },
        { name: "GitHub Actions", level: 80 },
        { name: "Vercel", level: 85 },
        { name: "Google Cloud", level: 78 },
      ],
    },
    {
      title: "外部サービス連携",
      kanji: "繋",
      skills: [
        { name: "WebSocket", level: 85 },
        { name: "Stripe", level: 82 },
        { name: "WebRTC", level: 78 },
        { name: "Shopify", level: 78 },
        { name: "Kintone", level: 75 },
        { name: "Salesforce", level: 70 },
      ],
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

                  <div className="space-y-3">
                    {category.skills.map((skill, i) => (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="text-[11px] text-muted-foreground tracking-wide">
                            {skill.name}
                          </span>
                          <span className="text-[10px] text-jp-sakura/60 font-mono">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-[2px] w-full bg-foreground/[0.06] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-jp-sakura/70 to-jp-sakura/30 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: isVisible ? `${skill.level}%` : "0%",
                              transitionDelay: `${index * 0.1 + i * 0.05}s`,
                            }}
                          />
                        </div>
                      </div>
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
