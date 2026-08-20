"use client";

import type React from "react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { href: "#about", label: "紹介", labelEn: "About" },
    { href: "#experience", label: "専門", labelEn: "Expertise" },
    { href: "#skills", label: "技術", labelEn: "Skills" },
    { href: "#projects", label: "実績", labelEn: "Projects" },
    { href: "#contact", label: "連絡", labelEn: "Contact" },
  ];

  return (
    <>
      {/* Hamburger button — fixed top-right */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label="Toggle menu"
        className="fixed top-6 right-6 z-[60] w-10 h-10 flex flex-col items-center justify-center gap-[5px] bg-background/80 backdrop-blur border border-border hover:border-jp-sakura transition-colors duration-300"
      >
        <span
          className={`w-5 h-px bg-foreground transition-all duration-300 origin-center ${
            isOpen ? "rotate-45 translate-y-[6px]" : ""
          }`}
        />
        <span
          className={`w-5 h-px bg-foreground transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`w-5 h-px bg-foreground transition-all duration-300 origin-center ${
            isOpen ? "-rotate-45 -translate-y-[6px]" : ""
          }`}
        />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[50]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Dropdown panel */}
      <div
        className={`fixed top-0 right-0 z-[55] w-64 h-screen bg-background border-l border-border flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="px-8 pt-16 pb-8 border-b border-border">
          <a
            href="#"
            onClick={(e) => handleNavClick(e, "#")}
            className="flex items-center gap-1.5 hover:opacity-70 transition-opacity duration-300"
          >
            <span className="text-jp-sakura text-lg font-display select-none">&#x300C;</span>
            <span className="text-sm tracking-[0.2em] uppercase font-bold">DreamHigh</span>
            <span className="text-jp-sakura text-lg font-display select-none">&#x300D;</span>
          </a>
        </div>

        {/* Nav items */}
        <nav className="flex flex-col px-8 py-8 gap-1 flex-1">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="group flex items-center gap-3 py-3.5 border-b border-border/50 hover:border-jp-sakura/30 transition-colors duration-300"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <span className="text-[10px] text-jp-sakura font-display w-6 shrink-0">{item.label}</span>
              <span className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {item.labelEn}
              </span>
            </a>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-8 py-6 border-t border-border">
          <p className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground/60">
            &copy; 2026 かすみ
          </p>
        </div>
      </div>
    </>
  );
}
