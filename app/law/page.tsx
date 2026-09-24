import Link from "next/link";

export const metadata = {
  title: "Venezuela Property Law Library — NorthBridge",
  description: "Venezuelan real estate law explained: Código Civil, Ley de Arrendamientos Inmobiliarios, Ley de Propiedad Horizontal, registry regulations, and foreign investment framework.",
};

const LAWS = [
  {
    name: "Código Civil de Venezuela",
    shortName: "Código Civil",
    year: "1982",
    gazette: "Gaceta Oficial N° 2.990 Extraordinario, 26 julio 1982",
    status: "VIGENTE",
    category: "Foundational",
    summary: "The foundational legal instrument governing property ownership, contracts, obligations, and civil relationships in Venezuela. Real estate transactions are primarily governed by Book Second (De los Bienes y de su Propiedad) and Book Third (De las Maneras de Adquirir la Propiedad).",
    keyArticles: [
      { n: "Art. 545", text: "Defines the right of property as the power to use, enjoy, and dispose of an asset." },
      { n: "Art. 796", text: "Establishes that ownership of property is acquired by law, succession, donation, prescription, tradition, and other lawful means." },
      { n: "Art. 1.141", text: "Sets out the essential conditions for a valid contract: consent, object, and cause." },
      { n: "Art. 1.161", text: "Establishes that in contracts transferring property, title transfers by consent alone, without requiring delivery." },
    ],
    impactBuyer: "Governs the purchase contract, conditions for valid ownership transfer, and buyer protections against defects.",
    impactSeller: "Establishes seller obligations regarding title, encumbrances, and contractual guarantees.",
    impactForeign: "Applies equally to foreign buyers. No nationality restrictions on property ownership under the Código Civil.",
  },
  {
    name: "Ley de Arrendamientos Inmobiliarios",
    shortName: "Rental Law",
    year: "1999",
    gazette: "Gaceta Oficial N° 36.845, 7 diciembre 1999",
    status: "VIGENTE — with modifications",
    category: "Rental & Tenancy",
    summary: "Governs the leasing of residential and commercial properties in Venezuela. Establishes tenant rights, maximum lease terms, rent regulation mechanisms, and eviction procedures. Investors planning to generate rental income must understand this law's implications on their exit and income rights.",
    keyArticles: [
      { n: "Art. 1", text: "Defines the scope — applies to leases of urban and semi-urban properties, including commercial premises." },
      { n: "Art. 38", text: "Regulates the causes for just eviction (desalojo) of tenants." },
      { n: "Art. 51", text: "Establishes the right of first refusal (preferencia ofertiva) for tenants in case of sale." },
      { n: "Art. 72–79", text: "Governs rent regulation and applicable authority determinations." },
    ],
    impactBuyer: "A buyer acquiring a property with existing tenants takes on the lease obligations. Tenant right of first refusal must be honored.",
    impactSeller: "Existing leases survive the sale. Seller must notify tenants and respect their legal rights before completing the transaction.",
    impactForeign: "Foreign landlords are subject to the same obligations as Venezuelan nationals. Remote property management with existing tenants requires careful contractual structure.",
  },
  {
    name: "Ley de Propiedad Horizontal",
    shortName: "Condominium Law",
    year: "1983",
    gazette: "Gaceta Oficial N° 3.241 Extraordinario, 18 agosto 1983",
    status: "VIGENTE",
    category: "Condominium",
    summary: "Governs condominium ownership — the co-ownership of common areas alongside individual unit ownership. Applies to apartments, commercial buildings, and mixed-use developments. Critical for buyers of any unit within a building with shared areas.",
    keyArticles: [
      { n: "Art. 1", text: "Defines propiedad horizontal as the ownership of individual sections of a building alongside co-ownership of common elements." },
      { n: "Art. 7", text: "Establishes that each owner's share in common areas is proportional to the value of their unit as established in the condominium document." },
      { n: "Art. 14", text: "Defines the rights and obligations of co-owners, including maintenance contributions." },
      { n: "Art. 20", text: "Governs the condominium assembly (asamblea de copropietarios) and decision-making processes." },
    ],
    impactBuyer: "Buyer assumes all condominium obligations including outstanding fees (cuotas de condominio). Outstanding debts transfer with the property — not with the seller.",
    impactSeller: "Must provide proof of condominium solvency (solvencia de condominio) at closing. Unpaid fees are a common transaction complication.",
    impactForeign: "Foreign owners have the same rights and obligations as Venezuelan co-owners. Participation in assemblies may require a local representative.",
  },
  {
    name: "Ley de Registro Público y del Notariado",
    shortName: "Registry Law",
    year: "2014",
    gazette: "Gaceta Oficial N° 6.156 Extraordinario, 19 noviembre 2014",
    status: "VIGENTE",
    category: "Registry & Notarial",
    summary: "Governs the public registry system and notarial services in Venezuela. Establishes the requirements for document authentication, property registration, and the legal effects of registration. Registration at the Registro Inmobiliario is what makes a property transfer enforceable against third parties.",
    keyArticles: [
      { n: "Art. 3", text: "Establishes the principle of public faith (fe pública) of registered documents." },
      { n: "Art. 46", text: "Specifies documents that must be registered to have effect against third parties, including property deeds." },
      { n: "Art. 92", text: "Governs notarial certification requirements for real estate transactions." },
    ],
    impactBuyer: "Registration of the purchase deed at the Registro Inmobiliario is essential — an unregistered deed is not enforceable against third parties.",
    impactSeller: "The deed must be properly authenticated by a notary before registration. Sellers must ensure all prior registrations are in order.",
    impactForeign: "Foreign documents used in Venezuelan transactions (powers of attorney, corporate documents) must typically be apostilled and translated by a certified translator.",
  },
  {
    name: "Ley de Inversiones Extranjeras",
    shortName: "Foreign Investment Law",
    year: "2014",
    gazette: "Gaceta Oficial N° 6.152 Extraordinario, 18 noviembre 2014",
    status: "VIGENTE",
    category: "Foreign Investment",
    summary: "Establishes the legal framework for foreign investment in Venezuela. Defines registration requirements, repatriation rights, and protections available to foreign investors. Venezuelan law generally permits foreign investment in real estate, but certain sectors have restrictions.",
    keyArticles: [
      { n: "Art. 1", text: "Defines foreign investment and establishes the principle of national treatment for foreign investors." },
      { n: "Art. 9", text: "Establishes the right to repatriate profits and capital, subject to applicable regulations." },
      { n: "Art. 16", text: "Requires registration of foreign investments with SIEX (Superintendency of Foreign Investments)." },
    ],
    impactBuyer: "Foreign investors may need to register their investment with SIEX. Repatriation of capital gains is subject to exchange regulations in effect at the time.",
    impactSeller: "Not directly applicable to sellers.",
    impactForeign: "SIEX registration may be required for investments above certain thresholds. Repatriation rights exist in law but are subject to exchange controls in practice — verify current regulations with counsel.",
  },
];

