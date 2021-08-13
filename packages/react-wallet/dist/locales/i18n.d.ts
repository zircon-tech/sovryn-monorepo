import en from './en/translation.json';
import { ConvertedToObjectType } from './types';
export declare type TranslationResource = typeof en;
export declare type LanguageKey = keyof TranslationResource;
export declare const translations: ConvertedToObjectType<TranslationResource>;
export declare const i18n: Promise<import("i18next").TFunction>;
