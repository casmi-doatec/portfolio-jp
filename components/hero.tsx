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
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,var(--jp-sakura)/0.04,transparent_70%)] pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,transparent_0%,var(--background)_65%)] pointer-events-none z-[1]" />

      {/* Decorative vertical lines */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute top-0 left-[25%] w-px h-full bg-gradient-to-b from-transparent via-jp-sakura/[0.05] to-transparent" />
        <div className="absolute top-0 left-[75%] w-px h-full bg-gradient-to-b from-transparent via-jp-sakura/[0.05] to-transparent" />
      </div>

      <div className="max-w-7xl w-full relative z-[2]">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* Right - avatar */}
          <div
            className={`lg:col-span-5 lg:order-2 flex justify-center lg:justify-end ${
              isVisible ? "animate-fade-in animation-delay-200" : "opacity-0"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full border border-jp-sakura/15 scale-[1.12]" />
              <div className="absolute inset-0 rounded-full border border-jp-sakura/08 scale-[1.24]" />
              <div className="absolute inset-0 rounded-full bg-jp-sakura/[0.06] blur-2xl scale-125" />
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border border-jp-sakura/20">
                <Image
                  src="/real-kasumi.png"
                  alt="かすみ"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-jp-sakura/40" />
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-jp-sakura/40" />
            </div>
          </div>

          {/* Left content */}
          <div className="lg:col-span-7 lg:order-1 space-y-10 relative">
            {/* Sakura accent line */}
            <div
              className={`absolute -left-6 top-0 w-[2px] h-full bg-gradient-to-b from-jp-sakura/30 via-jp-sakura/10 to-transparent ${
                isVisible ? "animate-slide-in-left" : "opacity-0"
              }`}
            />

            {/* Top label */}
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

            {/* Name */}
            <div
              className={`space-y-3 ${
                isVisible ? "animate-slide-up animation-delay-200" : "opacity-0"
              }`}
            >
              <h1 className="text-5xl lg:text-[6.5rem] font-black tracking-tighter leading-[0.85]">
                かすみ
              </h1>
              <div className="flex items-center gap-3 pt-2">
                <span className="text-jp-sakura/40 text-lg font-display select-none">&#x300C;</span>
                <p className="text-sm lg:text-base font-display tracking-[0.3em] text-muted-foreground">
                  AI・フルスタックエンジニア
                </p>
                <span className="text-jp-sakura/40 text-lg font-display select-none">&#x300D;</span>
              </div>
            </div>

            {/* Divider */}
            <div
              className={`relative h-px ${
                isVisible ? "animate-slide-in-left animation-delay-400" : "opacity-0"
              }`}
            >
              <div className="h-px w-full bg-gradient-to-r from-border to-transparent" />
              <div className="absolute top-0 left-0 h-[2px] w-32 bg-gradient-to-r from-jp-sakura/70 to-transparent" />
            </div>

            {/* Description */}
            <div
              className={`space-y-3 ${
                isVisible ? "animate-slide-up animation-delay-600" : "opacity-0"
              }`}
            >
              <p className="text-sm lg:text-base text-muted-foreground font-light leading-[2.2] max-w-lg font-serif">
                フロントエンド4年、バックエンド2年、フルスタック2年、計8年のキャリアで30以上のプロジェクトを手がけてきました。AI・Web・SaaS・モバイルまで、ご依頼主様の要件を的確に汲み取り、最適な技術選定でご提案します。
              </p>
            </div>

            {/* Stats row */}
            <div
              className={`flex items-center gap-8 ${
                isVisible ? "animate-slide-up animation-delay-600" : "opacity-0"
              }`}
            >
              <div>
                <p className="text-3xl font-black tracking-tighter">8<span className="text-jp-sakura">+</span></p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-1">年の実務経験</p>
              </div>
              <div className="w-px h-10 bg-jp-sakura/15" />
              <div>
                <p className="text-3xl font-black tracking-tighter">30<span className="text-jp-sakura">+</span></p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-1">プロジェクト</p>
              </div>
              <div className="w-px h-10 bg-jp-sakura/15" />
              <div>
                <p className="text-3xl font-black tracking-tighter">7<span className="text-jp-sakura">+</span></p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-1">技術領域</p>
              </div>
            </div>

            {/* CTA */}
            <div
              className={`flex items-center gap-8 ${
                isVisible ? "animate-slide-up animation-delay-800" : "opacity-0"
              }`}
            >
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

        {/* Bottom scroll indicator */}
        <div
          className={`absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 ${
            isVisible ? "animate-fade-in animation-delay-1000" : "opacity-0"
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
