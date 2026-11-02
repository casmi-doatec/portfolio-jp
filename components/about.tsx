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

      <div className={`${cardClass} mx-auto max-w-4xl text-sm leading-8 text-cocoa/85 md:text-base md:leading-9`}>
        <p>
          AIエンジニア、フルスタックエンジニアとして、LLMを使ったプロダクトの開発や、Webアプリの設計・実装をしています。フロントはNext.js（App Router）とTypeScript、バックエンドはPython（FastAPI・LangChain）が中心です。OpenAI、Claude、Difyを使ったチャットボットや業務効率化ツール、LINE連携システム、RAGの構築などを手がけてきました。要件の整理からリリースまで一人で進められるので、スタートアップや中小企業の新規立ち上げに関わることが多いです。まず動くものを早く作って、あとから機能を足しやすい形にしておくようにしています。
        </p>
      </div>
    </Section>
  );
}
