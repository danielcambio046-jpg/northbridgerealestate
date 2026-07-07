export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-overlay">
          <h1>Discover the Next Generation of Real Estate Opportunities in Brazil and Venezuela.</h1>
          <p>High-growth opportunities backed by intelligence, transparency and local expertise.</p>
          <SearchBar />
          <div className="hero-ctas">
            <a href="/properties" className="cta-primary">Explore Investments</a>
            <a href="/ai/advisor?intent=roi" className="cta-secondary">Calculate ROI</a>
            <a href="/ai/advisor" className="cta-secondary">Speak With AI Advisor</a>
          </div>
        </div>
      </section>

      <section className="markets">
        <MarketCard country="Brazil" href="/brazil" />
        <MarketCard country="Venezuela" href="/venezuela" />
      </section>

      <section className="why-northbridge">
        <h2>Why NorthBridge</h2>
        <div className="differentiators">
          <Differentiator title="Risk Intelligence" copy="Every listing is scored for legal, market and financial risk." />
          <Differentiator title="Verified Documentation" copy="Title, zoning and tax records reviewed before a property goes live." />
          <Differentiator title="AI Investment Advisor" copy="Get ROI projections and answers, not just listings." />
          <Differentiator title="Local Legal Network" copy="Vetted counsel on the ground in every market we operate in." />
        </div>
      </section>
    </main>
  );
}

function SearchBar() {
  return (
    <form action="/properties" method="get" className="search-bar">
      <select name="country" defaultValue="">
        <option value="">Country</option>
        <option value="BRAZIL">Brazil</option>
        <option value="VENEZUELA">Venezuela</option>
      </select>
      <select name="type" defaultValue="">
        <option value="">Property type</option>
        <option value="RESIDENTIAL">Residential</option>
        <option value="COMMERCIAL">Commercial</option>
        <option value="LAND">Land</option>
        <option value="DEVELOPMENT">Development</option>
        <option value="RENTAL">Rental</option>
      </select>
      <input type="number" name="minRoi" placeholder="Min. expected ROI %" />
      <button type="submit">Search</button>
    </form>
  );
}

function MarketCard({ country, href }: { country: string; href: string }) {
  return (
    <a href={href} className="market-card">
      <h3>{country}</h3>
      <span>Explore the {country} Hub →</span>
    </a>
  );
}

function Differentiator({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="differentiator">
      <h4>{title}</h4>
      <p>{copy}</p>
    </div>
  );
}
