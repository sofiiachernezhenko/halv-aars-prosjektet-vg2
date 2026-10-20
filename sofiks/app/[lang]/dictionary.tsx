import "server-only";

export const locales = ["no", "en", "ru"] as const;

export type Locale = (typeof locales)[number];

export function hasLocale(lang: string): lang is Locale {
  return locales.includes(lang as Locale);
}

const dictionaries = {
  no: () => import("./dictionaries/no.json").then((module) => module.default),
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  ru: () => import("./dictionaries/ua.json").then((module) => module.default),
};

export async function getDictionary(lang: Locale) {
  return dictionaries[lang]();
}
