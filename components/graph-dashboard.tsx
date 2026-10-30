import { cardClass } from "@/components/section";
import { accentAt } from "@/components/accents";

const charts = [
  {
    title: "工程別 進捗件数の推移（30日間）",
    type: "折れ線グラフ",
    description:
      "EDI連携・cronバッチで集計した各工程の日次完了件数を折れ線で可視化。週末の稼働低下やボトルネック工程の早期発見に活用します。（デモデータ）",
  },
  {
    title: "品目別 在庫数量の推移（30日間）",
    type: "積み上げ面グラフ",
    description:
      "主要3品目の実績在庫を積み上げ、合計安全在庫ラインと重ねて表示。品目単位での欠品・過剰在庫リスクを把握できます。（デモデータ）",
  },
  {
    title: "工程別 実績 / 目標件数（直近7日合計）",
    type: "棒グラフ",
    description:
      "各工程の実績件数と目標件数を比較。目標未達の工程を即座に特定できます。（デモデータ）",
  },
  {
    title: "不良要因の内訳",
    type: "ドーナツグラフ",
    description:
      "当月の不良件数を要因別に分解。件数の多い要因から優先的に対策を検討します。（デモデータ）",
  },
  {
    title: "工程別 稼働率",
    type: "レーダーチャート",
    description:
      "各工程の稼働率を目標値と重ねてレーダー表示。バランスの偏りを俯瞰できます。（デモデータ）",
  },
  {
    title: "月次 生産数量と不良率",
    type: "複合グラフ（棒＋線）",
    description:
      "生産数量（棒）と不良率（線）を1枚に重ねた複合グラフ。生産増加時の品質トレードオフを確認できます。（デモデータ）",
  },
];

export function GraphDashboard() {
  return (
    <div>
      <h2 className="mb-2 text-center text-2xl font-black text-cocoa md:text-3xl">
        <span className="bg-[linear-gradient(transparent_62%,#ffd3dc_62%)] px-2">サンプル実装グラフ一覧</span>
      </h2>
      <p className="mb-10 text-center text-xs leading-6 text-cocoa-soft">
        グラフ描画（Recharts）は削除し、各グラフの内容説明のみ掲載しています。
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {charts.map((chart, i) => (
          <article key={chart.title} className={cardClass}>
            <p className={`${accentAt(i).chip} inline-block rounded-full px-3 py-1 text-[11px] font-bold`}>{chart.type}</p>
            <h3 className="mt-3 text-lg font-black text-cocoa">{chart.title}</h3>
            <p className="mt-3 text-sm leading-8 text-cocoa/80">{chart.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
