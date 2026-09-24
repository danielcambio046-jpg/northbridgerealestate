import Link from "next/link";

const QUESTIONS = [
  {
    q: "Can a foreigner buy property in Venezuela?",
    a: "Yes. Venezuelan law does not prohibit foreign nationals from acquiring real estate. Both individuals and legal entities — including foreign companies — may purchase property in Venezuela. However, the process involves specific documentation requirements and structural considerations that differ from domestic purchases.",
    tag: "FACT",
  },
  {
    q: "Can I buy as an individual or through a company?",
    a: "Both structures are available. Individual acquisition is simpler and lower cost. Acquisition through a Venezuelan or foreign company can offer liability protection, estate planning advantages, and operational flexibility — but requires additional incorporation costs and ongoing compliance. The optimal structure depends on the investment purpose, amount, and the investor's country of origin.",
    tag: "ANALYSIS",
  },
  {
    q: "What documents does a foreign buyer need?",
    a: "At minimum: valid passport, a Venezuelan tax identification number (RIF), proof of funds origin (for AML compliance), and a local legal representative or power of attorney. Depending on the transaction structure, additional documents may include corporate documentation, apostilled certificates, and certified translations.",
    tag: "FACT",
  },
  {
    q: "What is a RIF and how do I obtain one?",
    a: "The RIF (Registro de Información Fiscal) is Venezuela's tax identification number, required for all property transactions. Foreign individuals can obtain a RIF through the SENIAT (national tax authority) with a valid passport. The process typically requires the assistance of a local representative or legal counsel.",
    tag: "FACT",
  },
  {
    q: "How does property acquisition work step by step?",
    a: "The typical acquisition process involves: (1) property identification and due diligence, (2) reservation agreement (opción de compra), (3) title verification at the Registry, (4) drafting of the purchase deed by a Venezuelan notary, (5) execution before a notary public, (6) registration at the Registro Inmobiliario. The process can take 30–90 days depending on document availability and registry workload.",
    tag: "FACT",
  },
  {
    q: "What taxes apply to a foreign buyer?",
    a: "The primary costs are: transfer tax (approximately 1% of transaction value), notary fees (variable), and registry fees (variable by state). Capital gains on future sale may be subject to Venezuelan income tax. Municipal taxes (ISAE) may apply depending on the property's use. Tax regulations in Venezuela are subject to change and should be verified with a local tax advisor at the time of transaction.",
    tag: "ESTIMATE — verify with local tax counsel",
  },
  {
    q: "How do I verify a property title?",
    a: "Title verification requires a search at the Registro Inmobiliario (Property Registry) where the property is located. The search should review the chain of ownership (cadena titulativa), identify any encumbrances, liens, or prohibitions, and confirm the current registered owner. NorthBridge's Due Diligence™ system includes Title (Module 02) and Registry (Module 03) review as standard components of every advisory engagement.",
    tag: "FACT",
  },
  {
    q: "Can I manage the property from abroad?",
    a: "Yes. Property management from abroad is common and can be structured through a local administrator (administrador de inmuebles), a property management company, or a trusted legal representative with a power of attorney. Clear contractual arrangements — including rent collection, maintenance responsibilities, and reporting — are essential.",
    tag: "FACT",
  },
  {
    q: "What are the main risks for a foreign investor?",
    a: "Key risks include: regulatory and legal changes (Venezuela's legal framework has changed significantly in recent decades), currency and exchange controls, title defects or encumbrances not discovered without proper due diligence, difficulty enforcing contracts through the judicial system, and political and economic instability. NorthBridge documents identified risks for every property — we do not present an investment as risk-free.",
    tag: "ANALYSIS",
  },
  {
    q: "What happens when I want to sell?",
    a: "A foreign owner may sell Venezuelan real estate. The exit process involves similar documentation to acquisition: a notarial deed of sale, registry registration, and tax compliance. Repatriation of sale proceeds in foreign currency is subject to Venezuela's exchange regulations, which have evolved significantly and must be assessed at the time of exit with qualified legal and financial counsel.",
    tag: "ANALYSIS — subject to regulatory change",
  },
  {
    q: "What professionals should participate in my transaction?",
    a: "A Venezuelan attorney specializing in real estate law (abogado inmobiliario) is essential and non-negotiable. Depending on the transaction: a certified public accountant for tax compliance, an architect or engineer for physical inspection, a notary public for deed execution, and a property appraiser (perito valuador) for price validation.",
    tag: "FACT",
  },
  {
    q: "Are there bilateral investment treaties that protect my investment?",
    a: "Venezuela has bilateral investment treaties (BITs) with several countries. Some treaties were denounced by Venezuela after 2012. The applicability of treaty protection depends on your nationality and the specific treaty terms. Investors should verify current treaty status with legal counsel in their home country and in Venezuela before committing capital.",
    tag: "ANALYSIS — verify current status",
  },
];

const STEPS = [
  { n: "01", title: "Legal Counsel", body: "Engage a Venezuelan real estate attorney before making any commitment. This is not optional." },
  { n: "02", title: "Property Identification", body: "Identify one or more target properties through NorthBridge or an accredited local agent." },
  { n: "03", title: "Due Diligence", body: "Commission a full NorthBridge Due Diligence™ review — 12 modules covering identity, title, registry, encumbrances, and financial analysis." },
  { n: "04", title: "Obtain your RIF", body: "Apply for your Venezuelan tax identification number (RIF) through SENIAT with your passport and local legal representative." },
  { n: "05", title: "Structure the acquisition", body: "Decide with your legal counsel whether to acquire as an individual or through a corporate structure." },
  { n: "06", title: "Opción de compra", body: "Execute a reservation agreement (opción de compra) with defined terms, timelines, and conditions." },
  { n: "07", title: "Notarial deed", body: "A Venezuelan notary drafts and executes the purchase deed. Both buyer and seller (or their representatives) must be present." },
  { n: "08", title: "Registry registration", body: "The executed deed is registered at the Registro Inmobiliario. This step completes the legal transfer of ownership." },
];

