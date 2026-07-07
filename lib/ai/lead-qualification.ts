import type { Lead, LeadStage } from "@prisma/client";

interface QualificationResult {
  score: number; // 0-100
  recommendedStage: LeadStage;
}

/**
 * Lead Qualification Agent.
 *
 * Design note: scoring is intentionally a hybrid of deterministic signals
 * (has a phone number? referenced a specific property? came from a paid
 * channel known to convert well?) plus a lightweight LLM read of free-text
 * intent. Never let the LLM output be the *sole* source of the score — it
 * should adjust a baseline, not invent one. This keeps the pipeline
 * auditable and prevents silent scoring drift.
 */
export async function qualifyLead(
  lead: Pick<Lead, "email" | "phone" | "propertyId" | "source">,
  message?: string
): Promise<QualificationResult> {
  let score = 20; // baseline for any captured lead

  if (lead.phone) score += 15;
  if (lead.email) score += 10;
  if (lead.propertyId) score += 20; // showed interest in a specific listing
  if (["whatsapp", "web"].includes(lead.source)) score += 10;

  if (message && message.trim().length > 0) {
    const intentBoost = await scoreIntentWithLLM(message);
    score += intentBoost;
  }

  score = Math.max(0, Math.min(100, score));

  const recommendedStage: LeadStage = score >= 60 ? "QUALIFIED" : "NEW";

  return { score, recommendedStage };
}

async function scoreIntentWithLLM(message: string): Promise<number> {
  // Placeholder: call the AI Orchestrator's /agents/lead-qualification endpoint.
  // Replace with a real call to the Anthropic API once the orchestrator service exists.
  // Keep the prompt narrow: ask only for an intent score 0-25, nothing else,
  // so this stays cheap to run on every single inbound lead.
  return 0;
}
