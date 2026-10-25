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
      {/* Background decorative */}
      <div className="absolute top-20 right-10 text-[12rem] font-display text-foreground/[0.02] select-none pointer-events-none leading-none">
        紹介
      </div>

      <div className="max-w-7xl mx-auto space-y-24">
        {/* DREAM HIGH brand statement */}
        <div
          className={`text-center space-y-6 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <div className="flex items-center justify-center gap-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-jp-sakura/40" />
            <span className="text-[10px] tracking-[0.5em] uppercase text-muted-foreground">
              Philosophy
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-jp-sakura/40" />
          </div>
          <div className="space-y-2">
            <p className="text-3xl lg:text-5xl font-black tracking-[0.15em] uppercase leading-tight">
              DREAM <span className="text-jp-sakura/70">HIGH</span>
            </p>
            <p className="text-3xl lg:text-5xl font-black tracking-[0.15em] uppercase leading-tight">
              AIM <span className="text-jp-sakura/70">HIGH</span>
            </p>
            <p className="text-3xl lg:text-5xl font-black tracking-[0.15em] uppercase leading-tight">
              FLY <span className="text-jp-sakura/70">HIGH</span>
            </p>
          </div>
          <div className="h-[2px] w-12 bg-jp-sakura/40 mx-auto" />
        </div>

        {/* Profile grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Image */}
          <div
            className={`lg:col-span-5 order-2 lg:order-1 ${
              isVisible ? "animate-scale-in animation-delay-200" : "opacity-0"
            }`}
          >
            <div className="relative group">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/neko.png"
                  alt="NekoMaki"
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
          </div>

          {/* Story */}
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

            <div className="space-y-6 font-serif">
              <p
                className={`text-sm lg:text-base text-muted-foreground font-light leading-[2.2] ${
                  isVisible ? "animate-slide-up animation-delay-200" : "opacity-0"
                }`}
              >
                AI エンジニア・フルスタックエンジニアとして、LLM を活用したプロダクト開発と Web アプリケーションの設計・実装を行っています。Next.js と Python を中心に、フロントエンドからバックエンド、AI 連携まで一貫して手がけることができます。
              </p>
              <p
                className={`text-sm lg:text-base text-muted-foreground font-light leading-[2.2] ${
                  isVisible ? "animate-slide-up animation-delay-400" : "opacity-0"
                }`}
              >
                フロントエンドは Next.js（App Router）を主軸に、TypeScript・Tailwind CSS を用いたコンポーネント設計と UX を重視した実装を行っています。バックエンドは Python（FastAPI・LangChain）を使い、RAG パイプラインや外部 API との連携、業務自動化ツールの構築を得意としています。
              </p>
              <p
                className={`text-sm lg:text-base text-muted-foreground font-light leading-[2.2] ${
                  isVisible ? "animate-slide-up animation-delay-600" : "opacity-0"
                }`}
              >
                AI 領域では、OpenAI・Claude・Dify などの LLM を活用したチャットボット、業務効率化ツール、LINE 連携システムの開発実績があります。プロンプト設計からシステム統合まで、実用レベルのプロダクトとして仕上げることを意識しています。
              </p>
              <p
                className={`text-sm lg:text-base text-muted-foreground font-light leading-[2.2] ${
                  isVisible ? "animate-slide-up animation-delay-800" : "opacity-0"
                }`}
              >
                要件定義・設計から実装・リリースまでを 1 名で完結できる体制を強みとしており、スタートアップや中小企業の新規プロダクト立ち上げを中心に支援しています。スピード感を持ちながら、拡張しやすい設計を心がけています。
              </p>
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
