// UI string dictionary for bilingual site (en root + /de/ prefix)
export const ui = {
  en: {
    "nav.home": "Home",
    "nav.pellets": "Pellets",
    "nav.journal": "Journal",
    "nav.materials": "Materials",
    "nav.about": "About",
    "nav.contact": "Contact",
    "footer.tagline": "Exploring the art, history, and materials of Chinese incense culture — from precious agarwood to ancient blending traditions.",
    "footer.explore": "Explore",
    "footer.connect": "Connect",
    "footer.crafted": "Hand rolled with intention",
    "footer.rights": "All rights reserved.",
    "announcement": "Free shipping on orders $60+ · Hand rolled botanicals, shipped worldwide",
    "lang.switch": "Deutsch",
    "lang.other": "Deutsch",
  },
  de: {
    "nav.home": "Start",
    "nav.pellets": "Räucherkugeln",
    "nav.journal": "Journal",
    "nav.materials": "Materialien",
    "nav.about": "Über uns",
    "nav.contact": "Kontakt",
    "footer.tagline": "Die Kunst, Geschichte und Materialien der chinesischen Räucherkultur entdecken — von kostbarem Agarholz bis zu uralten Mischtraditionen.",
    "footer.explore": "Entdecken",
    "footer.connect": "Kontakt",
    "footer.crafted": "Von Hand gerollt, mit Absicht",
    "footer.rights": "Alle Rechte vorbehalten.",
    "announcement": "Kostenloser Versand ab 60 $ · Handgerollte Botanik, weltweiter Versand",
    "lang.switch": "English",
    "lang.other": "English",
  },
} as const;

export type Locale = keyof typeof ui;

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Locale;
  return "en";
}

export function useTranslations(lang: Locale) {
  return function t(key: keyof typeof ui["en"]) {
    return ui[lang][key] ?? ui.en[key];
  };
}

// Localized routes: / -> /de/ for the German counterpart
export function localizePath(path: string, lang: Locale, targetLang: Locale): string {
  if (targetLang === "en") {
    return path.replace(/^\/de(?=\/|$)/, "") || "/";
  }
  if (lang === "en") {
    return `/de${path === "/" ? "" : path}`;
  }
  return path;
}
