import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SkillChart from "./SkillChart";

const technicalSkills = [
  "Python", "AI", "Machine Learning", "NLP",
  "Deep Learning", "Data Science", "Basic Web Development",
];

const softSkills = [
  "Problem Solving", "Communication", "Teamwork",
  "Adaptability", "Critical Thinking",
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-heading">Skills</h2>
          <p className="section-subtitle">Technologies and abilities I bring to the table</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="portfolio-card"
          >
            <h3 className="font-display text-xl font-semibold mb-4 gradient-text">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="portfolio-card"
          >
            <h3 className="font-display text-xl font-semibold mb-4 gradient-text">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20 transition-all hover:bg-accent hover:text-accent-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* D3 Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="portfolio-card max-w-3xl mx-auto"
        >
          <h3 className="font-display text-xl font-semibold mb-6 gradient-text text-center">
            Skill Proficiency
          </h3>
          <SkillChart />
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
