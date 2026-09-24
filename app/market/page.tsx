import Link from "next/link";

export const metadata = {
  title: "Venezuela Real Estate Market Intelligence — NorthBridge",
  description: "Price per m², rental yields, and market analysis for Caracas, Valencia, Margarita, Lechería, Maracaibo, and Barquisimeto. Facts, estimates, and analysis clearly distinguished.",
};

const CITIES = [
  {
    name: "Caracas",
    state: "Capital District",
    tier: "Primary Market",
    priceRange: "$800 – $2,400",
    priceUnit: "per m² · USD",
    rentalYield: "5 – 9%",
    liquidity: "Moderate",
    profile: "Venezuela's capital and primary commercial center. East Caracas (Chacao, Altamira, Las Mercedes) concentrates the highest-value residential and commercial inventory. Demand from professional services, diplomatic, and international business sectors provides relative price stability in premium zones.",
    opportunities: ["Premium residential in Chacao / Altamira", "Office space in Las Mercedes", "Value-add residential in secondary zones"],
    risks: ["Security varies significantly by zone", "High price dispersion within city", "Infrastructure reliability issues"],
    tag: "ESTIMATE",
  },
  {
    name: "Margarita Island",
    state: "Nueva Esparta",
    tier: "Tourism & Resort",
    priceRange: "$400 – $1,200",
    priceUnit: "per m² · USD",
    rentalYield: "6 – 12%",
    liquidity: "Low – Moderate",
    profile: "Venezuela's main tourism destination and a historically active real estate market. Duty-free status (puerto libre) historically attracted commercial activity. Tourism sector showing early-stage recovery signs. Beachfront and resort properties have international buyer interest.",
    opportunities: ["Resort and hospitality units", "Beachfront residential", "Short-term rental income potential"],
    risks: ["Tourism revenue highly variable", "Documentation quality varies widely", "Limited liquidity for exit"],
    tag: "ESTIMATE",
  },
  {
    name: "Valencia",
    state: "Carabobo",
    tier: "Industrial Corridor",
    priceRange: "$300 – $900",
    priceUnit: "per m² · USD",
    rentalYield: "7 – 11%",
    liquidity: "Low – Moderate",
    profile: "Venezuela's second-largest industrial city. Valencia hosts manufacturing, logistics, and distribution operations. Industrial and warehouse properties have maintained demand from operating companies. Residential market supported by industrial employment base.",
    opportunities: ["Industrial and logistics properties", "Commercial real estate near industrial zones", "Residential serving industrial workforce"],
    risks: ["Industrial sector output highly variable", "Infrastructure constraints", "Limited international buyer market"],
    tag: "ESTIMATE",
  },
  {
    name: "Lechería",
    state: "Anzoátegui",
    tier: "Premium Coastal",
    priceRange: "$500 – $1,800",
    priceUnit: "per m² · USD",
    rentalYield: "5 – 10%",
    liquidity: "Low",
    profile: "Venezuela's most concentrated premium coastal residential market. Lechería hosts high-income residential developments, waterfront properties, and proximity to the Puerto La Cruz energy sector. Considered one of Venezuela's safest and most affluent residential environments.",
    opportunities: ["Waterfront premium residential", "High-income rental market", "New residential development"],
    risks: ["Very limited transaction volume", "Price data scarce and unreliable", "Exit liquidity uncertain"],
    tag: "ESTIMATE",
  },
  {
    name: "Maracaibo",
    state: "Zulia",
    tier: "Distressed Opportunity",
    priceRange: "$200 – $700",
    priceUnit: "per m² · USD",
    rentalYield: "8 – 14%",
    liquidity: "Very Low",
    profile: "Venezuela's oil capital and second-largest city, significantly affected by infrastructure deterioration and economic contraction. Values have declined substantially, presenting distressed acquisition opportunities for risk-tolerant investors with long time horizons. High-risk, high-potential market.",
    opportunities: ["Distressed asset acquisition at significant discounts", "Long-horizon recovery play", "Commercial properties serving essential sectors"],
    risks: ["Significant infrastructure deterioration (electricity, water)", "Very limited buyer pool for exit", "Title and documentation risks higher than other markets"],
    tag: "ESTIMATE",
  },
  {
    name: "Barquisimeto",
    state: "Lara",
    tier: "Commercial Hub",
    priceRange: "$250 – $800",
    priceUnit: "per m² · USD",
    rentalYield: "7 – 12%",
    liquidity: "Low",
    profile: "Venezuela's fourth-largest city and an important commercial distribution center. Historically known as a trading and logistics hub connecting western Venezuela. Commercial real estate demand driven by distribution and retail sectors. Relatively stable compared to oil-dependent cities.",
    opportunities: ["Commercial and logistics properties", "Retail and distribution real estate", "Residential serving commercial sector"],
    risks: ["Limited international investor presence", "Less developed professional services ecosystem", "Price data limited"],
    tag: "ESTIMATE",
  },
];

const DISCLAIMER_NOTE = "All price ranges and yield figures are estimates based on available market information as of publication date. Venezuela's real estate market lacks centralized, reliable transaction data. Figures should be treated as directional estimates only — not as appraisals, valuations, or investment projections. Actual values in specific transactions may vary significantly.";

