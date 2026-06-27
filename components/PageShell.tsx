import Header from "./Header";
import Footer from "./Footer";

/** Standard chrome for every non-home page: header, semantic main, footer. */
export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="main" style={{ position: "relative", background: "#F8FAFC" }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
