import Image from "next/image";
import { CAT_NAME } from "@/lib/site";

type Props = {
  // Size / ring / rotation utilities supplied by the caller
  className?: string;
  sizes?: string;
};

const base = "relative inline-block shrink-0 overflow-hidden rounded-full bg-white ring-white";

export function Cat({ className = "", sizes = "80px" }: Props) {
  return (
    <span className={`${base} ${className}`}>
      <Image src="/cat-face.png" alt={CAT_NAME} fill sizes={sizes} className="object-cover" />
    </span>
  );
}
