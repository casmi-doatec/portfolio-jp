import Image from "next/image";

export function Hero() {
  return (
    <header id="top" className="relative h-svh min-h-[560px] w-full overflow-hidden">
      <Image
        src="/独自のノウハウで輝く猫ワークスペース.png"
        alt="独自のノウハウで！ ノートパソコンの前で嬉しそうに働く、かわいい白猫のイラスト"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[72%_center] md:object-center"
      />

      {/* Sits at the bottom-left over the desk and flowers so the artwork's headline and the cat stay visible */}
      <div className="absolute inset-x-4 bottom-16 animate-fade-up rounded-[28px] bg-white/80 p-5 shadow-[0_18px_40px_-14px_rgba(244,96,122,0.45)] ring-2 ring-white backdrop-blur-md md:inset-x-auto md:bottom-16 md:left-10 md:max-w-md md:p-6">
        <p className="inline-block rounded-full bg-blush px-3 py-1 text-xs font-bold tracking-[0.2em] text-coral-deep">
          INFRA ENGINEER
        </p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-cocoa md:mt-3 md:text-4xl leading-tight">
          Kawaii Neko <span className="text-coral">♥</span>
        </h1>
        <p className="mt-2 text-sm leading-7 text-cocoa/80 md:mt-3 md:text-base md:leading-8">
          AI・Web・SaaS・モバイルまで、要件を的確に汲み取り最適な技術で形にします。
        </p>
        <a
          href="#about"
          className="mt-4 inline-flex md:mt-5 items-center gap-2 rounded-full bg-gradient-to-r from-[#ff7e95] to-coral px-6 py-2 text-sm font-bold text-white shadow-[0_8px_20px_-6px_rgba(244,96,122,0.6)] transition hover:-translate-y-0.5"
        >
          もっと見る <span aria-hidden>↓</span>
        </a>
      </div>
    </header>
  );
}
