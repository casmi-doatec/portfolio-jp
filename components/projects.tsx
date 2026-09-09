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
      type: "system",
      client: "",
      description:
        "複数店舗を展開する買取事業者向けの予約管理システムを、要件定義から設計・実装・運用保守まで一貫して担当しました。本部・加盟店・査定スタッフが同時に利用する基幹システムとして、WebSocketによるリアルタイム同期、日／週／月のマルチビューカレンダー、多階層の権限管理、レポート集計、ブラックリスト・重複予約検知などを実装。一括取得から必要最小限のAPI取得方式へ刷新して読み込み速度と安定性を大幅に改善し、PWA対応で現場のスマホ運用にも最適化しています。",
      tags: ["Next.js", "TypeScript", "Prisma", "WebSocket", "PWA", "Google Cloud", "Python"],
      image: "/reservation.png",
    },
    {
      id: 3,
      title: "LA・JOLLA HALE",
      category: "ECサイト",
      type: "website",
      client: "",
      description:
        "Shopifyで構築したグローバル対応ECサイトのデザイン・実装を担当しました。ブランドイメージを反映したカスタムテーマを設計し、Stripeによる決済機能を組み込んで安全・スムーズな購入フローを実現。価格帯フィルタリング、ウィッシュリスト、商品比較機能を実装し、Revolution SliderやFotoramaによるリッチな商品ギャラリー、画像ズーム機能、年齢確認ポップアップ、サブスクリプション通知なども組み込んでコンバージョン率の向上につなげています。日本円対応で、レスポンシブデザインによりモバイル・タブレット・デスクトップすべてに最適化しています。",
      tags: ["Shopify", "Liquid", "JavaScript", "Stripe", "ECサイト設計", "Fotorama", "レスポンシブ"],
      image: "/lajollahale.png",
    },
    {
      id: 5,
      title: "オンライン講義プラットフォーム",
      category: "Webシステム",
      type: "system",
      client: "",
      description:
        "React・Node.js・Expressで構築したオンライン講義プラットフォームです。WebSocketとWebRTCによるライブ配信・双方向コミュニケーションを実装し、講師と受講者がリアルタイムで交流できる環境を構築。Stripeによるチケット購入、受講進捗トラッキング、試験時のAI顔認証（不正防止）、自動採点エンジン、合格者への修了証自動発行まで一貫して開発しました。",
      tags: ["React", "Node.js", "Express", "WebSocket", "WebRTC", "Stripe", "AI顔認証"],
      image: "/manabou.png",
    },
    {
      id: 6,
      title: "もし活",
      category: "モバイルアプリ",
      type: "mobile",
      client: "",
      description:
        "FlutterとTwilio SendGrid・Prismaを使ったヘルスケア系のモバイルアプリです。Firebaseでリアルタイムのデータ管理と認証を行い、KintoneをCRMとして顧客情報を一元管理。Twilio SendGridによるメール通知配信とFCMでのプッシュ通知を実装して、ユーザーにタイムリーに情報を届けられるようにしました。",
      tags: ["Flutter", "Firebase", "Prisma", "Kintone", "Twilio SendGrid", "FCM"],
      image: "/moshikatsu.png",
    },
    {
      id: 9,
      title: "JoBins（ジョビンズ）",
      category: "人材紹介SaaS",
      type: "system",
      client: "",
      description:
        "エージェント・採用企業・求職者をつなぐ人材紹介マネジメントプラットフォームのバックエンド改修に参画しました。C# / .NETで構築されたAPIサーバーのバグ調査・エラー修正を担当し、候補者管理・選考進捗管理・紹介料分配などの機能における不具合を特定して修正。ログ解析やデバッグを通じてシステムの安定性向上に貢献しました。",
      tags: ["Next.js", "TypeScript", "C# / .NET", "SQL Server", "Entity Framework", "Azure", "REST API", "多言語対応"],
      image: "/jobins.png",
    },
    {
      id: 10,
      title: "mimi HAIR SALON",
      category: "美容室Webサイト",
      type: "website",
      client: "",
      description:
        "美容室向けのWebサイトをデザインから実装まで一貫して担当しました。スタイリッシュなビジュアルを重視したレイアウトで、メニュー・コンセプト・スタイルギャラリー・ブログ・採用・アクセスの各ページを構築。予約ボタンの固定表示やレスポンシブデザインにより、スマホからの予約導線もスムーズに設計しています。",
      tags: ["HTML", "CSS", "JavaScript", "WordPress", "レスポンシブ", "UI/UXデザイン"],
      image: "/mimi-salon.png",
    },
    {
      id: 11,
      title: "ソウルシンク",
      category: "相性診断サービス",
      type: "system",
      client: "",
      description:
        "OpenAI APIを活用したAI駆動型の恋愛相性診断プラットフォームです。12星座の特性に基づく星座相性診断、16タイプのMBTI性格マッチング、詳細な性格分析の回答データをLLMに渡し、ユーザーごとにパーソナライズされた相性レポートを自然言語で自動生成。プロンプトエンジニアリングにより占星術・心理学の知見を組み込んだ精度の高い分析結果を返すようチューニングしています。",
      tags: ["Next.js", "OpenAI API", "LLM", "Tailwind CSS", "Vercel"],
      image: "/matching.png",
    },
    {
      id: 12,
      title: "おかわりマップ",
      category: "Webアプリ",
      type: "system",
      client: "",
      description:
        "「ごはんおかわり無料」の飲食店だけを地図から探せるグルメマップアプリです。OpenStreetMapを使った地図上での店舗検索に加え、Supabase Authによるユーザー認証、Supabase Database（PostgreSQL）での店舗データ・投稿管理、Supabase Storage での画像アップロード、タイムラインのリアルタイム更新を実装。GPSによる現在地取得、マイページ機能、PWA対応でスマホからワンタップで起動でき、Cookie同意バナー・オンボーディングモーダルなど細かなUX設計にもこだわっています。",
      tags: ["Next.js", "Supabase", "PostgreSQL", "OpenStreetMap", "PWA", "GPS", "Microsoft Clarity"],
      image: "/okawari.png",
    },
    {
      id: 13,
      title: "ACOT HAIR SALON",
      category: "美容室Webサイト",
      type: "website",
      client: "",
      description:
        "美容室向けのWebサイトをデザイン・コーディング込みで制作しました。余白と写真を活かしたナチュラルで洗練されたデザインが特徴で、メニュー・コンセプト・ピックアップ・スタイル・採用・ブログページを実装。固定予約ボタン・電話番号表示・レスポンシブ対応で、ユーザーの予約・来店アクションを促す設計にしています。",
      tags: ["HTML", "CSS", "JavaScript", "WordPress", "レスポンシブ", "UI/UXデザイン"],
      image: "/acot-salon.png",
    },
    {
      id: 15,
      title: "基幹データ連携型 Excel VBA 業務システム",
      category: "業務システム開発",
      type: "system",
      client: "",
      description:
        "受発注・在庫集計・帳票自動化を軸とした基幹データ連携型のExcel VBA業務システムの開発リーダーを担当しました。Access・SQL ServerとのADO/ODBC連携、月次約50万行の大量データ高速処理、既存マクロのリファクタリング、AIコーディング支援ツールの導入まで対応。5部門・約120名が利用するシステムを4名チームで構築・運用しています。",
      tags: ["VBA", "Excel", "Access", "SQL Server", "ADO", "Power Query", "SQL", "VBScript", "Git", "GitHub Copilot"],
      image: "",
    },
    {
      id: 16,
      title: "FAS",
      category: "ECサイト",
      type: "website",
      client: "",
      description:
        "発酵科学スキンケアブランドのECサイトにて、フロントエンド開発を担当しました。Next.js・Reactでの実装に加え、CMSと連携した商品情報・ジャーナル記事の管理を行い、更新のしやすさと表示速度を両立したサイト構築に対応しています。",
      tags: ["Next.js", "React", "CMS"],
      image: "",
    },
    {
      id: 17,
      title: "tomoLinks",
      category: "教育プラットフォームWebサイト",
      type: "website",
      client: "",
      description:
        "コニカミノルタが提供する学校向けAI学習プラットフォーム「tomoLinks」の公式サイトにて、WordPressでの構築・リリース対応を担当しました。ドメイン設定や公開後の不具合修正まで一貫して対応しています。",
      tags: ["WordPress"],
      image: "",
    },
    {
      id: 18,
      title: "ライフスタイルカンパニー",
      category: "コーポレートサイト",
      type: "website",
      client: "",
      description:
        "化粧品・ホビーブランドを展開するライフスタイルカンパニー株式会社のコーポレートサイトにて、デザインからWordPressでのコーディング、ドメイン設定、デプロイまで一貫して担当しました。",
      tags: ["WordPress", "UI/UXデザイン"],
      image: "",
    },
  ];

  const categoryGroups: { key: string; en: string; jp: string }[] = [
    { key: "system", en: "Web System", jp: "Webシステム" },
    { key: "website", en: "Web Site", jp: "Webサイト" },
    { key: "mobile", en: "Mobile", jp: "モバイル" },
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-32 lg:py-44 px-6 lg:px-12 bg-secondary/40 relative overflow-hidden"
    >
      {/* Background decorative */}
      <div className="absolute top-20 right-10 text-[15rem] font-display text-foreground/[0.04] select-none pointer-events-none leading-none">
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

          {/* Project list, grouped by type */}
          <div className="space-y-24 lg:space-y-32">
            {categoryGroups.map((group) => {
              const groupProjects = projects.filter((p) => p.type === group.key);
              if (groupProjects.length === 0) return null;

              return (
                <div key={group.key} className="space-y-16 lg:space-y-28">
                  {/* Category heading */}
                  <div
                    className={`flex items-center gap-5 ${
                      isVisible ? "animate-slide-up" : "opacity-0"
                    }`}
                  >
                    <span className="text-2xl lg:text-3xl font-black tracking-tight whitespace-nowrap">
                      {group.jp}
                    </span>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-jp-sakura/50 font-mono whitespace-nowrap">
                      {group.en}
                    </span>
                    <div className="h-px flex-1 bg-border" />
                  </div>

                  {groupProjects.map((project, groupIndex) => {
                    const index = projects.findIndex((p) => p.id === project.id);
                    return (
                      <div
                        key={project.id}
                        className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                          isVisible ? "animate-slide-up" : "opacity-0"
                        }`}
                        style={{ animationDelay: `${groupIndex * 0.15}s` }}
                      >
                        {/* Image */}
                        <button
                          onClick={() => setSelectedImage(index)}
                          className={`lg:col-span-7 relative overflow-hidden bg-background group ${
                            groupIndex % 2 === 1 ? "lg:order-2" : ""
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
                            groupIndex % 2 === 1 ? "lg:order-1" : ""
                          }`}
                        >
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <span className="text-[10px] tracking-[0.3em] text-jp-sakura/50 font-mono">
                                {String(groupIndex + 1).padStart(2, "0")}
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
                                className="text-[10px] tracking-wide px-2.5 py-1 border border-border text-muted-foreground hover:border-jp-sakura hover:text-foreground transition-all duration-300 cursor-default"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
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
