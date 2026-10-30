// Pastel accent sets taken from the hero image (pink, sky, lavender sparkle, yellow sparkle, leaves)
export const ACCENTS = [
  { badge: "bg-blush text-coral-deep", chip: "bg-blush/80 text-coral-deep", bar: "bg-coral" },
  { badge: "bg-sky-soft text-[#2f6aa3]", chip: "bg-sky-soft text-[#2f6aa3]", bar: "bg-sky-deep" },
  { badge: "bg-[#ece6fb] text-[#6a4fb5]", chip: "bg-[#ece6fb] text-[#6a4fb5]", bar: "bg-lavender" },
  { badge: "bg-[#fff2c9] text-[#a2740a]", chip: "bg-[#fff2c9] text-[#a2740a]", bar: "bg-butter" },
  { badge: "bg-[#e4f4d8] text-[#467a2f]", chip: "bg-[#e4f4d8] text-[#467a2f]", bar: "bg-leaf" },
] as const;

export const accentAt = (i: number) => ACCENTS[i % ACCENTS.length];
