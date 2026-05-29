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
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
      className="py-32 lg:py-40 px-6 lg:px-12"
    >
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
                <div className="h-px w-8 bg-foreground" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
                  Contact
                </span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-black tracking-tighter">
                お問い合わせ
              </h2>
            </div>

            <p className="text-sm lg:text-base text-muted-foreground font-light leading-[2]">
              開発のご相談やお見積もりなど、お気軽にご連絡ください。
            </p>

            <div className="space-y-5 pt-4">
              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 border border-foreground/10 flex items-center justify-center group-hover:border-foreground/30 transition-colors duration-300">
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

              {/* Chatwork */}
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 border border-foreground/10 flex items-center justify-center group-hover:border-foreground/30 transition-colors duration-300">
                  <svg className="w-4 h-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  </svg>
                </div>
                <a
                  href="https://www.chatwork.com/casmi3811_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Chatwork: casmi3811_
                </a>
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
                    className="w-full px-0 py-3 bg-transparent border-b border-foreground/15 focus:border-foreground focus:outline-none transition-colors duration-300 text-sm"
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
                    className="w-full px-0 py-3 bg-transparent border-b border-foreground/15 focus:border-foreground focus:outline-none transition-colors duration-300 text-sm"
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
                  className="w-full px-0 py-3 bg-transparent border-b border-foreground/15 focus:border-foreground focus:outline-none transition-colors duration-300 text-sm"
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
                  className="w-full px-0 py-3 bg-transparent border-b border-foreground/15 focus:border-foreground focus:outline-none transition-colors duration-300 text-sm resize-none"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="text-[11px] tracking-[0.2em] uppercase border border-foreground px-10 py-3.5 hover:bg-foreground hover:text-background transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {status === "sending"
                    ? "送信中..."
                    : status === "success"
                    ? "送信しました"
                    : "送信する"}
                </button>
              </div>

              {status === "success" && (
                <p className="text-xs text-muted-foreground">
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
        <div className="mt-32 pt-8 border-t border-foreground/5">
          <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/40 text-center">
            &copy; 2026 Abdul Hakim
          </p>
        </div>
      </div>
    </section>
  );
}
