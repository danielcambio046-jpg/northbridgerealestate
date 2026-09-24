import Link from "next/link";

export const metadata = {
  title: "Due Diligence™ System — NorthBridge Venezuela",
  description: "NorthBridge's 12-module property analysis system for Venezuela real estate: Identity, Title, Registry, Encumbrances, Municipal, Urban Planning, Physical, Financial, and more.",
};

const MODULES = [
  {
    n: "01", title: "Identity", status: "green",
    desc: "Verification of the seller's identity and all parties involved in the transaction.",
    items: ["Ownership identity documents", "Party verification", "Legal capacity to sell", "Power of attorney review (if applicable)"],
  },
  {
    n: "02", title: "Title", status: "yellow",
    desc: "Review of the property's chain of ownership and title document integrity.",
    items: ["Chain of ownership (cadena titulativa)", "Title document review", "Historical ownership analysis", "Gap identification"],
  },
  {
    n: "03", title: "Registry", status: "green",
    desc: "Verification of the property's current registration status at the Registro Inmobiliario.",
    items: ["Registry search (folio real)", "Current registered owner confirmation", "Registration date and deed number", "Cross-reference with title"],
  },
  {
    n: "04", title: "Encumbrances", status: "red",
    desc: "Identification of any mortgages, liens, seizures, or restrictions on the property.",
    items: ["Mortgage search", "Embargo (judicial seizure)", "Prohibition to sell (prohibición de enajenar)", "Third-party rights"],
  },
  {
    n: "05", title: "Municipal", status: "green",
    desc: "Verification of municipal registration, tax status, and local obligations.",
    items: ["Catastro municipal record", "Property tax solvency (solvencia)", "Municipal obligations", "Demolition or intervention orders"],
  },
  {
    n: "06", title: "Condominium", status: "pending",
    desc: "Review of condominium documentation and standing, where applicable.",
    items: ["Condominium document (documento de condominio)", "Internal regulations", "Outstanding condominium fees", "Use restrictions"],
  },
  {
    n: "07", title: "Urban Planning", status: "yellow",
    desc: "Analysis of zoning classification, permitted uses, and building compliance.",
    items: ["Zoning classification (zonificación)", "Permitted use verification", "Building permits (constancias)", "Environmental restrictions"],
  },
  {
    n: "08", title: "Physical", status: "pending",
    desc: "On-site architectural and engineering assessment of the property's physical condition.",
    items: ["Structural condition", "Utilities status (water, electricity, gas)", "Maintenance assessment", "Area measurement verification"],
  },
  {
    n: "09", title: "Financial", status: "green",
    desc: "Price validation, comparable analysis, rental potential, and expense projection.",
    items: ["Comparable market analysis", "Price per m² assessment", "Rental income potential (ESTIMATE)", "Operating expense projection"],
  },
  {
    n: "10", title: "Foreign Investor", status: "yellow",
    desc: "Specific analysis of the transaction from a foreign buyer's perspective.",
    items: ["Acquisition structure recommendation", "Currency and repatriation considerations", "Tax implications for non-residents", "Power of attorney requirements"],
  },
  {
    n: "11", title: "Contract", status: "pending",
    desc: "Review of all contractual documents by qualified Venezuelan legal counsel.",
    items: ["Opción de compra review", "Purchase deed draft analysis", "Clause risk identification", "Legal counsel sign-off"],
  },
  {
    n: "12", title: "Exit Strategy", status: "pending",
    desc: "Analysis of future sale prospects, market liquidity, and exit structure options.",
    items: ["Resale market assessment (ESTIMATE)", "Buyer profile for this property", "Liquidity analysis", "Exit cost estimation"],
  },
];

const STATUS = {
  green:   { label: "Verified",              dot: "#2A8A5A", bg: "rgba(42,138,90,0.12)",   color: "#6FCF97" },
  yellow:  { label: "Requires clarification", dot: "#C8A030", bg: "rgba(200,160,48,0.12)",  color: "#E0B84A" },
  red:     { label: "Material risk",          dot: "#C03030", bg: "rgba(192,48,48,0.12)",   color: "#EB7070" },
  pending: { label: "Pending review",         dot: "#4A5A6A", bg: "rgba(74,90,106,0.15)",  color: "#6B7E9B" },
};

