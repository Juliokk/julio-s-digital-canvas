import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="py-16 md:py-20 relative">
      <div className="container-wide section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-3"
        >
          {/* Line 1: Name & Title */}
          <p className="text-lg md:text-xl font-medium text-foreground">
            {t.footer.name} · {t.footer.title}
          </p>
          
          {/* Line 2: Tagline */}
          <p className="text-sm md:text-base text-muted-foreground">
            {t.footer.tagline}
          </p>
          
          {/* Line 3: Copyright */}
          <p className="text-xs md:text-sm text-muted-foreground/70 pt-2">
            {t.footer.copyright}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