const tagColor: Record<string, { bg: string; color: string }> = {
  "FACT": { bg: "rgba(42,107,74,0.15)", color: "#6FCF97" },
  "ANALYSIS": { bg: "rgba(200,169,110,0.12)", color: "#C8A96E" },
};

function tagStyle(tag: string) {
  if (tag.startsWith("FACT")) return tagColor["FACT"];
  if (tag.startsWith("ANALYSIS")) return tagColor["ANALYSIS"];
  return { bg: "rgba(107,126,155,0.15)", color: "#6B7E9B" };
}

export const metadata = {
  title: "Foreign Investor Guide — NorthBridge Venezuela",
  description: "Can a foreigner buy property in Venezuela? What documents are needed? How does acquisition work? Answered without false reassurance.",
};

export default function ForeignInvestorPage() {
  return (
    <main style={{ background: "#0F1A10", minHeight: "100vh", paddingTop: 80 }}>

      {/* HERO */}
      <section style={{ padding: "80px 48px 60px", maxWidth: 900, margin: "0 auto" }}>
        <p style={{ fontSize: 11, letterSpacing: 3, color: "#C8A96E", textTransform: "uppercase", marginBottom: 20 }}>
          05 — Foreign Investor Center
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px,5vw,64px)", fontWeight: 300, lineHeight: 1.1, color: "#FFFFFF", marginBottom: 24 }}>
          Investing in Venezuela<br />as a Foreign National
        </h1>
        <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.75, color: "#B8C4D4", maxWidth: 600, borderLeft: "1px solid #C8A96E", paddingLeft: 20, marginBottom: 0 }}>
          Venezuela permits foreign real estate ownership. What it requires is knowledge, proper structure, and local professional guidance.
          This guide answers the questions every international investor should ask before moving capital.
        </p>
      </section>

      {/* DISCLAIMER */}
      <section style={{ padding: "0 48px 60px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ background: "#172018", border: "1px solid rgba(200,169,110,0.2)", padding: "20px 28px", display: "flex", gap: 16 }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, color: "#C8A96E", flexShrink: 0 }}>i</span>
          <p style={{ fontSize: 12.5, lineHeight: 1.75, color: "#6B7E9B", margin: 0 }}>
            <strong style={{ color: "#B8C4D4" }}>This guide provides general information only.</strong>{" "}
            It does not constitute legal, tax, or financial advice for any specific transaction. Venezuela's regulatory environment changes.
            All information must be validated by a locally licensed Venezuelan attorney and tax advisor before any investment decision.
            Content is labeled as <span style={{ color: "#6FCF97" }}>FACT</span>, <span style={{ color: "#C8A96E" }}>ANALYSIS</span>, or <span style={{ color: "#6B7E9B" }}>ESTIMATE</span>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "0 48px 80px", maxWidth: 900, margin: "0 auto" }}>
        <p style={{ fontSize: 10, letterSpacing: 2, color: "#C8A96E", textTransform: "uppercase", marginBottom: 32 }}>Key Questions</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "rgba(200,169,110,0.08)" }}>
          {QUESTIONS.map((item, i) => {
            const ts = tagStyle(item.tag);
            return (
              <div key={i} style={{ background: "#0F1A10", padding: "28px 32px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, marginBottom: 12 }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 400, color: "#FFFFFF", margin: 0, lineHeight: 1.3 }}>
                    {item.q}
                  </h3>
                  <span style={{
                    fontSize: 9.5, padding: "3px 10px", whiteSpace: "nowrap", flexShrink: 0,
                    background: ts.bg, color: ts.color, letterSpacing: 0.5, fontFamily: "Inter, sans-serif"
                  }}>
                    {item.tag}
                  </span>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: "#B8C4D4", margin: 0 }}>{item.a}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ACQUISITION STEPS */}
      <section style={{ background: "#172018", padding: "80px 48px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: 10, letterSpacing: 2, color: "#C8A96E", textTransform: "uppercase", marginBottom: 16 }}>Acquisition Process</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,3vw,44px)", fontWeight: 400, color: "#FFFFFF", marginBottom: 48 }}>
            Eight steps from identification<br />to registered ownership.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 1, background: "rgba(200,169,110,0.1)" }}>
            {STEPS.map(step => (
              <div key={step.n} style={{ background: "#0F1A10", padding: "28px" }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 13, color: "#C8A96E", display: "block", marginBottom: 10 }}>{step.n}</span>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 400, color: "#FFFFFF", marginBottom: 10 }}>{step.title}</h3>
                <p style={{ fontSize: 13.5, color: "#6B7E9B", lineHeight: 1.65, margin: 0 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 48px", maxWidth: 900, margin: "0 auto", display: "flex", gap: 32, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
        <div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 400, color: "#FFFFFF", marginBottom: 8 }}>
            Ready to investigate a specific property?
          </h2>
          <p style={{ fontSize: 14, color: "#6B7E9B", margin: 0 }}>
            Every NorthBridge listing includes a Due Diligence™ status report.
          </p>
        </div>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Link href="/properties" style={{ background: "#C8A96E", color: "#0F1A10", padding: "14px 28px", fontSize: 13, fontWeight: 500, textDecoration: "none" }}>
            View Properties
          </Link>
          <Link href="/due-diligence" style={{ border: "1px solid rgba(107,126,155,0.4)", color: "#B8C4D4", padding: "14px 28px", fontSize: 13, textDecoration: "none" }}>
            Due Diligence™ System
          </Link>
        </div>
      </section>

    </main>
  );
}
