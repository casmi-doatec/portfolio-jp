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
                はじめまして、遠藤悠晴です。「つくる側」に立ちたいという想いから、高校時代に独学でプログラミングを始めました。以来、コードを書くことがずっと自分の真ん中にあります。
              </p>
              <p
                className={`text-sm lg:text-base text-muted-foreground font-light leading-[2.2] ${
                  isVisible ? "animate-slide-up animation-delay-400" : "opacity-0"
                }`}
              >
                フロントエンド4年、バックエンド2年、フルスタック2年。計8年のキャリアの中で、AI SaaS・業務システム・ECサイト・モバイルアプリなど30以上のプロダクトを手がけてきました。
              </p>
              <p
                className={`text-sm lg:text-base text-muted-foreground font-light leading-[2.2] ${
                  isVisible ? "animate-slide-up animation-delay-600" : "opacity-0"
                }`}
              >
                大切にしているのは、ご依頼主様の「こうしたい」を正確に汲み取り、最適な技術で形にすること。丁寧なコミュニケーションと確実な納品で、安心してお任せいただける関係を築いていきます。
              </p>
            </div>

            {/* Career timeline */}
            <div
              className={`grid grid-cols-3 gap-4 pt-2 ${
                isVisible ? "animate-slide-up animation-delay-800" : "opacity-0"
              }`}
            >
              <div className="border-t-2 border-jp-sakura/30 pt-4 space-y-1">
                <p className="text-2xl font-black">4<span className="text-sm font-normal text-muted-foreground ml-1">年</span></p>
                <p className="text-[10px] tracking-[0.1em] text-muted-foreground uppercase">Frontend</p>
              </div>
              <div className="border-t-2 border-jp-sakura/20 pt-4 space-y-1">
                <p className="text-2xl font-black">2<span className="text-sm font-normal text-muted-foreground ml-1">年</span></p>
                <p className="text-[10px] tracking-[0.1em] text-muted-foreground uppercase">Backend</p>
              </div>
              <div className="border-t-2 border-jp-sakura/40 pt-4 space-y-1">
                <p className="text-2xl font-black">2<span className="text-sm font-normal text-muted-foreground ml-1">年</span></p>
                <p className="text-[10px] tracking-[0.1em] text-muted-foreground uppercase">Full-Stack</p>
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
