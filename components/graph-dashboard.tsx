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
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// 工程別の進捗件数の推移 (デモデータ)
const processTrendData = [
  { date: "9/1", 切断: 42, 加工: 38, 組立: 30, 検査: 27 },
  { date: "9/2", 切断: 45, 加工: 40, 組立: 33, 検査: 29 },
  { date: "9/3", 切断: 40, 加工: 41, 組立: 35, 検査: 31 },
  { date: "9/4", 切断: 48, 加工: 44, 組立: 34, 検査: 30 },
  { date: "9/5", 切断: 51, 加工: 46, 組立: 38, 検査: 34 },
  { date: "9/6", 切断: 47, 加工: 45, 組立: 40, 検査: 36 },
  { date: "9/7", 切断: 53, 加工: 49, 組立: 41, 検査: 38 },
  { date: "9/8", 切断: 55, 加工: 50, 組立: 44, 検査: 40 },
  { date: "9/9", 切断: 52, 加工: 48, 組立: 43, 検査: 39 },
  { date: "9/10", 切断: 58, 加工: 53, 組立: 46, 検査: 42 },
  { date: "9/11", 切断: 60, 加工: 55, 組立: 48, 検査: 44 },
  { date: "9/12", 切断: 57, 加工: 54, 組立: 49, 検査: 45 },
];

// 在庫推移 (デモデータ)
const inventoryData = [
  { date: "9/1", 実績在庫: 1200, 安全在庫: 800 },
  { date: "9/3", 実績在庫: 1150, 安全在庫: 800 },
  { date: "9/5", 実績在庫: 1080, 安全在庫: 800 },
  { date: "9/7", 実績在庫: 980, 安全在庫: 800 },
  { date: "9/9", 実績在庫: 1040, 安全在庫: 800 },
  { date: "9/11", 実績在庫: 1110, 安全在庫: 800 },
  { date: "9/12", 実績在庫: 1160, 安全在庫: 800 },
];

// 工程別 当日完了件数 (デモデータ)
const dailyCompletionData = [
  { process: "切断", 件数: 57 },
  { process: "加工", 件数: 54 },
  { process: "組立", 件数: 49 },
  { process: "検査", 件数: 45 },
  { process: "出荷", 件数: 38 },
];

const chartColors = {
  sakura: "oklch(0.52 0.24 27)",
  ai: "oklch(0.38 0.12 240)",
  matcha: "oklch(0.45 0.1 145)",
  kincha: "oklch(0.55 0.12 65)",
};

function ChartCard({
  index,
  labelJp,
  labelEn,
  title,
  description,
  children,
}: {
  index: string;
  labelJp: string;
  labelEn: string;
  title: string;
  description: string;
  children: React.ReactNode;
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
      <div className="h-64 lg:h-80 w-full">{children}</div>
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

  return (
    <div
      ref={sectionRef}
      className={`space-y-10 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
    >
      <ChartCard
        index="01"
        labelJp="推移"
        labelEn="Process Trend"
        title="工程別 進捗件数の推移"
        description="EDI連携・cronバッチで集計した各工程の日次完了件数を折れ線で可視化。ボトルネック工程の早期発見に活用します。（デモデータ）"
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={processTrendData} margin={{ top: 8, right: 16, left: -16, bottom: 0 }}>
            <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
              axisLine={{ stroke: "var(--border)" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip contentStyle={tooltipStyle} />
            <Legend wrapperStyle={{ fontSize: 11, paddingTop: 12 }} />
            <Line type="monotone" dataKey="切断" stroke={chartColors.sakura} strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="加工" stroke={chartColors.ai} strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="組立" stroke={chartColors.matcha} strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="検査" stroke={chartColors.kincha} strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      <div className="grid lg:grid-cols-2 gap-10">
        <ChartCard
          index="02"
          labelJp="在庫"
          labelEn="Inventory"
          title="在庫数量の推移"
          description="実績在庫と安全在庫ラインを重ねて表示。欠品・過剰在庫リスクを一目で把握できます。（デモデータ）"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={inventoryData} margin={{ top: 8, right: 16, left: -16, bottom: 0 }}>
              <defs>
                <linearGradient id="inventoryFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={chartColors.ai} stopOpacity={0.35} />
                  <stop offset="95%" stopColor={chartColors.ai} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
                axisLine={{ stroke: "var(--border)" }}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend wrapperStyle={{ fontSize: 11, paddingTop: 12 }} />
              <Area
                type="monotone"
                dataKey="実績在庫"
                stroke={chartColors.ai}
                fill="url(#inventoryFill)"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="安全在庫"
                stroke={chartColors.sakura}
                strokeWidth={1.5}
                strokeDasharray="4 4"
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          index="03"
          labelJp="完了"
          labelEn="Daily Completion"
          title="工程別 当日完了件数"
          description="当日時点での各工程の完了件数を比較。棒グラフ1枚で当日の生産状況を俯瞰できます。（デモデータ）"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dailyCompletionData} margin={{ top: 8, right: 16, left: -16, bottom: 0 }}>
              <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="process"
                tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
                axisLine={{ stroke: "var(--border)" }}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="件数" fill={chartColors.sakura} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}
