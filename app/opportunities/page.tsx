import Link from "next/link";

export const metadata = {
  title: "Investment Opportunities — NorthBridge Venezuela",
  description:
    "Venezuela real estate investment opportunities — residential, commercial, land, development, and income-producing properties. Under development.",
};

export default function OpportunitiesPage() {
  return (
    <main style={{ background: "#0F1A10", minHeight: "100vh", paddingTop: 80 }}>
      <section style={{ padding: "80px 48px", maxWidth: 900, margin: "0 auto" }}>
        <p style={{ fontSize: 11, letterSpacing: 3, color: "#C8A96E", textTransform: "uppercase", marginBottom: 20 }}>
          Opportunities
        </p>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 300,
            lineHeight: 1.1,
            color: "#FFFFFF",
            marginBottom: 24,
          }}
        >
          Investment Opportunities
        </h1>
        <p
          style={{
            fontSize: 16,
            fontWeight: 300,
            lineHeight: 1.75,
            color: "#B8C4D4",
            maxWidth: 560,
            borderLeft: "1px solid #C8A96E",
            paddingLeft: 20,
            marginBottom: 48,
          }}
        >
          This section is under active development. NorthBridge is building a structured
          opportunity database — distinct from simple property listings — where each
          opportunity will include market context, legal status, due diligence progress,
          and financial analysis.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 1,
            background: "rgba(200,169,110,0.08)",
            marginBottom: 48,
          }}
        >
          {[
            { type: "Residential", desc: "Apartments, houses, and residential units." },
            { type: "Commercial", desc: "Offices, retail, and commercial spaces." },
            { type: "Land", desc: "Development lots and land parcels." },
            { type: "Development", desc: "Construction and redevelopment projects." },
            { type: "Hospitality", desc: "Hotels, resorts, and tourism properties." },
            { type: "Income-Producing", desc: "Properties with existing rental income." },
          ].map((item) => (
            <div
              key={item.type}
              style={{ background: "#172018", padding: "24px 20px" }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 18,
                  color: "#FFFFFF",
                  marginBottom: 6,
                }}
              >
                {item.type}
              </p>
              <p style={{ fontSize: 12.5, color: "#4A5A6A", lineHeight: 1.5 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Link
            href="/properties"
            style={{
              background: "#C8A96E",
              color: "#0F1A10",
              padding: "12px 24px",
              fontSize: 13,
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            View current listings
          </Link>
          <Link
            href="/register"
            style={{
              border: "1px solid rgba(107,126,155,0.4)",
              color: "#B8C4D4",
              padding: "12px 24px",
              fontSize: 13,
              textDecoration: "none",
            }}
          >
            Request Advisory
          </Link>
        </div>
      </section>
    </main>
  );
}
