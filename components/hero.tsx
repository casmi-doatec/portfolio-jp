"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Banner image — full width top */}
      <div className="absolute inset-0 z-[0]">
        <Image
          src="/pegasus2.png"
          alt="DreamHigh Banner"
          fill
          className="object-cover object-top opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-jp-sakura via-border to-transparent z-[2]" />

      {/* Avatar — real kasumi */}
      <div className={`absolute right-8 lg:right-20 top-1/2 -translate-y-1/2 z-[2] hidden lg:block ${isVisible ? "animate-fade-in animation-delay-200" : "opacity-0"}`}>
        <div className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-border">
          <Image
            src="/real-kasumi.png"
            alt="かすみ"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-jp-sakura" />
        <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-jp-sakura" />
      </div>

      <div className="relative z-[2] max-w-7xl mx-auto px-6 lg:px-12 min-h-screen flex flex-col justify-center">

        {/* Top label */}
        <div className={`flex items-center gap-4 mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="h-px w-12 bg-jp-sakura" />
          <span className="text-[10px] tracking-[0.5em] uppercase text-muted-foreground">Portfolio 2026</span>
          <span className="text-[10px] text-jp-sakura font-display tracking-widest">作品集</span>
        </div>

        {/* Main content — left side */}
        <div className="max-w-xl space-y-8">

          {/* Name */}
          <div className={`${isVisible ? "animate-slide-up animation-delay-200" : "opacity-0"}`}>
            <p className="text-[11px] tracking-[0.4em] uppercase text-jp-sakura mb-3">Engineer</p>
            <h1 className="text-6xl lg:text-[7rem] font-black tracking-tighter leading-[0.88]">
              かすみ
            </h1>
            <p className="text-base lg:text-lg font-display tracking-[0.25em] text-muted-foreground mt-4">
              AI・フルスタックエンジニア
            </p>
          </div>

          {/* Divider */}
          <div className={`flex items-center gap-0 ${isVisible ? "animate-slide-in-left animation-delay-400" : "opacity-0"}`}>
            <div className="h-[2px] w-12 bg-jp-sakura" />
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Description */}
          <p className={`text-sm text-muted-foreground leading-[2.2] font-serif ${isVisible ? "animate-slide-up animation-delay-600" : "opacity-0"}`}>
            8年・30以上のプロジェクトを経験。AI・Web・SaaS・モバイルまで、要件を的確に汲み取り最適な技術で形にします。
          </p>

          {/* Stats */}
          <div className={`flex items-center gap-8 ${isVisible ? "animate-slide-up animation-delay-600" : "opacity-0"}`}>
            <div>
              <p className="text-3xl font-black tracking-tighter">8<span className="text-jp-sakura">+</span></p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-1">年の実務経験</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <p className="text-3xl font-black tracking-tighter">30<span className="text-jp-sakura">+</span></p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-1">プロジェクト</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <p className="text-3xl font-black tracking-tighter">7<span className="text-jp-sakura">+</span></p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-1">技術領域</p>
            </div>
          </div>

          {/* CTA */}
          <div className={`flex items-center gap-8 ${isVisible ? "animate-slide-up animation-delay-800" : "opacity-0"}`}>
            <a
              href="#projects"
              className="group relative text-xs tracking-[0.25em] uppercase px-10 py-4 bg-jp-sakura text-white hover:bg-foreground hover:text-background transition-all duration-300"
            >
              実績を見る
            </a>
            <a
              href="#contact"
              className="text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 group flex items-center gap-3"
            >
              <span>お問い合わせ</span>
              <span className="inline-block w-6 h-px bg-jp-sakura group-hover:w-12 transition-all duration-300" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`flex flex-col items-start gap-3 mt-20 ${isVisible ? "animate-fade-in animation-delay-1000" : "opacity-0"}`}>
          <span className="text-[9px] tracking-[0.4em] uppercase text-muted-foreground font-display">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-jp-sakura to-transparent animate-pulse" />
        </div>

      </div>
    </section>
  );
}
