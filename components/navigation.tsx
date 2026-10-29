import Link from "next/link";
import { cookies } from "next/headers";
import { AUTH_COOKIE, AUTH_TOKEN } from "@/lib/auth";

const navItems = [
  { href: "/#about", label: "自己紹介 (About)" },
  { href: "/#experience", label: "得意分野 (Expertise)" },
  { href: "/#skills", label: "技術スタック (Skills)" },
  { href: "/#projects", label: "開発実績 (Projects)" },
  { href: "/graph", label: "図表デモ (Graph Demo)" },
  { href: "/#contact", label: "お問い合わせ (Contact)" },
];

export function Navigation() {
  const isAuthed = cookies().get(AUTH_COOKIE)?.value === AUTH_TOKEN;

  return (
    <nav>
      <ul>
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <ul>
        {isAuthed ? (
          <li>
            <form action="/api/logout" method="post">
              <button type="submit">ログアウト (Logout)</button>
            </form>
          </li>
        ) : (
          <li>
            <Link href="/login">ログイン (Login)</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
