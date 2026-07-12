/**
 * Public "starter template — not reviewed" banner, suppressed for launch so the
 * legal pages read professionally.
 *
 * IMPORTANT: hiding the banner does NOT make the policies reviewed. The privacy,
 * terms, and data-processing copy is still template text and must be reviewed and
 * approved by the business owner or a legal adviser. Re-enable by returning the
 * banner below if you want the disclaimer visible again.
 */
export default function LegalNotice() {
  return null;
}

export function LegalSection({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 28 }}>
      <h2 style={{ font: "700 20px/28px var(--font-inter)", color: "#0F172A", marginBottom: 10 }}>{heading}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>{children}</div>
    </section>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return <p style={{ font: "400 16px/26px var(--font-inter)", color: "#475569" }}>{children}</p>;
}

export function UL({ items }: { items: string[] }) {
  return (
    <ul style={{ paddingLeft: 22, display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map((i) => (
        <li key={i} style={{ font: "400 16px/24px var(--font-inter)", color: "#475569" }}>{i}</li>
      ))}
    </ul>
  );
}
