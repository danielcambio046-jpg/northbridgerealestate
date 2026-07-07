import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/db";
import { generateTicker } from "@/lib/tickers";
import { authOptions } from "@/lib/auth";

const SELLER_ROLES = ["SELLER", "AGENT", "DEVELOPER", "ADMIN"];

const CreatePropertySchema = z.object({
  title: z.string().min(5),
  description: z.string().min(20),
  country: z.enum(["BRAZIL", "VENEZUELA"]),
  state: z.string(),
  city: z.string(),
  type: z.enum(["RESIDENTIAL", "COMMERCIAL", "LAND", "DEVELOPMENT", "RENTAL"]),
  price: z.number().positive(),
  expectedRoi: z.number().min(0).max(100).optional(),
  areaM2: z.number().positive().optional(),
});

// GET /api/properties?country=BRAZIL&type=RESIDENTIAL&minRoi=8
export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;

  const properties = await prisma.property.findMany({
    where: {
      status: "ACTIVE",
      country: (params.get("country") as any) || undefined,
      type: (params.get("type") as any) || undefined,
      expectedRoi: params.get("minRoi")
        ? { gte: parseFloat(params.get("minRoi")!) }
        : undefined,
    },
    include: { media: true },
    take: 50,
  });

  return NextResponse.json({ properties });
}

// POST /api/properties — create a draft listing.
// ownerId is no longer client-supplied: it comes from the authenticated
// session, and only seller/agent/developer/admin accounts can use this.
export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json({ error: "You must be signed in to list a property." }, { status: 401 });
  }
  if (!SELLER_ROLES.includes(session.user.role)) {
    return NextResponse.json({ error: "This account type cannot list properties." }, { status: 403 });
  }

  const body = await req.json();
  const parsed = CreatePropertySchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const property = await prisma.property.create({
    data: {
      ...parsed.data,
      ticker: generateTicker(parsed.data.country, parsed.data.state),
      ownerId: session.user.id,
      status: "PENDING_VERIFICATION",
    },
  });

  return NextResponse.json({ property }, { status: 201 });
}
