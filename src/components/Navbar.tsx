"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X, Code2 } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, TwitterIcon, LeetcodeIcon } from "@/components/SocialIcons";

const navLinks = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/achievements", label: "Achievements" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          transition: "all 0.3s ease",
          background: scrolled
            ? "rgba(13, 13, 20, 0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid transparent",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}>
            <div style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #0ea5e9 0%, #0ea5e9 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <Code2 size={18} color="white" strokeWidth={2.5} />
            </div>
            <span style={{
              fontWeight: 700,
              fontSize: "1.1rem",
              color: "var(--text-primary)",
              letterSpacing: "-0.01em",
            }}>
              {personalInfo.name}
              <span className="gradient-text">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "4px" }} className="hidden-mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? "active" : ""}`}
                style={{ textDecoration: "none" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Resume Button */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a
              href={personalInfo.resumeUrl}
              download
              className="btn-gradient hidden-mobile"
              style={{ fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "6px", textDecoration: "none" }}
            >
              <Download size={14} />
              Resume
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="show-mobile"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                borderRadius: "8px",
                color: "var(--text-primary)",
                cursor: "pointer",
                padding: "6px",
                display: "flex",
                alignItems: "center",
              }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: "64px",
              left: 0,
              right: 0,
              zIndex: 49,
              background: "rgba(13, 13, 20, 0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--border-color)",
              padding: "1rem 1.5rem 1.5rem",
            }}
          >
            <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${pathname === link.href ? "active" : ""}`}
                  style={{ textDecoration: "none", padding: "0.65rem 0.75rem", fontSize: "1rem" }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={personalInfo.resumeUrl}
                download
                className="btn-gradient"
                style={{
                  fontSize: "0.9rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  textDecoration: "none",
                  marginTop: "8px",
                }}
              >
                <Download size={14} />
                Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .hidden-mobile {
          display: flex;
        }
        .show-mobile {
          display: none;
        }
        @media (max-width: 640px) {
          .hidden-mobile {
            display: none !important;
          }
          .show-mobile {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
