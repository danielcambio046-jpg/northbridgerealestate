const COUNTRY_CODES: Record<string, string> = { BRAZIL: "BR", VENEZUELA: "VE" };

// Same scheme as the front-end prototype (e.g. BR-SP-014) so identifiers
// stay consistent between the live demo artifact and the real database.
export function generateTicker(country: string, state: string): string {
  const cc = COUNTRY_CODES[country] ?? "XX";
  const stateCode = (state || "XX").replace(/[^a-zA-Z]/g, "").slice(0, 2).toUpperCase() || "XX";
  const suffix = Math.floor(100 + Math.random() * 900);
  return `${cc}-${stateCode}-${suffix}`;
}
