import { motion } from "framer-motion";
import { Mail, Heart, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const smoothTransition = {
  duration: 0.7,
  ease: "easeOut" as const,
};

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container-wide section-padding relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={smoothTransition}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t.footer.ready}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              {t.footer.letsTalk}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild className="h-14 min-w-[200px]">
                <a href="mailto:juliorubiodev@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  {t.footer.contactMe}
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild className="h-14 min-w-[200px]">
                <a href="/Julio_Rubio_CV.pdf" download>
                  <Download className="w-5 h-5 mr-2" />
                  {t.footer.downloadResume}
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...smoothTransition, delay: 0.15 }}
            className="flex justify-center gap-4 mt-12"
          >
            <motion.a
              href="https://github.com/Juliorubiodev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-all hover:scale-110"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/juliocrubiom/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-all hover:scale-110"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...smoothTransition, delay: 0.25 }}
            className="mt-16 pt-8 border-t border-border"
          >
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              © 2024 Julio Rubio. Built with React &{" "}
              <Heart className="w-4 h-4 text-destructive fill-destructive" />
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
