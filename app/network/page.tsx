import Link from "next/link";

export const metadata = {
  title: "Professional Network — NorthBridge Venezuela",
  description:
    "NorthBridge Professional Network — real estate attorneys, brokers, architects, engineers, accountants, and property managers specializing in Venezuela.",
};

const CATEGORIES = [
  "Real Estate Agencies & Brokers",
  "Real Estate Attorneys",
  "Tax & Accounting Specialists",
  "Architects & Engineers",
  "Property Managers",
  "Developers",
  "Appraisers",
  "Financing Professionals",
];

export default function NetworkPage() {
  return (
    <main style={{ background: "#0F1A10", minHeight: "100vh", paddingTop: 80 }}>
      <section style={{ padding: "80px 48px", maxWidth: 900, margin: "0 auto" }}>
        <p style={{ fontSize: 11, letterSpacing: 3, color: "#C8A96E", textTransform: "uppercase", marginBottom: 20 }}>
          Professional Network
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
          Specialized professionals<br />for Venezuela real estate.
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
          NorthBridge is building a verified professional network — attorneys, brokers,
          architects, engineers, accountants, and property managers with experience in
          Venezuelan real estate transactions. Profiles will be listed, reviewed, and
          clearly labeled by verification status.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 1,
            background: "rgba(200,169,110,0.08)",
            marginBottom: 48,
          }}
        >
          {CATEGORIES.map((cat) => (
            <div key={cat} style={{ background: "#172018", padding: "20px" }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 17, color: "#FFFFFF", lineHeight: 1.3 }}>
                {cat}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            background: "#172018",
            border: "1px solid rgba(200,169,110,0.15)",
            padding: "24px 28px",
            marginBottom: 32,
          }}
        >
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, color: "#FFFFFF", marginBottom: 8 }}>
            Are you a professional specializing in Venezuelan real estate?
          </p>
          <p style={{ fontSize: 13, color: "#6B7E9B", marginBottom: 16 }}>
            NorthBridge is building its professional network. Express your interest
            in being listed and reviewed.
          </p>
          <Link
            href="/register"
            style={{
              background: "#C8A96E",
              color: "#0F1A10",
              padding: "10px 20px",
              fontSize: 13,
              fontWeight: 500,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Express interest
          </Link>
        </div>
      </section>
    </main>
  );
}
