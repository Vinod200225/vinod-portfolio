import { motion } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="font-mono text-sm tracking-[0.3em] uppercase text-primary/80 mb-6 block">
            Security Operations • IT Leadership
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight mb-6"
        >
          <span className="text-foreground">VINOD</span>{" "}
          <span className="text-gradient">KUMAR K</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-mono text-xs sm:text-sm tracking-widest text-muted-foreground mb-4 uppercase"
        >
          Senior IT Lead | Information Security | SOC 2 | Zero Trust | IT Operations
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto"
        >
          Securing Infrastructure. Enforcing Zero Trust. Enabling Growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#expertise"
            className="btn-primary-glow flex items-center justify-center gap-2"
          >
            View Command Center
            <ChevronDown size={18} />
          </a>

          <button
            onClick={scrollToContact}
            className="btn-outline-glow flex items-center justify-center gap-2"
          >
            <Download size={18} />
            Download Resume
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-primary/40" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
