import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const PROPERTIES = [
  { ticker: "BR-SP-014", title: "Vila Madalena Boutique Residences", country: "BRAZIL", state: "São Paulo", city: "São Paulo", type: "RESIDENTIAL", price: 480000, expectedRoi: 9.2, capRate: 6.1, areaM2: 96, riskScore: 22, status: "ACTIVE", description: "A 12-unit boutique residential building in São Paulo's Vila Madalena district, fully leased to long-term tenants. Title and zoning records verified by local counsel." },
  { ticker: "BR-RJ-021", title: "Copacabana Beachfront Flat", country: "BRAZIL", state: "Rio de Janeiro", city: "Rio de Janeiro", type: "RENTAL", price: 610000, expectedRoi: 11.4, capRate: 7.0, areaM2: 78, riskScore: 28, status: "ACTIVE", description: "Furnished short-term rental unit two blocks from Copacabana beach. Currently operating on a licensed short-term rental permit with established booking history." },
  { ticker: "BR-SC-008", title: "Florianópolis Coastal Development Plot", country: "BRAZIL", state: "Santa Catarina", city: "Florianópolis", type: "LAND", price: 350000, expectedRoi: 14.8, capRate: null, areaM2: 1200, riskScore: 41, status: "ACTIVE", description: "Zoned coastal lot approved for low-rise residential development. Environmental clearance complete; building permit application in progress." },
  { ticker: "BR-MG-005", title: "Belo Horizonte Logistics Warehouse", country: "BRAZIL", state: "Minas Gerais", city: "Belo Horizonte", type: "COMMERCIAL", price: 920000, expectedRoi: 10.1, capRate: 8.3, areaM2: 3400, riskScore: 33, status: "ACTIVE", description: "Class B logistics warehouse near the BR-040 corridor, leased to a regional distribution company on a 6-year contract." },
  { ticker: "VE-CA-002", title: "Caracas Las Mercedes Office Floor", country: "VENEZUELA", state: "Capital District", city: "Caracas", type: "COMMERCIAL", price: 275000, expectedRoi: 16.5, capRate: 9.7, areaM2: 540, riskScore: 58, status: "ACTIVE", description: "Full office floor in Las Mercedes business district. Title verified; tenant base concentrated in professional services." },
  { ticker: "VE-NE-011", title: "Margarita Island Beach Resort Units", country: "VENEZUELA", state: "Nueva Esparta", city: "Margarita Island", type: "RESIDENTIAL", price: 195000, expectedRoi: 18.2, capRate: null, areaM2: 64, riskScore: 62, status: "PENDING_VERIFICATION", description: "Beachfront condo units within an operating resort. Tourism sector showing early-stage recovery; documentation review in progress." },
  { ticker: "BR-BA-017", title: "Salvador Historic District Mixed-Use", country: "BRAZIL", state: "Bahia", city: "Salvador", type: "DEVELOPMENT", price: 1450000, expectedRoi: 13.0, capRate: null, areaM2: 2100, riskScore: 47, status: "ACTIVE", description: "Restoration and conversion project in Salvador's historic Pelourinho district: ground-floor retail with residential units above." },
  { ticker: "VE-CB-004", title: "Valencia Industrial Park Lot", country: "VENEZUELA", state: "Carabobo", city: "Valencia", type: "LAND", price: 140000, expectedRoi: 15.9, capRate: null, areaM2: 5000, riskScore: 55, status: "PENDING_VERIFICATION", description: "Industrial-zoned lot within an established manufacturing corridor. Utility access confirmed; ownership chain under final review." },
] as const;

async function main() {
  const owner = await prisma.user.upsert({
    where: { email: "demo-agent@northbridgerealestate.com" },
    update: {},
    create: {
      email: "demo-agent@northbridgerealestate.com",
      name: "NorthBridge Demo Agent",
      role: "AGENT",
      kycStatus: "VERIFIED",
    },
  });

  for (const p of PROPERTIES) {
    const { riskScore, ...propertyData } = p;
    const created = await prisma.property.upsert({
      where: { ticker: p.ticker },
      update: {},
      create: { ...propertyData, ownerId: owner.id },
    });
    await prisma.riskAssessment.upsert({
      where: { propertyId: created.id },
      update: {},
      create: {
        propertyId: created.id,
        riskScore,
        factors: { note: "Seed data — illustrative, not a real risk assessment." },
      },
    });
  }

  console.log(`Seeded ${PROPERTIES.length} properties under owner ${owner.email}.`);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
