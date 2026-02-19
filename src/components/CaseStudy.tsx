import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Target, Lightbulb, Wrench, TrendingUp } from "lucide-react";

const sections = [
  {
    icon: Target,
    title: "Problem",
    text: "Legacy flat network with no endpoint visibility, shared admin credentials, and zero compliance framework — exposing the organization to lateral movement and data breach risks.",
  },
  {
    icon: Lightbulb,
    title: "Strategy",
    text: "Designed a Zero Trust roadmap: centralized IAM via JumpCloud, network segmentation with FortiGate, EDR deployment via CrowdStrike, and enforced least-privilege access policies.",
  },
  {
    icon: Wrench,
    title: "Implementation",
    text: "Rolled out in phases over 6 months: IAM migration (Week 1–4), firewall hardening (Week 5–8), EDR deployment (Week 9–16), and policy enforcement with continuous monitoring.",
  },
  {
    icon: TrendingUp,
    title: "Outcome",
    text: "100% EDR coverage, 100% MFA adoption, SOC 2 audit-ready state, 60% reduction in security incidents, and full endpoint encryption — transforming the organization's security posture.",
  },
];

const CaseStudy = () => (
  <section id="case-study" className="section-padding relative">
    <SectionHeading
      label="// Case Study"
      title="Zero Trust for 250+ Endpoints"
      description="Enterprise security transformation from legacy to modern architecture"
    />
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
      {sections.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="glass-card-glow p-6"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <s.icon size={18} />
            </div>
            <h3 className="font-heading font-semibold text-foreground">{s.title}</h3>
          </div>
          <p className="text-sm text-foreground/65 leading-relaxed">{s.text}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default CaseStudy;
