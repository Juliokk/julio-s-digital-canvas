import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiPostgresql, 
  SiMongodb, 
  SiDocker, 
  SiAmazonwebservices, 
  SiGit, 
  SiPython, 
  SiVuedotjs, 
  SiKotlin, 
  SiFlutter, 
  SiDart 
} from "react-icons/si";
import type { IconType } from "react-icons";

interface Technology {
  name: string;
  color: string;
  Icon: IconType;
}

const technologies: Technology[] = [
  { name: "React", color: "#61DAFB", Icon: SiReact },
  { name: "Next.js", color: "#000000", Icon: SiNextdotjs },
  { name: "TypeScript", color: "#3178C6", Icon: SiTypescript },
  { name: "JavaScript", color: "#F7DF1E", Icon: SiJavascript },
  { name: "Node.js", color: "#339933", Icon: SiNodedotjs },
  { name: "Tailwind CSS", color: "#06B6D4", Icon: SiTailwindcss },
  { name: "PostgreSQL", color: "#4169E1", Icon: SiPostgresql },
  { name: "MongoDB", color: "#47A248", Icon: SiMongodb },
  { name: "Docker", color: "#2496ED", Icon: SiDocker },
  { name: "AWS", color: "#FF9900", Icon: SiAmazonwebservices },
  { name: "Git", color: "#F05032", Icon: SiGit },
  { name: "Python", color: "#3776AB", Icon: SiPython },
  { name: "Vue.js", color: "#4FC08D", Icon: SiVuedotjs },
  { name: "Kotlin", color: "#7F52FF", Icon: SiKotlin },
  { name: "Flutter", color: "#02569B", Icon: SiFlutter },
  { name: "Dart", color: "#0175C2", Icon: SiDart },
];

export const TechStack = () => {
  const { t } = useLanguage();

  return (
    <section id="stack" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container-wide section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t.stack.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.stack.subtitle}
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Tech Grid - Responsive: 2 cols mobile, 3 tablet, 4 desktop, 8 large */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.03 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group"
            >
              <div className="p-4 md:p-5 rounded-xl bg-card/80 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col items-center justify-center aspect-square">
                <div
                  className="w-10 h-10 md:w-12 md:h-12 rounded-lg mb-3 flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${tech.color}20` }}
                >
                  <tech.Icon 
                    className="w-6 h-6 md:w-7 md:h-7"
                    style={{ color: tech.color }}
                  />
                </div>
                <p className="text-xs md:text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee Row */}
        <div className="mt-16 overflow-hidden">
          <div className="flex gap-4 animate-marquee">
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={`marquee-${index}`}
                className="flex-shrink-0 px-5 py-2.5 rounded-full bg-card/80 border border-border text-sm font-medium text-muted-foreground whitespace-nowrap flex items-center gap-2"
              >
                <tech.Icon className="w-4 h-4" style={{ color: tech.color }} />
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
