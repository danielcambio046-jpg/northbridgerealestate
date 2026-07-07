"use client";

import { useState, FormEvent } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = new FormData(e.currentTarget);
    const res = await signIn("credentials", {
      email: form.get("email"),
      password: form.get("password"),
      redirect: false,
    });
    setLoading(false);
    if (res?.error) {
      setError("Incorrect email or password.");
      return;
    }
    router.push("/properties");
    router.refresh();
  }

  return (
    <main className="auth-page">
      <h1>Log in</h1>
      <form onSubmit={handleSubmit} className="lead-form">
        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" required />
        <button type="submit" disabled={loading}>{loading ? "Signing in…" : "Log in"}</button>
        {error && <p className="error-text">{error}</p>}
      </form>
      <p className="auth-switch">Don't have an account? <a href="/register">Sign up</a></p>
    </main>
  );
}
