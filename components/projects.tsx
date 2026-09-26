"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

type GalleryImage = {
  src: string;
  caption: string;
};

type Project = {
  id: number;
  title: string;
  category: string;
  type: string;
  client: string;
  description: string;
  tags: string[];
  // Cover image shown on the project card
  image: string;
  // Full set of images for this project, browsed in the modal.
  // Each project gets its own folder: /public/projects/<slug>/1.png, 2.png, ...
  gallery: GalleryImage[];
};

export function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
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

  const projects: Project[] = [
    {
      id: 1,
      title: "出張買取プラス",
      category: "業務基幹システム",
      type: "system",
      client: "",
      description:
        "複数店舗を展開する買取事業者向けの予約管理システムを、要件定義から設計・実装・運用保守まで一貫して担当しました。本部・加盟店・査定スタッフが同時に利用する基幹システムとして、WebSocketによるリアルタイム同期、日／週／月のマルチビューカレンダー、多階層の権限管理、レポート集計、ブラックリスト・重複予約検知などを実装。一括取得から必要最小限のAPI取得方式へ刷新して読み込み速度と安定性を大幅に改善し、PWA対応で現場のスマホ運用にも最適化しています。",
      tags: ["Next.js", "TypeScript", "Prisma", "WebSocket", "PWA","PostgreSql", "Google Cloud", "Python"],
      image: "/reservation.png",
      gallery: [
        { src: "/reservation/Screenshot_1.png", caption: "ログイン画面。本部・加盟店・査定スタッフそれぞれの権限でアクセスします。" },
        { src: "/reservation/Screenshot_2.png", caption: "予約カレンダー画面。日／週／月のマルチビューでリアルタイムに予約状況を確認できます。" },
        { src: "/reservation/Screenshot_3.png", caption: "予約詳細・編集画面。査定スタッフの割り当てやステータス管理を行います。" },
        { src: "/reservation/Screenshot_4.png", caption: "レポート集計画面。店舗別・期間別の実績を自動集計します。" },
        { src: "/reservation/Screenshot_5.png", caption: "権限管理画面。本部・加盟店・スタッフの多階層アクセス制御を設定します。" },
        { src: "/reservation/Screenshot_6.png", caption: "ブラックリスト・重複予約検知画面。トラブル防止のための管理機能です。" },
      ],
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
      gallery: [
        { src: "/shopify/1.png", caption: "トップページ。ブランドイメージを反映したカスタムテーマを設計しています。" },
        { src: "/shopify/2.png", caption: "商品一覧・価格帯フィルタリング画面。Fotoramaによるリッチな商品ギャラリーを実装しています。" },
        { src: "/shopify/3.png", caption: "商品詳細・購入フロー。Stripeによる決済を組み込み、安全でスムーズな購入体験を実現しています。" },
      ],
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
      gallery: [
        { src: "/online-lecture/1.png", caption: "ライブ配信画面。WebRTCによる双方向の講義配信を実装しています。" },
        { src: "/online-lecture/2.png", caption: "チケット購入・受講進捗トラッキング画面。Stripe決済と連携しています。" },
        { src: "/online-lecture/3.png", caption: "AI顔認証による受験画面。不正防止と自動採点・修了証発行までを一貫して実装しています。" },
      ],
    },
    {
      id: 6,
      title: "もし活",
      category: "モバイルアプリ",
      type: "mobile",
      client: "",
      description:
        "FlutterとTwilio SendGrid・Prismaを使ったヘルスケア系のモバイルアプリです。Firebaseでリアルタイムのデータ管理と認証を行い、SalesforceをCRMとして顧客情報を一元管理。Twilio SendGridによるメール通知配信とFCMでのプッシュ通知を実装して、ユーザーにタイムリーに情報を届けられるようにしました。",
      tags: ["Flutter", "Firebase", "Prisma", "Salesforce", "Twilio SendGrid", "FCM"],
      image: "/moshikatsu.png",
      gallery: [
        { src: "/moshikatsu/1.png", caption: "アプリのホーム画面。Firebaseでユーザー認証とリアルタイムデータ管理を行っています。" },
        { src: "/moshikatsu/2.png", caption: "ヘルスケア情報の入力・管理画面です。" },
        { src: "/moshikatsu/3.png", caption: "通知設定画面。Twilio SendGridでのメール配信とFCMでのプッシュ通知に対応しています。" },
        { src: "/moshikatsu/4.png", caption: "マイページ画面。Salesforceと連携した顧客情報を一元管理しています。" },
      ],
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
      gallery: [{ src: "/jobins.png", caption: "" }],
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
      gallery: [{ src: "/mimi-salon.png", caption: "" }],
    },
    {
      id: 11,
      title: "ソウルシンク",
      category: "相性診断サービス",
      type: "system",
      client: "",
      description:
        "OpenAI APIを活用したAI駆動型の恋愛相性診断プラットフォームです。12星座の特性に基づく星座相性診断、16タイプのMBTI性格マッチング、詳細な性格分析の回答データをLLMに渡し、ユーザーごとにパーソナライズされた相性レポートを自然言語で自動生成。プロンプトエンジニアリングにより占星術・心理学の知見を組み込んだ精度の高い分析結果を返すようチューニングしています。",
      tags: ["Next.js","Python", "OpenAI API", "LLM", "Tailwind CSS", "SQL"],
      image: "/matching.png",
      gallery: [
        { src: "/matching/1.png", caption: "診断入力画面。星座・MBTI・性格分析の回答を入力します。" },
        { src: "/matching/2.png", caption: "相性レポート画面。OpenAI APIでパーソナライズされた分析結果を自然言語で生成しています。" },
      ],
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
      gallery: [
        { src: "/map/1.png", caption: "地図画面。OpenStreetMapを使ってGPSによる現在地から近隣店舗を検索できます。" },
        { src: "/map/2.png", caption: "店舗投稿・マイページ画面。Supabase Storageで画像をアップロードできます。" },
      ],
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
      gallery: [{ src: "/acot-salon.png", caption: "" }],
    },
    {
      id: 19,
      title: "アパレルECアプリ",
      category: "モバイルアプリ",
      type: "mobile",
      client: "",
      description:
        "アパレルブランド向けのECモバイルアプリのUI設計・実装に携わりました。カテゴリ別の商品ナビゲーション、絞り込み・並べ替え機能、カラー・サイズ選択付きの商品一覧、キーワード検索・画像検索に対応し、ブラック基調のスタイリッシュなデザインでブランドの世界観を表現しています。",
      tags: ["React Native", "UI/UXデザイン", "EC"],
      image: "/other-apps/1.png",
      gallery: [
        { src: "/other-apps/1.png", caption: "商品一覧・カテゴリナビゲーション画面。絞り込み・並べ替えに対応しています。" },
        { src: "/other-apps/2.png", caption: "商品詳細画面。カラー・サイズ選択やカート機能を実装しています。" },
        { src: "/other-apps/3.png", caption: "検索・お気に入り画面です。" },
        { src: "/other-apps/4.png", caption: "マイページ・アカウント管理画面です。" },
      ],
    },
    {
      id: 20,
      title: "Re:Stock",
      category: "在庫管理システム",
      type: "system",
      client: "",
      description:
        "リユース・買取事業者向けの在庫統合管理システムです。買取査定の登録から在庫管理、売上分析までを一元化。品目ごとのカテゴリ・状態管理、買取履歴の一覧・ステータス管理、査定サマリーの自動集計を実装し、複数店舗での在庫状況をリアルタイムに把握できるようにしています。",
      tags: ["Next.js", "TypeScript", "在庫管理", "ダッシュボード設計"],
      image: "/stock/1.png",
      gallery: [
        { src: "/stock/1.png", caption: "買取査定画面。商品登録と査定サマリーの自動集計を行います。" },
        { src: "/stock/2.png", caption: "在庫管理画面。品目・カテゴリ別の在庫状況を一覧で確認できます。" },
        { src: "/stock/3.png", caption: "売上分析ダッシュボード画面です。" },
      ],
    },
    {
      id: 21,
      title: "検索順位スクレイピング自動化",
      category: "業務自動化",
      type: "system",
      client: "",
      description:
        "Google Apps Scriptを使った検索順位のスクレイピング・レポーティングツールです。対象URLの検索順位を定期的にスクレイピングしてスプレッドシートに自動集計し、週次のランキング推移をグラフ化。手作業での順位チェック・レポート作成の工数を削減しています。",
      tags: ["Google Apps Script", "Webスクレイピング", "Google Sheets", "業務自動化"],
      image: "/GAS/1.png",
      gallery: [
        { src: "/GAS/1.png", caption: "Google Apps Scriptによるスクレイピング結果の集計シート。" },
        { src: "/GAS/2.png", caption: "Google Sheets上での週次データ集計。" },
        { src: "/GAS/3.png", caption: "自動生成されたランキング推移グラフ。" },
      ],
    },
    {
      id: 22,
      title: "業界別LP・コーポレートサイト デザイン",
      category: "Webデザイン",
      type: "website",
      client: "",
      description:
        "Figmaを使った業界別Webデザインの制作実績です。美容室サイト、採用（リクルート）サイト、転職・退職サポート向けLP、ヘルスケア領域のコーポレートサイトなど、業種ごとの特性に合わせたデザイン設計を行っています。",
      tags: ["Figma", "UI/UXデザイン", "コーポレートサイト", "LP制作"],
      image: "/design/4.png",
      gallery: [
        { src: "/design/4.png", caption: "美容室サイトのデザイン。ナチュラルで洗練された雰囲気を意識し、スタイルギャラリーやブログ導線を設計しています。" },
        { src: "/design/6.png", caption: "採用（リクルート）サイトのデザイン。企業紹介からスタッフ紹介、募集要項まで一気通貫で設計しています。" },
        { src: "/design/3.jpg", caption: "転職・退職サポートサービスのLPデザイン。候補者の不安に寄り添う構成と、申し込み導線を意識して設計しています。" },
        { src: "/design/7.png", caption: "ヘルスケア領域のコーポレートサイトデザイン。信頼感のあるダークトーンを基調に、代表紹介・知見・お問い合わせ導線を設計しています。" },
      ],
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
      gallery: [],
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
      image: "/fas-girl.png",
      gallery: [{ src: "/fas-girl.png", caption: "" }],
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
      image: "/tomolinks.png",
      gallery: [{ src: "/tomolinks.png", caption: "" }],
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
      image: "/lifestyle-co.png",
      gallery: [{ src: "/lifestyle-co.png", caption: "" }],
    },
  ];

  const categoryGroups: { key: string; en: string; jp: string }[] = [
    { key: "system", en: "Web System", jp: "Webシステム" },
    { key: "website", en: "Web Site", jp: "Webサイト" },
    { key: "mobile", en: "Mobile", jp: "モバイル" },
  ];

  const openGallery = (projectIndex: number) => {
    setActiveProject(projectIndex);
    setActiveImageIndex(0);
  };

  const closeGallery = () => {
    setActiveProject(null);
    setActiveImageIndex(0);
  };

  const activeGallery =
    activeProject !== null ? projects[activeProject].gallery : [];

  const goPrev = () => {
    if (activeGallery.length === 0) return;
    setActiveImageIndex((i) => (i > 0 ? i - 1 : activeGallery.length - 1));
  };

  const goNext = () => {
    if (activeGallery.length === 0) return;
    setActiveImageIndex((i) => (i < activeGallery.length - 1 ? i + 1 : 0));
  };

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
                        <div
                          className={`lg:col-span-7 relative overflow-hidden bg-background group ${
                            groupIndex % 2 === 1 ? "lg:order-2" : ""
                          }`}
                        >
                          <div className="relative aspect-[16/10] w-full">
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              fill
                              className="object-cover"
                            />
                            {/* Corner marks with sakura */}
                            <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-jp-sakura/0 group-hover:border-jp-sakura/40 transition-all duration-500 pointer-events-none" />
                            <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-jp-sakura/0 group-hover:border-jp-sakura/40 transition-all duration-500 pointer-events-none" />

                            {/* Access icon — opens the detail gallery modal */}
                            {project.gallery.length > 0 && (
                              <button
                                onClick={() => openGallery(index)}
                                aria-label={`${project.title} の詳細を見る`}
                                className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center bg-background/80 backdrop-blur-sm border border-border opacity-0 group-hover:opacity-100 hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="1.75"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="w-4 h-4"
                                >
                                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                  <path d="M15 3h6v6" />
                                  <path d="M10 14 21 3" />
                                </svg>
                              </button>
                            )}
                          </div>
                        </div>

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

                          {project.gallery.length > 0 && (
                            <button
                              onClick={() => openGallery(index)}
                              className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 pt-2 group/link"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-3.5 h-3.5"
                              >
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <path d="M15 3h6v6" />
                                <path d="M10 14 21 3" />
                              </svg>
                              詳細を見る
                            </button>
                          )}
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

      {/* Detail gallery modal */}
      {activeProject !== null && activeGallery.length > 0 && (
        <div
          className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex items-center justify-center p-4 lg:p-8 animate-fade-in"
          onClick={closeGallery}
        >
          <button
            className="absolute top-6 right-6 text-2xl text-muted-foreground hover:text-foreground transition-colors w-10 h-10 flex items-center justify-center"
            onClick={closeGallery}
            aria-label="Close"
          >
            &times;
          </button>

          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Project title */}
            <div className="mb-6 space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                  {projects[activeProject].category}
                </span>
                <div className="h-px w-3 bg-jp-sakura/20" />
                <span className="text-[10px] tracking-[0.3em] text-jp-sakura/50 font-mono">
                  {String(activeImageIndex + 1).padStart(2, "0")} /{" "}
                  {String(activeGallery.length).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold tracking-tight">
                {projects[activeProject].title}
              </h3>
            </div>

            {/* Horizontal image flow */}
            <div className="relative flex items-center gap-3 lg:gap-6">
              <button
                onClick={goPrev}
                aria-label="Previous image"
                className="shrink-0 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center border border-foreground/20 hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 disabled:opacity-30"
                disabled={activeGallery.length < 2}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 lg:w-5 lg:h-5"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>

              <div className="relative aspect-[16/10] w-full bg-muted overflow-hidden">
                <Image
                  src={activeGallery[activeImageIndex].src || "/placeholder.svg"}
                  alt={`${projects[activeProject].title} - ${activeImageIndex + 1}`}
                  fill
                  className="object-contain"
                />
              </div>

              <button
                onClick={goNext}
                aria-label="Next image"
                className="shrink-0 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center border border-foreground/20 hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 disabled:opacity-30"
                disabled={activeGallery.length < 2}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 lg:w-5 lg:h-5"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>

            {/* Per-image caption */}
            {activeGallery[activeImageIndex].caption && (
              <p className="mt-6 text-sm text-muted-foreground font-light leading-[2] font-serif max-w-3xl mx-auto text-center">
                {activeGallery[activeImageIndex].caption}
              </p>
            )}

            {/* Thumbnail strip */}
            {activeGallery.length > 1 && (
              <div className="mt-6 flex items-center justify-center gap-2 overflow-x-auto pb-1">
                {activeGallery.map((img, i) => (
                  <button
                    key={img.src + i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`relative shrink-0 w-16 h-10 lg:w-20 lg:h-12 overflow-hidden border transition-all duration-300 ${
                      i === activeImageIndex
                        ? "border-jp-sakura"
                        : "border-border opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img.src || "/placeholder.svg"}
                      alt={`thumbnail ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
