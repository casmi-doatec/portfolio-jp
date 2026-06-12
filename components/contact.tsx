"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-32 lg:py-44 px-6 lg:px-12 relative"
    >
      {/* Background decorative */}
      <div className="absolute bottom-20 left-10 text-[12rem] font-display text-foreground/[0.02] select-none pointer-events-none leading-none">
        連絡
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left info */}
          <div
            className={`lg:col-span-5 space-y-10 ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-jp-sakura/60" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
                  Contact
                </span>
                <span className="text-xs text-jp-sakura/40 font-display">
                  お問い合わせ
                </span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-black tracking-tighter">
                お問い合わせ
              </h2>
              <div className="h-[2px] w-16 bg-gradient-to-r from-jp-sakura/60 to-transparent" />
            </div>

            <p className="text-sm lg:text-base text-muted-foreground font-light leading-[2.2] font-serif">
              開発のご相談やお見積もりなど、お気軽にご連絡ください。
            </p>

            {/* Strengths */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="h-px w-6 bg-jp-sakura/40" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  強み
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-jp-sakura/40 rounded-full mt-1.5 shrink-0" />
                  <p className="text-sm text-muted-foreground leading-[1.9]">
                    丁寧なコミュニケーションと確実な納品を心がけています。
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-jp-sakura/40 rounded-full mt-1.5 shrink-0" />
                  <p className="text-sm text-muted-foreground leading-[1.9]">
                    要件を的確に汲み取り、最適な技術選定でご提案します。
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-jp-sakura/40 rounded-full mt-1.5 shrink-0" />
                  <p className="text-sm text-muted-foreground leading-[1.9]">
                    Claude Code等を活用した開発自動化・API連携に対応。
                  </p>
                </div>
              </div>
            </div>

            {/* Contact info */}
            <div className="space-y-5 pt-2">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 border border-foreground/10 flex items-center justify-center group-hover:border-jp-sakura/30 transition-colors duration-500">
                  <svg className="w-4 h-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a
                  href="mailto:casmiyasu3811@gmail.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  casmiyasu3811@gmail.com
                </a>
              </div>
            </div>

            {/* Communication tools & working conditions */}
            <div className="space-y-3 pt-2 border-t border-foreground/5">
              <div className="flex flex-wrap items-center gap-2 pt-4">
                {["Google Meet", "Slack", "Chatwork", "LINE"].map((tool) => (
                  <span key={tool} className="text-[10px] tracking-wide px-2.5 py-1 border border-foreground/8 text-muted-foreground">
                    {tool}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-1">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-jp-sakura/40 rounded-full" />
                  <span>週30〜40時間（平日9:00〜18:00）</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-jp-sakura/40 rounded-full" />
                  <span>週末勤務可能</span>
                </div>
              </div>
            </div>

            {/* Decorative zen element */}
            <div className="pt-4 hidden lg:block">
              <div className="w-20 h-20 border border-jp-sakura/10 rounded-full flex items-center justify-center animate-float-slow">
                <div className="w-12 h-12 border border-jp-sakura/[0.06] rounded-full flex items-center justify-center">
                  <span className="text-xl font-display text-jp-sakura/20">和</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div
            className={`lg:col-span-7 ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
                    お名前
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-b border-foreground/10 focus:border-jp-sakura/60 focus:outline-none transition-colors duration-500 text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-b border-foreground/10 focus:border-jp-sakura/60 focus:outline-none transition-colors duration-500 text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
                  件名
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-b border-foreground/10 focus:border-jp-sakura/60 focus:outline-none transition-colors duration-500 text-sm"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
                  メッセージ
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-b border-foreground/10 focus:border-jp-sakura/60 focus:outline-none transition-colors duration-500 text-sm resize-none"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group relative text-[11px] tracking-[0.25em] uppercase border border-foreground px-10 py-3.5 hover:bg-foreground hover:text-background transition-all duration-500 disabled:opacity-40 disabled:cursor-not-allowed overflow-hidden"
                >
                  <span className="relative z-10">
                    {status === "sending"
                      ? "送信中..."
                      : status === "success"
                      ? "送信しました"
                      : "送信する"}
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-jp-sakura transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </button>
              </div>

              {status === "success" && (
                <p className="text-xs text-muted-foreground font-serif">
                  メッセージを受け付けました。折り返しご連絡いたします。
                </p>
              )}
              {status === "error" && (
                <p className="text-xs text-destructive">
                  送信できませんでした。お手数ですが、もう一度お試しください。
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-32 pt-8 border-t border-jp-sakura/10">
          <div className="flex items-center justify-center gap-3">
            <span className="text-jp-sakura/30 font-display">&#x300C;</span>
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/40">
              &copy; 2026 遠藤悠晴
            </p>
            <span className="text-jp-sakura/30 font-display">&#x300D;</span>
          </div>
        </div>
      </div>
    </section>
  );
}