const STATUS_COLOR: Record<string, string> = {
  "VIGENTE": "#6FCF97",
  "VIGENTE — with modifications": "#E0B84A",
  "DEROGADA": "#EB7070",
};

const CAT_COLOR: Record<string, string> = {
  "Foundational": "#C8A96E",
  "Rental & Tenancy": "#6B7E9B",
  "Condominium": "#6B7E9B",
  "Registry & Notarial": "#6B7E9B",
  "Foreign Investment": "#6FCF97",
};

export default function LawPage() {
  return (
    <main style={{ background: "#0F1A10", minHeight: "100vh", paddingTop: 80 }}>

      {/* HERO */}
      <section style={{ padding: "80px 48px 48px", maxWidth: 1000, margin: "0 auto" }}>
        <p style={{ fontSize: 11, letterSpacing: 3, color: "#C8A96E", textTransform: "uppercase", marginBottom: 20 }}>
          04 — Venezuela Property Law
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px,5vw,64px)", fontWeight: 300, lineHeight: 1.1, color: "#FFFFFF", marginBottom: 24 }}>
          Legal Framework<br />for Venezuelan Real Estate
        </h1>
        <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.75, color: "#B8C4D4", maxWidth: 600, borderLeft: "1px solid #C8A96E", paddingLeft: 20 }}>
          The key laws governing property acquisition, ownership, rental, registration, and foreign investment in Venezuela —
          with Gaceta Oficial references, plain-language explanations, and impact analysis for buyers, sellers, and foreign investors.
        </p>
      </section>

      {/* LEGAL DISCLAIMER */}
      <section style={{ padding: "0 48px 60px", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ background: "#172018", border: "1px solid rgba(200,169,110,0.15)", padding: "20px 28px", display: "flex", gap: 16 }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, color: "#C8A96E", flexShrink: 0 }}>i</span>
          <p style={{ fontSize: 12.5, lineHeight: 1.75, color: "#6B7E9B", margin: 0 }}>
            <strong style={{ color: "#B8C4D4" }}>This library provides general legal information, not legal advice.</strong>{" "}
            Venezuelan law changes. Gaceta Oficial references are provided for verification purposes.
            Always confirm current law status and interpretation with a licensed Venezuelan attorney before any transaction.
            NorthBridge cites primary sources — official Gazettes, not secondary interpretations.
          </p>
        </div>
      </section>

      {/* LAWS */}
      <section style={{ padding: "0 48px 80px", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "rgba(200,169,110,0.06)" }}>
          {LAWS.map((law, i) => (
            <div key={i} style={{ background: "#172018", padding: "40px 36px" }}>

              {/* Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8, flexWrap: "wrap", gap: 12 }}>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 400, color: "#FFFFFF", margin: 0 }}>
                  {law.name}
                </h2>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 10, padding: "3px 10px", background: "rgba(200,169,110,0.1)", color: CAT_COLOR[law.category] ?? "#6B7E9B", letterSpacing: 0.5 }}>
                    {law.category}
                  </span>
                  <span style={{ fontSize: 10, padding: "3px 10px", background: "rgba(42,138,90,0.1)", color: STATUS_COLOR[law.status] ?? "#6B7E9B" }}>
                    {law.status}
                  </span>
                </div>
              </div>

              <p style={{ fontSize: 11, color: "#4A5A6A", marginBottom: 20 }}>
                {law.year} · {law.gazette}
              </p>

              <p style={{ fontSize: 14, color: "#B8C4D4", lineHeight: 1.75, marginBottom: 28 }}>{law.summary}</p>

              {/* Key Articles */}
              <div style={{ marginBottom: 28 }}>
                <p style={{ fontSize: 9.5, letterSpacing: 1.5, color: "#4A5A6A", textTransform: "uppercase", marginBottom: 14 }}>Key Articles</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {law.keyArticles.map((art, j) => (
                    <div key={j} style={{ display: "flex", gap: 16, borderLeft: "1px solid rgba(200,169,110,0.15)", paddingLeft: 16 }}>
                      <span style={{ fontSize: 11, fontFamily: "'Cormorant Garamond', serif", color: "#C8A96E", whiteSpace: "nowrap", flexShrink: 0, paddingTop: 2 }}>{art.n}</span>
                      <p style={{ fontSize: 13, color: "#6B7E9B", lineHeight: 1.6, margin: 0 }}>{art.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "rgba(200,169,110,0.08)" }}>
                {[
                  { label: "Impact for Buyer", body: law.impactBuyer },
                  { label: "Impact for Seller", body: law.impactSeller },
                  { label: "Impact for Foreign Investor", body: law.impactForeign },
                ].map((col, j) => (
                  <div key={j} style={{ background: "#0F1A10", padding: "18px 20px" }}>
                    <p style={{ fontSize: 9.5, letterSpacing: 1, color: "#C8A96E", textTransform: "uppercase", marginBottom: 8 }}>{col.label}</p>
                    <p style={{ fontSize: 12.5, color: "#6B7E9B", lineHeight: 1.65, margin: 0 }}>{col.body}</p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#172018", padding: "60px 48px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", gap: 32, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
          <div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 400, color: "#FFFFFF", marginBottom: 8 }}>
              How does this apply to a specific property?
            </h2>
            <p style={{ fontSize: 14, color: "#6B7E9B", margin: 0 }}>NorthBridge Due Diligence™ reviews legal status for every listing.</p>
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/properties" style={{ background: "#C8A96E", color: "#0F1A10", padding: "14px 28px", fontSize: 13, fontWeight: 500, textDecoration: "none" }}>View Properties</Link>
            <Link href="/due-diligence" style={{ border: "1px solid rgba(107,126,155,0.4)", color: "#B8C4D4", padding: "14px 28px", fontSize: 13, textDecoration: "none" }}>Due Diligence™ System</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
