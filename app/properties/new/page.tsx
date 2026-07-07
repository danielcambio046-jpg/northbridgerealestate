"use client";

import { useState, FormEvent } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const TYPES = ["RESIDENTIAL", "COMMERCIAL", "LAND", "DEVELOPMENT", "RENTAL"];
const SELLER_ROLES = ["SELLER", "AGENT", "DEVELOPER", "ADMIN"];

export default function NewPropertyPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  if (status === "loading") return null;

  if (status === "unauthenticated") {
    router.push("/login");
    return null;
  }

  if (session && !SELLER_ROLES.includes(session.user.role)) {
    return (
      <main className="auth-page">
        <p>Only seller, agent, developer, or admin accounts can list properties.</p>
      </main>
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = new FormData(e.currentTarget);
    const expectedRoi = form.get("expectedRoi");
    const areaM2 = form.get("areaM2");

    const payload = {
      title: form.get("title"),
      description: form.get("description"),
      country: form.get("country"),
      state: form.get("state"),
      city: form.get("city"),
      type: form.get("type"),
      price: parseFloat(form.get("price") as string),
      expectedRoi: expectedRoi ? parseFloat(expectedRoi as string) : undefined,
      areaM2: areaM2 ? parseFloat(areaM2 as string) : undefined,
    };

    const res = await fetch("/api/properties", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setLoading(false);
    if (!res.ok) {
      setError("Could not submit this listing. Check the required fields and try again.");
      return;
    }
    setDone(true);
  }

  if (done) {
    return (
      <main className="auth-page">
        <h1>Listing submitted for verification.</h1>
        <p>
          It now appears in the marketplace marked "Pending verification" until our compliance
          step reviews ownership and documentation.
        </p>
        <a href="/properties">Back to marketplace</a>
      </main>
    );
  }

  return (
    <main className="auth-page">
      <h1>List a property</h1>
      <form onSubmit={handleSubmit} className="lead-form property-form">
        <input name="title" placeholder="Title" required minLength={5} />
        <textarea name="description" placeholder="Description (condition, tenancy, what makes this investment-grade)" required minLength={20} />
        <select name="country" defaultValue="BRAZIL">
          <option value="BRAZIL">Brazil</option>
          <option value="VENEZUELA">Venezuela</option>
        </select>
        <select name="type" defaultValue="RESIDENTIAL">
          {TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        <input name="state" placeholder="State / region" required />
        <input name="city" placeholder="City" required />
        <input name="price" type="number" min="0" placeholder="Price (USD)" required />
        <input name="expectedRoi" type="number" min="0" placeholder="Expected ROI % (optional)" />
        <input name="areaM2" type="number" min="0" placeholder="Area in m² (optional)" />
        <button type="submit" disabled={loading}>{loading ? "Submitting…" : "Submit for verification"}</button>
        {error && <p className="error-text">{error}</p>}
      </form>
    </main>
  );
}
