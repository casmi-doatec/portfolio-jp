"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function About() {
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

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-32 lg:py-44 px-6 lg:px-12 relative"
    >
      {/* Background decorative kanji */}
      <div className="absolute top-20 right-10 text-[12rem] font-display text-foreground/[0.02] select-none pointer-events-none leading-none">
        紹介
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Image + Motto */}
          <div
            className={`lg:col-span-5 order-2 lg:order-1 space-y-8 ${
              isVisible ? "animate-scale-in" : "opacity-0"
            }`}
          >
            <div className="relative group">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/about-profile.png"
                  alt="Profile"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
                <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-jp-sakura/30" />
                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-jp-sakura/30" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-jp-sakura/30" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-jp-sakura/30" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-jp-sakura/10 -z-10" />
            </div>

            {/* Motto */}
            <div className="border border-jp-sakura/15 p-6 space-y-3">
              <span className="text-[10px] tracking-[0.3em] uppercase text-jp-sakura/50">
                座右の銘
              </span>
              <p className="text-lg lg:text-xl font-bold tracking-tight leading-relaxed">
                &ldquo;Dream High, Aim High, Fly High&rdquo;
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-7 space-y-10 order-1 lg:order-2">
            <div
              className={`space-y-4 ${
                isVisible ? "animate-slide-in-right" : "opacity-0"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-jp-sakura/60" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
                  About
                </span>
                <span className="text-xs text-jp-sakura/40 font-display">
                  自己紹介
                </span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-black tracking-tighter">
                自己紹介
              </h2>
              <div className="h-[2px] w-16 bg-gradient-to-r from-jp-sakura/60 to-transparent" />
            </div>

            {/* Introduction paragraphs */}
            <div className="space-y-6 font-serif">
              <p
                className={`text-sm lg:text-base text-muted-foreground font-light leading-[2.2] ${
                  isVisible ? "animate-slide-up animation-delay-200" : "opacity-0"
                }`}
              >
                はじめまして。DreamHighと申します。高校生の頃からの夢は、IT業界の第一人者になることでした。学生時代はpaizaのAランク取得を目標に、学校から帰った後も夜遅くまでプログラミングの学習に打ち込み、高校卒業時に合格。早稲田文理専門学校へ進学しました。
              </p>
              <p
                className={`text-sm lg:text-base text-muted-foreground font-light leading-[2.2] ${
                  isVisible ? "animate-slide-up animation-delay-400" : "opacity-0"
                }`}
              >
                専門学校では優秀な学生エンジニアの一人として評価される機会も多くありました。その後、東洋学園大学の3年生に編入し、数理・データサイエンス・AI教育プログラムを通じてAIの基礎知識やデータ分析のスキルを習得。PBL（課題解決型学習）ではITを活用したマーケティング戦略の立案やデジタルツールの活用方法を実践的に学びました。
              </p>
              <p
                className={`text-sm lg:text-base text-muted-foreground font-light leading-[2.2] ${
                  isVisible ? "animate-slide-up animation-delay-600" : "opacity-0"
                }`}
              >
                大学で培った力は、ご依頼主様の要件を的確に汲み取り、最適な技術選定でご提案するという現在の仕事の姿勢へとつながっています。フロントエンドエンジニアとして4年、バックエンドエンジニアとして2年、フルスタックエンジニアとして2年、計8年間ITエンジニアとしてのキャリアを積んでまいりました。
              </p>
            </div>

            {/* Strengths */}
            <div
              className={`space-y-6 ${
                isVisible ? "animate-slide-up animation-delay-800" : "opacity-0"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="h-px w-6 bg-jp-sakura/40" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  強み
                </span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="border border-foreground/5 p-5 space-y-2 hover:border-jp-sakura/20 transition-colors duration-500">
                  <h4 className="text-sm font-bold">丁寧な対応</h4>
                  <p className="text-xs text-muted-foreground leading-[1.9]">
                    ご依頼主様に安心していただけるよう、丁寧なコミュニケーションと確実な納品を心がけています。
                  </p>
                </div>
                <div className="border border-foreground/5 p-5 space-y-2 hover:border-jp-sakura/20 transition-colors duration-500">
                  <h4 className="text-sm font-bold">最適な技術提案</h4>
                  <p className="text-xs text-muted-foreground leading-[1.9]">
                    要件を的確に汲み取り、最適な技術選定でご提案します。
                  </p>
                </div>
                <div className="border border-foreground/5 p-5 space-y-2 hover:border-jp-sakura/20 transition-colors duration-500">
                  <h4 className="text-sm font-bold">AI活用・自動化</h4>
                  <p className="text-xs text-muted-foreground leading-[1.9]">
                    Claude Code等を活用した開発自動化、API連携（各種SaaS、決済、広告プラットフォーム等）。
                  </p>
                </div>
                <div className="border border-foreground/5 p-5 space-y-2 hover:border-jp-sakura/20 transition-colors duration-500">
                  <h4 className="text-sm font-bold">コミュニケーション</h4>
                  <p className="text-xs text-muted-foreground leading-[1.9]">
                    Google Meet / Slack / Chatwork / LINE に対応しています。
                  </p>
                </div>
              </div>
            </div>

            {/* Working conditions */}
            <div
              className={`${
                isVisible ? "animate-slide-up animation-delay-1000" : "opacity-0"
              }`}
            >
              <div className="flex items-center gap-6 text-xs text-muted-foreground border-t border-foreground/5 pt-6">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-jp-sakura/40 rounded-full" />
                  <span>週30〜40時間（平日9:00〜18:00）</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-jp-sakura/40 rounded-full" />
                  <span>週末勤務可能</span>
                </div>
              </div>
            </div>

            <div
              className={`${
                isVisible ? "animate-slide-up animation-delay-1000" : "opacity-0"
              }`}
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase border border-foreground px-8 py-3.5 hover:bg-foreground hover:text-background transition-all duration-500"
              >
                <span>お問い合わせ</span>
                <span className="w-0 group-hover:w-6 h-px bg-jp-sakura transition-all duration-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
