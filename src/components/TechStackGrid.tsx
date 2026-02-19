import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { KeyRound, Mail, Cloud, ShieldAlert, Shield, Terminal, Kanban, Server } from "lucide-react";

const stack = [
  { icon: KeyRound, name: "JumpCloud" },
  { icon: Mail, name: "Microsoft 365" },
  { icon: Cloud, name: "AWS" },
  { icon: ShieldAlert, name: "FortiGate" },
  { icon: Shield, name: "CrowdStrike" },
  { icon: Terminal, name: "PowerShell" },
  { icon: Kanban, name: "Jira" },
  { icon: Server, name: "Windows Server" },
];

const TechStackGrid = () => (
  <section id="stack" className="section-padding relative">
    <SectionHeading label="// Stack" title="Technologies" />
    <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
      {stack.map((tech, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
          className="glass-card p-6 text-center group hover:border-primary/30 transition-all duration-300 cursor-default"
        >
          <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300 mb-3 flex justify-center">
            <tech.icon size={28} className="group-hover:drop-shadow-[0_0_8px_hsl(var(--glow)/0.5)] transition-all duration-300" />
          </div>
          <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors tracking-wider uppercase">
            {tech.name}
          </span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default TechStackGrid;
