"use client";

import { useEffect, useRef, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const chartColors = {
  sakura: "oklch(0.52 0.24 27)",
  ai: "oklch(0.38 0.12 240)",
  matcha: "oklch(0.45 0.1 145)",
  kincha: "oklch(0.55 0.12 65)",
  sumi: "oklch(0.3 0 0)",
};

const pieColors = [
  chartColors.sakura,
  chartColors.ai,
  chartColors.matcha,
  chartColors.kincha,
  chartColors.sumi,
];

// --- デモデータ生成: 30日分の工程別進捗件数の推移 ---
function buildProcessTrendData() {
  const base = { 切断: 210, 加工: 190, 組立: 150, 検査: 130, 出荷: 110 };
  const trend = { 切断: 2.4, 加工: 2.1, 組立: 2.0, 検査: 1.7, 出荷: 1.5 };
  const noise = { 切断: 14, 加工: 12, 組立: 10, 検査: 9, 出荷: 8 };

  return Array.from({ length: 30 }, (_, i) => {
    const day = i + 1;
    const weekday = day % 7;
    const weekendDip = weekday === 0 || weekday === 6 ? 0.72 : 1;
    // deterministic pseudo-random wave so the data looks organic but reproducible
    const wave = (key: string, seed: number) =>
      Math.sin(day * 0.6 + seed) * noise[key as keyof typeof noise];

    const row: Record<string, number | string> = { date: `9/${day}` };
    (Object.keys(base) as (keyof typeof base)[]).forEach((key, idx) => {
      const value =
        (base[key] + trend[key] * day + wave(key, idx * 1.7)) * weekendDip;
      row[key] = Math.max(0, Math.round(value));
    });
    return row;
  });
}
const processTrendData = buildProcessTrendData();

// --- デモデータ生成: 30日分の在庫推移 (品目別) ---
function buildInventoryData() {
  const items = {
    鋼材A: { base: 3200, safety: 2000, amp: 420, freq: 0.35, phase: 0 },
    鋼材B: { base: 1800, safety: 1200, amp: 260, freq: 0.28, phase: 1.4 },
    部品C: { base: 5400, safety: 3000, amp: 700, freq: 0.4, phase: 2.6 },
  };
  return Array.from({ length: 30 }, (_, i) => {
    const day = i + 1;
    const row: Record<string, number | string> = { date: `9/${day}` };
    (Object.keys(items) as (keyof typeof items)[]).forEach((key) => {
      const { base, amp, freq, phase } = items[key];
      const cycle = Math.sin(day * freq + phase) * amp;
      const drift = -day * 6;
      row[key] = Math.max(300, Math.round(base + cycle + drift));
    });
    row.安全在庫合計 = items.鋼材A.safety + items.鋼材B.safety + items.部品C.safety;
    return row;
  });
}
const inventoryData = buildInventoryData();

// --- 工程別 当日完了件数 (直近7日の実績/目標比較) ---
const dailyCompletionData = [
  { process: "切断", 実績: 268, 目標: 250 },
  { process: "加工", 実績: 244, 目標: 260 },
  { process: "組立", 実績: 206, 目標: 220 },
  { process: "検査", 実績: 189, 目標: 190 },
  { process: "出荷", 実績: 152, 目標: 170 },
];

// --- 不良要因の内訳 (デモデータ) ---
const defectBreakdownData = [
  { name: "寸法不良", value: 34 },
  { name: "外観傷", value: 21 },
  { name: "材質不良", value: 16 },
  { name: "組付けミス", value: 13 },
  { name: "その他", value: 9 },
];

// --- 拠点別 稼働率 (レーダーチャート) ---
const utilizationData = [
  { metric: "切断", 稼働率: 92, 目標: 90 },
  { metric: "加工", 稼働率: 85, 目標: 90 },
  { metric: "組立", 稼働率: 78, 目標: 85 },
  { metric: "検査", 稼働率: 88, 目標: 85 },
  { metric: "出荷", 稼働率: 81, 目標: 80 },
  { metric: "梱包", 稼働率: 90, 目標: 85 },
];

// --- 月次 生産数量 vs 不良率 (複合グラフ) ---
const monthlyQualityData = [
  { month: "4月", 生産数量: 5200, 不良率: 2.8 },
  { month: "5月", 生産数量: 5460, 不良率: 2.5 },
  { month: "6月", 生産数量: 5100, 不良率: 3.1 },
  { month: "7月", 生産数量: 5800, 不良率: 2.2 },
  { month: "8月", 生産数量: 6120, 不良率: 1.9 },
  { month: "9月", 生産数量: 6340, 不良率: 1.7 },
];

function ChartCard({
  index,
  labelJp,
  labelEn,
  title,
  description,
  children,
  tall = false,
}: {
  index: string;
  labelJp: string;
  labelEn: string;
  title: string;
  description: string;
  children: React.ReactNode;
  tall?: boolean;
}) {
  return (
    <div className="border border-border bg-card p-6 lg:p-10 space-y-8">
      <div className="flex items-start justify-between gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-jp-sakura/60" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
              {labelEn}
            </span>
            <span className="text-xs text-jp-sakura/40 font-display">
              {labelJp}
            </span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-black tracking-tight">
            {title}
          </h3>
          <p className="text-xs lg:text-sm text-muted-foreground font-serif font-light leading-relaxed max-w-xl">
            {description}
          </p>
        </div>
        <span className="text-4xl lg:text-5xl font-mono text-jp-sakura/20 shrink-0">
          {index}
        </span>
      </div>
      <div className={tall ? "h-80 lg:h-96 w-full" : "h-64 lg:h-80 w-full"}>
        {children}
      </div>
    </div>
  );
}

export function GraphDashboard() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const tooltipStyle = {
    backgroundColor: "var(--card)",
    border: "1px solid var(--border)",
    borderRadius: 0,
    fontSize: "12px",
    fontFamily: "var(--font-sans)",
  };

  const axisTick = { fontSize: 11, fill: "var(--muted-foreground)" };

  return (
    <div
      ref={sectionRef}
      className={`space-y-10 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
    >
      <ChartCard
        index="01"
        labelJp="推移"
        labelEn="Process Trend"
        title="工程別 進捗件数の推移（30日間）"
        description="EDI連携・cronバッチで集計した各工程の日次完了件数を折れ線で可視化。週末の稼働低下やボトルネック工程の早期発見に活用します。（デモデータ）"
        tall
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={processTrendData} margin={{ top: 8, right: 16, left: -16, bottom: 0 }}>
            <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="date"
              tick={axisTick}
              axisLine={{ stroke: "var(--border)" }}
              tickLine={false}
              interval={2}
            />
            <YAxis tick={axisTick} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={tooltipStyle} />
            <Legend wrapperStyle={{ fontSize: 11, paddingTop: 12 }} />
            <Line type="monotone" dataKey="切断" stroke={chartColors.sakura} strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="加工" stroke={chartColors.ai} strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="組立" stroke={chartColors.matcha} strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="検査" stroke={chartColors.kincha} strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="出荷" stroke={chartColors.sumi} strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard
        index="02"
        labelJp="在庫"
        labelEn="Inventory"
        title="品目別 在庫数量の推移（30日間）"
        description="主要3品目の実績在庫を積み上げ、合計安全在庫ラインと重ねて表示。品目単位での欠品・過剰在庫リスクを把握できます。（デモデータ）"
        tall
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={inventoryData} margin={{ top: 8, right: 16, left: -16, bottom: 0 }}>
            <defs>
              <linearGradient id="stockA" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={chartColors.ai} stopOpacity={0.5} />
                <stop offset="95%" stopColor={chartColors.ai} stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="stockB" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={chartColors.matcha} stopOpacity={0.5} />
                <stop offset="95%" stopColor={chartColors.matcha} stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="stockC" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={chartColors.kincha} stopOpacity={0.5} />
                <stop offset="95%" stopColor={chartColors.kincha} stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="date"
              tick={axisTick}
              axisLine={{ stroke: "var(--border)" }}
              tickLine={false}
              interval={2}
            />
            <YAxis tick={axisTick} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={tooltipStyle} />
            <Legend wrapperStyle={{ fontSize: 11, paddingTop: 12 }} />
            <Area type="monotone" dataKey="鋼材A" stackId="stock" stroke={chartColors.ai} fill="url(#stockA)" strokeWidth={1.5} />
            <Area type="monotone" dataKey="鋼材B" stackId="stock" stroke={chartColors.matcha} fill="url(#stockB)" strokeWidth={1.5} />
            <Area type="monotone" dataKey="部品C" stackId="stock" stroke={chartColors.kincha} fill="url(#stockC)" strokeWidth={1.5} />
            <Line type="monotone" dataKey="安全在庫合計" stroke={chartColors.sakura} strokeWidth={1.5} strokeDasharray="4 4" dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      <div className="grid lg:grid-cols-2 gap-10">
        <ChartCard
          index="03"
          labelJp="実績"
          labelEn="Actual vs Target"
          title="工程別 実績 / 目標件数（直近7日合計）"
          description="各工程の実績件数と目標件数を比較。目標未達の工程を即座に特定できます。（デモデータ）"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dailyCompletionData} margin={{ top: 8, right: 16, left: -16, bottom: 0 }}>
              <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="process" tick={axisTick} axisLine={{ stroke: "var(--border)" }} tickLine={false} />
              <YAxis tick={axisTick} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend wrapperStyle={{ fontSize: 11, paddingTop: 12 }} />
              <Bar dataKey="実績" fill={chartColors.sakura} />
              <Bar dataKey="目標" fill={chartColors.sumi} fillOpacity={0.25} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          index="04"
          labelJp="不良"
          labelEn="Defect Breakdown"
          title="不良要因の内訳"
          description="当月の不良件数を要因別に分解。件数の多い要因から優先的に対策を検討します。（デモデータ）"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip contentStyle={tooltipStyle} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Pie
                data={defectBreakdownData}
                dataKey="value"
                nameKey="name"
                innerRadius="55%"
                outerRadius="85%"
                paddingAngle={2}
              >
                {defectBreakdownData.map((entry, i) => (
                  <Cell key={entry.name} fill={pieColors[i % pieColors.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        <ChartCard
          index="05"
          labelJp="稼働"
          labelEn="Utilization"
          title="工程別 稼働率"
          description="各工程の稼働率を目標値と重ねてレーダー表示。バランスの偏りを俯瞰できます。（デモデータ）"
        >
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={utilizationData}>
              <PolarGrid stroke="var(--border)" />
              <PolarAngleAxis dataKey="metric" tick={axisTick} />
              <PolarRadiusAxis tick={{ fontSize: 10, fill: "var(--muted-foreground)" }} angle={90} domain={[0, 100]} />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend wrapperStyle={{ fontSize: 11, paddingTop: 12 }} />
              <Radar name="稼働率" dataKey="稼働率" stroke={chartColors.sakura} fill={chartColors.sakura} fillOpacity={0.35} />
              <Radar name="目標" dataKey="目標" stroke={chartColors.sumi} fill={chartColors.sumi} fillOpacity={0.08} />
            </RadarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          index="06"
          labelJp="品質"
          labelEn="Volume & Defect Rate"
          title="月次 生産数量と不良率"
          description="生産数量（棒）と不良率（線）を1枚に重ねた複合グラフ。生産増加時の品質トレードオフを確認できます。（デモデータ）"
        >
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={monthlyQualityData} margin={{ top: 8, right: 16, left: -16, bottom: 0 }}>
              <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" tick={axisTick} axisLine={{ stroke: "var(--border)" }} tickLine={false} />
              <YAxis yAxisId="left" tick={axisTick} axisLine={false} tickLine={false} />
              <YAxis yAxisId="right" orientation="right" tick={axisTick} axisLine={false} tickLine={false} unit="%" />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend wrapperStyle={{ fontSize: 11, paddingTop: 12 }} />
              <Bar yAxisId="left" dataKey="生産数量" fill={chartColors.ai} fillOpacity={0.75} />
              <Line yAxisId="right" type="monotone" dataKey="不良率" stroke={chartColors.sakura} strokeWidth={2} dot={{ r: 3 }} />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}
