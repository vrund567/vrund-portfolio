import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center">
          <h2 className="section-heading">Education</h2>
          <div className="w-16 h-1 mx-auto mb-10 rounded-full" style={{ background: "var(--hero-gradient)" }} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.5 }} className="portfolio-card flex items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <GraduationCap className="text-primary" size={28} />
          </div>
          <div>
            <h3 className="font-display font-semibold text-lg">12th Pass (Higher Secondary)</h3>
            <p className="text-muted-foreground text-sm">Completed higher secondary education with a focus on science and mathematics.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
