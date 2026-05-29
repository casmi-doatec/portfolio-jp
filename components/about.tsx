"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-32 lg:py-40 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image — 5 cols */}
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
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                {/* Corner marks */}
                <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-foreground/40" />
                <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-foreground/40" />
                <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-foreground/40" />
                <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-foreground/40" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-foreground/5 -z-10" />
            </div>
          </div>

          {/* Text — 7 cols */}
          <div className="lg:col-span-7 space-y-10 order-1 lg:order-2">
            <div
              className={`space-y-4 ${
                isVisible ? "animate-slide-in-right" : "opacity-0"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-foreground" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
                  About
                </span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-black tracking-tighter">
                自己紹介
              </h2>
            </div>

            <div className="space-y-6">
              <p
                className={`text-sm lg:text-base text-muted-foreground font-light leading-[2] ${
                  isVisible ? "animate-slide-up animation-delay-200" : "opacity-0"
                }`}
              >
                AIとWebシステムの開発を8年以上やってきました。普段はPythonとTypeScriptをメインに、LLMを使った機能の組み込みやSaaS・Webアプリの開発に取り組んでいます。
              </p>
              <p
                className={`text-sm lg:text-base text-muted-foreground font-light leading-[2] ${
                  isVisible ? "animate-slide-up animation-delay-400" : "opacity-0"
                }`}
              >
                よく使うのはOpenAIやAnthropicのAPI、LangChain、ベクトルDB（PineconeやpgvectorなどでのRAG）あたりです。WebはNext.js・FastAPI・Node.jsで、AI機能を組み込んだサービスを一通り自分で作れるようにしています。
              </p>
              <p
                className={`text-sm lg:text-base text-muted-foreground font-light leading-[2] ${
                  isVisible ? "animate-slide-up animation-delay-600" : "opacity-0"
                }`}
              >
                これまでにAI顔認証や自動採点、社内向けのドキュメント検索チャットボット、業務自動化のスクリプトなどを担当してきました。最新の手法を追いかけつつ、実際のプロダクトに落とし込めるかどうかを大切にしています。
              </p>
            </div>

            <div
              className={`${
                isVisible ? "animate-slide-up animation-delay-800" : "opacity-0"
              }`}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase border border-foreground px-8 py-3.5 hover:bg-foreground hover:text-background transition-all duration-300"
              >
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
