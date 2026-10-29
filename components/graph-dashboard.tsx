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
    <section>
      <h2>サンプル実装グラフ一覧</h2>
      <p>グラフ描画（Recharts）は削除し、各グラフの内容説明のみ掲載しています。</p>

      {charts.map((chart) => (
        <article key={chart.title}>
          <h3>{chart.title}</h3>
          <p>種類: {chart.type}</p>
          <p>{chart.description}</p>
        </article>
      ))}
    </section>
  );
}
