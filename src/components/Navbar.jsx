import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Research", href: "#projects" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? "rgba(19,19,19,0.85)" : "rgba(19,19,19,0.6)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        transition: "background 0.3s",
      }}
    >
      <nav style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "0 64px", maxWidth: 1280, margin: "0 auto", height: 64,
      }}>
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 22, fontWeight: 700,
            color: "var(--primary)", textDecoration: "none",
          }}
        >
          adyasha.dev
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="hidden-mobile">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.href)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "Inter", fontSize: 15, fontWeight: 400,
                color: "var(--on-surface-var)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "var(--primary)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--on-surface-var)")}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            style={{
              marginLeft: 8,
              background: "var(--primary)",
              color: "var(--on-primary)",
              border: "none", cursor: "pointer",
              padding: "8px 24px",
              borderRadius: 9999,
              fontFamily: "Inter", fontSize: 12, fontWeight: 700,
              letterSpacing: "0.05em", textTransform: "uppercase",
              transition: "transform 0.15s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = "0 0 20px rgba(173,198,255,0.35)";
              e.target.style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = "none";
              e.target.style.transform = "scale(1)";
            }}
          >
            Hire Me
          </button>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="show-mobile"
          style={{ background: "none", border: "none", cursor: "pointer", color: "var(--on-surface-var)" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: "var(--surface-lowest)", borderBottom: "1px solid rgba(255,255,255,0.05)", overflow: "hidden" }}
          >
            <div style={{ display: "flex", flexDirection: "column", padding: "16px 24px", gap: 16 }}>
              {links.map((l) => (
                <button key={l.label} onClick={() => scrollTo(l.href)}
                  style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", fontFamily: "Inter", fontSize: 15, color: "var(--on-surface-var)" }}>
                  {l.label}
                </button>
              ))}
              <button onClick={() => scrollTo("#contact")}
                style={{ background: "var(--primary)", color: "var(--on-primary)", border: "none", cursor: "pointer", padding: "10px 0", borderRadius: 9999, fontFamily: "Inter", fontSize: 12, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .hidden-mobile { display: flex; }
        .show-mobile { display: none; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
          nav { padding: 0 24px !important; }
        }
      `}</style>
    </motion.header>
  );
}
