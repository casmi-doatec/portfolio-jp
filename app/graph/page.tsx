import Link from "next/link";
import { GraphDashboard } from "@/components/graph-dashboard";

export default function GraphPage() {
  return (
    <main>
      <p>
        <Link href="/">← Back to Home</Link>
      </p>

      <header>
        <p>Demo · BI Dashboard（可視化）</p>
        <h1>製造業向け 工程・在庫データ可視化デモ</h1>
        <p>
          Supabase(PostgreSQL)上に蓄積された工程管理・在庫管理データを、Rechartsを用いてBIダッシュボード形式で可視化するデモページです。EDI連携・cronバッチで日々更新されるデータを想定し、「工程別進捗件数の推移」「品目別在庫数量の推移」「実績/目標比較」「不良要因の内訳」「工程別稼働率」「生産数量と不良率の複合グラフ」など、折れ線・積み上げ面・棒・ドーナツ・レーダー・複合の6種のグラフをサンプル実装しています（表示データはすべてダミーです）。
        </p>
      </header>

      <section>
        <h2>設計方針 (Design Note): 専用実装 vs 汎用化設計</h2>

        <h3>(a) 専用実装</h3>
        <p>
          1つのグラフに特化したクエリ・コンポーネントをそのまま実装。初回は最速・最安。ただしグラフを追加するたびに同程度の実装コストが都度発生します。
        </p>

        <h3>(b) 汎用化設計</h3>
        <p>
          集計APIをグルーピング軸・期間をパラメータ化し、描画コンポーネントを共通化。初回コストはやや増えますが、2つ目以降のグラフ追加が軽微な工数で済みます。
        </p>

        <p>
          本デモは(b)を見据え、ChartCardという共通の描画ラッパーを使ってグラフを追加しています。実案件では、集計クエリ側（Supabase View / RPC関数）も同様にパラメータ化することで、フロントエンド・バックエンド双方の汎用化を進める想定です。
        </p>
      </section>

      <GraphDashboard />
    </main>
  );
}
