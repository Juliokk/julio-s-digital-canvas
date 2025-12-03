import { motion } from "framer-motion";
import { Briefcase, GraduationCap, ExternalLink, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="container-wide section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t.experience.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.experience.subtitle}
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          {t.experience.jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Icon */}
              <div
                className={`absolute left-8 md:left-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center border-4 border-background ${
                  job.type === "work" ? "bg-primary" : "bg-accent"
                }`}
              >
                {job.type === "work" ? (
                  <Briefcase className="w-5 h-5 text-primary-foreground" />
                ) : (
                  <GraduationCap className="w-5 h-5 text-accent-foreground" />
                )}
              </div>

              {/* Content */}
              <div
                className={`ml-24 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                }`}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-3">
                    {job.period}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {job.title}
                  </h3>
                  <p className="text-primary font-medium mb-3">{job.company}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {job.description}
                  </p>
                  
                  {/* Action Buttons - Conditional rendering */}
                  {(job.companyUrl || job.certificateUrl) && (
                    <div className={`flex gap-2 flex-wrap ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                      {job.companyUrl && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={job.companyUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            {job.type === "work" ? "Company" : "Institution"}
                          </a>
                        </Button>
                      )}
                      {job.certificateUrl && (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={job.certificateUrl} target="_blank" rel="noopener noreferrer">
                            <Award className="w-3 h-3 mr-1" />
                            Certificate
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
