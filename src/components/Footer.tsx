"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { socialLinks } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, TwitterIcon, LeetcodeIcon } from "@/components/SocialIcons";

const icons: Record<string, React.ReactNode> = {
  github: <GithubIcon size={18} />,
  linkedin: <LinkedinIcon size={18} />,
  twitter: <TwitterIcon size={18} />,
  code2: <LeetcodeIcon size={18} />,
};

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-color)",
        padding: "2.5rem 0",
        marginTop: "4rem",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
        }}
      >
        <div>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>
            Built with{" "}
            <span style={{ color: "var(--accent)" }}>Next.js</span> &{" "}
            <span style={{ color: "var(--accent)" }}>Tailwind CSS</span>
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: "2px" }}>
            © {new Date().getFullYear()} Yaman. All rights reserved.
          </p>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              title={link.name}
            >
              {icons[link.icon] || <ExternalLink size={18} />}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
