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

      {/* ── Banner + Avatar ── */}
      <div className="relative w-full">
        <Image
          src="/Puzzled Cat in a Hidden-Character Valley.png"
          alt="Puzzled cat in a hidden-character valley"
          width={2172}
          height={724}
          className="w-full h-auto block"
          priority
        />

        {/* Lighten overlay */}
        <div className="absolute inset-0 bg-background/25 pointer-events-none" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background/70 to-transparent pointer-events-none" />

        {/* Avatar — bottom-left, overlapping the banner edge (keeps the cat on the right visible) */}
        <div
          className={`absolute left-6 lg:left-16 bottom-0 translate-y-1/2 z-10 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <div className="relative w-28 h-28 lg:w-44 lg:h-44 rounded-full overflow-hidden border-4 border-background shadow-sm">
            <Image src="/neko.png" alt="NekoMaki" fill className="object-cover" priority />
          </div>
        </div>
      </div>

      {/* ── Profile content (below banner) ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="pt-16 lg:pt-24 pb-10 lg:pb-16 space-y-6">

          {/* Name & title */}
          <div className={`${isVisible ? "animate-slide-up animation-delay-200" : "opacity-0"}`}>
            <p className="text-[11px] tracking-[0.4em] uppercase text-jp-sakura mb-2">AI・フルスタックエンジニア</p>
            <h1 className="text-4xl lg:text-6xl font-black tracking-tighter">NekoMaki</h1>
          </div>

          {/* Description */}
          <p className={`text-sm text-muted-foreground leading-[2] font-serif max-w-2xl ${isVisible ? "animate-slide-up animation-delay-400" : "opacity-0"}`}>
            AI・Web・SaaS・モバイルまで、要件を的確に汲み取り最適な技術で形にします。
          </p>

          {/* CTA row */}
          <div className={`flex flex-wrap items-center gap-4 pt-2 ${isVisible ? "animate-slide-up animation-delay-600" : "opacity-0"}`}>
            <a href="#projects" className="text-xs tracking-[0.25em] uppercase px-8 py-3 bg-jp-sakura text-white hover:bg-foreground hover:text-background transition-all duration-300">
              実績を見る
            </a>
            <a href="#contact" className="text-xs tracking-[0.25em] uppercase px-8 py-3 border border-border hover:border-foreground transition-colors duration-300">
              お問い合わせ
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
