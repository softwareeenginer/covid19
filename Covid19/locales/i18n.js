import i18n from "i18n-js"
import tr from "./tr.json"
import en from "./en.json"
import {Store} from '../networking/Stores';
i18n.translations = {
    "tr-TR": tr,
    "en-US": en
}

if(!Store.getLanguage) Store.setLanguage("tr-TR")

i18n.locale = Store.getLanguage
i18n.fallback = true

export const t = (name, params = {}) => i18n.t(name, params)

export default i18n;

