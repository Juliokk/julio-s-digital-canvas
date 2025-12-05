import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { EmailCopyButton } from "./EmailCopyButton";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="py-20 md:py-32 relative">
      <div className="container-wide section-padding">
        {/* TOP SECTION - Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent mb-6">
            {t.footer.cta}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10">
            {t.footer.ctaSubtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="hero"
              size="xl"
              onClick={() => window.location.href = "mailto:juliorubiodev@gmail.com"}
            >
              <Mail className="w-5 h-5 mr-2" />
              {t.footer.contact}
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              asChild
            >
              <a href="/Julio_Rubio_CV.pdf" download>
                <Download className="w-5 h-5 mr-2" />
                {t.footer.resume}
              </a>
            </Button>
          </div>

          {/* Email Copy - Centered */}
          <div className="flex justify-center w-full mt-6 mb-8">
            <EmailCopyButton variant="footer" />
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-5">
            <motion.a
              href="https://github.com/Juliorubiodev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-card/80 border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300 shadow-lg"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/juliocrubiom/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-card/80 border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300 shadow-lg"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-border/50 my-16 max-w-md mx-auto" />

        {/* BOTTOM SECTION - Signature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-center space-y-2"
        >
          <p className="text-base md:text-lg font-medium text-foreground/80">
            {t.footer.name} · {t.footer.title}
          </p>
          <p className="text-sm text-muted-foreground">
            {t.footer.tagline}
          </p>
          <p className="text-xs text-muted-foreground/60 pt-2">
            {t.footer.copyright}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
