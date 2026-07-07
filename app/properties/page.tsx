import { prisma } from "@/lib/db";

interface SearchParams {
  country?: string;
  type?: string;
  minRoi?: string;
  minPrice?: string;
  maxPrice?: string;
}

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const properties = await prisma.property.findMany({
    where: {
      status: "ACTIVE",
      country: searchParams.country ? (searchParams.country as any) : undefined,
      type: searchParams.type ? (searchParams.type as any) : undefined,
      expectedRoi: searchParams.minRoi
        ? { gte: parseFloat(searchParams.minRoi) }
        : undefined,
      price: {
        gte: searchParams.minPrice ? parseFloat(searchParams.minPrice) : undefined,
        lte: searchParams.maxPrice ? parseFloat(searchParams.maxPrice) : undefined,
      },
    },
    include: { media: { take: 1 } },
    orderBy: { createdAt: "desc" },
    take: 24,
  });

  return (
    <main className="properties-page">
      <aside className="filters">{/* Filter form mirrors SearchParams above */}</aside>
      <section className="results-grid">
        {properties.map((p) => (
          <a key={p.id} href={`/properties/${p.id}`} className="property-card">
            <img src={p.media[0]?.url ?? "/placeholder.jpg"} alt={p.title} />
            <div className="property-card-body">
              <div className="property-card-ticker">{p.ticker}</div>
              <h3>{p.title}</h3>
              <p>{p.city}, {p.country}</p>
              <div className="property-card-meta">
                <span>${p.price.toString()}</span>
                {p.expectedRoi && <span className="roi-badge">{p.expectedRoi}% ROI</span>}
              </div>
            </div>
          </a>
        ))}
        {properties.length === 0 && <p>No properties match these filters yet.</p>}
      </section>
    </main>
  );
}
