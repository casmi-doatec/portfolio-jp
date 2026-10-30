import Link from "next/link";
import { cookies } from "next/headers";
import { AUTH_COOKIE, AUTH_TOKEN } from "@/lib/auth";
import { Section, cardClass } from "@/components/section";
import { ProjectGallery } from "@/components/project-gallery";

type Project = {
  id: number;
  title: string;
  category: string;
  type: string;
  description: string;
  tags: string[];
  // Cover image shown at the top of the card
  cover: string;
  // Screens/pages of the project, each with its own image and caption
  screens: { src: string; caption: string }[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "出張買取プラス",
    category: "業務基幹システム",
    type: "system",
    description:
      "複数店舗を展開する買取事業者向けの予約管理システムを、要件定義から設計・実装・運用保守まで一貫して担当しました。本部・加盟店・査定スタッフが同時に利用する基幹システムとして、WebSocketによるリアルタイム同期、日／週／月のマルチビューカレンダー、多階層の権限管理、レポート集計、ブラックリスト・重複予約検知などを実装。一括取得から必要最小限のAPI取得方式へ刷新して読み込み速度と安定性を大幅に改善し、PWA対応で現場のスマホ運用にも最適化しています。",
    tags: ["Next.js", "TypeScript", "Prisma", "WebSocket", "PWA","PostgreSQL", "Google Cloud", "Python"],
    cover: "/reservation.png",
    screens: [
      { src: "/reservation/Screenshot_1.png", caption: "ログイン画面。本部・加盟店・査定スタッフそれぞれの権限でアクセスします。" },
      { src: "/reservation/Screenshot_2.png", caption: "予約カレンダー画面。日／週／月のマルチビューでリアルタイムに予約状況を確認できます。" },
      { src: "/reservation/Screenshot_3.png", caption: "予約詳細・編集画面。査定スタッフの割り当てやステータス管理を行います。" },
      { src: "/reservation/Screenshot_4.png", caption: "レポート集計画面。店舗別・期間別の実績を自動集計します。" },
      { src: "/reservation/Screenshot_5.png", caption: "権限管理画面。本部・加盟店・スタッフの多階層アクセス制御を設定します。" },
      { src: "/reservation/Screenshot_6.png", caption: "ブラックリスト・重複予約検知画面。トラブル防止のための管理機能です。" },
    ],
  },
  {
    id: 26,
    title: "ココミー",
    category: "恋活マッチングアプリ",
    type: "system",
    description:
      "恋活・恋人探しに特化したマッチングアプリにおいて、1対1の匿名音声通話機能「CoCo通話」の開発を担当しました。WebRTCを用いてリアルタイムの音声通話を実装し、ユーザーが身元を明かさずに会話できる匿名性を確保した設計に対応しています。iOS・Android両プラットフォームへのリリースも担当しました。",
    tags: ["WebRTC", "iOS", "Android", "音声通話", "匿名通話", "リアルタイム通信", "マッチングアプリ"],
    cover: "/cocome/1.jpg",
    screens: [
      { src: "/cocome/1.jpg", caption: "サービスのメインビジュアル。ストレスフリーな恋活をコンセプトに、自然体のカップルイメージで世界観を表現しています。" },
      { src: "/cocome/2.jpg", caption: "サービスのブランドイメージ。日常のひとときを切り取ったビジュアルで、気軽な出会いの雰囲気を演出しています。" },
      { src: "/cocome/3.jpg", caption: "サービスビジュアル。プライバシー保護と安心感を重視したマッチング体験を訴求するビジュアルです。" },
    ],
  },
  {
    id: 3,
    title: "LA・JOLLA HALE",
    category: "ECサイト",
    type: "website",
    description:
      "Shopifyで構築したグローバル対応ECサイトのデザイン・実装を担当しました。ブランドイメージを反映したカスタムテーマを設計し、Stripeによる決済機能を組み込んで安全・スムーズな購入フローを実現。価格帯フィルタリング、ウィッシュリスト、商品比較機能を実装し、Revolution SliderやFotoramaによるリッチな商品ギャラリー、画像ズーム機能、年齢確認ポップアップ、サブスクリプション通知なども組み込んでコンバージョン率の向上につなげています。日本円対応で、レスポンシブデザインによりモバイル・タブレット・デスクトップすべてに最適化しています。",
    tags: ["Shopify", "Liquid", "JavaScript", "Stripe", "ECサイト設計", "Fotorama", "レスポンシブ"],
    cover: "/lajollahale.png",
    screens: [
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
    description:
      "React・Node.js・Expressで構築したオンライン講義プラットフォームです。WebSocketとWebRTCによるライブ配信・双方向コミュニケーションを実装し、講師と受講者がリアルタイムで交流できる環境を構築。Stripeによるチケット購入、受講進捗トラッキング、試験時のAI顔認証（不正防止）、自動採点エンジン、合格者への修了証自動発行まで一貫して開発しました。",
    tags: ["React", "Node.js", "Express", "WebSocket", "WebRTC", "Stripe", "AI顔認証"],
    cover: "/manabou.png",
    screens: [
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
    description:
      "FlutterとTwilio SendGrid・Prismaを使ったヘルスケア系のモバイルアプリです。Firebaseでリアルタイムのデータ管理と認証を行い、SalesforceをCRMとして顧客情報を一元管理。Twilio SendGridによるメール通知配信とFCMでのプッシュ通知を実装して、ユーザーにタイムリーに情報を届けられるようにしました。",
    tags: ["Flutter", "Firebase", "Prisma", "Salesforce", "Twilio SendGrid", "FCM"],
    cover: "/moshikatsu.png",
    screens: [
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
    description:
      "エージェント・採用企業・求職者をつなぐ人材紹介マネジメントプラットフォームのバックエンド改修に参画しました。C# / .NETで構築されたAPIサーバーのバグ調査・エラー修正を担当し、候補者管理・選考進捗管理・紹介料分配などの機能における不具合を特定して修正。ログ解析やデバッグを通じてシステムの安定性向上に貢献しました。",
    tags: ["Next.js", "TypeScript", "C# / .NET", "SQL Server", "Entity Framework", "Azure", "REST API", "多言語対応"],
    cover: "/jobins.png",
    screens: [
      { src: "/jobins-site/1.png", caption: "トップページ。求人データベースや候補者管理など、人材紹介に必要な機能を訴求しています。" },
      { src: "/jobins-site/2.png", caption: "機能紹介セクション。求人データベース・選考管理・候補者管理・求人管理の4機能をタブで整理しています。" },
    ],
  },
  {
    id: 10,
    title: "mimi HAIR SALON",
    category: "美容室Webサイト",
    type: "website",
    description:
      "美容室向けのWebサイトをデザインから実装まで一貫して担当しました。スタイリッシュなビジュアルを重視したレイアウトで、メニュー・コンセプト・スタイルギャラリー・ブログ・採用・アクセスの各ページを構築。予約ボタンの固定表示やレスポンシブデザインにより、スマホからの予約導線もスムーズに設計しています。",
    tags: ["HTML", "CSS", "JavaScript", "WordPress", "レスポンシブ", "UI/UXデザイン"],
    cover: "/mimi-salon.png",
    screens: [
      { src: "/mimi/1.png", caption: "トップページ。スタイリッシュなビジュアルで世界観を表現しています。" },
      { src: "/mimi/2.png", caption: "MENUページ。カット・カラー・パーマ・トリートメントなど施術メニューをカテゴリ別に整理しています。" },
    ],
  },
  {
    id: 11,
    title: "ソウルシンク",
    category: "相性診断サービス",
    type: "system",
    description:
      "OpenAI APIを活用したAI駆動型の恋愛相性診断プラットフォームです。12星座の特性に基づく星座相性診断、16タイプのMBTI性格マッチング、詳細な性格分析の回答データをLLMに渡し、ユーザーごとにパーソナライズされた相性レポートを自然言語で自動生成。プロンプトエンジニアリングにより占星術・心理学の知見を組み込んだ精度の高い分析結果を返すようチューニングしています。",
    tags: ["Next.js","Python", "OpenAI API", "LLM", "Tailwind CSS", "SQL"],
    cover: "/matching.png",
    screens: [
      { src: "/matching/1.png", caption: "診断入力画面。星座・MBTI・性格分析の回答を入力します。" },
      { src: "/matching/2.png", caption: "相性レポート画面。OpenAI APIでパーソナライズされた分析結果を自然言語で生成しています。" },
    ],
  },
  {
    id: 12,
    title: "おかわりマップ",
    category: "Webアプリ",
    type: "system",
    description:
      "「ごはんおかわり無料」の飲食店だけを地図から探せるグルメマップアプリです。OpenStreetMapを使った地図上での店舗検索に加え、Supabase Authによるユーザー認証、Supabase Database（PostgreSQL）での店舗データ・投稿管理、Supabase Storage での画像アップロード、タイムラインのリアルタイム更新を実装。GPSによる現在地取得、マイページ機能、PWA対応でスマホからワンタップで起動でき、Cookie同意バナー・オンボーディングモーダルなど細かなUX設計にもこだわっています。",
    tags: ["Next.js", "Supabase", "PostgreSQL", "OpenStreetMap", "PWA", "GPS", "Microsoft Clarity"],
    cover: "/okawari.png",
    screens: [
      { src: "/map/1.png", caption: "地図画面。OpenStreetMapを使ってGPSによる現在地から近隣店舗を検索できます。" },
      { src: "/map/2.png", caption: "店舗投稿・マイページ画面。Supabase Storageで画像をアップロードできます。" },
      { src: "/map/3.png", caption: "店舗一覧・検索画面。カテゴリ別に絞り込み、オンボーディングモーダルで使い方を案内しています。" },
    ],
  },
  {
    id: 13,
    title: "ACOT HAIR SALON",
    category: "美容室Webサイト",
    type: "website",
    description:
      "美容室向けのWebサイトをデザイン・コーディング込みで制作しました。余白と写真を活かしたナチュラルで洗練されたデザインが特徴で、メニュー・コンセプト・ピックアップ・スタイル・採用・ブログページを実装。固定予約ボタン・電話番号表示・レスポンシブ対応で、ユーザーの予約・来店アクションを促す設計にしています。",
    tags: ["HTML", "CSS", "JavaScript", "WordPress", "レスポンシブ", "UI/UXデザイン"],
    cover: "/acot-salon.png",
    screens: [],
  },
  {
    id: 19,
    title: "モバイルアプリ制作実績",
    category: "モバイルアプリ",
    type: "mobile",
    description:
      "複数のモバイルアプリ開発に携わった実績です。アパレルブランド向けECアプリでは、カテゴリ別の商品ナビゲーション、絞り込み・並べ替え機能、カラー・サイズ選択付きの商品一覧、キーワード検索・画像検索を実装し、ブラック基調のスタイリッシュなデザインでブランドの世界観を表現しました。美容系コンテンツアプリでは動画フィード・お気に入り管理機能を、マッチングアプリではFlutterによるクロスプラットフォーム実装・WebSocketを使ったリアルタイムチャット・Stripe決済による課金機能を担当。愚痴投稿アプリではオンボーディング設計とガチャ要素のUI実装を行いました。",
    tags: ["React Native", "Flutter", "Stripe", "WebSocket", "UI/UXデザイン", "EC"],
    cover: "/other-apps/1.png",
    screens: [
      { src: "/other-apps/1.png", caption: "アパレルECアプリ。商品一覧・カテゴリナビゲーション画面で、絞り込み・並べ替えに対応しています。" },
      { src: "/other-apps/2.png", caption: "美容系コンテンツアプリ「BU」。動画フィードとマイページでのお気に入り管理機能です。" },
      { src: "/other-apps/3.png", caption: "マッチングアプリ。Flutter・WebSocketによるユーザー一覧とリアルタイムチャット画面です。" },
      { src: "/other-apps/4.png", caption: "愚痴投稿アプリ「呪PANDA」。投稿機能とガチャ要素を組み込んだオンボーディング画面です。" },
    ],
  },
  {
    id: 20,
    title: "Re:Stock",
    category: "在庫管理システム",
    type: "system",
    description:
      "リユース・買取事業者向けの在庫統合管理システムです。買取査定の登録から在庫管理、売上分析までを一元化。品目ごとのカテゴリ・状態管理、買取履歴の一覧・ステータス管理、査定サマリーの自動集計を実装し、複数店舗での在庫状況をリアルタイムに把握できるようにしています。",
    tags: ["Next.js", "TypeScript", "在庫管理", "ダッシュボード設計"],
    cover: "/stock/1.png",
    screens: [
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
    description:
      "Google Apps Scriptを使った検索順位のスクレイピング・レポーティングツールです。対象URLの検索順位を定期的にスクレイピングしてスプレッドシートに自動集計し、週次のランキング推移をグラフ化。手作業での順位チェック・レポート作成の工数を削減しています。",
    tags: ["Google Apps Script", "Webスクレイピング", "Google Sheets", "業務自動化"],
    cover: "/GAS/1.png",
    screens: [
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
    description:
      "Figmaを使った業界別Webデザインの制作実績です。美容室サイト、採用（リクルート）サイト、転職・退職サポート向けLP、ヘルスケア領域のコーポレートサイトなど、業種ごとの特性に合わせたデザイン設計を行っています。",
    tags: ["Figma", "UI/UXデザイン", "コーポレートサイト", "LP制作"],
    cover: "/design/4.png",
    screens: [
      { src: "/design/4.png", caption: "美容室サイトのデザイン。ナチュラルで洗練された雰囲気を意識し、スタイルギャラリーやブログ導線を設計しています。" },
      { src: "/design/6.png", caption: "採用（リクルート）サイトのデザイン。企業紹介からスタッフ紹介、募集要項まで一気通貫で設計しています。" },
      { src: "/design/3.jpg", caption: "転職・退職サポートサービスのLPデザイン。候補者の不安に寄り添う構成と、申し込み導線を意識して設計しています。" },
      { src: "/design/7.png", caption: "ヘルスケア領域のコーポレートサイトデザイン。信頼感のあるダークトーンを基調に、代表紹介・知見・お問い合わせ導線を設計しています。" },
    ],
  },
  {
    id: 23,
    title: "THE PERSONAL GYM",
    category: "パーソナルジムWebサイト",
    type: "website",
    description:
      "全国展開するパーソナルジムのコーポレートサイトを、デザインからWordPressでの実装まで一貫して担当しました。料金一覧・店舗一覧・ビフォーアフター・お客様の声・採用情報など複数コンテンツを整理し、無料カウンセリング予約への導線を軸としたレイアウトで構成しています。",
    tags: ["WordPress", "UI/UXデザイン", "レスポンシブ"],
    cover: "/gym/1.png",
    screens: [
      { src: "/gym/1.png", caption: "トップページ。無料カウンセリング予約への導線を軸にレイアウトを設計しています。" },
      { src: "/gym/2.png", caption: "店舗一覧セクション。各店舗の住所・アクセス・お問い合わせ導線を整理しています。" },
      { src: "/gym/3.png", caption: "特徴紹介セクション。トレーニング風景を大きく見せるビジュアル構成にしています。" },
      { src: "/gym/4.png", caption: "店舗詳細カード。写真・営業時間・お問い合わせボタンをまとめています。" },
    ],
  },
  {
    id: 24,
    title: "Luna.S Clinic",
    category: "美容皮膚科Webサイト",
    type: "website",
    description:
      "美容皮膚科クリニックのコーポレートサイトを、デザインからWordPressでの実装まで一貫して担当しました。ドクター紹介・料金表・症例一覧・採用情報を整理し、清潔感と信頼感を両立したビジュアルでWEB予約への導線を設計しています。",
    tags: ["WordPress", "UI/UXデザイン", "レスポンシブ"],
    cover: "/luna-s-clinic/1.png",
    screens: [
      { src: "/luna-s-clinic/1.png", caption: "トップページ。WEB予約ボタンを常時表示し、予約導線を意識した構成にしています。" },
      { src: "/luna-s-clinic/3.png", caption: "採用情報・予約カレンダーセクション。募集要項と空き状況を同じ画面で確認できます。" },
      { src: "/luna-s-clinic/2.png", caption: "メニューセクション。お悩み別に施術メニューを分類し、探しやすく整理しています。" },
    ],
  },
  {
    id: 25,
    title: "BIANCA",
    category: "美容皮膚科Webサイト",
    type: "website",
    description:
      "美容医療クリニックのコーポレートサイトを、デザインからWordPressでの実装まで一貫して担当しました。スキン・美容外科・美容婦人科・再生医療など多岐にわたる診療科目をカテゴリ別に整理し、来院実績・患者数・症例数などの実績値を見せることで信頼感を高める構成にしています。",
    tags: ["WordPress", "UI/UXデザイン", "レスポンシブ"],
    cover: "/bianca-clinic/2.png",
    screens: [
      { src: "/bianca-clinic/2.png", caption: "施術紹介セクション。動画コンテンツを用いたスライダー形式で構成しています。" },
      { src: "/bianca-clinic/3.png", caption: "ドクター紹介セクション。監修医師の実績・提携ブランドを見せる構成にしています。" },
      { src: "/bianca-clinic/1.png", caption: "トップページ。診療科目のカテゴリ整理と実績数値の見せ方を工夫しています。" },
    ],
  },
  {
    id: 27,
    title: "L'Oréal Paris Japan",
    category: "化粧品ブランドWebサイト",
    type: "website",
    description:
      "化粧品ブランドの日本向け公式サイトを、デザインからWordPressでの実装まで一貫して担当しました。新商品のキャンペーンページ、商品ラインナップ、ブランドのサステナビリティに関する取り組みなど、複数のコンテンツを統一感のあるビジュアルで構成しています。",
    tags: ["WordPress", "UI/UXデザイン", "レスポンシブ"],
    cover: "/loreal/1.png",
    screens: [
      { src: "/loreal/1.png", caption: "トップページ。新商品キャンペーンをメインビジュアルに据えた構成にしています。" },
      { src: "/loreal/2.png", caption: "商品ラインナップセクション。カラーバリエーションを一覧で見せる構成にしています。" },
      { src: "/loreal/3.png", caption: "ブランドの取り組み紹介セクション。サステナビリティに関するメッセージを打ち出しています。" },
    ],
  },
  {
    id: 28,
    title: "QUOREA FX",
    category: "AI自動売買プラットフォーム",
    type: "system",
    description:
      "AIによる投資戦略を誰もが手軽に利用できる外国為替証拠金取引（FX）・暗号資産・CFDの自動売買CtoCプラットフォームです。PHP（Yiiフレームワーク）で構築された堅牢なバックエンドと、AWS ALB配下のApache環境で安定稼働。プラットフォーム上の売買ロボットをAIが自動採点する仕組みにより、ユーザーが質の高いbotを簡単に選定できる設計になっています。",
    tags: ["PHP", "Yii Framework", "jQuery", "AWS", "Apache", "FX", "AI自動売買"],
    cover: "/quorea/1.png",
    screens: [
      { src: "/quorea/1.png", caption: "トップページ。AIによる自動売買戦略とロボット選定の価値訴求を行っています。" },
      { src: "/quorea/2.png", caption: "課題訴求セクション。FXトレーダーが抱える悩みを整理し、サービスへの導線を設計しています。" },
      { src: "/quorea/3.png", caption: "デモトレード・料金セクション。登録不要で自動売買ロボットを体験できる導線を設けています。" },
    ],
  },
  {
    id: 29,
    title: "comorebi",
    category: "訪問看護スケジュール管理システム",
    type: "system",
    description:
      "訪問看護ステーション向けのスケジュール管理プラットフォームです。Next.js（App Router・Turbopack）とReact Server Componentsで構築し、本部・事業所スタッフがログインしてスケジュールを一元管理できるB2B SaaSとして設計しています。Vercel上でのホスティングにより高速な表示とスムーズな認証フローを実現しています。",
    tags: ["Next.js", "React", "TypeScript", "Turbopack", "Vercel"],
    cover: "/comorebi.png",
    screens: [
      { src: "/comorebi/1.png", caption: "ログイン画面。訪問看護ステーションのスタッフ・管理者向けの認証画面です。" },
    ],
  },
  {
    id: 31,
    title: "notteco",
    category: "相乗りマッチングプラットフォーム",
    type: "system",
    description:
      "ドライバーと乗客をつなぐ相乗りマッチングサービスの開発に携わりました。ドライバーが出発地・目的地・経由地・日程・座席数を登録すると、システムが燃料費と高速道路通行料を合算して許容価格範囲を自動算定。利益目的の料金設定を防ぐ法的コンプライアンス要件をビジネスロジックとして実装し、白タク規制への対応を組み込んでいます。ユーザー登録にはSMS認証と本人確認フローを導入し、乗車リクエスト→ドライバー承認→成立→乗降記録→相互レビューまでの一連のフローを実装。カスタマーサポートはZendeskと連携し、キャンセルや通報の処理にも対応しています。",
    tags: ["SMS認証", "Zendesk", "経路・通行料API", "RDB", "本人確認", "両面マーケットプレイス", "法的コンプライアンス"],
    cover: "/notteco/1.png",
    screens: [
      { src: "/notteco/1.png", caption: "トップページ。出発地・目的地・出発日でドライブを検索できる導線と、リクエスト掲載機能を配置しています。" },
      { src: "/notteco/2.png", caption: "おすすめコンテンツセクション。利用シーン別の使い方案内と提携広告（楽天Car・レンタカー）を配置しています。" },
      { src: "/notteco/3.png", caption: "フッターセクション。サービス概要・運営会社（adish plus）の情報を整理しています。" },
    ],
  },
  {
    id: 15,
    title: "基幹データ連携型 Excel VBA 業務システム",
    category: "業務システム開発",
    type: "system",
    description:
      "受発注・在庫集計・帳票自動化を軸とした基幹データ連携型のExcel VBA業務システムの開発リーダーを担当しました。Access・SQL ServerとのADO/ODBC連携、月次約50万行の大量データ高速処理、既存マクロのリファクタリング、AIコーディング支援ツールの導入まで対応。5部門・約120名が利用するシステムを4名チームで構築・運用しています。",
    tags: ["VBA", "Excel", "Access", "SQL Server", "ADO", "Power Query", "SQL", "VBScript", "Git", "GitHub Copilot"],
    cover: "/excel-vba-system.svg",
    screens: [],
  },
  {
    id: 16,
    title: "FAS",
    category: "ECサイト",
    type: "website",
    description:
      "発酵科学スキンケアブランドのECサイトにて、フロントエンド開発を担当しました。Next.js・Reactでの実装に加え、CMSと連携した商品情報・ジャーナル記事の管理を行い、更新のしやすさと表示速度を両立したサイト構築に対応しています。",
    tags: ["Next.js", "React", "CMS"],
    cover: "/fas.png",
    screens: [
      { src: "/fas/1.png", caption: "ブランドトップページ。「FAS」のロゴタイプに商品ビジュアルを重ねた演出です。" },
      { src: "/fas/2.png", caption: "トップページ。Product・About・Storeなど、EC導線となるナビゲーションを構成しています。" },
      { src: "/fas/3.png", caption: "Topicsセクション。新商品・限定商品やイベント情報を一覧で発信しています。" },
    ],
  },
  {
    id: 17,
    title: "tomoLinks",
    category: "教育プラットフォームWebサイト",
    type: "website",
    description:
      "コニカミノルタが提供する学校向けAI学習プラットフォーム「tomoLinks」の公式サイトにて、デザインからWordPressでの構築・リリースまで一貫して担当しました。ドメイン設定や公開後の不具合修正にも対応しています。",
    tags: ["WordPress", "UI/UXデザイン", "サイトリリース", "ドメイン設定"],
    cover: "/tomolinks.png",
    screens: [
      { src: "/tomolinks/1.png", caption: "トップページ。AIと教育データで学びをサポートする製品コンセプトを訴求しています。" },
      { src: "/tomolinks/2.png", caption: "機能紹介セクション。生成AI活用支援機能とAIドリル機能を並べて紹介しています。" },
      { src: "/tomolinks/3.png", caption: "オールインワン機能の紹介図。AIドリルから生成AI活用まで、提供機能を一枚で整理しています。" },
    ],
  },
  {
    id: 18,
    title: "ライフスタイルカンパニー",
    category: "コーポレートサイト",
    type: "website",
    description:
      "化粧品・ホビーブランドを展開するライフスタイルカンパニー株式会社のコーポレートサイトにて、デザインからWordPressでのコーディング、ドメイン設定、デプロイまで一貫して担当しました。",
    tags: ["WordPress", "UI/UXデザイン", "サイトリリース", "ドメイン設定"],
    cover: "/lifestyle-co.png",
    screens: [
      { src: "/lifestyle-co/1.png", caption: "トップページ。「世界のトレンドをもっと身近に」をコンセプトにしたメインビジュアルです。" },
      { src: "/lifestyle-co/2.png", caption: "COSMETICSセクション。自社化粧品ブランドと店舗展開を紹介しています。" },
      { src: "/lifestyle-co/3.png", caption: "HOBBYセクション。ホビーブランド「TOKOTOYZ」のコンセプトを紹介しています。" },
    ],
  },
];

const INTRO =
  "これまで多くのお客様に貴重な機会をいただき、AI・Web・SaaS・モバイルアプリと、幅広い領域でプロダクト開発に携わらせていただきました。";

const categoryGroups: { key: string; jp: string; en: string; chip: string; tag: string }[] = [
  { key: "system", jp: "Webシステム", en: "Web System", chip: "bg-sky-soft text-[#2f6aa3]", tag: "bg-sky-soft/80 text-[#2f6aa3]" },
  { key: "website", jp: "Webサイト", en: "Web Site", chip: "bg-blush text-coral-deep", tag: "bg-blush/70 text-coral-deep" },
  { key: "mobile", jp: "モバイル", en: "Mobile", chip: "bg-[#ece6fb] text-[#6a4fb5]", tag: "bg-[#ece6fb]/80 text-[#6a4fb5]" },
];

export function Projects() {
  const isAuthed = cookies().get(AUTH_COOKIE)?.value === AUTH_TOKEN;

  if (!isAuthed) {
    return (
      <Section id="projects" tone="sky" label="Projects" title="開発実績">
        <div className={`${cardClass} mx-auto max-w-xl text-center`}>
          <div className="flex items-center justify-center gap-5">
            <p className="text-5xl" aria-hidden>🔒</p>
          </div>
          <p className="mt-4 font-bold text-cocoa">開発実績はログイン後に閲覧できます。</p>
          <Link
            href="/login"
            className="mt-6 inline-flex rounded-full bg-gradient-to-r from-[#ff7e95] to-coral px-8 py-3 text-sm font-bold text-white shadow-[0_8px_20px_-6px_rgba(244,96,122,0.6)] transition hover:-translate-y-0.5"
          >
            ログイン
          </Link>
        </div>
      </Section>
    );
  }

  return (
    <Section id="projects" tone="sky" label="Projects" title="開発実績" intro={INTRO}>
      <div className="space-y-20">
        {categoryGroups.map((group) => {
          const groupProjects = projects.filter((p) => p.type === group.key);
          if (groupProjects.length === 0) return null;

          return (
            <div key={group.key}>
              <h3 className="mb-8 flex items-center justify-center gap-3">
                <span className={`${group.chip} rounded-full px-6 py-2 text-lg font-black shadow-sm md:text-2xl`}>
                  {group.jp}
                </span>
                <span className="text-xs font-bold tracking-[0.25em] text-cocoa-soft">{group.en.toUpperCase()}</span>
              </h3>

              <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                {groupProjects.map((project) => (
                  <article key={project.id} className={`${cardClass} flex flex-col`}>
                    <ProjectGallery
                      title={project.title}
                      cover={project.cover}
                      screens={project.screens}
                    />

                    <p className={`${group.chip} mt-5 inline-block self-start rounded-full px-3 py-1 text-[11px] font-bold tracking-wide`}>
                      {project.category}
                    </p>
                    <h4 className="mt-3 text-xl font-black text-cocoa md:text-2xl">{project.title}</h4>
                    <p className="mt-3 text-sm leading-8 text-cocoa/80">{project.description}</p>

                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li key={tag} className={`${group.tag} rounded-full px-3 py-1 text-[11px] font-bold`}>
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
