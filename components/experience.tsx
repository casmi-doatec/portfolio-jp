"use client";

import { useState, useEffect, useRef } from "react";

export function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const expertiseAreas = [
    {
      title: "LLM・RAGの組み込み",
      description:
        "OpenAIやClaudeのAPIを使ったチャットボット、社内ドキュメント検索（RAG）、要約・分類などを実装してきました。LangChainとベクトルDBを組み合わせて、業務で実際に使える形に落とし込むのが得意です。",
      number: "01",
      kanji: "言",
    },
    {
      title: "AI機能を組み込んだWebアプリ",
      description:
        "Next.js・FastAPI・Node.jsを中心にしたフルスタック開発に、AI機能を組み込むのが得意です。試験の自動採点やAI顔認証、画像認識を組み込んだサービスなど、UIから推論APIまで一通り自分で作れます。",
      number: "02",
      kanji: "智",
    },
    {
      title: "Webシステム・ECサイト",
      description:
        "Next.js、Node.js、Laravelでのフルスタック開発も継続して対応しています。予約管理、ECサイト、SaaSなど、Stripe決済やメール配信、リアルタイム機能まで含めて一気通貫で実装できます。",
      number: "03",
      kanji: "匠",
    },
    {
      title: "MLモデル・自動化",
      description:
        "PyTorchやOpenCV、Whisperを使った画像・音声処理の実装経験があります。既存モデルの活用と簡単なファインチューニング、業務自動化スクリプトまで、用途に合わせて選んで作っています。",
      number: "04",
      kanji: "機",
    },
  ];

  const stats = [
    { value: "30+", label: "開発プロジェクト" },
    { value: "8+", label: "年の実務経験" },
    { value: "15+", label: "取引先クライアント" },
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-32 lg:py-44 px-6 lg:px-12 bg-secondary/40 relative overflow-hidden"
    >
      {/* Background decorative */}
      <div className="absolute top-10 left-10 text-[15rem] font-display text-foreground/[0.015] select-none pointer-events-none leading-none">
        専門
      </div>

      <div className="max-w-7xl mx-auto relative">
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
                Expertise
              </span>
              <span className="text-xs text-jp-sakura/40 font-display">
                得意分野
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black tracking-tighter">
              得意分野
            </h2>
            <div className="h-[2px] w-16 bg-gradient-to-r from-jp-sakura/60 to-transparent" />
            <p className="text-sm lg:text-base text-muted-foreground font-light leading-[2.2] max-w-2xl pt-2 font-serif">
              AI機能の実装からWebアプリの開発まで、まとめて対応できるのが持ち味です。「AIを使ってこういうことしたい」をそのまま形にできます。
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {expertiseAreas.map((area, index) => (
              <div
                key={area.number}
                className={`relative p-8 lg:p-10 bg-background/80 backdrop-blur-sm border border-foreground/5 hover:border-jp-sakura/20 transition-all duration-700 group ${
                  isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Kanji watermark */}
                <span className="absolute top-6 right-8 text-8xl font-display text-foreground/[0.03] select-none group-hover:text-jp-sakura/[0.06] transition-colors duration-700">
                  {area.kanji}
                </span>

                {/* Top sakura accent on hover */}
                <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-jp-sakura/40 to-transparent transition-all duration-700" />

                <div className="relative space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] tracking-[0.3em] text-jp-sakura/50 font-mono">
                      {area.number}
                    </span>
                    <div className="h-px w-4 bg-jp-sakura/20" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold tracking-tight">
                    {area.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-[2] font-serif">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div
            className={`${
              isVisible ? "animate-slide-up animation-delay-600" : "opacity-0"
            }`}
          >
            <div className="grid grid-cols-3 gap-8 border-t border-jp-sakura/10 pt-12">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center space-y-2">
                  <p className="text-4xl lg:text-5xl font-black tracking-tighter">
                    {stat.value}
                  </p>
                  <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
