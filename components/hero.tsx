"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-foreground/[0.03]" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-foreground/[0.03]" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-foreground/[0.03]" />
        <div className="absolute top-1/3 left-0 w-full h-px bg-foreground/[0.03]" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-foreground/[0.03]" />
      </div>

      <div className="max-w-7xl w-full relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left content — spans 7 columns */}
          <div className="lg:col-span-7 space-y-16 relative">
            {/* Vertical accent line */}
            <div
              className={`absolute -left-6 top-0 w-px h-full bg-gradient-to-b from-foreground/20 via-foreground/5 to-transparent ${
                isVisible ? "animate-slide-in-left" : "opacity-0"
              }`}
            />

            {/* Top label */}
            <div
              className={`flex items-center gap-4 ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
            >
              <div className="h-px w-12 bg-foreground" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-light">
                Portfolio 2026
              </span>
            </div>

            {/* Name block */}
            <div
              className={`space-y-6 ${
                isVisible ? "animate-slide-up animation-delay-200" : "opacity-0"
              }`}
            >
              <div className="space-y-2">
                <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
                  Abdul
                </h1>
                <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-foreground/40">
                  Hakim
                </h1>
              </div>

              {/* Japanese subtitle with decorative bracket style */}
              <div className="flex items-center gap-3 pt-2">
                <span className="text-foreground/30 text-lg font-light select-none">
                  &#x300C;
                </span>
                <p className="text-base lg:text-lg font-light tracking-widest text-muted-foreground">
                  AI・フルスタックエンジニア
                </p>
                <span className="text-foreground/30 text-lg font-light select-none">
                  &#x300D;
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="relative">
              <div
                className={`h-px w-full bg-border ${
                  isVisible
                    ? "animate-slide-in-left animation-delay-400"
                    : "opacity-0"
                }`}
              />
              <div
                className={`absolute top-0 left-0 h-px w-48 bg-foreground ${
                  isVisible
                    ? "animate-slide-in-left animation-delay-600"
                    : "opacity-0"
                }`}
              />
            </div>

            {/* Description */}
            <div
              className={`space-y-8 ${
                isVisible ? "animate-slide-up animation-delay-600" : "opacity-0"
              }`}
            >
              <p className="text-sm lg:text-base text-muted-foreground font-light leading-[2] max-w-xl">
                AI・Webシステム・SaaS開発を軸に、8年以上にわたってプロダクトを形にしてきました。LLMやRAGをはじめとするAI技術を、実用的でスケーラブルなサービスへ自然に組み込むことを得意としています。
              </p>

              {/* CTA row */}
              <div className="flex items-center gap-8">
                <a
                  href="#projects"
                  className="text-xs tracking-[0.2em] uppercase border border-foreground px-8 py-3.5 hover:bg-foreground hover:text-background transition-all duration-300"
                >
                  実績を見る
                </a>
                <a
                  href="#contact"
                  className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 group flex items-center gap-3"
                >
                  <span>お問い合わせ</span>
                  <span className="inline-block w-6 h-px bg-muted-foreground group-hover:w-10 group-hover:bg-foreground transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Right image — spans 5 columns */}
          <div
            className={`lg:col-span-5 relative group cursor-pointer ${
              isVisible
                ? "animate-slide-in-right animation-delay-200"
                : "opacity-0"
            }`}
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src="/hero-workspace.jpg"
                  alt="Workspace"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                {/* Border frame */}
                <div className="absolute inset-0 border border-foreground/15 group-hover:border-foreground/30 transition-colors duration-500" />
                {/* Corner marks */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-foreground/50" />
                <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-foreground/50" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-foreground/50" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-foreground/50" />
              </div>

              {/* Floating label on image */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center justify-between text-[10px] tracking-[0.3em] uppercase text-foreground/50">
                  <span>Bandung, Indonesia</span>
                  <span>2026</span>
                </div>
              </div>

              {/* Decorative offset frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-foreground/5 -z-10" />
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div
          className={`absolute -bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 ${
            isVisible
              ? "animate-fade-in animation-delay-800"
              : "opacity-0"
          }`}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/50">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-foreground/30 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
