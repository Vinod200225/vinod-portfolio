import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { KeyRound, ShieldAlert, Monitor, Cloud, Activity, Database } from "lucide-react";

const steps = [
  { icon: KeyRound, label: "IAM", sub: "Identity & Access" },
  { icon: ShieldAlert, label: "Firewall", sub: "Network Defense" },
  { icon: Monitor, label: "Endpoint", sub: "EDR & Protection" },
  { icon: Cloud, label: "Cloud", sub: "AWS & Hybrid" },
  { icon: Activity, label: "Monitoring", sub: "SIEM & Alerts" },
  { icon: Database, label: "Backup & BCP", sub: "Disaster Recovery" },
];

const ArchitectureFlow = () => (
  <section id="architecture" className="section-padding relative">
    <SectionHeading label="// Architecture" title="Infrastructure Flow" description="End-to-end security architecture" />
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-wrap justify-center items-center gap-2 md:gap-0">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex items-center"
          >
            <div className="glass-card-glow p-5 md:p-6 text-center group hover:border-primary/40 transition-all duration-300 w-[140px] md:w-[160px]">
              <div className="p-3 rounded-xl bg-primary/10 text-primary mx-auto mb-3 w-fit group-hover:bg-primary/20 transition-colors">
                <step.icon size={24} />
              </div>
              <h4 className="font-heading font-semibold text-foreground text-sm mb-1">{step.label}</h4>
              <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">{step.sub}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden md:flex items-center text-primary/30 px-1">
                <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="text-primary/40">
                  <path d="M0 6H22M22 6L17 1M22 6L17 11" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ArchitectureFlow;
