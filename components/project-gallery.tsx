"use client";

import { useState } from "react";
import Image from "next/image";

type Screen = { src: string; caption: string };

// Cover plus screens in one fixed-size frame; the arrows on the left and right of
// the image switch images in place, so the card never changes height.
export function ProjectGallery({
  title,
  cover,
  screens,
}: {
  title: string;
  cover: string;
  screens: Screen[];
}) {
  const slides: Screen[] = screens.some((s) => s.src === cover)
    ? screens
    : [{ src: cover, caption: "" }, ...screens];
  const [index, setIndex] = useState(0);
  const current = slides[index];
  const isCover = current.src === cover;
  const multiple = slides.length > 1;

  const go = (step: number) => setIndex((i) => (i + step + slides.length) % slides.length);

  const arrow =
    "absolute top-1/2 z-10 flex size-7 -translate-y-1/2 animate-float items-center justify-center rounded-full bg-gradient-to-br from-[#ff7e95] to-coral pb-0.5 text-lg font-black leading-none text-white shadow-[0_6px_12px_-4px_rgba(244,96,122,0.7)] ring-2 ring-white transition hover:scale-110 md:size-8";

  return (
    <>
      <div className="relative">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-cream ring-4 ring-white">
          <Image
            key={current.src}
            src={current.src}
            alt={current.caption || `${title} のイメージ`}
            fill
            sizes="(min-width: 768px) 40vw, 90vw"
            className={isCover ? "object-cover object-top" : "object-contain"}
          />
        </div>

        {multiple && (
          <>
            <button type="button" onClick={() => go(-1)} aria-label={`${title}：前の画像`} className={`${arrow} left-1.5`}>
              ‹
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label={`${title}：次の画像`}
              className={`${arrow} right-1.5 [animation-delay:0.6s]`}
            >
              ›
            </button>
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white/85 px-3 py-0.5 text-xs font-bold tracking-widest text-coral-deep shadow-sm">
              {index + 1} / {slides.length}
            </span>
          </>
        )}
      </div>
    </>
  );
}
