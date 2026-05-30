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
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
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
      tags: ["React", "Node.js", "Express", "WebSocket", "WebRTC", "Stripe", "AI顔認証"],
      image: "/manabou.png",
    },
    {
      id: 3,
      title: "もし活",
      category: "モバイルアプリ",
      client: "株式会社GoodService",
      description:
        "FlutterとHealth API・Prismaを使ったヘルスケア系のモバイルアプリです。Firebaseでリアルタイムのデータ管理と認証を行い、SalesforceをCRMとして顧客情報を一元管理。FCMでのプッシュ通知も実装して、ユーザーにタイムリーに情報を届けられるようにしました。",
      tags: ["Flutter", "Firebase", "Prisma", "Salesforce", "Health API", "FCM"],
      image: "/moshikatsu.png",
    },
    {
      id: 4,
      title: "LA・JOLLA HALE",
      category: "ECサイト",
      client: "リオネ株式会社",
      url: "https://lajollahale.com/",
      description:
        "Shopifyで構築したグローバル対応のECサイトです。カスタムテーマの開発に加え、価格帯フィルタリング、ウィッシュリスト、商品比較機能を実装。Revolution SliderやFotoramaによるリッチな商品ギャラリー、画像ズーム機能、年齢確認ポップアップ、サブスクリプション通知なども組み込み、購入完了率の向上につなげています。日本円対応で、レスポンシブデザインによりモバイル・タブレット・デスクトップすべてに最適化しています。",
      tags: ["Shopify", "Liquid", "JavaScript", "Slick", "Fotorama", "レスポンシブ"],
      image: "/lajollahale.png",
    },
    {
      id: 5,
      title: "Re:Stock",
      category: "在庫管理システム",
      client: "BizTech株式会社",
      description:
        "リユース事業者向けに開発した在庫管理システムです。商品の入荷・出荷・在庫数をリアルタイムで追跡し、ダッシュボードで売上・粗利・在庫回転率などをグラフで可視化。カテゴリ別の売上分析や在庫アラート機能で、仕入れ判断と在庫最適化をサポートします。バーコード読み取りによる入出庫処理、CSV一括インポート、REST APIによる外部POS連携にも対応しています。",
      tags: ["Next.js", "Laravel", "MySQL", "AWS", "Python", "REST API", "バーコード"],
      image: "/stock.png",
    },
    {
      id: 6,
      title: "Okawari",
      category: "Webアプリ",
      client: "非公開",
      url: "https://okawari-map.jp/",
      description:
        "「ごはんおかわり無料」の飲食店だけを地図から探せるグルメマップアプリです。OpenStreetMapを使った地図上での店舗検索に加え、ユーザーが新しい店舗を投稿できるタイムライン機能、GPSによる現在地取得、マイページ機能を実装。PWA対応でスマホのホーム画面からワンタップで起動でき、Cookie同意バナー・オンボーディングモーダル・404ページの丼イラストなど、細かなUX設計にもこだわっています。Microsoft Clarityによるヒートマップ分析も導入しています。",
      tags: ["Next.js", "OpenStreetMap", "PWA", "GPS", "Google Analytics", "Microsoft Clarity"],
      image: "/okawari.png",
    },
    {
      id: 7,
      title: "ソウルシンク",
      category: "相性診断サービス",
      client: "非公開",
      url: "https://ai-mixer.jp/",
      description:
        "OpenAI APIを活用したAI駆動型の恋愛相性診断プラットフォームです。12星座の特性に基づく星座相性診断、16タイプのMBTI性格マッチング、詳細な性格分析の回答データをLLMに渡し、ユーザーごとにパーソナライズされた相性レポートを自然言語で自動生成。プロンプトエンジニアリングにより占星術・心理学の知見を組み込んだ精度の高い分析結果を返すようチューニングしています。",
      tags: ["Next.js", "OpenAI API", "LLM", "Tailwind CSS", "Vercel"],
      image: "/matching.png",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-32 lg:py-44 px-6 lg:px-12 bg-secondary/40 relative overflow-hidden"
    >
      {/* Background decorative */}
      <div className="absolute top-20 right-10 text-[15rem] font-display text-foreground/[0.015] select-none pointer-events-none leading-none">
        実績
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="space-y-20">
          {/* Header */}
          <div
            className={`space-y-4 ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-jp-sakura/60" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
                Projects
              </span>
              <span className="text-xs text-jp-sakura/40 font-display">
                開発実績
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black tracking-tighter">
              開発実績
            </h2>
            <div className="h-[2px] w-16 bg-gradient-to-r from-jp-sakura/60 to-transparent" />
            <p className="text-sm lg:text-base text-muted-foreground font-light leading-[2.2] max-w-2xl pt-2 font-serif">
              これまで多くのお客様に貴重な機会をいただき、AI・Web・SaaS・モバイルアプリと、幅広い領域でプロダクト開発に携わらせていただきました。
            </p>
          </div>

          {/* Project list */}
          <div className="space-y-16 lg:space-y-28">
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
                    {/* Corner marks with sakura */}
                    <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-jp-sakura/0 group-hover:border-jp-sakura/40 transition-all duration-500" />
                    <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-jp-sakura/0 group-hover:border-jp-sakura/40 transition-all duration-500" />
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
                      <span className="text-[10px] tracking-[0.3em] text-jp-sakura/50 font-mono">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="h-px w-4 bg-jp-sakura/20" />
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
                    <div className="h-[2px] w-10 bg-gradient-to-r from-jp-sakura/40 to-transparent" />
                  </div>

                  <p className="text-sm text-muted-foreground font-light leading-[2] font-serif">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] tracking-wide px-2.5 py-1 border border-foreground/8 text-muted-foreground hover:border-jp-sakura/30 hover:text-foreground transition-all duration-500 cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {"url" in project && project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-500 group/link pt-2"
                    >
                      <span>サイトを見る</span>
                      <svg
                        className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex items-center justify-center p-4 lg:p-8 animate-fade-in"
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
                    <div className="h-px w-3 bg-jp-sakura/20" />
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
                className="text-[11px] tracking-[0.15em] uppercase border border-foreground/20 px-5 py-2 hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
              >
                Prev
              </button>
              <button
                onClick={() =>
                  setSelectedImage(
                    selectedImage < projects.length - 1 ? selectedImage + 1 : 0
                  )
                }
                className="text-[11px] tracking-[0.15em] uppercase border border-foreground/20 px-5 py-2 hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
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
