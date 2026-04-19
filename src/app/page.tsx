"use client";

import { motion } from "framer-motion";
import {
  MapPin, Mail, ChevronDown, Sparkles, BookOpen, Briefcase, GraduationCap, ExternalLink
} from "lucide-react";
import { personalInfo, about, skills, journey, socialLinks } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, TwitterIcon, LeetcodeIcon } from "@/components/SocialIcons";

import { fadeUp, stagger } from "@/lib/animations";

/* ── Social icon map ─────────────────────────── */
const icons: Record<string, React.ReactNode> = {
  github: <GithubIcon size={18} />,
  linkedin: <LinkedinIcon size={18} />,
  twitter: <TwitterIcon size={18} />,
  code2: <LeetcodeIcon size={18} />,
};

/* ── Journey Icon map ────────────────────────── */
const journeyIcons: Record<string, React.ReactNode> = {
  education: <GraduationCap size={16} />,
  learning: <BookOpen size={16} />,
  milestone: <Briefcase size={16} />,
};

/* ── Skill category colors ───────────────────── */
const categoryColors: Record<string, { bg: string; border: string; badge: string }> = {
  Frontend: {
    bg: "rgba(14, 165, 233, 0.06)",
    border: "rgba(14, 165, 233, 0.2)",
    badge: "rgba(14, 165, 233, 0.12)",
  },
  Backend: {
    bg: "rgba(14, 165, 233, 0.06)",
    border: "rgba(14, 165, 233, 0.2)",
    badge: "rgba(14, 165, 233, 0.12)",
  },
  Tools: {
    bg: "rgba(14, 165, 233, 0.06)",
    border: "rgba(14, 165, 233, 0.2)",
    badge: "rgba(14, 165, 233, 0.12)",
  },
};

