"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Send } from "lucide-react";
import toast from "react-hot-toast";
import { socialLinks, personalInfo } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, TwitterIcon, LeetcodeIcon } from "@/components/SocialIcons";
import { fadeUp, stagger } from "@/lib/animations";

const icons: Record<string, React.ReactNode> = {
  github: <GithubIcon size={20} />,
  linkedin: <LinkedinIcon size={20} />,
  twitter: <TwitterIcon size={20} />,
  code2: <LeetcodeIcon size={20} />,
};

const socialAccents: Record<string, string> = {
  github: "#e2e8f0",
  linkedin: "#3b82f6",
  twitter: "#3b82f6",
  code2: "#3b82f6",
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);

    // Simulate API / EmailJS call
    await new Promise((r) => setTimeout(r, 1500));

    // ── Replace this block with real EmailJS or API call ──
    // import emailjs from "@emailjs/browser";
    // await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
    // ──────────────────────────────────────────────────────

    toast.success("Message sent! I'll get back to you soon 🚀", { duration: 4000 });
    setForm({ name: "", email: "", message: "" });
    setLoading(false);
  };

  return (
    <div style={{ minHeight: "calc(100vh - 64px)" }}>
      <section className="section">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            {/* Header */}
            <motion.p
              variants={fadeUp}
              style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}
            >
              Say Hello
            </motion.p>
            <motion.h1 variants={fadeUp} className="section-title">
              Get In <span className="gradient-text">Touch</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="section-subtitle">
              Have a project idea, job opportunity, or just want to chat? I&apos;d love to hear from you.
            </motion.p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2.5rem",
                alignItems: "start",
              }}
              className="contact-grid"
            >
              {/* ── FORM ─────────────────────────────── */}
              <motion.div variants={fadeUp} custom={2}>
                <form onSubmit={handleSubmit} noValidate>
                  <div className="glass-card" style={{ padding: "2rem", cursor: "default" }}>
                    <h2 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                      Send a Message
                    </h2>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      <div>
                        <label
                          htmlFor="name"
                          style={{ display: "block", fontSize: "0.8rem", fontWeight: 500, color: "var(--text-secondary)", marginBottom: "6px" }}
                        >
                          Your Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="form-input"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          style={{ display: "block", fontSize: "0.8rem", fontWeight: 500, color: "var(--text-secondary)", marginBottom: "6px" }}
                        >
                          Email Address
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="form-input"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          style={{ display: "block", fontSize: "0.8rem", fontWeight: 500, color: "var(--text-secondary)", marginBottom: "6px" }}
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell me about your project or just say hi..."
                          className="form-input"
                          rows={5}
                          required
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={loading}
                        className="btn-gradient"
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "8px",
                          fontSize: "0.9rem",
                          opacity: loading ? 0.7 : 1,
                          cursor: loading ? "not-allowed" : "pointer",
                          marginTop: "4px",
                        }}
                        whileTap={{ scale: 0.97 }}
                      >
                        {loading ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                              style={{ width: "16px", height: "16px", border: "2px solid rgba(255,255,255,0.4)", borderTopColor: "white", borderRadius: "50%" }}
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={15} />
                            Send Message
                          </>
                        )}
                      </motion.button>
                    </div>
                  </div>
                </form>
              </motion.div>

              {/* ── SOCIAL & INFO ─────────────────────── */}
              <motion.div variants={fadeUp} custom={3} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {/* Direct contact card */}
                <div className="glass-card" style={{ padding: "1.75rem", cursor: "default" }}>
                  <h2 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>
                    Contact Info
                  </h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        color: "var(--text-secondary)",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
                    >
                      <Mail size={18} style={{ color: "var(--accent)" }} />
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Social links */}
                <div className="glass-card" style={{ padding: "1.75rem", cursor: "default" }}>
                  <h2 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>
                    Find Me Online
                  </h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {socialLinks.map((link) => (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          padding: "0.7rem 1rem",
                          borderRadius: "10px",
                          border: "1px solid var(--border-color)",
                          background: "rgba(255,255,255,0.02)",
                          textDecoration: "none",
                          color: socialAccents[link.icon] || "var(--text-secondary)",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                          transition: "all 0.2s ease",
                        }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.15 }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                          (e.currentTarget as HTMLElement).style.borderColor = "rgba(14, 165, 233,0.3)";
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                          (e.currentTarget as HTMLElement).style.borderColor = "var(--border-color)";
                        }}
                      >
                        {icons[link.icon]}
                        {link.name}
                        <span style={{ marginLeft: "auto", fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                          {link.url.replace("https://", "")}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Response time */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "1rem 1.25rem",
                    borderRadius: "12px",
                    background: "rgba(34,197,94,0.06)",
                    border: "1px solid rgba(34,197,94,0.2)",
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#3b82f6",
                      boxShadow: "0 0 8px rgba(34,197,94,0.6)",
                      animation: "pulse-dot 2s ease-in-out infinite",
                    }}
                  />
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>
                    Usually responds within <strong style={{ color: "#93c5fd" }}>24 hours</strong>
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .contact-grid {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
