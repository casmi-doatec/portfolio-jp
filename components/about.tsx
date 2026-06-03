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
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            className={`lg:col-span-5 order-2 lg:order-1 ${
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
                {/* Corner marks with sakura accent */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-jp-sakura/30" />
                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-jp-sakura/30" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-jp-sakura/30" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-jp-sakura/30" />
              </div>
              {/* Offset decorative frame */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-jp-sakura/10 -z-10" />
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

            <div className="space-y-6 font-serif">
              <p
                className={`text-sm lg:text-base text-muted-foreground font-light leading-[2.2] ${
                  isVisible ? "animate-slide-up animation-delay-200" : "opacity-0"
                }`}
              >
                PythonとTypeScriptを軸に、AIとWebの両方を一人で設計・実装できるフルスタックエンジニアです。OpenAI・Claude APIによるLLMアプリ、LangChain+ベクトルDB（Pinecone・pgvector）でのRAG構築、プロンプトエンジニアリングによる精度チューニングなど、AI技術を実際のプロダクトに落とし込むことを専門としています。
              </p>
              <p
                className={`text-sm lg:text-base text-muted-foreground font-light leading-[2.2] ${
                  isVisible ? "animate-slide-up animation-delay-400" : "opacity-0"
                }`}
              >
                Web側はNext.js・FastAPI・Node.js・Laravelで、予約管理システム・在庫管理・ECサイト・SaaSなどを開発。Stripe決済、WebSocket/WebRTCリアルタイム通信、PWA対応まで一気通貫で対応できます。FlutterでのモバイルアプリやSalesforce・Shopify連携の経験もあります。
              </p>
              <p
                className={`text-sm lg:text-base text-muted-foreground font-light leading-[2.2] ${
                  isVisible ? "animate-slide-up animation-delay-600" : "opacity-0"
                }`}
              >
                これまでにAI顔認証、自動採点、相性診断レポート自動生成、社内ドキュメント検索チャットボット、業務自動化スクリプトなど、30以上のプロジェクトを担当してきました。技術選定から設計・実装・運用まで、お客様の「こういうものが欲しい」をそのまま形にします。
              </p>
            </div>

            <div
              className={`${
                isVisible ? "animate-slide-up animation-delay-800" : "opacity-0"
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
