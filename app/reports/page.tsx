import Link from "next/link";

export const metadata = {
  title: "Reports — NorthBridge Venezuela",
  description:
    "NorthBridge Venezuela real estate reports — market reports, regional briefs, legal updates, and investor guides.",
};

const REPORT_TYPES = [
  { title: "Venezuela Real Estate Market Report", desc: "Annual overview of market conditions, price ranges, and key trends.", status: "In development" },
  { title: "Regional Market Briefs", desc: "City-level intelligence for Caracas, Margarita, Valencia, and other markets.", status: "In development" },
  { title: "Legal & Regulatory Update", desc: "Summaries of legal and regulatory changes affecting property ownership.", status: "In development" },
  { title: "Foreign Investor Guide", desc: "Complete guide for international buyers — process, requirements, and risks.", status: "Available", href: "/foreign-investor" },
  { title: "Due Diligence Guide", desc: "NorthBridge's 12-module due diligence framework explained.", status: "Available", href: "/due-diligence" },
  { title: "Financing & Capital Report", desc: "Overview of financing options and capital considerations.", status: "In development" },
];

export default function ReportsPage() {
  return (
    <main style={{ background: "#0F1A10", minHeight: "100vh", paddingTop: 80 }}>
      <section style={{ padding: "80px 48px", maxWidth: 900, margin: "0 auto" }}>
        <p style={{ fontSize: 11, letterSpacing: 3, color: "#C8A96E", textTransform: "uppercase", marginBottom: 20 }}>
          Reports
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
          NorthBridge Reports
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
            marginBottom: 56,
          }}
        >
          Structured intelligence documents on Venezuela's real estate market.
          Each report includes methodology, sources, limitations, and publication date.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "rgba(200,169,110,0.06)" }}>
          {REPORT_TYPES.map((r) => (
            <div
              key={r.title}
              style={{
                background: "#172018",
                padding: "24px 28px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 24,
                flexWrap: "wrap",
              }}
            >
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 19, fontWeight: 400, color: "#FFFFFF", marginBottom: 6 }}>
                  {r.title}
                </p>
                <p style={{ fontSize: 13, color: "#6B7E9B", lineHeight: 1.6 }}>{r.desc}</p>
              </div>
              <div style={{ flexShrink: 0 }}>
                {r.href ? (
                  <Link
                    href={r.href}
                    style={{
                      background: "#C8A96E",
                      color: "#0F1A10",
                      padding: "7px 14px",
                      fontSize: 12,
                      fontWeight: 500,
                      textDecoration: "none",
                    }}
                  >
                    Read
                  </Link>
                ) : (
                  <span style={{ fontSize: 11, color: "#4A5A6A", fontStyle: "italic" }}>{r.status}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
