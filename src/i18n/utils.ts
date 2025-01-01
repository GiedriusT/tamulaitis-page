import { ui, defaultLang } from './translations';

// This small and convoluted utility gives us auto-completion in the IDE and
// type safety, which is all that is needed for tiny project like this one.
export function getTranslations(lang: keyof typeof ui = defaultLang) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
