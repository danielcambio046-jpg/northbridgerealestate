/**
 * SourceNote — Transparent source attribution per NorthBridge 1.0 §10, §27.
 * Every significant data point must show source, date, and methodology.
 */

interface SourceNoteProps {
  source?: string;
  sourceUrl?: string;
  publicationDate?: string;
  lastUpdated?: string;
  methodology?: string;
  notes?: string;
}

export function SourceNote({
  source,
  sourceUrl,
  publicationDate,
  lastUpdated,
  methodology,
  notes,
}: SourceNoteProps) {
  if (!source && !publicationDate && !lastUpdated) return null;

  return (
    <div
      style={{
        fontSize: 11,
        color: "#4A5A6A",
        lineHeight: 1.6,
        borderTop: "1px solid rgba(200,169,110,0.1)",
        paddingTop: 10,
        marginTop: 12,
        display: "flex",
        flexWrap: "wrap",
        gap: "6px 20px",
      }}
    >
      {source && (
        <span>
          Source:{" "}
          {sourceUrl ? (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#6B7E9B", textDecoration: "underline" }}
            >
              {source}
            </a>
          ) : (
            <span style={{ color: "#6B7E9B" }}>{source}</span>
          )}
        </span>
      )}
      {publicationDate && <span>Published: {publicationDate}</span>}
      {lastUpdated && <span>Last updated: {lastUpdated}</span>}
      {methodology && <span>Methodology: {methodology}</span>}
      {notes && <span>{notes}</span>}
    </div>
  );
}
