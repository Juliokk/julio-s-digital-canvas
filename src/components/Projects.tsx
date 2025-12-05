import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

const DEFAULT_PROJECT_IMAGE = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop";

export const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 md:py-32 relative">
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
            <span className="gradient-text">{t.projects.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {t.projects.items.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="h-full rounded-2xl glass border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <motion.img
                    src={project.image || DEFAULT_PROJECT_IMAGE}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  
                  {/* Quick Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="glass" size="icon" className="h-9 w-9 backdrop-blur-md">
                        <Github className="h-4 w-4" />
                      </Button>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="glass" size="icon" className="h-9 w-9 backdrop-blur-md">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech: string, techIndex: number) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs font-medium bg-secondary/80"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4 border-t border-border/50">
                    <Button variant="outline" size="sm" asChild className="flex-1 h-10">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        {t.projects.viewCode}
                      </a>
                    </Button>
                    {project.demo ? (
                      <Button variant="default" size="sm" asChild className="flex-1 h-10">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          {t.projects.liveDemo}
                        </a>
                      </Button>
                    ) : (
                      <Button variant="default" size="sm" disabled className="flex-1 h-10">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {t.projects.liveDemo}
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
