"use client";

import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { GraphDashboard } from "@/components/graph-dashboard";

export default function GraphPage() {
  return (
    <main className="min-h-screen relative">
      <Navigation />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 lg:py-44 space-y-24">
        {/* Header */}
        <div className="space-y-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-muted-foreground hover:text-jp-sakura transition-colors duration-300"
          >
            <span>←</span>
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-jp-sakura/60" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
              Demo · BI Dashboard
            </span>
            <span className="text-xs text-jp-sakura/40 font-display">
              可視化
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-black tracking-tighter">
            製造業向け
            <br />
            工程・在庫データ可視化デモ
          </h1>
          <div className="h-[2px] w-16 bg-gradient-to-r from-jp-sakura/60 to-transparent" />

          <p className="text-sm lg:text-base text-muted-foreground font-serif font-light leading-[2.2] max-w-3xl">
            Supabase(PostgreSQL)上に蓄積された工程管理・在庫管理データを、Rechartsを用いてBIダッシュボード形式で可視化するデモページです。EDI連携・cronバッチで日々更新されるデータを想定し、「工程別の進捗件数の推移」「在庫数量の推移」「当日完了件数」の3種のグラフをサンプル実装しています（表示データはすべてダミーです）。
          </p>
        </div>

        {/* Design note */}
        <div className="border border-border bg-card/50 p-6 lg:p-10 space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-jp-sakura/60" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
              Design Note
            </span>
            <span className="text-xs text-jp-sakura/40 font-display">
              設計方針
            </span>
          </div>
          <h2 className="text-xl lg:text-2xl font-black tracking-tight">
            専用実装 vs 汎用化設計
          </h2>
          <div className="grid md:grid-cols-2 gap-8 pt-2">
            <div className="space-y-3 border-t-2 border-jp-sakura/20 pt-4">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                (a) 専用実装
              </p>
              <p className="text-sm text-muted-foreground font-serif font-light leading-[2]">
                1つのグラフに特化したクエリ・コンポーネントをそのまま実装。初回は最速・最安。ただしグラフを追加するたびに同程度の実装コストが都度発生します。
              </p>
            </div>
            <div className="space-y-3 border-t-2 border-jp-sakura/40 pt-4">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                (b) 汎用化設計
              </p>
              <p className="text-sm text-muted-foreground font-serif font-light leading-[2]">
                集計APIをグルーピング軸・期間をパラメータ化し、描画コンポーネントを共通化。初回コストはやや増えますが、2つ目以降のグラフ追加が軽微な工数で済みます。
              </p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground/70 font-serif font-light leading-[2] pt-2 border-t border-border">
            本デモは(b)を見据え、ChartCardという共通の描画ラッパーを使ってグラフを追加しています。実案件では、集計クエリ側（Supabase View / RPC関数）も同様にパラメータ化することで、フロントエンド・バックエンド双方の汎用化を進める想定です。
          </p>
        </div>

        {/* Charts */}
        <GraphDashboard />
      </div>
    </main>
  );
}