export default function MarketPage() {
  return (
    <main style={{ background: "#0F1A10", minHeight: "100vh", paddingTop: 80 }}>

      {/* HERO */}
      <section style={{ padding: "80px 48px 48px", maxWidth: 1060, margin: "0 auto" }}>
        <p style={{ fontSize: 11, letterSpacing: 3, color: "#C8A96E", textTransform: "uppercase", marginBottom: 20 }}>
          03 — Market Intelligence
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px,5vw,64px)", fontWeight: 300, lineHeight: 1.1, color: "#FFFFFF", marginBottom: 24 }}>
          Venezuela Real Estate<br />Market Intelligence
        </h1>
        <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.75, color: "#B8C4D4", maxWidth: 600, borderLeft: "1px solid #C8A96E", paddingLeft: 20 }}>
          Six markets. Current intelligence. Every data point labeled as Fact, Estimate, or Analysis —
          never presented as certainty in a market where reliable transaction data is scarce.
        </p>
      </section>

      {/* METHODOLOGY NOTE */}
      <section style={{ padding: "0 48px 60px", maxWidth: 1060, margin: "0 auto" }}>
        <div style={{ background: "#172018", border: "1px solid rgba(200,169,110,0.15)", padding: "20px 28px", display: "flex", gap: 16 }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, color: "#C8A96E", flexShrink: 0 }}>i</span>
          <p style={{ fontSize: 12.5, lineHeight: 1.75, color: "#6B7E9B", margin: 0 }}>{DISCLAIMER_NOTE}</p>
        </div>
      </section>

      {/* CITIES */}
      <section style={{ padding: "0 48px 80px", maxWidth: 1060, margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "rgba(200,169,110,0.06)" }}>
          {CITIES.map((city, i) => (
            <div key={i} style={{ background: i % 2 === 0 ? "#0F1A10" : "#172018", padding: "40px 36px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 48, alignItems: "start" }}>

                {/* LEFT — stats */}
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                    <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 400, color: "#FFFFFF", margin: 0 }}>{city.name}</h2>
                    <span style={{ fontSize: 9, padding: "3px 8px", background: "rgba(200,169,110,0.1)", color: "#C8A96E", letterSpacing: 0.5, whiteSpace: "nowrap" }}>{city.tag}</span>
                  </div>
                  <p style={{ fontSize: 11, color: "#4A6A58", marginBottom: 24 }}>{city.state} · {city.tier}</p>

                  <div style={{ marginBottom: 16 }}>
                    <p style={{ fontSize: 9.5, letterSpacing: 1.5, color: "#4A5A6A", textTransform: "uppercase", marginBottom: 4 }}>Est. price per m²</p>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 400, color: "#C8A96E", margin: 0 }}>{city.priceRange}</p>
                    <p style={{ fontSize: 10.5, color: "#4A5A6A" }}>{city.priceUnit} · {city.tag}</p>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <p style={{ fontSize: 9.5, letterSpacing: 1, color: "#4A5A6A", textTransform: "uppercase", marginBottom: 4 }}>Est. rental yield</p>
                      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, color: "#FFFFFF", margin: 0 }}>{city.rentalYield}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: 9.5, letterSpacing: 1, color: "#4A5A6A", textTransform: "uppercase", marginBottom: 4 }}>Liquidity</p>
                      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, color: "#FFFFFF", margin: 0 }}>{city.liquidity}</p>
                    </div>
                  </div>
                </div>

                {/* RIGHT — profile */}
                <div>
                  <p style={{ fontSize: 14, color: "#B8C4D4", lineHeight: 1.75, marginBottom: 24 }}>{city.profile}</p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                    <div>
                      <p style={{ fontSize: 9.5, letterSpacing: 1.5, color: "#2A8A5A", textTransform: "uppercase", marginBottom: 10 }}>Opportunities · ANALYSIS</p>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                        {city.opportunities.map((o, j) => (
                          <li key={j} style={{ fontSize: 12.5, color: "#4A6A58", paddingLeft: 12, position: "relative" }}>
                            <span style={{ position: "absolute", left: 0, color: "#2A8A5A" }}>+</span>{o}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p style={{ fontSize: 9.5, letterSpacing: 1.5, color: "#C03030", textTransform: "uppercase", marginBottom: 10 }}>Risks identified · ANALYSIS</p>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                        {city.risks.map((r, j) => (
                          <li key={j} style={{ fontSize: 12.5, color: "#6A4A4A", paddingLeft: 12, position: "relative" }}>
                            <span style={{ position: "absolute", left: 0, color: "#C03030" }}>–</span>{r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#172018", padding: "60px 48px" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto", display: "flex", gap: 32, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
          <div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 400, color: "#FFFFFF", marginBottom: 8 }}>
              Looking at a specific property in these markets?
            </h2>
            <p style={{ fontSize: 14, color: "#6B7E9B", margin: 0 }}>Every NorthBridge listing includes city context and Due Diligence™ status.</p>
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/properties" style={{ background: "#C8A96E", color: "#0F1A10", padding: "14px 28px", fontSize: 13, fontWeight: 500, textDecoration: "none" }}>View Properties</Link>
            <Link href="/foreign-investor" style={{ border: "1px solid rgba(107,126,155,0.4)", color: "#B8C4D4", padding: "14px 28px", fontSize: 13, textDecoration: "none" }}>Foreign Investor Guide</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
