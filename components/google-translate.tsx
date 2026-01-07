"use client";

import { useEffect, useState, useCallback } from "react";
import Script from "next/script";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            autoDisplay: boolean;
          },
          elementId: string
        ) => void;
      };
    };
    googleTranslateElementInit: () => void;
  }
}

const languages = [
  { code: "en", label: "EN", name: "English" },
  { code: "lv", label: "LV", name: "Latvian" },
  { code: "ru", label: "RU", name: "Russian" },
];

export function GoogleTranslate() {
  const [currentLang, setCurrentLang] = useState("en");
  const [isReady, setIsReady] = useState(false);

  // Detect current language from Google Translate cookie
  const detectCurrentLanguage = useCallback(() => {
    const cookies = document.cookie.split("; ");
    const googtrans = cookies.find((c) => c.startsWith("googtrans="));
    
    if (googtrans) {
      const value = googtrans.split("=")[1];
      // Cookie format: /en/lv or /auto/lv
      const parts = value.split("/");
      const lang = parts[parts.length - 1];
      if (lang && languages.some((l) => l.code === lang)) {
        return lang;
      }
    }
    return "en";
  }, []);

  // Initialize Google Translate
  useEffect(() => {
    // Set up the initialization function
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,lv,ru",
          autoDisplay: false,
        },
        "google_translate_element"
      );
      
      // Wait for widget to fully initialize
      setTimeout(() => {
        setIsReady(true);
        setCurrentLang(detectCurrentLanguage());
      }, 500);
    };

    // Check language periodically
    const interval = setInterval(() => {
      const detected = detectCurrentLanguage();
      if (detected !== currentLang) {
        setCurrentLang(detected);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [currentLang, detectCurrentLanguage]);

  // Function to change language by manipulating the Google Translate select
  const changeLanguage = (langCode: string) => {
    if (langCode === currentLang) return;

    // Method 1: Try to find and click the Google Translate select
    const selectElement = document.querySelector(
      ".goog-te-combo"
    ) as HTMLSelectElement;

    if (selectElement) {
      selectElement.value = langCode;
      selectElement.dispatchEvent(new Event("change", { bubbles: true }));
      setCurrentLang(langCode);
      return;
    }

    // Method 2: Set cookie and reload (fallback)
    // Clear existing cookies first
    const hostname = window.location.hostname;
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${hostname}`;
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${hostname}`;

    if (langCode !== "en") {
      // Set new cookie for target language
      document.cookie = `googtrans=/en/${langCode}; path=/`;
      document.cookie = `googtrans=/en/${langCode}; path=/; domain=${hostname}`;
      document.cookie = `googtrans=/en/${langCode}; path=/; domain=.${hostname}`;
    }

    // Reload to apply
    window.location.reload();
  };

  return (
    <>
      {/* Google Translate Script */}
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
        onLoad={() => {
          // Script loaded, widget will initialize via callback
        }}
      />

      {/* Hidden Google Translate widget - needed for functionality */}
      <div
        id="google_translate_element"
        className="google-translate-widget"
        aria-hidden="true"
      />

      {/* Custom language buttons */}
      <div className="flex items-center gap-1 notranslate" translate="no">
        {languages.map((lang) => (
          <button
            key={lang.code}
            type="button"
            onClick={() => changeLanguage(lang.code)}
            disabled={!isReady && lang.code !== "en"}
            className={cn(
              "notranslate px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200",
              currentLang === lang.code
                ? "bg-primary text-white shadow-sm"
                : "text-text-muted hover:text-primary hover:bg-surface",
              !isReady && lang.code !== "en" && "opacity-50 cursor-wait"
            )}
            aria-label={`Translate to ${lang.name}`}
            translate="no"
          >
            {lang.label}
          </button>
        ))}
      </div>
    </>
  );
}
