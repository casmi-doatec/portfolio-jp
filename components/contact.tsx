"use client";

import type React from "react";
import { useState } from "react";
import { Section, cardClass } from "@/components/section";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

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

  const field =
    "w-full rounded-2xl border-2 border-blush bg-white px-4 py-3 text-sm text-cocoa outline-none transition placeholder:text-cocoa-soft/50 focus:border-coral focus:ring-4 focus:ring-blush/70";
  const label = "mb-1.5 block text-xs font-bold tracking-wider text-cocoa-soft";

  return (
    <Section
      id="contact"
      tone="blush"
      label="Contact"
      title="お問い合わせ"
      intro="開発のご相談やお見積もりなど、お気軽にご連絡ください。"
    >
      <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
        <div className={`${cardClass} space-y-8 lg:col-span-2`}>
          <div>
            <h3 className="mb-3 font-black text-cocoa">強み</h3>
            <ul className="space-y-3 text-sm leading-7 text-cocoa/80">
              {[
                "丁寧なコミュニケーションと確実な納品を心がけています。",
                "要件を的確に汲み取り、最適な技術選定でご提案します。",
                "Claude Code等を活用した開発自動化・API連携に対応。",
              ].map((text) => (
                <li key={text} className="flex gap-2">
                  <span className="mt-0.5 text-coral" aria-hidden>♥</span>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-black text-cocoa">連絡先・稼働条件</h3>
            <dl className="space-y-3 text-sm leading-7">
              <div>
                <dt className="text-xs font-bold tracking-wider text-cocoa-soft">メール</dt>
                <dd>
                  <a href="mailto:ddreamhhigh@gmail.com" className="font-bold text-coral-deep underline decoration-blush decoration-2 underline-offset-4 hover:decoration-coral">
                    ddreamhhigh@gmail.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-wider text-cocoa-soft">連絡ツール</dt>
                <dd className="mt-1 flex flex-wrap gap-2">
                  {["Google Meet", "Slack", "Chatwork", "LINE"].map((tool) => (
                    <span key={tool} className="rounded-full bg-sky-soft px-3 py-1 text-xs font-bold text-[#2f6aa3]">
                      {tool}
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-wider text-cocoa-soft">稼働</dt>
                <dd className="text-cocoa/80">週30〜40時間（平日9:00〜18:00）／週末勤務可能</dd>
              </div>
            </dl>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={`${cardClass} space-y-5 hover:translate-y-0 lg:col-span-3`}>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={label}>お名前</label>
              <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className={field} />
            </div>
            <div>
              <label htmlFor="email" className={label}>メールアドレス</label>
              <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className={field} />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className={label}>件名</label>
            <input type="text" id="subject" name="subject" required value={formData.subject} onChange={handleChange} className={field} />
          </div>
          <div>
            <label htmlFor="message" className={label}>メッセージ</label>
            <textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange} className={`${field} resize-none`} />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-full bg-gradient-to-r from-[#ff7e95] to-coral px-10 py-3 text-sm font-bold text-white shadow-[0_8px_20px_-6px_rgba(244,96,122,0.6)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === "sending" ? "送信中..." : status === "success" ? "送信しました" : "送信する"}
          </button>

          {status === "success" && (
            <p className="text-sm font-bold text-[#467a2f]">メッセージを受け付けました。折り返しご連絡いたします。</p>
          )}
          {status === "error" && (
            <p className="text-sm font-bold text-coral-deep">送信できませんでした。お手数ですが、もう一度お試しください。</p>
          )}
        </form>
      </div>
    </Section>
  );
}
