import Link from "next/link";
import { GraphDashboard } from "@/components/graph-dashboard";
import { cardClass } from "@/components/section";
import { Cat } from "@/components/characters";

export default function GraphPage() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-sky-soft via-[#fff6f6] to-cream px-5 pb-24 pt-28 md:px-10">
      <div aria-hidden className="pointer-events-none absolute -right-20 top-20 size-80 animate-float rounded-full bg-white/70 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -left-24 top-[40rem] size-80 rounded-full bg-blush/70 blur-3xl" />

      <div className="relative mx-auto max-w-6xl space-y-16">
        <header className="space-y-6 text-center">
          <Link
            href="/"
            className="inline-flex rounded-full bg-white px-4 py-1.5 text-xs font-bold tracking-widest text-coral-deep shadow-sm ring-2 ring-blush transition hover:-translate-y-0.5"
          >
            ← BACK TO HOME
          </Link>
          <p>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 text-xs font-bold tracking-[0.2em] text-coral-deep shadow-sm ring-2 ring-blush">
              <span aria-hidden>♥</span>DEMO · BI DASHBOARD（可視化）
            </span>
          </p>
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <Cat className="size-16 -rotate-6 shadow-md ring-4 md:size-24" sizes="96px" />
            <h1 className="text-3xl font-black leading-tight tracking-tight text-cocoa md:text-5xl">
              <span className="bg-[linear-gradient(transparent_62%,#ffd3dc_62%)] px-2">製造業向け</span>
              <br />
              <span className="bg-[linear-gradient(transparent_62%,#ffd3dc_62%)] px-2">工程・在庫データ可視化デモ</span>
            </h1>
          </div>
          <p className="mx-auto max-w-3xl text-sm leading-8 text-cocoa-soft md:text-base md:leading-9">
            Supabase(PostgreSQL)上に蓄積された工程管理・在庫管理データを、Rechartsを用いてBIダッシュボード形式で可視化するデモページです。EDI連携・cronバッチで日々更新されるデータを想定し、「工程別進捗件数の推移」「品目別在庫数量の推移」「実績/目標比較」「不良要因の内訳」「工程別稼働率」「生産数量と不良率の複合グラフ」など、折れ線・積み上げ面・棒・ドーナツ・レーダー・複合の6種のグラフをサンプル実装しています（表示データはすべてダミーです）。
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-center text-2xl font-black text-cocoa md:text-3xl">
            設計方針：<span className="bg-[linear-gradient(transparent_62%,#ffd3dc_62%)] px-2">専用実装 vs 汎用化設計</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className={cardClass}>
              <p className="inline-block rounded-full bg-sky-soft px-3 py-1 text-xs font-bold text-[#2f6aa3]">(a) 専用実装</p>
              <p className="mt-4 text-sm leading-8 text-cocoa/80">
                1つのグラフに特化したクエリ・コンポーネントをそのまま実装。初回は最速・最安。ただしグラフを追加するたびに同程度の実装コストが都度発生します。
              </p>
            </article>
            <article className={cardClass}>
              <p className="inline-block rounded-full bg-blush px-3 py-1 text-xs font-bold text-coral-deep">(b) 汎用化設計</p>
              <p className="mt-4 text-sm leading-8 text-cocoa/80">
                集計APIをグルーピング軸・期間をパラメータ化し、描画コンポーネントを共通化。初回コストはやや増えますが、2つ目以降のグラフ追加が軽微な工数で済みます。
              </p>
            </article>
          </div>
          <p className="mx-auto max-w-3xl rounded-3xl bg-white/70 px-6 py-4 text-center text-xs leading-7 text-cocoa-soft ring-2 ring-white">
            本デモは(b)を見据え、ChartCardという共通の描画ラッパーを使ってグラフを追加しています。実案件では、集計クエリ側（Supabase View / RPC関数）も同様にパラメータ化することで、フロントエンド・バックエンド双方の汎用化を進める想定です。
          </p>
        </section>

        <GraphDashboard />
      </div>
    </main>
  );
}
