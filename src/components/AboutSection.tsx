import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-heading">About Me</h2>
          <div className="w-16 h-1 mx-auto mb-8 rounded-full" style={{ background: "var(--hero-gradient)" }} />
          <div className="portfolio-card text-left">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I am a passionate and self-driven aspiring AI developer with a strong interest in Machine Learning,
              NLP, and Data Science. I enjoy building intelligent systems like chatbots and virtual assistants
              and I am currently seeking opportunities to grow and contribute to real-world AI projects.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
