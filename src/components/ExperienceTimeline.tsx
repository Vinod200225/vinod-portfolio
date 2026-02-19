import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    role: "Senior IT Lead",
    company: "Invisia Software Pvt Ltd",
    period: "2024 – Present",
    highlights: [
      "Full ownership of IT infrastructure, security, and governance",
      "Led SOC 2 Type II audit readiness & evidence collection",
      "Deployed Zero Trust architecture across 250+ endpoints",
      "Managed CrowdStrike EDR, FortiGate, JumpCloud IAM",
    ],
  },
  {
    role: "Senior IT, Admin & Facilities",
    company: "Proziod Analytics",
    period: "2023 – 2024",
    highlights: [
      "Transformed IT operations and security posture",
      "Implemented company-wide IAM with MFA enforcement",
      "Established IT governance policies & asset management",
      "Scaled infrastructure for rapid business growth",
    ],
  },
  {
    role: "IT Analyst",
    company: "Strategic Marketing & Research Team",
    period: "2020 – 2023",
    highlights: [
      "Core IT support and infrastructure management",
      "Network administration & endpoint security",
      "Vendor management & procurement optimization",
      "Foundation in enterprise IT operations",
    ],
  },
];

const ExperienceTimeline = () => (
  <section id="experience" className="section-padding relative">
    <SectionHeading label="// Career" title="Experience Timeline" />
    <div className="max-w-3xl mx-auto relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent md:-translate-x-px" />

      {experiences.map((exp, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          className={`relative mb-12 pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:ml-auto md:pl-10"}`}
        >
          {/* Dot */}
          <div className="absolute left-2.5 md:left-auto top-2 w-3 h-3 rounded-full bg-primary border-2 border-background shadow-[0_0_10px_hsl(var(--glow)/0.5)] md:top-2"
            style={i % 2 === 0 ? { right: "-6.5px", left: "auto" } : { left: "-6.5px" }}
          />

          <span className="font-mono text-xs text-primary tracking-wider">{exp.period}</span>
          <h3 className="font-heading font-bold text-lg text-foreground mt-1">{exp.role}</h3>
          <p className="text-muted-foreground text-sm mb-3">{exp.company}</p>
          <ul className={`space-y-1.5 ${i % 2 === 0 ? "md:text-right" : ""}`}>
            {exp.highlights.map((h, j) => (
              <li key={j} className="text-sm text-foreground/60 flex items-start gap-2 md:gap-2">
                {i % 2 !== 0 && <span className="text-primary shrink-0 mt-0.5">▸</span>}
                <span className={i % 2 === 0 ? "md:ml-auto" : ""}>{h}</span>
                {i % 2 === 0 && <span className="text-primary shrink-0 mt-0.5 hidden md:inline">◂</span>}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ExperienceTimeline;
