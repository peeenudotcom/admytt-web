/** Banner flagging that legal copy is a starter template pending owner/legal review. */
export default function LegalNotice() {
  return (
    <div style={{ background: "#FCEFDD", border: "1px solid #F0D6AE", borderRadius: 8, padding: "12px 14px", marginBottom: 28, font: "500 13px/19px var(--font-inter)", color: "#92590B" }}>
      This is a starter template. Final privacy, terms, and data-processing copy must be reviewed and approved by the business owner or a legal adviser before launch.
    </div>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 28 }}>
      <h2 style={{ font: "700 20px/28px var(--font-manrope)", color: "#0B1230", marginBottom: 10 }}>{heading}</h2>
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
