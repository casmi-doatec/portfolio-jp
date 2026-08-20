"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative">

      {/* ── Banner + Avatar (Lancers profile style) ── */}
      <div className="relative w-full">

        {/* Full-width banner */}
        <div className="relative w-full aspect-[16/5]">
          <Image
            src="/pegasus2.png"
            alt="DreamHigh"
            fill
            className="object-contain object-center"
            priority
          />
        </div>

        {/* Avatar — 3/5 inside banner, 2/5 below (translate-y-[40%]) */}
        <div
          className={`absolute bottom-0 left-6 lg:left-12 translate-y-[40%] z-10 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <div className="relative w-24 h-24 lg:w-36 lg:h-36 rounded-full overflow-hidden border-4 border-background shadow-sm">
            <Image src="/real-kasumi.png" alt="かすみ" fill className="object-cover" priority />
          </div>
        </div>
      </div>

      {/* ── Profile content (below banner) ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Spacer for avatar overflow (2/5 of avatar height) */}
        <div className="pt-14 lg:pt-20 pb-10 lg:pb-16 space-y-6">

          {/* Name & title */}
          <div className={`${isVisible ? "animate-slide-up animation-delay-200" : "opacity-0"}`}>
            <p className="text-[11px] tracking-[0.4em] uppercase text-jp-sakura mb-2">AI・フルスタックエンジニア</p>
            <h1 className="text-4xl lg:text-6xl font-black tracking-tighter">かすみ</h1>
          </div>

          {/* Description */}
          <p className={`text-sm text-muted-foreground leading-[2] font-serif max-w-2xl ${isVisible ? "animate-slide-up animation-delay-400" : "opacity-0"}`}>
            8年・30以上のプロジェクトを経験。AI・Web・SaaS・モバイルまで、要件を的確に汲み取り最適な技術で形にします。
          </p>

          {/* Stats + CTA row */}
          <div className={`flex flex-wrap items-center gap-8 pt-2 ${isVisible ? "animate-slide-up animation-delay-600" : "opacity-0"}`}>
            <div className="flex items-center gap-8">
              <div>
                <p className="text-2xl font-black tracking-tighter">8<span className="text-jp-sakura">+</span></p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-0.5">年の実務経験</p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div>
                <p className="text-2xl font-black tracking-tighter">30<span className="text-jp-sakura">+</span></p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-0.5">プロジェクト</p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div>
                <p className="text-2xl font-black tracking-tighter">7<span className="text-jp-sakura">+</span></p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-0.5">技術領域</p>
              </div>
            </div>

            <div className="flex items-center gap-4 ml-auto">
              <a href="#projects" className="text-xs tracking-[0.25em] uppercase px-8 py-3 bg-jp-sakura text-white hover:bg-foreground hover:text-background transition-all duration-300">
                実績を見る
              </a>
              <a href="#contact" className="text-xs tracking-[0.25em] uppercase px-8 py-3 border border-border hover:border-foreground transition-colors duration-300">
                お問い合わせ
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
