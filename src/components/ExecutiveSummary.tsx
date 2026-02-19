import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Shield, Server, Users, Lock } from "lucide-react";

const highlights = [
  { icon: Shield, text: "SOC 2 readiness & audit support across multiple organizations" },
  { icon: Lock, text: "IAM, RBAC, MFA — Zero Trust architecture implementation" },
  { icon: Users, text: "Managing 120+ users and 250+ endpoints at enterprise scale" },
  { icon: Server, text: "End-to-end infrastructure ownership & security modernization" },
];

const ExecutiveSummary = () => (
  <section id="summary" className="section-padding relative">
    <SectionHeading label="// Profile" title="Executive Summary" />
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-card p-8 md:p-10 mb-10"
      >
        <p className="text-foreground/80 text-lg leading-relaxed">
          Senior IT Lead with <span className="text-primary font-semibold">6+ years</span> of enterprise IT experience 
          driving security transformation, infrastructure modernization, and governance frameworks. 
          Proven track record in building Zero Trust architectures, leading SOC 2 audit readiness, 
          and managing complex multi-site IT operations. Combines deep technical expertise with 
          strategic leadership to protect organizational assets while enabling business growth.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {highlights.map((h, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass-card p-5 flex items-start gap-4 group hover:border-primary/30 transition-colors duration-300"
          >
            <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0 group-hover:bg-primary/20 transition-colors">
              <h.icon size={20} />
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed">{h.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExecutiveSummary;
