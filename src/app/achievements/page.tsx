"use client";

import { motion } from "framer-motion";
import { Trophy, Code, Star, Award, ExternalLink, CheckCircle, Calendar } from "lucide-react";
import { achievements, certifications, stats } from "@/data/portfolio";
import { GithubIcon } from "@/components/SocialIcons";
import { fadeUp, stagger } from "@/lib/animations";

const iconMap: Record<string, React.ReactNode> = {
  trophy: <Trophy size={22} />,
  code: <Code size={22} />,
  star: <Star size={22} />,
  award: <Award size={22} />,
  github: <GithubIcon size={22} />,
};

const achievementColors = [
  { icon: "rgba(251, 191, 36, 0.15)", border: "rgba(251,191,36,0.25)", text: "#3b82f6" },
  { icon: "rgba(14, 165, 233, 0.15)", border: "rgba(14, 165, 233,0.25)", text: "#93c5fd" },
  { icon: "rgba(14, 165, 233, 0.15)", border: "rgba(14, 165, 233,0.25)", text: "#93c5fd" },
  { icon: "rgba(14, 165, 233, 0.15)", border: "rgba(14, 165, 233,0.25)", text: "#93c5fd" },
  { icon: "rgba(34, 197, 94, 0.15)", border: "rgba(34,197,94,0.25)", text: "#93c5fd" },
];

export default function AchievementsPage() {
  return (
    <div style={{ minHeight: "calc(100vh - 64px)" }}>
      {/* ── ACHIEVEMENTS ─────────────────────────── */}
      <section className="section">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p
              variants={fadeUp}
              style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}
            >
              My Wins
            </motion.p>
            <motion.h1 variants={fadeUp} className="section-title">
              Achievements &{" "}
              <span className="gradient-text">Certifications</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="section-subtitle">
              Milestones I&apos;ve crossed and credentials I&apos;ve earned
            </motion.p>

            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: "1rem",
                marginBottom: "3rem",
              }}
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card"
                  style={{ padding: "1.5rem", textAlign: "center", cursor: "default" }}
                >
                  <div style={{ fontSize: "2rem", fontWeight: 900, color: stat.color, fontFamily: "var(--font-mono)" }}>
                    {stat.value}
                  </div>
                  <div style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: "4px" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Achievement cards */}
            <motion.h2 variants={fadeUp} style={{ fontWeight: 700, fontSize: "1.25rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>
              🏆 Coding Achievements
            </motion.h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.25rem",
              marginBottom: "4rem",
            }}>
              {achievements.map((item, i) => {
                const colors = achievementColors[i % achievementColors.length];
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    custom={i}
                    className="glass-card"
                    style={{ padding: "1.5rem", cursor: "default" }}
                  >
                    <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "12px",
                          background: colors.icon,
                          border: `1px solid ${colors.border}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: colors.text,
                          flexShrink: 0,
                        }}
                      >
                        {iconMap[item.icon] || <Award size={22} />}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem" }}>
                          <h3 style={{ fontWeight: 600, fontSize: "0.92rem", color: "var(--text-primary)", lineHeight: 1.4, marginBottom: "0.4rem" }}>
                            {item.title}
                          </h3>
                          <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", whiteSpace: "nowrap", fontFamily: "var(--font-mono)" }}>
                            {item.date}
                          </span>
                        </div>
                        <p style={{ color: "var(--text-secondary)", fontSize: "0.82rem", lineHeight: 1.6 }}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Certifications */}
            <motion.h2 variants={fadeUp} style={{ fontWeight: 700, fontSize: "1.25rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>
              📜 Certifications
            </motion.h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.25rem",
            }}>
              {certifications.map((cert, i) => (
                <motion.a
                  key={i}
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeUp}
                  custom={i}
                  className="glass-card"
                  style={{
                    padding: "1.4rem 1.5rem",
                    textDecoration: "none",
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                  }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: "rgba(14, 165, 233,0.12)",
                      border: "1px solid rgba(14, 165, 233,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent)",
                      flexShrink: 0,
                    }}
                  >
                    <CheckCircle size={18} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--text-primary)", marginBottom: "3px" }}>
                      {cert.title}
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "0.78rem", color: "var(--text-secondary)" }}>
                        {cert.issuer}
                      </span>
                      <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "3px" }}>
                        <Calendar size={11} />
                        {cert.date}
                      </span>
                    </div>
                  </div>
                  <ExternalLink size={14} style={{ color: "var(--text-muted)", flexShrink: 0 }} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
