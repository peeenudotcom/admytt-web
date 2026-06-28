/**
 * The adMYTT logo: the wordmark plus the three brand equalizer bars
 * (tall red, navy, short red), rendered statically — no motion.
 * `white` swaps to the light wordmark for use on dark backgrounds.
 */
export default function MagneticLogo({ height = 26, white = false }: { height?: number; white?: boolean }) {
  const ratio = 1024 / 274; // intrinsic wordmark aspect ratio

  // Brand bars sampled from the logo: red #CC0000, navy #232176.
  // On dark backgrounds the navy bar would vanish, so lift it to a light indigo.
  const navy = white ? "#A5B4FC" : "#232176";
  const red = white ? "#F26D6D" : "#CC0000";
  const barH = Math.round(height * 0.92);

  return (
    <span style={{ display: "flex", alignItems: "center", gap: Math.round(height * 0.5) }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={white ? "/logo-wordmark-white.png" : "/logo-wordmark.png"}
        alt="adMYTT"
        width={Math.round(height * ratio)}
        height={height}
        style={{ height, width: "auto", display: "block" }}
      />
      <span style={{ display: "flex", alignItems: "flex-end", gap: Math.round(height * 0.12), height: barH }}>
        <span style={{ width: Math.round(height * 0.22), height: barH, background: red, borderRadius: 1 }} />
        <span style={{ width: Math.round(height * 0.18), height: Math.round(barH * 0.66), background: navy, borderRadius: 1 }} />
        <span style={{ width: Math.round(height * 0.15), height: Math.round(barH * 0.44), background: red, borderRadius: 1 }} />
      </span>
    </span>
  );
}
