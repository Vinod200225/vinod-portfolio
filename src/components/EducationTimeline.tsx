import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const educationData = [
  {
    institution: "Seshadripuram Evening College, Bengaluru",
    degree: "Bachelor of Computer Applications (BCA)",
    detail: "CGPA: 8.9",
    period: "Aug 2025",
  },
  {
    institution: "Jetking",
    degree: "Diploma in Network Administration",
    period: "Jan 2023",
  },
  {
    institution: "Vidya Mandir Independent PU College",
    degree: "PUC (PCME)",
    period: "Jul 2020",
  },
];

const EducationTimeline = () => (
  <section id="education" className="section-padding relative">
    <SectionHeading
      label="// Education"
      title="Academic Background"
      description="Foundation of technical and professional development"
    />

    <div className="max-w-4xl mx-auto space-y-8">
      {educationData.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="glass-card-glow p-6"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <div>
              <h3 className="text-lg font-semibold">{edu.degree}</h3>
              <p className="text-foreground/70 text-sm">
                {edu.institution}
              </p>
              {edu.detail && (
                <p className="text-primary text-sm mt-1">
                  {edu.detail}
                </p>
              )}
            </div>
            <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              {edu.period}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default EducationTimeline;
