/**
 * The adMYTT logo — the original brand asset (wordmark + bars) used as-is,
 * rendered statically. `white` swaps to the white version for dark backgrounds.
 */
export default function MagneticLogo({ height = 26, white = false }: { height?: number; white?: boolean }) {
  const ratio = 1200 / 322; // intrinsic logo aspect ratio

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={white ? "/logo-full-white.png" : "/logo-full.png"}
      alt="adMYTT"
      width={Math.round(height * ratio)}
      height={height}
      style={{ height, width: "auto", display: "block" }}
    />
  );
}
