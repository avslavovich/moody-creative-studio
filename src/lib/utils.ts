import type {Lang} from "./i18n";
export function fm(usdt:number, lang:Lang, rate=100){ return lang==="ru" ? new Intl.NumberFormat("ru-RU").format(Math.round(usdt*rate))+" ₽" : "$"+Math.round(usdt) }
export function uid(){ return Math.random().toString(36).slice(2,9) }
