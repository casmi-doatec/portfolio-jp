import { Cat } from "@/components/characters";
import { SITE_NAME } from "@/lib/site";

export function Footer() {
  return (
    <footer className="flex items-center justify-center gap-4 bg-cream px-5 py-10 text-xs tracking-widest text-cocoa-soft">
      <Cat className="size-10 -rotate-6 shadow ring-2" sizes="40px" />
      <p>
        <span className="text-coral">♥</span> &copy; 2026 {SITE_NAME} <span className="text-coral">♥</span>
      </p>
    </footer>
  );
}
