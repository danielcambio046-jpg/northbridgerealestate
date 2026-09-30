import Link from "next/link";

export const metadata = {
  title: "NorthBridge — Venezuela Real Estate Intelligence & Investment Advisory",
  description:
    "NorthBridge provides market intelligence, investment information, due diligence resources, and access to specialized professionals for investors exploring Venezuela's real estate market.",
};

const PLATFORM_AREAS = [
  { n: "01", label: "Market",          href: "/market",          desc: "What is happening in Venezuela's real estate market — by city, property type, and sector." },
  { n: "02", label: "Opportunities",   href: "/opportunities",   desc: "Structured investment opportunities — residential, commercial, land, development, and income-producing." },
  { n: "03", label: "Intelligence",    href: "/intelligence",    desc: "Data, analysis, and market monitoring. Every figure labeled as Fact, Estimate, Analysis, or Unknown." },
  { n: "04", label: "Property Law",    href: "/law",             desc: "Venezuela's legal framework for property ownership, transactions, and foreign investors." },
  { n: "05", label: "Due Diligence",   href: "/due-diligence",   desc: "NorthBridge's 12-module structured verification process — applied to every listing." },
  { n: "06", label: "Investor Center", href: "/investor-center", desc: "The complete investor journey — from market understanding to transaction coordination." },
  { n: "07", label: "Network",         href: "/network",         desc: "Specialized professionals — attorneys, brokers, architects, engineers, accountants." },
  { n: "08", label: "Reports",         href: "/reports",         desc: "Structured intelligence documents — market reports, legal updates, and investor guides." },
];

const PRINCIPLES = [
  { label: "Transparency over appearance",      desc: "We show sources, label data, and disclose limitations." },
  { label: "Analysis over hype",                desc: "No guaranteed returns. No risk-free promises. No speculation." },
  { label: "Evidence over assumptions",         desc: "Every claim is sourced or labeled as estimate or analysis." },
  { label: "Long-term trust over conversion",   desc: "Our goal is your informed decision — not a fast transaction." },
];

