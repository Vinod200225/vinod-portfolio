import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import SectionHeading from "./SectionHeading";

const metrics = [
  { value: 6, suffix: "+", label: "Years Experience" },
  { value: 250, suffix: "+", label: "Endpoints Secured" },
  { value: 120, suffix: "+", label: "Users Managed" },
  { value: 100, suffix: "%", label: "EDR Coverage" },
  { value: 1, suffix: "", label: "SOC 2 Audit Ready", display: "✓" },
  { value: 1, suffix: "", label: "Zero Trust Implemented", display: "✓" },
];

const LiveMetrics = () => (
  <section id="metrics" className="section-padding relative">
    <SectionHeading label="// Metrics" title="Live Status" description="Real-time operational metrics" />
    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {metrics.map((m, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="glass-card-glow p-6 text-center group transition-all duration-300"
        >
          <div className="text-3xl md:text-4xl glow-text mb-2">
            {m.display ? m.display : <AnimatedCounter end={m.value} suffix={m.suffix} />}
          </div>
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{m.label}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default LiveMetrics;
