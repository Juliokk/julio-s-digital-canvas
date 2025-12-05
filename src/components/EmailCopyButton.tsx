import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const EMAIL = "juliorubiodev@gmail.com";

interface EmailCopyButtonProps {
  variant?: "hero" | "footer";
}

export const EmailCopyButton = ({ variant = "hero" }: EmailCopyButtonProps) => {
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      toast({
        title: t.emailCopy?.success || "Email copied to clipboard!",
        duration: 2000,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: t.emailCopy?.error || "Failed to copy email",
        variant: "destructive",
        duration: 2000,
      });
    }
  };

  return (
    <motion.button
      onClick={handleCopy}
      className={`
        group flex items-center gap-2 px-5 py-2.5 rounded-full
        font-mono text-sm whitespace-nowrap
        bg-card/60 backdrop-blur-sm border border-border/50
        hover:border-primary/50 hover:bg-card/80
        text-muted-foreground hover:text-foreground
        transition-all duration-200
        ${variant === "footer" ? "" : "mt-8"}
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.8 }}
    >
      <span className="select-all">{EMAIL}</span>
      <motion.span
        key={copied ? "check" : "copy"}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.15 }}
        className={`p-1 rounded ${copied ? "text-green-500" : "text-muted-foreground group-hover:text-primary"}`}
      >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      </motion.span>
    </motion.button>
  );
};
