export type Language = "en" | "ko";

export type I18n = Record<Language, string>;

export const isLanguage = (lang: string): lang is Language => {
  return ["en", "ko"].includes(lang);
};
