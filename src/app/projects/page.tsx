"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star, Layers } from "lucide-react";
import { projects } from "@/data/portfolio";
import { useState } from "react";
import { GithubIcon } from "@/components/SocialIcons";
import { fadeUp, stagger } from "@/lib/animations";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<"all" | "featured">("all");
  const filtered = filter === "featured" ? projects.filter(p => p.featured) : projects;

  return (
    <section className="section" style={{ minHeight: "calc(100vh - 64px)" }}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* Header */}
          <motion.p
            variants={fadeUp}
            style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}
          >
            What I&apos;ve Built
          </motion.p>
          <motion.h1 variants={fadeUp} className="section-title">
            My <span className="gradient-text">Projects</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="section-subtitle">
            A collection of things I&apos;ve built — from full-stack apps to open-source tools
          </motion.p>

          {/* Filter tabs */}
          <motion.div
            variants={fadeUp}
            style={{ display: "flex", gap: "8px", marginBottom: "2.5rem" }}
          >
            {(["all", "featured"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: "0.45rem 1.1rem",
                  borderRadius: "8px",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  border: filter === f ? "none" : "1px solid var(--border-color)",
                  background: filter === f
                    ? "linear-gradient(135deg, #0ea5e9 0%, #0ea5e9 100%)"
                    : "transparent",
                  color: filter === f ? "white" : "var(--text-secondary)",
                }}
              >
                {f === "all" ? "All Projects" : "⭐ Featured"}
              </button>
            ))}
            <span style={{ marginLeft: "auto", color: "var(--text-muted)", fontSize: "0.85rem", alignSelf: "center" }}>
              {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            </span>
          </motion.div>

          {/* Grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                variants={fadeUp}
                custom={i}
                className="glass-card"
                style={{
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Featured star */}
                {project.featured && (
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                    }}
                  >
                    <Star size={14} style={{ color: "#3b82f6" }} fill="#3b82f6" />
                  </div>
                )}

                {/* Top bar */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      background: "var(--gradient-card)",
                      border: "1px solid rgba(14, 165, 233,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Layers size={16} style={{ color: "var(--accent)" }} />
                  </div>
                </div>

                {/* Title & desc */}
                <div>
                  <h2
                    style={{
                      fontWeight: 700,
                      fontSize: "1.05rem",
                      color: "var(--text-primary)",
                      marginBottom: "0.5rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {project.title}
                  </h2>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.7 }}>
                    {project.description}
                  </p>
                </div>

                {/* Tech tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>

                {/* Links — pushed to bottom */}
                <div style={{ display: "flex", gap: "10px", marginTop: "auto", paddingTop: "0.5rem", borderTop: "1px solid var(--border-color)" }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                    style={{
                      fontSize: "0.8rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      textDecoration: "none",
                      padding: "0.4rem 0.9rem",
                    }}
                  >
                    <GithubIcon size={13} />
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gradient"
                      style={{
                        fontSize: "0.8rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        textDecoration: "none",
                        padding: "0.4rem 0.9rem",
                      }}
                    >
                      <ExternalLink size={13} />
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