export default function DueDiligencePage() {
  return (
    <main style={{ background: "#0F1A10", minHeight: "100vh", paddingTop: 80 }}>

      {/* HERO */}
      <section style={{ padding: "80px 48px 48px", maxWidth: 1000, margin: "0 auto" }}>
        <p style={{ fontSize: 11, letterSpacing: 3, color: "#C8A96E", textTransform: "uppercase", marginBottom: 20 }}>
          06 — NorthBridge Due Diligence™
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px,5vw,64px)", fontWeight: 300, lineHeight: 1.1, color: "#FFFFFF", marginBottom: 24 }}>
          12 modules. Every property.<br />No exceptions.
        </h1>
        <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.75, color: "#B8C4D4", maxWidth: 600, borderLeft: "1px solid #C8A96E", paddingLeft: 20 }}>
          NorthBridge Due Diligence™ is a structured 12-module property analysis system applied to every listing before publication.
          It is a risk management and analysis tool — not a guarantee of legal perfection.
        </p>
      </section>

      {/* LEGEND */}
      <section style={{ padding: "0 48px 48px", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 28, flexWrap: "wrap", borderTop: "1px solid rgba(200,169,110,0.15)", paddingTop: 24 }}>
          {Object.entries(STATUS).map(([key, s]) => (
            <div key={key} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: s.dot, flexShrink: 0 }} />
              <span style={{ fontSize: 12, color: s.color }}>{s.label}</span>
            </div>
          ))}
          <span style={{ fontSize: 12, color: "#4A5A6A", marginLeft: "auto" }}>
            Status reflects advisory team assessment at time of publication
          </span>
        </div>
      </section>

      {/* MODULES GRID */}
      <section style={{ padding: "0 48px 80px", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 1, background: "rgba(200,169,110,0.08)" }}>
          {MODULES.map(mod => {
            const s = STATUS[mod.status as keyof typeof STATUS];
            return (
              <div key={mod.n} style={{ background: "#172018", padding: "32px 28px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 13, color: "#C8A96E" }}>{mod.n}</span>
                  <span style={{ fontSize: 10, padding: "3px 10px", background: s.bg, color: s.color, letterSpacing: 0.4 }}>
                    {s.label}
                  </span>
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 400, color: "#FFFFFF", marginBottom: 10 }}>
                  {mod.title}
                </h3>
                <p style={{ fontSize: 13, color: "#6B7E9B", lineHeight: 1.65, marginBottom: 18 }}>{mod.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                  {mod.items.map((item, i) => (
                    <li key={i} style={{ fontSize: 12.5, color: "#4A6A58", paddingLeft: 14, position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "rgba(200,169,110,0.4)" }}>–</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHAT IT IS / ISN'T */}
      <section style={{ background: "#172018", padding: "80px 48px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
          <div>
            <p style={{ fontSize: 10, letterSpacing: 2, color: "#C8A96E", textTransform: "uppercase", marginBottom: 20 }}>What Due Diligence™ is</p>
            {[
              "A structured risk identification process applied to every NorthBridge listing.",
              "A documentation status tracker — what has been verified, what is pending, what raises concerns.",
              "A tool that enables an informed decision — not a replacement for independent legal counsel.",
              "A working assessment updated as new information becomes available.",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 12, marginBottom: 16 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#2A8A5A", flexShrink: 0, marginTop: 6 }} />
                <p style={{ fontSize: 14, color: "#B8C4D4", lineHeight: 1.65, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
          <div>
            <p style={{ fontSize: 10, letterSpacing: 2, color: "#EB7070", textTransform: "uppercase", marginBottom: 20 }}>What Due Diligence™ is not</p>
            {[
              "A guarantee of clear title or legal perfection.",
              "A substitute for independent Venezuelan legal counsel.",
              "A promise that the investment will perform as projected.",
              "A complete substitute for on-site physical inspection by a qualified engineer or architect.",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 12, marginBottom: 16 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#C03030", flexShrink: 0, marginTop: 6 }} />
                <p style={{ fontSize: 14, color: "#B8C4D4", lineHeight: 1.65, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 48px", maxWidth: 1000, margin: "0 auto", display: "flex", gap: 32, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
        <div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 400, color: "#FFFFFF", marginBottom: 8 }}>
            See Due Diligence™ applied to a real listing.
          </h2>
          <p style={{ fontSize: 14, color: "#6B7E9B", margin: 0 }}>Every active listing includes its current module status.</p>
        </div>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Link href="/properties" style={{ background: "#C8A96E", color: "#0F1A10", padding: "14px 28px", fontSize: 13, fontWeight: 500, textDecoration: "none" }}>
            View Properties
          </Link>
          <Link href="/foreign-investor" style={{ border: "1px solid rgba(107,126,155,0.4)", color: "#B8C4D4", padding: "14px 28px", fontSize: 13, textDecoration: "none" }}>
            Foreign Investor Guide
          </Link>
        </div>
      </section>

    </main>
  );
}
