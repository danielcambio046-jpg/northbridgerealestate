import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { qualifyLead } from "@/lib/ai/lead-qualification";

const LeadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  source: z.enum(["web", "whatsapp", "instagram", "facebook", "linkedin", "tiktok", "email"]),
  propertyId: z.string().optional(),
  message: z.string().optional(),
});

// POST /api/leads — single normalized entry point for every channel.
// All channel-specific webhooks (WhatsApp, Meta, LinkedIn, TikTok) should
// transform their payload into this shape before calling this route.
export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = LeadSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const lead = await prisma.lead.create({
    data: {
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      source: parsed.data.source,
      propertyId: parsed.data.propertyId,
      stage: "NEW",
    },
  });

  // Fire-and-forget qualification — in production this should go through a
  // queue (BullMQ) rather than blocking the request.
  const { score, recommendedStage } = await qualifyLead(lead, parsed.data.message);

  const updated = await prisma.lead.update({
    where: { id: lead.id },
    data: { score, stage: recommendedStage },
  });

  return NextResponse.json({ lead: updated }, { status: 201 });
}
