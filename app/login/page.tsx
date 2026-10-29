"use client";

import type React from "react";
import { useState } from "react";
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
        router.push("/");
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

  return (
    <main>
      <h1>ログイン (Login)</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="email">メールアドレス</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="password">パスワード</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p>
          <button type="submit" disabled={sending}>
            {sending ? "確認中..." : "ログイン"}
          </button>
        </p>
        {error && <p role="alert">{error}</p>}
      </form>
    </main>
  );
}
