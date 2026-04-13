import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Mic, BarChart3, Brain } from "lucide-react";

const projects = [
  {
    title: "AI Chatbot",
    desc: "An NLP-based chatbot capable of understanding natural language queries and providing intelligent responses.",
    tech: ["Python", "NLP", "TensorFlow"],
    icon: Bot,
  },
  {
    title: "JARVIS AI Assistant",
    desc: "A voice-controlled AI assistant inspired by JARVIS, capable of executing commands and answering questions.",
    tech: ["Python", "Speech Recognition", "AI"],
    icon: Mic,
  },
  {
    title: "Smart Recommendation System",
    desc: "A machine learning-powered recommendation engine that suggests personalized content to users.",
    tech: ["Python", "ML", "Pandas"],
    icon: Brain,
  },
  {
    title: "Data Analysis Dashboard",
    desc: "An interactive dashboard for visualizing and analyzing complex datasets with intuitive charts.",
    tech: ["Python", "Data Science", "Matplotlib"],
    icon: BarChart3,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-heading">Projects</h2>
          <p className="section-subtitle">Things I've built to learn and create impact</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="portfolio-card group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <p.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
