import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";

const LeadSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  message: z.string().optional(),
  source: z.enum(["WEB", "WHATSAPP", "META_ADS", "GOOGLE_ADS", "REFERRAL", "DIRECT"]).default("WEB"),
  propertyId: z.string().optional(),
});

function qualifyLead(data: { phone?: string; email?: string; propertyId?: string; source?: string }) {
  let score = 20;
  if (data.phone) score += 15;
  if (data.email) score += 10;
  if (data.propertyId) score += 20;
  if (data.source === "WEB" || data.source === "WHATSAPP") score += 10;
  score = Math.max(0, Math.min(100, score));
  const stage = score >= 60 ? "QUALIFIED" : "NEW";
  return { score, stage } as const;
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = LeadSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const { score, stage } = qualifyLead(parsed.data);

  const lead = await prisma.lead.create({
    data: {
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      message: parsed.data.message,
      source: parsed.data.source,
      propertyId: parsed.data.propertyId,
      score,
      stage,
    },
  });

  return NextResponse.json({ lead }, { status: 201 });
}

export async function GET() {
  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" },
    take: 100,
  });
  return NextResponse.json({ leads });
}

