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
                  src="/neko.png"
                  alt="NekoMaki"
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
                AWS を用いたインフラ設計・構築・運用保守に約 8 年携わってきました。Web サービスの新規立ち上げから既存システムの保守まで、ネットワーク、コンピューティング、データベース、監視、デプロイ基盤を横断して担当しています。
              </p>
              <p
                className={`text-sm lg:text-base text-muted-foreground font-light leading-[2.2] ${
                  isVisible ? "animate-slide-up animation-delay-400" : "opacity-0"
                }`}
              >
                2025 年には、月間 PV 約 800 万の EC 系 Web サービスで AWS インフラの運用保守を担当し、Terraform のコードと実環境の差分解消、GitHub Actions の OIDC 連携によるデプロイ改善、本番障害の復旧と再発防止に取り組みました。また、GCP 上の本番環境を 1 名体制で構築・運用し、要件定義から稼働後の障害対応まで一貫して担当しています。
              </p>
              <p
                className={`text-sm lg:text-base text-muted-foreground font-light leading-[2.2] ${
                  isVisible ? "animate-slide-up animation-delay-600" : "opacity-0"
                }`}
              >
                Terraform による構成管理（約 5 年、新規構築 3 件・既存保守 4 件）、Docker によるコンテナ化、CI/CD パイプラインの構築、CloudWatch を用いた監視の整備など、チームが安全にリリースを続けられる仕組みづくりを重視しています。障害対応では、アプリケーションの内部まで理解していることを強みに、インフラとアプリケーションの両面から原因を切り分けてきました。
              </p>
              <p
                className={`text-sm lg:text-base text-muted-foreground font-light leading-[2.2] ${
                  isVisible ? "animate-slide-up animation-delay-800" : "opacity-0"
                }`}
              >
                バックエンドを中心に、React／Next.js によるフロントエンドまで含めたフルスタックな開発経験があり、設計から実装まで一貫して手がけた Web アプリケーションをポートフォリオに掲載しています。近年は、LLM を活用した業務ツールの開発にも取り組んでいます。
              </p>
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
