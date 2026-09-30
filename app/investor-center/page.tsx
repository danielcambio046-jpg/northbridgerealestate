import Link from "next/link";

export const metadata = {
  title: "Investor Center — NorthBridge Venezuela",
  description:
    "NorthBridge Investor Center — everything an international investor needs to understand Venezuela's real estate market before making a decision.",
};

const JOURNEY = [
  { step: "01", label: "Understand the Market", href: "/market" },
  { step: "02", label: "Legal Framework", href: "/law" },
  { step: "03", label: "Buying Process", href: "/foreign-investor" },
  { step: "04", label: "Due Diligence", href: "/due-diligence" },
  { step: "05", label: "Investment Opportunities", href: "/opportunities" },
  { step: "06", label: "Professional Network", href: "/network" },
  { step: "07", label: "Request Advisory", href: "/register" },
];

export default function InvestorCenterPage() {
  return (
    <main style={{ background: "#0F1A10", minHeight: "100vh", paddingTop: 80 }}>
      <section style={{ padding: "80px 48px", maxWidth: 900, margin: "0 auto" }}>
        <p style={{ fontSize: 11, letterSpacing: 3, color: "#C8A96E", textTransform: "uppercase", marginBottom: 20 }}>
          Investor Center
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
          Investing in Venezuela.<br />Where to start.
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
          NorthBridge is building a structured investor journey — from market understanding
          through due diligence to transaction coordination. The foundation is available now.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "rgba(200,169,110,0.08)" }}>
          {JOURNEY.map((item) => (
            <Link
              key={item.step}
              href={item.href}
              style={{
                background: "#172018",
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                gap: 20,
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1F2E20")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#172018")}
            >
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 13, color: "#C8A96E", minWidth: 28 }}>
                {item.step}
              </span>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 400, color: "#FFFFFF" }}>
                {item.label}
              </span>
              <span style={{ marginLeft: "auto", fontSize: 12, color: "#4A5A6A" }}>→</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
