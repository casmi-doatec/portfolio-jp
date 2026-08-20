"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden">

      {/* ── Banner block ── */}
      <div className="relative w-full">

        {/* Banner — natural aspect ratio, not stretched */}
        <div className="relative w-full aspect-[21/6]">
          <Image
            src="/pegasus2.png"
            alt="DreamHigh"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        </div>

        {/* Avatar — overlapping banner at 3/5 from top */}
        <div
          className={`absolute right-10 lg:right-24 z-10 ${isVisible ? "animate-fade-in animation-delay-200" : "opacity-0"}`}
          style={{ top: "60%", transform: "translateY(-50%)" }}
        >
          <div className="relative w-24 h-24 lg:w-36 lg:h-36 rounded-full overflow-hidden border-2 border-white/80 shadow-2xl">
            <Image src="/real-kasumi.png" alt="かすみ" fill className="object-cover" priority />
          </div>
          <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-jp-sakura" />
          <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-jp-sakura" />
        </div>
      </div>

      {/* ── Content below banner ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 lg:py-20 space-y-10">

        {/* Top label */}
        <div className={`flex items-center gap-4 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="h-px w-12 bg-jp-sakura" />
          <span className="text-[10px] tracking-[0.5em] uppercase text-muted-foreground">Portfolio 2026</span>
          <span className="text-[10px] text-jp-sakura font-display tracking-widest">作品集</span>
        </div>

        <div className="max-w-xl space-y-8">

          {/* Name */}
          <div className={`${isVisible ? "animate-slide-up animation-delay-200" : "opacity-0"}`}>
            <p className="text-[11px] tracking-[0.4em] uppercase text-jp-sakura mb-3">Engineer</p>
            <h1 className="text-6xl lg:text-[7rem] font-black tracking-tighter leading-[0.88]">かすみ</h1>
            <p className="text-base lg:text-lg font-display tracking-[0.25em] text-muted-foreground mt-4">
              AI・フルスタックエンジニア
            </p>
          </div>

          {/* Divider */}
          <div className={`flex items-center ${isVisible ? "animate-slide-in-left animation-delay-400" : "opacity-0"}`}>
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
            <a href="#projects" className="text-xs tracking-[0.25em] uppercase px-10 py-4 bg-jp-sakura text-white hover:bg-foreground hover:text-background transition-all duration-300">
              実績を見る
            </a>
            <a href="#contact" className="text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-3">
              <span>お問い合わせ</span>
              <span className="inline-block w-6 h-px bg-jp-sakura transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
