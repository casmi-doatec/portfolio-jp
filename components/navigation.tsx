"use client";

import type React from "react";
import { useState, useEffect } from "react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-jp-sakura/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo with Japanese bracket styling */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, "#")}
            className="group flex items-center gap-1.5 hover:opacity-70 transition-opacity duration-500"
          >
            <span className="text-jp-sakura/40 text-lg font-display select-none">
              &#x300C;
            </span>
            <span className="text-sm tracking-[0.3em] uppercase font-bold">
              はざめ
            </span>
            <span className="text-jp-sakura/40 text-lg font-display select-none">
              &#x300D;
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative px-5 py-2 text-[11px] tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors duration-500 group"
              >
                <span className="hidden lg:inline text-[9px] text-jp-sakura/50 mr-1.5 font-display">
                  {item.label}
                </span>
                <span className="uppercase">{item.labelEn}</span>
                <span className="absolute bottom-0 left-5 right-5 h-px bg-jp-sakura scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span
                className={`w-full h-px bg-foreground transition-all duration-300 origin-center ${
                  isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`w-full h-px bg-foreground transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-px bg-foreground transition-all duration-300 origin-center ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-jp-sakura/10 animate-fade-in">
          <div className="px-6 py-6 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="flex items-center gap-3 px-4 py-3 text-[11px] tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <span className="text-[10px] text-jp-sakura/60 font-display">
                  {item.label}
                </span>
                <span>{item.labelEn}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
