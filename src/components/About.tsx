import { motion } from "framer-motion";
import { Sparkles, Code2, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const smoothTransition = {
  duration: 0.7,
  ease: "easeOut" as const,
};

export const About = () => {
  const { t } = useLanguage();

  const highlights = [
    { icon: Sparkles, label: t.about.highlights.experience },
    { icon: Code2, label: t.about.highlights.projects },
    { icon: Users, label: t.about.highlights.clients },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container-wide section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={smoothTransition}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t.about.title}
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          {/* Glassmorphism Card Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...smoothTransition, delay: 0.1 }}
            className="glass rounded-2xl p-8 md:p-12 shadow-xl"
          >
            {/* Content */}
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ ...smoothTransition, delay: 0.15 }}
                className="text-2xl md:text-3xl font-semibold gradient-text"
              >
                {t.about.intro}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ ...smoothTransition, delay: 0.2 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                {t.about.description}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ ...smoothTransition, delay: 0.25 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                {t.about.description2}
              </motion.p>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ ...smoothTransition, delay: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6"
              >
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="p-5 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
                  >
                    <item.icon className="w-7 h-7 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <p className="font-semibold text-foreground text-sm">{item.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
