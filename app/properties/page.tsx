import { prisma } from "@/lib/db";
import Link from "next/link";

async function getProperties(country?: string, type?: string) {
  try {
    return await prisma.property.findMany({
      where: {
        status: "ACTIVE",
        ...(country ? { country } : {}),
        ...(type ? { type: type as any } : {}),
      },
      orderBy: { expectedRoi: "desc" },
      take: 50,
    });
  } catch {
    return [];
  }
}

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: { country?: string; type?: string };
}) {
  const properties = await getProperties(searchParams.country, searchParams.type);
  const types = ["RESIDENTIAL", "COMMERCIAL", "LAND", "DEVELOPMENT", "RENTAL"];

  return (
    <main className="properties-page">
      <p className="section-index" style={{ paddingTop: 0 }}>Active Listings</p>
      <h1 className="section-h2">Venezuela Properties</h1>
      <p className="section-sub">
        Every listing has been reviewed by our advisory team. Documentation status and risk identification included.
      </p>

      {/* Filters */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "8px" }}>
        <Link href="/properties" style={{ fontSize: 12, padding: "6px 14px", border: "1px solid rgba(200,169,110,0.3)", color: !searchParams.type ? "#C8A96E" : "#6B7E9B" }}>All types</Link>
        {types.map(t => (
          <Link key={t} href={`/properties?type=${t}`}
            style={{ fontSize: 12, padding: "6px 14px", border: "1px solid rgba(200,169,110,0.3)", color: searchParams.type === t ? "#C8A96E" : "#6B7E9B" }}>
            {t.charAt(0) + t.slice(1).toLowerCase()}
          </Link>
        ))}
      </div>

      <div className="results-grid">
        {properties.map(p => (
          <Link key={p.id} href={`/properties/${p.id}`} className="property-card">
            <div className="property-card-ticker">{p.ticker}</div>
            <h3 className="property-card-title">{p.title}</h3>
            <p className="property-card-loc">{p.city}, {p.state} · {p.type.charAt(0) + p.type.slice(1).toLowerCase()}</p>
            <div className="property-card-meta">
              <span className="property-card-price">${Number(p.price).toLocaleString("en-US", { maximumFractionDigits: 0 })}</span>
              {p.expectedRoi && <span className="roi-badge">{Number(p.expectedRoi).toFixed(1)}% ROI est.</span>}
            </div>
          </Link>
        ))}
        {properties.length === 0 && (
          <div style={{ gridColumn: "1/-1", padding: "60px 28px", color: "#6B7E9B", fontSize: 14 }}>
            No active listings at this time. Check back soon.
          </div>
        )}
      </div>
    </main>
  );
}
