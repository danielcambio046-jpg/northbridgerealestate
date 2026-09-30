import Link from "next/link";

export const metadata = {
  title: "Market Intelligence — NorthBridge Venezuela",
  description:
    "Venezuela real estate market intelligence — data, analysis, and monitoring. Facts, estimates, and analysis clearly distinguished.",
};

export default function IntelligencePage() {
  return (
    <main style={{ background: "#0F1A10", minHeight: "100vh", paddingTop: 80 }}>
      <section style={{ padding: "80px 48px", maxWidth: 900, margin: "0 auto" }}>
        <p style={{ fontSize: 11, letterSpacing: 3, color: "#C8A96E", textTransform: "uppercase", marginBottom: 20 }}>
          Intelligence
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
          Market Intelligence
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
          Structured intelligence on Venezuela's real estate market. Every data point
          classified as Fact, Estimate, Analysis, or Unknown — never presented as certainty.
          This section will expand to include Market Watch, regional dashboards, and
          historical data tracking.
        </p>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Link
            href="/market"
            style={{
              background: "#C8A96E",
              color: "#0F1A10",
              padding: "12px 24px",
              fontSize: 13,
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            View market data by city
          </Link>
        </div>
      </section>
    </main>
  );
}
