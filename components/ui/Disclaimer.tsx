/**
 * Disclaimer — Standard NorthBridge information disclaimer.
 * Required per Documento Maestro §41, §42. Must appear on all
 * pages containing market data, legal information, or investment content.
 */

interface DisclaimerProps {
  text?: string;
  compact?: boolean;
}

const DEFAULT_TEXT =
  "NorthBridge provides general information and analysis only — not legal, tax, or financial advice. " +
  "All data points are labeled by classification. Estimates are not confirmed facts. " +
  "Always validate with locally licensed professionals before making any investment decision. " +
  "Venezuela's regulatory environment changes; verify all legal information at the time of any transaction.";

export function Disclaimer({ text, compact = false }: DisclaimerProps) {
  return (
    <div
      style={{
        background: "#172018",
        border: "1px solid rgba(200,169,110,0.15)",
        padding: compact ? "14px 20px" : "20px 28px",
        display: "flex",
        gap: 16,
        marginBottom: compact ? 0 : 32,
      }}
    >
      <span
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: compact ? 22 : 28,
          color: "#C8A96E",
          flexShrink: 0,
          lineHeight: 1,
        }}
      >
        i
      </span>
      <p
        style={{
          fontSize: compact ? 11.5 : 12.5,
          lineHeight: 1.75,
          color: "#6B7E9B",
          margin: 0,
        }}
      >
        {text ?? DEFAULT_TEXT}
      </p>
    </div>
  );
}
