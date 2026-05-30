"use client";

import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";

const ThreeScene = dynamic(
  () => import("@/components/three-scene").then((mod) => ({ default: mod.ThreeScene })),
  { ssr: false }
);

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 overflow-hidden">
      {/* Three.js background */}
      <Suspense fallback={null}>
        <ThreeScene className="z-0 opacity-60" />
      </Suspense>

      {/* Subtle washi paper texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,var(--background)_70%)] pointer-events-none z-[1]" />

      {/* Decorative vertical lines - inspired by shoji screen */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-jp-sakura/[0.06] to-transparent" />
        <div className="absolute top-0 left-[40%] w-px h-full bg-gradient-to-b from-transparent via-foreground/[0.03] to-transparent" />
        <div className="absolute top-0 left-[60%] w-px h-full bg-gradient-to-b from-transparent via-foreground/[0.03] to-transparent" />
        <div className="absolute top-0 left-[80%] w-px h-full bg-gradient-to-b from-transparent via-jp-sakura/[0.06] to-transparent" />
      </div>

      <div className="max-w-7xl w-full relative z-[2]">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="lg:col-span-8 space-y-14 relative">
            {/* Sakura accent line */}
            <div
              className={`absolute -left-6 top-0 w-[2px] h-full bg-gradient-to-b from-jp-sakura/30 via-jp-kincha/10 to-transparent ${
                isVisible ? "animate-slide-in-left" : "opacity-0"
              }`}
            />

            {/* Top label with Japanese decorative element */}
            <div
              className={`flex items-center gap-4 ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
            >
              <div className="h-px w-12 bg-gradient-to-r from-jp-sakura to-transparent" />
              <span className="text-[10px] tracking-[0.5em] uppercase text-muted-foreground font-light">
                Portfolio 2026
              </span>
              <span className="text-[10px] text-jp-sakura/40 font-display tracking-widest">
                作品集
              </span>
            </div>

            {/* Name block - large typography */}
            <div
              className={`space-y-4 ${
                isVisible ? "animate-slide-up animation-delay-200" : "opacity-0"
              }`}
            >
              <div className="space-y-1">
                <h1 className="text-6xl lg:text-[7rem] font-black tracking-tighter leading-[0.85]">
                  はざめ
                </h1>
              </div>

              {/* Japanese subtitle */}
              <div className="flex items-center gap-3 pt-4">
                <span className="text-jp-sakura/50 text-xl font-display select-none">
                  &#x300C;
                </span>
                <p className="text-base lg:text-lg font-display tracking-[0.3em] text-muted-foreground">
                  AI・フルスタックエンジニア
                </p>
                <span className="text-jp-sakura/50 text-xl font-display select-none">
                  &#x300D;
                </span>
              </div>
            </div>

            {/* Brush stroke divider */}
            <div className="relative">
              <div
                className={`h-px w-full bg-gradient-to-r from-border via-border to-transparent ${
                  isVisible
                    ? "animate-slide-in-left animation-delay-400"
                    : "opacity-0"
                }`}
              />
              <div
                className={`absolute top-0 left-0 h-[2px] w-48 bg-gradient-to-r from-jp-sakura/60 to-jp-kincha/30 ${
                  isVisible
                    ? "animate-brush-stroke animation-delay-600"
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
              <p className="text-sm lg:text-base text-muted-foreground font-light leading-[2.2] max-w-xl font-serif">
                AI・Webシステム・SaaS開発を軸に、8年以上にわたってプロダクトを形にしてきました。LLMやRAGをはじめとするAI技術を、実用的でスケーラブルなサービスへ自然に組み込むことを得意としています。
              </p>

              {/* CTA with Japanese styling */}
              <div className="flex items-center gap-8">
                <a
                  href="#projects"
                  className="group relative text-xs tracking-[0.25em] uppercase px-10 py-4 border border-foreground/80 hover:bg-foreground hover:text-background transition-all duration-500 overflow-hidden"
                >
                  <span className="relative z-10">実績を見る</span>
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-jp-sakura transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </a>
                <a
                  href="#contact"
                  className="text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-500 group flex items-center gap-3"
                >
                  <span>お問い合わせ</span>
                  <span className="inline-block w-6 h-px bg-jp-sakura/50 group-hover:w-12 group-hover:bg-jp-sakura transition-all duration-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Right - decorative kanji column */}
          <div
            className={`lg:col-span-4 hidden lg:flex flex-col items-end justify-center gap-6 ${
              isVisible
                ? "animate-fade-in animation-delay-800"
                : "opacity-0"
            }`}
          >
            <div className="writing-vertical flex flex-col items-center gap-8 text-foreground/[0.04] text-8xl font-display select-none">
              <span>創</span>
              <span>造</span>
              <span>力</span>
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div
          className={`absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 ${
            isVisible
              ? "animate-fade-in animation-delay-1000"
              : "opacity-0"
          }`}
        >
          <span className="text-[9px] tracking-[0.4em] uppercase text-muted-foreground/40 font-display">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-jp-sakura/30 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
