/**
 * DataLabel — NorthBridge classification badge.
 * Used across Market Intelligence, Property Law, and Opportunity profiles.
 * Classifications per NorthBridge 1.0 Documento Maestro §9.
 */

export type DataClassification =
  | "FACT"
  | "ESTIMATE"
  | "ANALYSIS"
  | "UNKNOWN / DATA GAP";

const STYLES: Record<DataClassification, { bg: string; color: string; title: string }> = {
  "FACT": {
    bg: "rgba(42,138,90,0.12)",
    color: "#6FCF97",
    title: "Supported by an identifiable source.",
  },
  "ESTIMATE": {
    bg: "rgba(200,169,110,0.12)",
    color: "#C8A96E",
    title: "Based on available information. Not a confirmed fact.",
  },
  "ANALYSIS": {
    bg: "rgba(107,126,155,0.15)",
    color: "#8BA5C8",
    title: "NorthBridge interpretation based on data and sources.",
  },
  "UNKNOWN / DATA GAP": {
    bg: "rgba(90,80,80,0.2)",
    color: "#A08080",
    title: "Information cannot be determined with sufficient reliability.",
  },
};

interface DataLabelProps {
  type: DataClassification;
  inline?: boolean;
}

export function DataLabel({ type, inline = false }: DataLabelProps) {
  const s = STYLES[type];
  return (
    <span
      title={s.title}
      style={{
        display: inline ? "inline-flex" : "inline-block",
        fontSize: 9.5,
        letterSpacing: 0.5,
        fontFamily: "Inter, sans-serif",
        fontWeight: 500,
        padding: "2px 8px",
        background: s.bg,
        color: s.color,
        whiteSpace: "nowrap",
        cursor: "help",
        userSelect: "none",
      }}
    >
      {type}
    </span>
  );
}
