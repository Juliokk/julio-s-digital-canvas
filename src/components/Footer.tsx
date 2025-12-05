import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { EmailCopyButton } from "./EmailCopyButton";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="py-16 md:py-24 relative">
      <div className="container-wide section-padding">
        {/* TOP SECTION - Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            {t.footer.cta}
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            {t.footer.ctaSubtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="min-w-[180px]"
              onClick={() => window.location.href = "mailto:juliorubiodev@gmail.com"}
            >
              <Mail className="w-4 h-4 mr-2" />
              {t.footer.contact}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="min-w-[180px]"
              asChild
            >
              <a href="/Julio_Rubio_CV.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                {t.footer.resume}
              </a>
            </Button>
          </div>

          {/* Email Copy */}
          <EmailCopyButton variant="footer" />

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <motion.a
              href="https://github.com/Juliorubiodev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/80 border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/juliocrubiom/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/80 border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-24 h-px bg-border mx-auto my-12" />

        {/* BOTTOM SECTION - Signature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-center space-y-3"
        >
          <p className="text-lg md:text-xl font-medium text-foreground">
            {t.footer.name} · {t.footer.title}
          </p>
          <p className="text-sm md:text-base text-muted-foreground">
            {t.footer.tagline}
          </p>
          <p className="text-xs md:text-sm text-muted-foreground/70 pt-2">
            {t.footer.copyright}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
