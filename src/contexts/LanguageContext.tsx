import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language } from "@/constants/translations";

type TranslationType = (typeof translations)["en"];

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationType;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("portfolio-language");
    return (saved as Language) || "en";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-language", language);
  }, [language]);

  const t = translations[language] as TranslationType;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
