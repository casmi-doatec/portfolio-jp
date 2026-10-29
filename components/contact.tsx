"use client";

import type React from "react";
import { useState } from "react";

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

  return (
    <section id="contact">
      <h2>お問い合わせ (Contact)</h2>
      <p>開発のご相談やお見積もりなど、お気軽にご連絡ください。</p>

      <h3>強み</h3>
      <ul>
        <li>丁寧なコミュニケーションと確実な納品を心がけています。</li>
        <li>要件を的確に汲み取り、最適な技術選定でご提案します。</li>
        <li>Claude Code等を活用した開発自動化・API連携に対応。</li>
      </ul>

      <h3>連絡先・稼働条件</h3>
      <ul>
        <li>
          メール: <a href="mailto:ddreamhhigh@gmail.com">ddreamhhigh@gmail.com</a>
        </li>
        <li>連絡ツール: Google Meet / Slack / Chatwork / LINE</li>
        <li>稼働: 週30〜40時間（平日9:00〜18:00）</li>
        <li>週末勤務可能</li>
      </ul>

      <h3>フォーム</h3>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="name">お名前</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="email">メールアドレス</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="subject">件名</label>
          <br />
          <input
            type="text"
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="message">メッセージ</label>
          <br />
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
          />
        </p>
        <p>
          <button type="submit" disabled={status === "sending"}>
            {status === "sending"
              ? "送信中..."
              : status === "success"
              ? "送信しました"
              : "送信する"}
          </button>
        </p>

        {status === "success" && (
          <p>メッセージを受け付けました。折り返しご連絡いたします。</p>
        )}
        {status === "error" && (
          <p>送信できませんでした。お手数ですが、もう一度お試しください。</p>
        )}
      </form>

      <footer>
        <p>&copy; 2026 NekoMaki</p>
      </footer>
    </section>
  );
}
