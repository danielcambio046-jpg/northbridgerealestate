"use client";

import { useState, FormEvent } from "react";

export function LeadForm({ propertyId }: { propertyId: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email") || undefined,
        phone: form.get("phone") || undefined,
        message: form.get("message") || undefined,
        source: "web",
        propertyId,
      }),
    });
    setStatus(res.ok ? "sent" : "error");
  }

  if (status === "sent") {
    return (
      <p className="confirmation">
        Request received. This listing's agent typically responds within one business day.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="lead-form">
      <input name="name" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" />
      <input name="phone" placeholder="Phone" />
      <textarea name="message" placeholder="What would you like to know about this property?" />
      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send request"}
      </button>
      {status === "error" && <p className="error-text">Something went wrong. Please try again.</p>}
    </form>
  );
}
