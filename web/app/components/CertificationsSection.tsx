"use client";
import { motion } from "framer-motion";

const CERTS = [
  {
    label: "AWS",
    name: "Cloud Foundations",
    href: "https://www.credly.com/go/7fWQ0ZZJ",
  },
  {
    label: "Cisco",
    name: "Python Essentials 1",
    href: "https://www.credly.com/badges/848d004d-242f-4da1-bfcf-7450f8c684a6/public_url",
  },
  {
    label: "Cisco",
    name: "Python Essentials 2",
    href: "https://www.credly.com/badges/35cbb275-6579-46f6-9c77-157883d2e1e0/public_url",
  },
  {
    label: "Cisco",
    name: "CCNA: Switching, Routing & Wireless",
    href: "https://www.credly.com/badges/4630553f-6a83-4454-89f4-6def48e44b31/public_url",
  },
];

const ExternalIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
    <path d="M5 5h5V3H3v7h2V5z" />
  </svg>
);

export function CertificationsSection() {
  return (
    <section id="verified" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="sec-label">06 // Verified Modules</div>
          <h2 className="sec-title"><span className="glitch-title" data-text={"Certifications"}>Certifications</span></h2>
          <p className="sec-desc">Industry-verified credentials.</p>
        </motion.div>

        <div className="certs-grid">
          {CERTS.map((c, i) => (
            <motion.a
              key={i}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: i * 0.1,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              <div>
                <div className="cert-label">{c.label}</div>
                <div className="cert-name">{c.name}</div>
              </div>
              <div className="cert-icon">
                <ExternalIcon />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
