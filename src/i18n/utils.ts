import { blog } from "./pages/blog";
import { home } from "./pages/home";
import { projects } from "./pages/projects";
import { ui } from "./ui";

export const languages = {
  en: "English",
  es: "Español",
};

export const defaultLang = "en";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof languages) {
  const translations = {
    ui: ui[lang],
    home: home[lang],
    blog: blog[lang],
    projects: projects[lang],
  };

  const t = (path: string): string => {
    const [namespace, ...keys] = path.split(".") as [
      keyof typeof translations,
      ...string[],
    ];

    if (!(namespace in translations)) {
      throw new Error(
        `Invalid namespace '${namespace}' in translation path '${path}'.`
      );
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let result: any = translations[namespace];

    for (const key of keys) {
      if (!result[key]) {
        throw new Error(`Translation not found for path: ${path}`);
      }

      result = result[key];
    }

    return result;
  };

  return t;
}
