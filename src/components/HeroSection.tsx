import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
    {/* Background glow */}
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl pointer-events-none"
      style={{ background: "var(--hero-gradient)" }}
    />

    <div className="container mx-auto px-4 relative z-10">
      <div className="flex flex-col items-center text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 animate-float"
        >
          <div className="relative group">
            <div
              className="absolute -inset-1 rounded-full opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "var(--hero-gradient)" }}
            />
            <img
              src={profileImg}
              alt="Vrund Mehta"
              width={512}
              height={512}
              className="relative w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-card shadow-xl transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-medium mb-4 tracking-widest uppercase text-sm"
        >
          Aspiring AI Developer &bull; ML Enthusiast
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold font-display mb-6"
        >
          Hi, I'm{" "}
          <span className="gradient-text">Vrund Mehta</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10"
        >
          Building intelligent systems with AI and Python
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-outline">
            Contact Me
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
