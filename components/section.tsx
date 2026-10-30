import type { ReactNode } from "react";
import { Cat } from "@/components/characters";

type Tone = "cream" | "sky" | "blush";

const tones: Record<Tone, string> = {
  cream: "bg-cream",
  sky: "bg-gradient-to-b from-sky-soft to-[#f4f9ff]",
  blush: "bg-gradient-to-b from-[#fff0f1] to-peach",
};

// Soft, glassy white card with a pink-tinted shadow
export const cardClass =
  "rounded-[28px] bg-white/85 p-6 shadow-[0_14px_34px_-14px_rgba(244,96,122,0.35)] ring-2 ring-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-14px_rgba(244,96,122,0.45)] md:p-8";

export function SectionHeading({
  label,
  title,
  intro,
  mascots = true,
}: {
  label: string;
  title: string;
  intro?: string;
  // One cat perched on the corner of the title
  mascots?: boolean;
}) {
  return (
    <div className="mb-10 text-center md:mb-14">
      <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 text-xs font-bold tracking-[0.2em] text-coral-deep shadow-sm ring-2 ring-blush">
        <span aria-hidden>♥</span>
        {label.toUpperCase()}
      </span>
      <div className="mt-4 flex justify-center">
        <h2 className="relative text-3xl font-black tracking-tight text-cocoa md:text-5xl">
          <span className="bg-[linear-gradient(transparent_62%,#ffd3dc_62%)] px-2">{title}</span>
          {mascots && (
            <Cat
              className="absolute -right-10 -top-8 size-12 rotate-12 animate-float shadow-md ring-4 md:-right-16 md:-top-10 md:size-16"
              sizes="64px"
            />
          )}
        </h2>
      </div>
      {intro && (
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-cocoa-soft md:text-base md:leading-8">
          {intro}
        </p>
      )}
    </div>
  );
}

export function Section({
  id,
  tone,
  label,
  title,
  intro,
  mascots,
  children,
}: {
  id: string;
  tone: Tone;
  label: string;
  title: string;
  intro?: string;
  mascots?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative -mt-12 overflow-hidden rounded-t-[3rem] px-5 pb-24 pt-20 md:px-10 md:pt-28 ${tones[tone]}`}
    >
      <div aria-hidden className="pointer-events-none absolute -right-20 -top-10 size-72 animate-float rounded-full bg-white/60 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -left-24 bottom-10 size-72 rounded-full bg-blush/60 blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading label={label} title={title} intro={intro} mascots={mascots} />
        {children}
      </div>
    </section>
  );
}
