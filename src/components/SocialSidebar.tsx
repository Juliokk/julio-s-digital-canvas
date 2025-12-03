import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export const SocialSidebar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="fixed left-6 bottom-0 z-40 hidden lg:flex flex-col items-center gap-4"
    >
      <motion.a
        href="https://github.com/Juliorubiodev"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-card/80 border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300 shadow-lg hover:shadow-xl"
        whileHover={{ y: -3, scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Github className="w-5 h-5" />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/juliocrubiom/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-card/80 border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300 shadow-lg hover:shadow-xl"
        whileHover={{ y: -3, scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Linkedin className="w-5 h-5" />
      </motion.a>
      <div className="w-px h-24 bg-border" />
    </motion.div>
  );
};
