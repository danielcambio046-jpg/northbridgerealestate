// NorthBridge Real Estate — Lead Qualification Agent
// Deterministic scoring first, LLM enrichment later.

interface LeadInput {
  name: string;
  email?: string;
  phone?: string;
  propertyId?: string;
  source?: string;
}

export function qualifyLead(lead: LeadInput): { score: number; stage: "NEW" | "QUALIFIED" } {
  let score = 20;
  if (lead.phone) score += 15;
  if (lead.email) score += 10;
  if (lead.propertyId) score += 20;
  if (lead.source === "WEB" || lead.source === "WHATSAPP") score += 10;

  score = Math.max(0, Math.min(100, score));
  const stage: "NEW" | "QUALIFIED" = score >= 60 ? "QUALIFIED" : "NEW";

  return { score, stage };
}

