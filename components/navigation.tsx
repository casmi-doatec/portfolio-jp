import Link from "next/link";
import { cookies } from "next/headers";
import { AUTH_COOKIE, AUTH_TOKEN } from "@/lib/auth";
import { SITE_NAME } from "@/lib/site";
import { Cat } from "@/components/characters";

const navItems = [
  { href: "/#about", label: "自己紹介" },
  { href: "/#experience", label: "得意分野" },
  { href: "/#skills", label: "技術スタック" },
  { href: "/#projects", label: "開発実績" },
  { href: "/graph", label: "図表デモ" },
  { href: "/#contact", label: "お問い合わせ" },
];

const authButton =
  "shrink-0 rounded-full px-4 py-1.5 text-sm font-bold transition hover:-translate-y-0.5";

export function Navigation() {
  const isAuthed = cookies().get(AUTH_COOKIE)?.value === AUTH_TOKEN;

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/65 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center gap-3 px-4 md:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2 font-black text-cocoa" aria-label={`${SITE_NAME} — top`}>
          <Cat className="size-8 shadow ring-2" sizes="32px" />
          <span className="hidden whitespace-nowrap lg:inline">
            {SITE_NAME} <span className="text-coral">♥</span>
          </span>
        </Link>

        <ul className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:justify-center">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-full px-3 py-1.5 text-sm font-medium text-cocoa transition hover:bg-blush hover:text-coral-deep"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {isAuthed ? (
          <form action="/api/logout" method="post" className="shrink-0">
            <button type="submit" className={`${authButton} bg-white text-coral-deep shadow-sm ring-2 ring-blush`}>
              ログアウト
            </button>
          </form>
        ) : (
          <Link
            href="/login"
            className={`${authButton} bg-coral text-white shadow-[0_6px_16px_-6px_rgba(244,96,122,0.7)]`}
          >
            ログイン
          </Link>
        )}
      </div>
    </nav>
  );
}
