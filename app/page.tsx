import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-line" />
        <p className="hero-label">Venezuela Property &amp; Investment Advisory</p>
        <h1 className="hero-h1">
          We don&apos;t simply find properties<br />
          in Venezuela.<br />
          We <em>investigate</em> the opportunity<br />
          behind the property.
        </h1>
        <p className="hero-statement">
          Identify risk. Verify facts. Structure the opportunity.<br />
          For buyers, investors, and developers who need intelligence — not promises.
        </p>
        <div className="hero-actions">
          <Link href="/properties" className="btn-primary">Explore Properties</Link>
          <Link href="/foreign-investor" className="btn-ghost">Foreign Investor Guide</Link>
        </div>
      </section>

      {/* DATA BAR */}
      <div className="databar">
        <div className="databar-item">
          <span className="databar-label">Active Listings</span>
          <span className="databar-value">8</span>
          <span className="databar-note">verified properties</span>
        </div>
        <div className="databar-sep" />
        <div className="databar-item">
          <span className="databar-label">Markets Covered</span>
          <span className="databar-value">6</span>
          <span className="databar-note">Venezuelan cities</span>
        </div>
        <div className="databar-sep" />
        <div className="databar-item">
          <span className="databar-label">Due Diligence Modules</span>
          <span className="databar-value">12</span>
          <span className="databar-note">per property</span>
        </div>
        <div className="databar-sep" />
        <div className="databar-item">
          <span className="databar-label">Est. Rental Yield</span>
          <span className="databar-value">9–18%</span>
          <span className="databar-note">estimate, not guarantee</span>
        </div>
        <div className="databar-sep" />
        <div className="databar-item">
          <span className="databar-label">All Prices</span>
          <span className="databar-value">USD</span>
          <span className="databar-note">US dollars</span>
        </div>
      </div>

      {/* INTELLIGENCE AREAS */}
      <section className="section">
        <p className="section-index">Intelligence Platform</p>
        <h2 className="section-h2">Six areas of expertise.<br />One advisory framework.</h2>
        <p className="section-sub">Built for the investor who asks hard questions before moving capital.</p>
        <div className="intel-grid">
          {[
            { n:"01", title:"Properties", desc:"Verified listings with full documentation status, due diligence progress, risk identification, and investment potential analysis.", link:"Browse listings", href:"/properties" },
            { n:"02", title:"Invest in Venezuela", desc:"Residential, commercial, industrial, hospitality, and development opportunities — presented with risks alongside potential.", link:"Understand the market", href:"/invest" },
            { n:"03", title:"Market Intelligence", desc:"Price per m², rental yields, liquidity, infrastructure, and demand signals — by city. Fact, estimate, and analysis clearly distinguished.", link:"View market data", href:"/market" },
            { n:"04", title:"Venezuela Property Law", desc:"The Código Civil, Ley de Arrendamientos, Ley de Propiedad Horizontal — explained in plain language with legal citations and Gaceta references.", link:"Read the legal library", href:"/law" },
            { n:"05", title:"Foreign Investor Center", desc:"Can a foreigner buy? What documents are required? How does acquisition work? What are the risks? Answered without false reassurance.", link:"Foreign investor guide", href:"/foreign-investor" },
            { n:"06", title:"Due Diligence™", desc:"NorthBridge's 12-module property analysis: Identity, Title, Registry, Encumbrances, Municipal, Urban Planning, Physical, Financial, and more.", link:"See the system", href:"/due-diligence" },
          ].map(item => (
            <Link key={item.n} href={item.href} className="intel-cell">
              <span className="intel-cell-num">{item.n}</span>
              <span className="intel-cell-title">{item.title}</span>
              <span className="intel-cell-desc">{item.desc}</span>
              <span className="intel-cell-link">{item.link}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* POSITIONING */}
      <section className="section section-light">
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"80px", alignItems:"start" }}>
          <div>
            <p className="section-index" style={{ color:"#8A6A2A" }}>Advisory Principles</p>
            <h2 className="section-h2" style={{ color:"#0F1A10" }}>Trust is built through process,<br />not through promises.</h2>
            <p className="section-sub">
              NorthBridge never guarantees returns, eliminates risk, or presents estimates as facts.
              We build confidence through transparency, documentation, and structured analysis.
            </p>
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(22px,2.5vw,32px)", fontWeight:300, fontStyle:"italic", color:"#0F1A10", lineHeight:1.3 }}>
              &ldquo;The mission is not to convince an investor to invest. The mission is to provide the information, analysis, and verification needed to decide.&rdquo;
            </p>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:"20px" }}>
            {[
              { title:"What we verify", body:"Ownership identity, title chain, registry status, encumbrances, municipal solvency, zoning compliance, physical condition, and market comparables." },
              { title:"What we never promise", body:"Guaranteed returns. Guaranteed appreciation. Absolute legal certainty. Venezuela carries real risks. We document them." },
              { title:"How we work", body:"Every property goes through our 12-module Due Diligence™ system before publication. Nothing is listed without a documented status." },
              { title:"Who we serve", body:"International buyers. Investors. Developers. Venezuelans abroad seeking to manage or monetize family assets." },
            ].map(p => (
              <div key={p.title} style={{ padding:"18px 22px", borderLeft:"2px solid #C8A96E", background:"#EAE6DC" }}>
                <p style={{ fontSize:"10.5px", fontWeight:600, letterSpacing:"1px", color:"#8A6A2A", textTransform:"uppercase", marginBottom:"6px" }}>{p.title}</p>
                <p style={{ fontSize:"13.5px", color:"#3A4A5A", lineHeight:1.65 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="section section-mid" style={{ padding:"48px" }}>
        <div style={{ display:"flex", gap:"20px", border:"1px solid rgba(200,169,110,0.2)", padding:"24px 32px" }}>
          <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"32px", color:"#C8A96E", flexShrink:0 }}>i</span>
          <p style={{ fontSize:"12.5px", lineHeight:1.75, color:"#6B7E9B" }}>
            <strong style={{ color:"#B8C4D4" }}>NorthBridge provides information, analysis, and advisory services.</strong>{" "}
            The content on this platform — legal, financial, or technical — does not constitute personalized legal, tax, or financial advice.
            All transactions should be validated by locally licensed professionals in Venezuela.
            No returns are guaranteed. No risks are eliminated. Past performance does not predict future results.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          <div>
            <div className="footer-brand-name">NorthBridge</div>
            <div className="footer-brand-tag">Venezuela Property & Investment Advisory</div>
            <p className="footer-brand-desc">
              Intelligence, analysis, and verification for investors, buyers, and developers
              operating in the Venezuelan real estate market. Not an agency. Not a promise. An advisory.
            </p>
          </div>
          <div>
            <p className="footer-col-title">Properties</p>
            <ul className="footer-col-links">
              <li><Link href="/properties">Active Listings</Link></li>
              <li><Link href="/properties?type=RESIDENTIAL">Residential</Link></li>
              <li><Link href="/properties?type=COMMERCIAL">Commercial</Link></li>
              <li><Link href="/properties?type=LAND">Land & Development</Link></li>
              <li><Link href="/properties/new">Submit a Property</Link></li>
            </ul>
          </div>
          <div>
            <p className="footer-col-title">Intelligence</p>
            <ul className="footer-col-links">
              <li><Link href="/market">Market Reports</Link></li>
              <li><Link href="/law">Venezuela Property Law</Link></li>
              <li><Link href="/foreign-investor">Foreign Investor Guide</Link></li>
              <li><Link href="/due-diligence">Due Diligence™</Link></li>
            </ul>
          </div>
          <div>
            <p className="footer-col-title">Advisory</p>
            <ul className="footer-col-links">
              <li><Link href="/register">Request Advisory</Link></li>
              <li><Link href="/login">Sign In</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 NorthBridge Venezuela Property &amp; Investment Advisory.</span>
          <span>Information only — not legal, tax, or financial advice. All investments carry risk.</span>
        </div>
      </footer>
    </main>
  );
}
