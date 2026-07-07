import { prisma } from "@/lib/db";
import Link from "next/link";

async function getProperties() {
  try {
    const properties = await prisma.property.findMany({
      where: { status: "ACTIVE" },
      take: 50,
      orderBy: { createdAt: "desc" },
    });
    return { properties, error: null };
  } catch (e: any) {
    return { properties: [], error: e.message };
  }
}

export default async function PropertiesPage() {
  const { properties, error } = await getProperties();

  if (error) {
    return (
      <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
        <h1>Marketplace</h1>
        <div style={{ background: "#fef2f2", border: "1px solid #fca5a5", borderRadius: 8, padding: 16, marginTop: 16 }}>
          <strong>Database connection error:</strong>
          <pre style={{ fontSize: 12, marginTop: 8, whiteSpace: "pre-wrap" }}>{error}</pre>
          <p style={{ fontSize: 12, color: "#666", marginTop: 8 }}>
            DATABASE_URL starts with: {process.env.DATABASE_URL?.slice(0, 30) ?? "NOT SET"}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 24px" }}>
      <h1 style={{ fontFamily: "Georgia, serif", marginBottom: 24 }}>Marketplace</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 20 }}>
        {properties.map((p) => (
          <Link key={p.id} href={`/properties/${p.id}`} className="property-card" style={{ display: "block", background: "#faf8f2", border: "1px solid #ddd6c4", borderRadius: 10, overflow: "hidden", textDecoration: "none", color: "inherit" }}>
            <div style={{ padding: "14px 16px" }}>
              <div style={{ fontFamily: "monospace", fontSize: 11, color: "#5b6560" }}>{p.ticker}</div>
              <h3 style={{ fontFamily: "Georgia,serif", fontSize: 15, margin: "5px 0 4px" }}>{p.title}</h3>
              <p style={{ fontSize: 12, color: "#5b6560", margin: "0 0 10px" }}>{p.city}, {p.country}</p>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                <span><strong>$\{Number(p.price).toLocaleString()}</strong></span>
                {p.expectedRoi && <span style={{ color: "#a8714a" }}>{Number(p.expectedRoi).toFixed(1)}% ROI</span>}
              </div>
            </div>
          </Link>
        ))}
        {properties.length === 0 && <p>No active listings yet.</p>}
      </div>
    </main>
  );
}