const categoryBadgeText: Record<string, string> = {
  Frontend: "#93c5fd",
  Backend: "#93c5fd",
  Tools: "#93c5fd",
};

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          minHeight: "calc(100vh - 64px)",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          padding: "4rem 0 6rem",
        }}
      >

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            {/* Left: Text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              style={{ flex: "1 1 320px", maxWidth: "580px" }}
            >
              {/* Badge */}
              <motion.div variants={fadeUp} custom={0}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "rgba(14, 165, 233,0.12)",
                    border: "1px solid rgba(14, 165, 233,0.3)",
                    borderRadius: "100px",
                    padding: "0.3rem 0.9rem",
                    fontSize: "0.8rem",
                    color: "#93c5fd",
                    marginBottom: "1.25rem",
                    fontWeight: 500,
                  }}
                >
                  <Sparkles size={12} />
                  Available for opportunities
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1
                variants={fadeUp}
                custom={1}
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 4rem)",
                  fontWeight: 900,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  marginBottom: "0.5rem",
                }}
              >
                Hi, I&apos;m{" "}
                <span className="gradient-text">{personalInfo.name}</span>
              </motion.h1>

              {/* Role */}
              <motion.h2
                variants={fadeUp}
                custom={2}
                style={{
                  fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  marginBottom: "1rem",
                }}
              >
                {personalInfo.role}
              </motion.h2>

              {/* Tagline */}
              <motion.p
                variants={fadeUp}
                custom={3}
                style={{
                  fontSize: "1rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                  maxWidth: "460px",
                  marginBottom: "2rem",
                }}
              >
                {personalInfo.tagline}
              </motion.p>

              {/* Location + Email */}
              <motion.div
                variants={fadeUp}
                custom={4}
                style={{ display: "flex", gap: "1.25rem", marginBottom: "2rem", flexWrap: "wrap" }}
              >
                <span
                  style={{ display: "flex", alignItems: "center", gap: "5px", color: "var(--text-secondary)", fontSize: "0.875rem" }}
                >
                  <MapPin size={14} style={{ color: "var(--accent)" }} />
                  {personalInfo.location}
                </span>
                <span
                  style={{ display: "flex", alignItems: "center", gap: "5px", color: "var(--text-secondary)", fontSize: "0.875rem" }}
                >
                  <Mail size={14} style={{ color: "var(--accent)" }} />
                  {personalInfo.email}
                </span>
              </motion.div>

              {/* CTAs */}
              <motion.div
                variants={fadeUp}
                custom={5}
                style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "2.5rem" }}
              >
                <a href="/contact" className="btn-gradient" style={{ textDecoration: "none" }}>
                  Get In Touch
                </a>
                <a href="/projects" className="btn-outline" style={{ textDecoration: "none" }}>
                  View Projects
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={fadeUp}
                custom={6}
                style={{ display: "flex", gap: "10px" }}
              >
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-btn"
                    title={link.name}
                  >
                    {icons[link.icon] || <ExternalLink size={18} />}
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Photo — blended into dark background */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="hero-photo-wrap"
            >
              {/* Floating badge — experience */}
              <div
                style={{
                  position: "absolute",
                  bottom: "120px",
                  left: "-10px",
                  background: "rgba(13,13,20,0.9)",
                  border: "1px solid rgba(14, 165, 233,0.4)",
                  borderRadius: "14px",
                  padding: "0.6rem 1rem",
                  backdropFilter: "blur(16px)",
                  textAlign: "center",
                  zIndex: 10,
                  boxShadow: "0 0 20px rgba(14, 165, 233,0.2)",
                }}
              >
                <div style={{ fontSize: "1.4rem", fontWeight: 900, color: "var(--accent)", fontFamily: "var(--font-mono)" }}>4+</div>
                <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", whiteSpace: "nowrap", marginTop: "2px" }}>Years Coding</div>
              </div>

              {/* Floating badge — projects */}
              <div
                style={{
                  position: "absolute",
                  top: "60px",
                  right: "40px",
                  background: "rgba(13,13,20,0.9)",
                  border: "1px solid rgba(14, 165, 233,0.4)",
                  borderRadius: "14px",
                  padding: "0.6rem 1rem",
                  backdropFilter: "blur(16px)",
                  textAlign: "center",
                  zIndex: 10,
                  boxShadow: "0 0 20px rgba(14, 165, 233,0.15)",
                }}
              >
                <div style={{ fontSize: "1.4rem", fontWeight: 900, color: "var(--accent-cyan)", fontFamily: "var(--font-mono)" }}>10+</div>
                <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", whiteSpace: "nowrap", marginTop: "2px" }}>Projects</div>
              </div>

              {/* The photo — masked to blend with dark bg */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/avatar.jpg"
                alt="Yaman — Full Stack Developer"
                className="hero-photo"
              />


            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            style={{
              position: "absolute",
              bottom: "-3rem",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "4px",
              color: "var(--text-muted)",
              fontSize: "0.75rem",
            }}
          >
            <span>Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.4 }}
            >
              <ChevronDown size={16} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ME ─────────────────────────────── */}
      <section className="section" id="about">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}
            >
              Who I Am
            </motion.p>
            <motion.h2 variants={fadeUp} className="section-title">
              About <span className="gradient-text">Me</span>
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="glass-card"
              style={{ padding: "2rem 2.25rem", maxWidth: "720px", cursor: "default" }}
            >
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.85, fontSize: "0.97rem" }}>
                {about.trim()}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────── */}
      <section className="section" id="skills">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}
            >
              What I Know
            </motion.p>
            <motion.h2 variants={fadeUp} className="section-title">
              Technical <span className="gradient-text">Skills</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="section-subtitle">
              Technologies & tools I work with daily
            </motion.p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {Object.entries(skills).map(([category, items], ci) => (
                <motion.div
                  key={category}
                  variants={fadeUp}
                  custom={ci}
                  className="glass-card"
                  style={{
                    padding: "1.75rem",
                    background: categoryColors[category]?.bg,
                    border: `1px solid ${categoryColors[category]?.border}`,
                    cursor: "default",
                  }}
                >
                  <h3
                    style={{
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: categoryBadgeText[category],
                      marginBottom: "1rem",
                    }}
                  >
                    {category}
                  </h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="skill-badge"
                        style={{
                          background: categoryColors[category]?.badge,
                          borderColor: categoryColors[category]?.border,
                          color: categoryBadgeText[category],
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── JOURNEY ──────────────────────────────── */}
      <section className="section" id="journey">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}
            >
              My Story
            </motion.p>
            <motion.h2 variants={fadeUp} className="section-title">
              My <span className="gradient-text">Journey</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="section-subtitle">
              Key milestones that shaped my career
            </motion.p>

            <div style={{ maxWidth: "680px" }}>
              {journey.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  style={{ display: "flex", gap: "1.25rem", marginBottom: i === journey.length - 1 ? 0 : "0.25rem" }}
                >
                  {/* Timeline column */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "40px", flexShrink: 0 }}>
                    <div
                      className="timeline-dot"
                      style={{ marginTop: "6px" }}
                    />
                    {i < journey.length - 1 && (
                      <div className="timeline-line" style={{ minHeight: "60px" }} />
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className="glass-card"
                    style={{
                      flex: 1,
                      padding: "1.25rem 1.5rem",
                      marginBottom: "1rem",
                      cursor: "default",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.4rem", gap: "1rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <span style={{ color: "var(--accent)" }}>
                          {journeyIcons[item.type] || <Briefcase size={16} />}
                        </span>
                        <h3 style={{ fontWeight: 600, fontSize: "0.97rem", color: "var(--text-primary)" }}>
                          {item.title}
                        </h3>
                      </div>
                      <span
                        style={{
                          background: "rgba(14, 165, 233,0.1)",
                          border: "1px solid rgba(14, 165, 233,0.2)",
                          borderRadius: "100px",
                          padding: "0.15rem 0.7rem",
                          fontSize: "0.75rem",
                          color: "#93c5fd",
                          whiteSpace: "nowrap",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        {item.year}
                      </span>
                    </div>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.65 }}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── USEFUL LINKS ─────────────────────────── */}
      <section className="section" id="links">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}
            >
              Connect
            </motion.p>
            <motion.h2 variants={fadeUp} className="section-title">
              Useful <span className="gradient-text">Links</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="section-subtitle">
              Find me across the web
            </motion.p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              {[
                ...socialLinks,
                { name: "Resume", url: personalInfo.resumeUrl, icon: "resume" },
              ].map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target={link.name === "Resume" ? "_blank" : "_blank"}
                  rel="noopener noreferrer"
                  variants={fadeUp}
                  custom={i}
                  className="glass-card"
                  style={{
                    padding: "1.25rem 1.75rem",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    minWidth: "200px",
                  }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <span style={{ color: "var(--accent)" }}>
                    {icons[link.icon] || <ExternalLink size={20} />}
                  </span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--text-primary)" }}>
                      {link.name}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                      {link.url.replace("https://", "")}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* ── Hero Photo Styles ───────────────────── */
        .hero-photo-wrap {
          position: relative;
          flex: 0 0 auto;
          width: 420px;
          height: 520px;
          margin-right: -1.5rem;
        }

        .hero-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          display: block;
          
          /* Fade edges into the dark background */
          -webkit-mask-image: radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 75%);
          mask-image: radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 75%);

          /* The image background is #080808 which now perfectly matches the site background */
          mix-blend-mode: normal;
          border-radius: 4px;
        }



        .hero-photo-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse 60% 60% at 50% 50%,
            rgba(14, 165, 233, 0.15) 0%,
            transparent 70%
          );
          pointer-events: none;
          border-radius: 4px;
          z-index: -1;
        }

        @media (max-width: 900px) {
          .hero-photo-wrap {
            width: 320px;
            height: 400px;
            margin-right: 0;
          }
        }

        @media (max-width: 640px) {
          .hero-photo-wrap {
            width: 260px;
            height: 320px;
          }
        }
      `}</style>
    </>
  );
}
