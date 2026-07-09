import { prisma } from "@/lib/db";
import { LeadForm } from "./lead-form";
import { notFound } from "next/navigation";

export default async function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = await prisma.property.findUnique({
    where: { id: params.id },
    include: { media: true },
  });

  if (!property) return notFound();

  const price = Number(property.price).toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  const roi = property.expectedRoi != null ? `${Number(property.expectedRoi).toFixed(1)}%` : null;
  const cap = property.capRate != null ? `${Number(property.capRate).toFixed(1)}%` : null;
  const area = property.areaM2 != null ? `${Number(property.areaM2).toLocaleString()} m²` : null;

  return (
    <main style={{ maxWidth: 860, margin: "0 auto", padding: "32px 24px", fontFamily: "sans-serif" }}>
      <a href="/properties" style={{ fontSize: 13, color: "#5b6560", display: "inline-block", marginBottom: 16 }}>
        ← Back to marketplace
      </a>
      <p style={{ fontFamily: "monospace", fontSize: 12, color: "#5b6560" }}>{property.ticker}</p>
      <h1 style={{ fontFamily: "Georgia,serif", fontSize: 28, margin: "4px 0 8px" }}>{property.title}</h1>
      <p style={{ color: "#5b6560", marginBottom: 20 }}>
        {property.city}, {property.state}, {property.country}
      </p>
      {property.description && <p style={{ marginBottom: 24 }}>{property.description}</p>}

      <div style={{ borderTop: "1px solid #ddd6c4", marginBottom: 28 }}>
        {[
          ["Price", price],
          roi ? ["Expected ROI", roi] : null,
          cap ? ["Cap rate", cap] : null,
          area ? ["Area", area] : null,
        ].filter(Boolean).map(([k, v]) => (
          <div key={k as string} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #ddd6c4", fontSize: 14 }}>
            <span style={{ color: "#5b6560" }}>{k}</span>
            <span style={{ fontFamily: "monospace" }}>{v}</span>
          </div>
        ))}
      </div>

      <h2 style={{ fontFamily: "Georgia,serif", fontSize: 18, marginBottom: 14 }}>Request information</h2>
      <LeadForm propertyId={property.id} />
    </main>
  );
}

