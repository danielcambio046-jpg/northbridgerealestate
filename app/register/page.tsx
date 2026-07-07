"use client";

import { useState, FormEvent } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      password: form.get("password"),
      role: form.get("role"),
    };

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const data = await res.json();
      setError(typeof data.error === "string" ? data.error : "Could not create this account.");
      setLoading(false);
      return;
    }

    const signInRes = await signIn("credentials", {
      email: payload.email,
      password: payload.password,
      redirect: false,
    });
    setLoading(false);

    if (signInRes?.error) {
      router.push("/login");
      return;
    }
    router.push(payload.role === "SELLER" ? "/properties/new" : "/properties");
    router.refresh();
  }

  return (
    <main className="auth-page">
      <h1>Create your account</h1>
      <form onSubmit={handleSubmit} className="lead-form">
        <input name="name" placeholder="Full name" required minLength={2} />
        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password (min. 8 characters)" minLength={8} required />
        <label className="role-choice">
          <input type="radio" name="role" value="INVESTOR" defaultChecked /> I want to invest
        </label>
        <label className="role-choice">
          <input type="radio" name="role" value="SELLER" /> I want to list a property
        </label>
        <button type="submit" disabled={loading}>{loading ? "Creating account…" : "Create account"}</button>
        {error && <p className="error-text">{error}</p>}
      </form>
      <p className="auth-switch">Already have an account? <a href="/login">Log in</a></p>
    </main>
  );
}
