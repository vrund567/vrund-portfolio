import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Trophy } from "lucide-react";

const achievements = [
  { title: "Certificate in AI & Machine Learning", desc: "Completed a comprehensive certification covering AI/ML fundamentals and applications.", icon: Award },
  { title: "Hackathon Runner-Up", desc: "Secured runner-up position in a competitive hackathon with an innovative AI solution.", icon: Trophy },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center">
          <h2 className="section-heading">Achievements</h2>
          <p className="section-subtitle">Milestones along the journey</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {achievements.map((a, i) => (
            <motion.div key={a.title} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 * i, duration: 0.5 }} className="portfolio-card text-center">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <a.icon className="text-accent" size={28} />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{a.title}</h3>
              <p className="text-muted-foreground text-sm">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
