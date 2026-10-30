"use client";

import type React from "react";
import { useState } from "react";
import { Cat } from "@/components/characters";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSending(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        router.push("/#projects");
        router.refresh();
        return;
      }
      const body = await response.json().catch(() => null);
      setError(body?.error ?? "ログインに失敗しました。");
    } catch {
      setError("ログインに失敗しました。もう一度お試しください。");
    }
    setSending(false);
  };

  const field =
    "w-full rounded-2xl border-2 border-blush bg-white px-4 py-3 text-sm text-cocoa outline-none transition placeholder:text-cocoa-soft/50 focus:border-coral focus:ring-4 focus:ring-blush/70";

  return (
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden bg-gradient-to-b from-sky-soft via-[#fff0f1] to-peach px-5 pb-16 pt-28">
      <div aria-hidden className="pointer-events-none absolute -left-16 top-24 size-72 animate-float rounded-full bg-white/70 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-16 bottom-10 size-72 rounded-full bg-blush/80 blur-3xl" />

      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-md space-y-5 rounded-[32px] bg-white/85 p-8 shadow-[0_18px_44px_-14px_rgba(244,96,122,0.45)] ring-2 ring-white backdrop-blur md:p-10"
      >
        <div className="flex flex-col items-center gap-3">
          <Cat className="size-20 -rotate-6 shadow-lg ring-4" sizes="80px" />
          <div className="text-center">
            <h1 className="text-2xl font-black text-cocoa">
              <span className="bg-[linear-gradient(transparent_62%,#ffd3dc_62%)] px-2">ログイン</span>
            </h1>
          </div>
        </div>
        <p className="text-center text-xs leading-6 text-cocoa-soft">開発実績を見るにはログインしてください。</p>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-bold tracking-wider text-cocoa-soft">メールアドレス</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={field}
          />
        </div>
        <div>
          <label htmlFor="password" className="mb-1.5 block text-xs font-bold tracking-wider text-cocoa-soft">パスワード</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={field}
          />
        </div>

        <button
          type="submit"
          disabled={sending}
          className="w-full rounded-full bg-gradient-to-r from-[#ff7e95] to-coral px-10 py-3 text-sm font-bold text-white shadow-[0_8px_20px_-6px_rgba(244,96,122,0.6)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {sending ? "確認中..." : "ログイン"}
        </button>

        {error && (
          <p role="alert" className="rounded-2xl bg-blush px-4 py-3 text-center text-sm font-bold text-coral-deep">
            {error}
          </p>
        )}
      </form>
    </main>
  );
}