export default function HomePage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg-line" />
        <p className="hero-label">Venezuela Real Estate Intelligence &amp; Investment Advisory</p>
        <h1 className="hero-h1">
          Understand Venezuela&apos;s<br />
          real estate market<br />
          <em>before you invest.</em>
        </h1>
        <p className="hero-statement">
          NorthBridge provides market intelligence, investment information, due diligence
          resources, and access to specialized professionals for investors exploring
          Venezuela&apos;s real estate market.
        </p>
        <div className="hero-actions">
          <Link href="/market" className="btn-primary">Explore the Market</Link>
          <Link href="/register" className="btn-ghost">Request Advisory</Link>
        </div>
      </section>

      {/* ── DATA BAR ── */}
      <div className="databar">
        <div className="databar-item">
          <span className="databar-label">Platform sections</span>
          <span className="databar-value">8</span>
          <span className="databar-note">intelligence areas</span>
        </div>
        <div className="databar-sep" />
        <div className="databar-item">
          <span className="databar-label">Markets covered</span>
          <span className="databar-value">6</span>
          <span className="databar-note">Venezuelan cities · ESTIMATE</span>
        </div>
        <div className="databar-sep" />
        <div className="databar-item">
          <span className="databar-label">Due diligence modules</span>
          <span className="databar-value">12</span>
          <span className="databar-note">per property</span>
        </div>
        <div className="databar-sep" />
        <div className="databar-item">
          <span className="databar-label">Data classification</span>
          <span className="databar-value">4</span>
          <span className="databar-note">Fact · Estimate · Analysis · Unknown</span>
        </div>
        <div className="databar-sep" />
        <div className="databar-item">
          <span className="databar-label">All prices</span>
          <span className="databar-value">USD</span>
          <span className="databar-note">US dollars</span>
        </div>
      </div>

      {/* ── WHAT IS NORTHBRIDGE ── */}
      <section className="section">
        <p className="section-index">What is NorthBridge?</p>
        <h2 className="section-h2">
          We don&apos;t simply show you properties.<br />
          We help you understand the market<br />
          <em style={{ fontStyle: "italic", color: "var(--gold2)" }}>behind</em> the property.
        </h2>
        <p className="section-sub" style={{ marginBottom: 48 }}>
          NorthBridge is a Venezuela Real Estate Intelligence &amp; Investment Advisory platform.
          Properties are one component of the ecosystem — not the whole product.
        </p>

        <div className="intel-grid">
          {PLATFORM_AREAS.map((area) => (
            <Link key={area.n} href={area.href} className="intel-cell">
              <span className="intel-cell-num">{area.n}</span>
              <span className="intel-cell-title">{area.label}</span>
              <span className="intel-cell-desc">{area.desc}</span>
              <span className="intel-cell-link">Open section</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── HOW WE HELP ── */}
      <section className="section section-light">
        <p className="section-index" style={{ color: "#8A6A2A" }}>How NorthBridge helps</p>
        <h2 className="section-h2" style={{ color: "var(--navy)" }}>
          From market understanding<br />to informed decision.
        </h2>
        <p className="section-sub">
          NorthBridge helps you navigate the full investment journey — without replacing
          the specialized professionals you need.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "rgba(200,169,110,0.06)", maxWidth: 700 }}>
          {[
            "Understand the market",
            "Identify the legal framework",
            "Analyze investment opportunities",
            "Identify and manage risks",
            "Commission due diligence",
            "Connect with specialized professionals",
            "Coordinate a transaction when appropriate",
            "Access ongoing market intelligence",
          ].map((step, i) => (
            <div key={i} style={{ background: "var(--cream2)", padding: "16px 20px", display: "flex", gap: 16, alignItems: "center" }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 13, color: "#8A6A2A", minWidth: 28 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span style={{ fontSize: 14, color: "#3A4A5A" }}>{step}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY VENEZUELA ── */}
      <section className="section">
        <p className="section-index">Why Venezuela?</p>
        <h2 className="section-h2">
          A complex market.<br />Real opportunities.<br />Significant risks.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, maxWidth: 800 }}>
          <div>
            <p style={{ fontSize: 9.5, letterSpacing: 1.5, color: "#2A8A5A", textTransform: "uppercase", marginBottom: 12 }}>
              Conditions that create opportunities · ANALYSIS
            </p>
            {[
              "Property prices substantially below historical levels",
              "USD-denominated market with limited international competition",
              "Early-stage recovery signals in selected sectors",
              "Significant discount to comparable regional markets",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <span style={{ color: "#2A8A5A", flexShrink: 0, marginTop: 3 }}>+</span>
                <p style={{ fontSize: 13.5, color: "#B8C4D4", lineHeight: 1.6 }}>{item}</p>
              </div>
            ))}
          </div>
          <div>
            <p style={{ fontSize: 9.5, letterSpacing: 1.5, color: "#C03030", textTransform: "uppercase", marginBottom: 12 }}>
              Conditions that create risks · ANALYSIS
            </p>
            {[
              "Regulatory and legal framework instability",
              "Limited liquidity and exit options",
              "Infrastructure deterioration varying by location",
              "Title and documentation risks requiring thorough due diligence",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <span style={{ color: "#C03030", flexShrink: 0, marginTop: 3 }}>–</span>
                <p style={{ fontSize: 13.5, color: "#B8C4D4", lineHeight: 1.6 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <p style={{ fontSize: 11, color: "#4A5A6A", marginTop: 24, borderLeft: "2px solid rgba(200,169,110,0.2)", paddingLeft: 14, maxWidth: 600 }}>
          NorthBridge monitors conditions that may create new opportunities and risks in Venezuela&apos;s
          real estate market. We do not predict outcomes or guarantee results.
        </p>
      </section>

      {/* ── PRINCIPLES ── */}
      <section className="section section-light">
        <p className="section-index" style={{ color: "#8A6A2A" }}>NorthBridge Principles</p>
        <h2 className="section-h2" style={{ color: "var(--navy)" }}>
          How we operate.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20, maxWidth: 780 }}>
          {PRINCIPLES.map((p) => (
            <div key={p.label} style={{ borderLeft: "2px solid #C8A96E", paddingLeft: 18 }}>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: 0.5, color: "#163828", textTransform: "uppercase", marginBottom: 6 }}>
                {p.label}
              </p>
              <p style={{ fontSize: 13.5, color: "#4A5A6A", lineHeight: 1.65 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW TO START ── */}
      <section className="section section-mid" style={{ padding: "64px 48px" }}>
        <p className="section-index">How to start</p>
        <h2 className="section-h2" style={{ marginBottom: 32 }}>Three ways to begin.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "rgba(200,169,110,0.08)" }}>
          {[
            { label: "Explore the Market", desc: "Start with market intelligence — understand conditions before evaluating opportunities.", href: "/market", cta: "View market data" },
            { label: "Browse Opportunities", desc: "Review structured investment opportunities with due diligence status and risk identification.", href: "/opportunities", cta: "View opportunities" },
            { label: "Request Advisory", desc: "Tell us what you are looking for. We will help structure the right information and connections.", href: "/register", cta: "Request Advisory" },
          ].map((item) => (
            <div key={item.label} style={{ background: "#0F1A10", padding: "28px 24px", display: "flex", flexDirection: "column", gap: 12 }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, color: "#FFFFFF" }}>{item.label}</p>
              <p style={{ fontSize: 13, color: "#6B7E9B", lineHeight: 1.65, flex: 1 }}>{item.desc}</p>
              <Link href={item.href} style={{ fontSize: 12.5, color: "#C8A96E", borderTop: "1px solid rgba(200,169,110,0.15)", paddingTop: 10 }}>
                {item.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── DISCLAIMER ── */}
      <section style={{ padding: "0 48px 48px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ background: "#172018", border: "1px solid rgba(200,169,110,0.1)", padding: "18px 28px", display: "flex", gap: 14 }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, color: "#C8A96E", flexShrink: 0 }}>i</span>
          <p style={{ fontSize: 11.5, lineHeight: 1.7, color: "#4A5A6A" }}>
            NorthBridge provides general market intelligence and information — not personalized legal, tax, or financial advice.
            All data is labeled by classification. Estimates are not confirmed facts.
            No returns are guaranteed. No risks are eliminated. Always validate with locally licensed professionals
            before making any investment decision.
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-top">
          <div>
            <div className="footer-brand-name">NorthBridge</div>
            <div className="footer-brand-tag">Venezuela Real Estate Intelligence &amp; Investment Advisory</div>
            <p className="footer-brand-desc">
              Market intelligence, due diligence resources, and professional connections
              for investors exploring Venezuela&apos;s real estate market.
              Information only — not legal, tax, or financial advice.
            </p>
          </div>
          <div>
            <p className="footer-col-title">Platform</p>
            <ul className="footer-col-links">
              <li><Link href="/market">Market</Link></li>
              <li><Link href="/opportunities">Opportunities</Link></li>
              <li><Link href="/intelligence">Intelligence</Link></li>
              <li><Link href="/reports">Reports</Link></li>
            </ul>
          </div>
          <div>
            <p className="footer-col-title">Information</p>
            <ul className="footer-col-links">
              <li><Link href="/law">Property Law</Link></li>
              <li><Link href="/due-diligence">Due Diligence™</Link></li>
              <li><Link href="/foreign-investor">Foreign Investor</Link></li>
              <li><Link href="/investor-center">Investor Center</Link></li>
            </ul>
          </div>
          <div>
            <p className="footer-col-title">Advisory</p>
            <ul className="footer-col-links">
              <li><Link href="/register">Request Advisory</Link></li>
              <li><Link href="/network">Professional Network</Link></li>
              <li><Link href="/login">Sign In</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 NorthBridge — Venezuela Real Estate Intelligence &amp; Investment Advisory.</span>
          <span>Information only — not legal, tax, or financial advice. All investments carry risk.</span>
        </div>
      </footer>
    </main>
  );
}
