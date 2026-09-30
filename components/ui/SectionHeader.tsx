/**
 * SectionHeader — Numbered section identifier used across NorthBridge pages.
 * Keeps visual identity consistent with the advisory style.
 */

interface SectionHeaderProps {
  index: string;        // e.g. "03", "MARKET INTELLIGENCE"
  title: string;
  subtitle?: string;
  light?: boolean;      // true when used on cream (#F4F1EA) background
}

export function SectionHeader({ index, title, subtitle, light = false }: SectionHeaderProps) {
  const ink = light ? "#0F1A10" : "#FFFFFF";
  const gold = light ? "#8A6A2A" : "#C8A96E";
  const muted = light ? "#5A6A7A" : "#6B7E9B";

  return (
    <div style={{ marginBottom: subtitle ? 20 : 40 }}>
      <p
        style={{
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: "2px",
          color: gold,
          textTransform: "uppercase",
          marginBottom: 14,
        }}
      >
        {index}
      </p>
      <h2
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(28px, 4vw, 48px)",
          fontWeight: 400,
          lineHeight: 1.1,
          color: ink,
          marginBottom: subtitle ? 16 : 0,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: 15,
            fontWeight: 300,
            lineHeight: 1.7,
            color: muted,
            maxWidth: 560,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
