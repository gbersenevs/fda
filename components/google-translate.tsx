"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const languages = [
  { code: "en", label: "EN" },
  { code: "lv", label: "LV" },
  { code: "ru", label: "RU" },
];

export function GoogleTranslate() {
  const [currentLang, setCurrentLang] = useState("en");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,lv,ru",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element"
        );
        setIsLoaded(true);
      }
    };

    // Check current language from cookie
    const checkLanguage = () => {
      const cookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("googtrans="));
      if (cookie) {
        const lang = cookie.split("/")[2];
        if (lang && lang !== currentLang) {
          setCurrentLang(lang);
        }
      }
    };
    
    checkLanguage();
    const interval = setInterval(checkLanguage, 500);
    
    return () => clearInterval(interval);
  }, [currentLang]);

  const changeLanguage = (langCode: string) => {
    if (!isLoaded) return;

    // Set the language cookie that Google Translate uses
    const domain = window.location.hostname;
    document.cookie = `googtrans=/en/${langCode}; path=/; domain=${domain}`;
    document.cookie = `googtrans=/en/${langCode}; path=/;`;
    
    setCurrentLang(langCode);
    
    // Reload to apply translation
    window.location.reload();
  };

  return (
    <>
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      {/* Hidden Google Translate widget */}
      <div id="google_translate_element" style={{ display: "none" }}></div>
      
      {/* Custom language buttons */}
      <div className="flex items-center gap-1 notranslate">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={cn(
              "notranslate px-3 py-1.5 text-sm font-medium rounded transition-all duration-200",
              currentLang === lang.code
                ? "bg-primary text-white"
                : "text-text-muted hover:text-primary hover:bg-surface"
            )}
            aria-label={`Switch to ${lang.label}`}
            translate="no"
          >
            {lang.label}
          </button>
        ))}
      </div>
    </>
  );
}

