import Link from "next/link";

const navItems = [
  { href: "/#about", label: "自己紹介 (About)" },
  { href: "/#experience", label: "得意分野 (Expertise)" },
  { href: "/#skills", label: "技術スタック (Skills)" },
  { href: "/#projects", label: "開発実績 (Projects)" },
  { href: "/graph", label: "図表デモ (Graph Demo)" },
  { href: "/#contact", label: "お問い合わせ (Contact)" },
];

export function Navigation() {
  return (
    <nav>
      <ul>
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
