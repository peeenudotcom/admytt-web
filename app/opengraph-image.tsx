import { ImageResponse } from "next/og";

export const alt = "adMYTT — CRM for education consultancies";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg,#0F172A 0%,#4F46E5 100%)",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
          <div style={{ fontSize: 64, fontWeight: 800, color: "#B91C1C" }}>ad</div>
          <div style={{ fontSize: 64, fontWeight: 800, color: "#fff" }}>MYTT</div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 6, marginLeft: 12, marginBottom: 12 }}>
            <div style={{ width: 14, height: 56, background: "#B91C1C", borderRadius: 2 }} />
            <div style={{ width: 11, height: 40, background: "#5b63c4", borderRadius: 2 }} />
            <div style={{ width: 8, height: 26, background: "#B91C1C", borderRadius: 2 }} />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 56, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Run your education consultancy from first enquiry to visa outcome.
          </div>
          <div style={{ fontSize: 26, color: "#aab4d6", marginTop: 24 }}>
            The secure, multi-tenant CRM built for education consultancies.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
