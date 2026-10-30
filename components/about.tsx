import { Cat } from "@/components/characters";
import { Section, cardClass } from "@/components/section";

const philosophy = [
  { word: "DREAM", style: "-rotate-3 md:-translate-x-10" },
  { word: "AIM", style: "rotate-2 md:translate-x-8" },
  { word: "FLY", style: "-rotate-2 md:-translate-x-2" },
];

// One cat beside the philosophy words
const avatarClass =
  "size-28 animate-float shadow-[0_18px_40px_-14px_rgba(244,96,122,0.55)] ring-8 md:size-44";

export function About() {
  return (
    <Section id="about" tone="cream" label="About" title="自己紹介" mascots={false}>
      <div className="mb-16 text-center">
        <p className="mb-6 text-xs font-bold tracking-[0.3em] text-cocoa-soft">PHILOSOPHY</p>

        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-14">
          <Cat className={`${avatarClass} -rotate-6`} sizes="176px" />

          <div className="relative flex flex-col items-center gap-3 py-4">
            {philosophy.map(({ word, style }) => (
              <p
                key={word}
                className={`${style} sticker-text text-5xl font-black leading-none text-cocoa md:text-7xl`}
              >
                {word} <span className="text-coral">HIGH</span>
                <span className="text-coral">!</span>
              </p>
            ))}
            <span aria-hidden className="absolute -left-2 top-0 animate-float text-3xl text-coral/70">♥</span>
            <span aria-hidden className="absolute -right-2 bottom-2 animate-float text-2xl text-[#9a82d6]/70 [animation-delay:1.2s]">✦</span>
          </div>
        </div>
      </div>

      <div className={`${cardClass} mx-auto max-w-4xl space-y-5 text-sm leading-8 text-cocoa/85 md:text-base md:leading-9`}>
        <p>
          AI エンジニア・フルスタックエンジニアとして、LLM を活用したプロダクト開発と Web アプリケーションの設計・実装を行っています。Next.js と Python を中心に、フロントエンドからバックエンド、AI 連携まで一貫して手がけることができます。
        </p>
        <p>
          フロントエンドは Next.js（App Router）を主軸に、TypeScript・Tailwind CSS を用いたコンポーネント設計と UX を重視した実装を行っています。バックエンドは Python（FastAPI・LangChain）を使い、RAG パイプラインや外部 API との連携、業務自動化ツールの構築を得意としています。
        </p>
        <p>
          AI 領域では、OpenAI・Claude・Dify などの LLM を活用したチャットボット、業務効率化ツール、LINE 連携システムの開発実績があります。プロンプト設計からシステム統合まで、実用レベルのプロダクトとして仕上げることを意識しています。
        </p>
        <p>
          要件定義・設計から実装・リリースまでを 1 名で完結できる体制を強みとしており、スタートアップや中小企業の新規プロダクト立ち上げを中心に支援しています。スピード感を持ちながら、拡張しやすい設計を心がけています。
        </p>
      </div>
    </Section>
  );
}
