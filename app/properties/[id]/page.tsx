import { prisma } from "@/lib/db";
import { LeadForm } from "./lead-form";

export default async function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = await prisma.property.findUnique({ where: { id: params.id } });

  if (!property) {
    return (
      <main className="property-detail">
        <a href="/properties" className="back-link">← Back to marketplace</a>
        <p>This listing is no longer available.</p>
      </main>
    );
  }

  return (
    <main className="property-detail">
      <a href="/properties" className="back-link">← Back to marketplace</a>
      <p className="ticker">{property.ticker}</p>
      <h1>{property.title}</h1>
      <p>{property.city}, {property.state}, {property.country}</p>
      <p>{property.description}</p>

      <div className="terms">
        <div><span>Price</span><span>${property.price.toString()}</span></div>
        {property.expectedRoi != null && <div><span>Expected ROI</span><span>{property.expectedRoi}%</span></div>}
        {property.capRate != null && <div><span>Cap rate</span><span>{property.capRate}%</span></div>}
        {property.areaM2 != null && <div><span>Area</span><span>{property.areaM2} m²</span></div>}
      </div>

      <LeadForm propertyId={property.id} />
    </main>
  );
}
