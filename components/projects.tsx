"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export function Projects() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "出張買取プラス",
      category: "業務基幹システム",
      client: "株式会社プラス",
      description:
        "複数店舗を展開する買取事業者向けの予約管理システムを、要件定義から設計・実装・運用保守まで一貫して担当しました。本部・加盟店・査定スタッフが同時に利用する基幹システムとして、WebSocketによるリアルタイム同期、日／週／月のマルチビューカレンダー、多階層の権限管理、レポート集計、ブラックリスト・重複予約検知などを実装。一括取得から必要最小限のAPI取得方式へ刷新して読み込み速度と安定性を大幅に改善し、PWA対応で現場のスマホ運用にも最適化しています。",
      tags: ["Next.js", "TypeScript", "Prisma", "WebSocket", "PWA", "Google Cloud"],
      image: "/reservation.png",
    },
    {
      id: 2,
      title: "オンライン講義プラットフォーム",
      category: "Webシステム",
      client: "MANABOU株式会社",
      description:
        "React・Node.js・Expressで構築したオンライン講義システムです。WebSocketとWebRTCを使ったライブ配信・双方向のやり取りを実装し、Stripeでのチケット購入、進捗トラッキング、受験時のAI顔認証、自動採点、合格時の修了証発行まで、一連の機能を開発しました。",
      tags: ["React", "Node.js", "Express", "WebSocket", "WebRTC", "Stripe"],
      image: "/manabou.png",
    },
    {
      id: 3,
      title: "もし活",
      category: "モバイルアプリ",
      client: "株式会社GoodService",
      description:
        "FlutterとHealth API・Prismaを使ったヘルスケア系のモバイルアプリです。Firebaseでリアルタイムのデータ管理と認証を行い、SalesforceをCRMとして顧客情報を一元管理。FCMでのプッシュ通知も実装して、ユーザーにタイムリーに情報を届けられるようにしました。",
      tags: ["Flutter", "Firebase", "Salesforce", "FCM"],
      image: "/moshikatsu.png",
    },
    {
      id: 4,
      title: "lajollahale",
      category: "ECサイト",
      client: "リオネ株式会社",
      description:
        "Shopifyで構築した酒類のECサイトです。カスタムテーマの開発と、商品の検索・絞り込み機能を実装しました。決済フローの最適化とUI/UXの改善で、購入完了率の向上につなげています。",
      tags: ["Shopify", "Liquid", "JavaScript", "E-commerce"],
      image: "/lajollahale.png",
    },
    {
      id: 5,
      title: "Re:Stock",
      category: "在庫管理システム",
      client: "BizTech株式会社",
      description:
        "リユース事業者向けの在庫・買取・売上を一元管理する総合管理システムです。ダッシュボードでは売上・粗利・買取件数・在庫点数をリアルタイムに可視化し、売上／買取推移チャートやカテゴリ別売上分析で経営判断をサポート。買取査定から在庫登録、販売までのワークフローを統合し、Pythonによる売上予測・需要分析のバッチ処理とREST APIによる外部POS連携も実装しました。",
      tags: ["Next.js", "Laravel", "MySQL", "AWS", "Python", "REST API"],
      image: "/stock.png",
    },
    {
      id: 6,
      title: "Okawari",
      category: "Webアプリ",
      client: "非公開",
      description:
        "Google Maps APIを活用したレストラン検索システムです。現在地や指定エリアからの飲食店検索に加え、目的地までのルート案内機能を実装。Next.jsとTailwind CSSでレスポンシブなUIを構築し、MySQLで店舗データを管理。PWA対応により、スマホのホーム画面からネイティブアプリのように素早くアクセスできます。",
      tags: ["Next.js", "Tailwind CSS", "MySQL", "PWA"],
      image: "/okawari.png",
    },
    {
      id: 7,
      title: "相性診断",
      category: "マッチングサービス",
      client: "非公開",
      description:
        "男女の相性診断ができるマッチングシステムです。Next.jsとRadix UIでアクセシブルかつ直感的なUIを構築し、Tailwind CSSでレスポンシブ対応。Vercelへのデプロイで高速な表示を実現しています。",
      tags: ["Next.js", "Tailwind CSS", "Radix UI", "Vercel"],
      image: "/matching.png",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-32 lg:py-40 px-6 lg:px-12 bg-secondary/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="space-y-20">
          {/* Header */}
          <div
            className={`space-y-4 ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-foreground" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
                Projects
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black tracking-tighter">
              開発実績
            </h2>
            <p className="text-sm lg:text-base text-muted-foreground font-light leading-[2] max-w-2xl pt-2">
              これまで多くのお客様に貴重な機会をいただき、AI・Web・SaaS・モバイルアプリと、幅広い領域でプロダクト開発に携わらせていただきました。
            </p>
          </div>

          {/* Project list */}
          <div className="space-y-16 lg:space-y-24">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Image */}
                <button
                  onClick={() => setSelectedImage(index)}
                  className={`lg:col-span-7 relative overflow-hidden bg-background group ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-all duration-500" />
                    {/* Corner marks */}
                    <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </button>

                {/* Info */}
                <div
                  className={`lg:col-span-5 space-y-5 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/60 font-mono">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="h-px w-4 bg-foreground/20" />
                      <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold tracking-tight">
                      {project.title}
                    </h3>
                    {project.client && (
                      <p className="text-xs text-muted-foreground/60 tracking-wide">
                        {project.client}
                      </p>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground font-light leading-[1.9]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] tracking-wide px-2.5 py-1 border border-foreground/10 text-muted-foreground hover:border-foreground/30 hover:text-foreground transition-all duration-300 cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 lg:p-8 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-2xl text-muted-foreground hover:text-foreground transition-colors w-10 h-10 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            &times;
          </button>

          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[16/10] w-full bg-muted">
              <Image
                src={projects[selectedImage].image || "/placeholder.svg"}
                alt={projects[selectedImage].title}
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                  {projects[selectedImage].category}
                </span>
                {projects[selectedImage].client && (
                  <>
                    <div className="h-px w-3 bg-foreground/20" />
                    <span className="text-[10px] text-muted-foreground/60">
                      {projects[selectedImage].client}
                    </span>
                  </>
                )}
              </div>
              <h3 className="text-xl font-bold tracking-tight">
                {projects[selectedImage].title}
              </h3>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <button
                onClick={() =>
                  setSelectedImage(
                    selectedImage > 0 ? selectedImage - 1 : projects.length - 1
                  )
                }
                className="text-[11px] tracking-[0.15em] uppercase border border-foreground/20 px-5 py-2 hover:bg-foreground hover:text-background transition-all duration-300"
              >
                Prev
              </button>
              <button
                onClick={() =>
                  setSelectedImage(
                    selectedImage < projects.length - 1 ? selectedImage + 1 : 0
                  )
                }
                className="text-[11px] tracking-[0.15em] uppercase border border-foreground/20 px-5 py-2 hover:bg-foreground hover:text-background transition-all duration-300"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
