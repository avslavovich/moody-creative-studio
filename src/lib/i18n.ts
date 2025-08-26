export type Lang="en"|"ru";
export const I18N={
  en:{
    brand:"MOODY CREATIVE STUDIO",
    labels:{profile:"Profile",cart:"Cart",open:"Open",close:"Close"},
    nav:{main:"MainPage",pricing:"Pricing",premium:"Premium",faq:"FAQ",join:"Join Team",profile:"Profile"},
    hero:{
      title:"Moody Creative Studio — a premium creative team",
      subtitle:"We craft brands, visuals, motion and web. Pay → Brief → Work in chat → Delivery. Clear timelines & refunds.",
      ctaPricing:"Catalog & Pricing", ctaPremium:"Premium",
      designTitle:"Design that moves business",
      designBody:"Senior-led studio delivering sharp design at startup speed. Strategy, brand, motion and web — predictable, fast and clean.",
      metrics:[["8","YEARS"],["120","BRANDS"],["350","CAMPAIGN ASSETS"]],
      makeTitle:"What we make",
      makeItems:["Logos & identities","Social revamps & templates","Creatives & ad sets","Short-form video & motion","Websites & landings","AI avatars & portraits"],
      selected:"Selected work", seePricing:"See pricing", socials:"Follow us"
    },
    pricing:{title:"Pricing",size:{S:"S",M:"M",L:"L"},includes:"What's included",add:"Add",details:"Details"},
    cart:{title:"Cart",empty:"Your cart is empty",subtotal:"Subtotal",fee:"Gateway fee",vat:"VAT (if applicable)",total:"Total",method:"Payment method",methodCard:"Card (7%)",methodCrypto:"Crypto (0%)",payCard:"Pay by card",payCrypto:"Pay with crypto",remove:"Remove"},
    premium:{title:"Premium — from $5,000 / month",desc:"Subscription engagement: a dedicated designer (or pod) embedded in your team with studio QA, art direction and PM. Control, predictability, and senior velocity.",cta:"Request briefing",benefits:["NDA","SLA","Dedicated AM","Senior team","Priority queue","Roadmap & weekly reports"]},
    brief:{title:"Request briefing",name:"Name",email:"Email",company:"Company",telegram:"Telegram",budget:"Budget",message:"Project details",send:"Send"},
    join:{title:"Join Team",name:"Name",email:"Email",portfolio:"Portfolio link",about:"About you",send:"Send",tg:"Telegram",wa:"WhatsApp",ig:"Instagram"},
    faq:{title:"FAQ"},
    profile:{title:"Profile",tabs:{orders:"Orders",chat:"Chat",settings:"Settings"},order:"Order",statuses:["Confirmed","In Creative","Draft Review","Iteration","Delivered"],actions:{refund:"Refund",appeal:"Appeal",arb:"Arbitration"}},
    lang:{ru:"RU",en:"EN"}
  },
  ru:{
    brand:"MOODY CREATIVE STUDIO",
    labels:{profile:"Профиль",cart:"Корзина",open:"Открыть",close:"Закрыть"},
    nav:{main:"Главная",pricing:"Цены",premium:"Premium",faq:"FAQ",join:"В команду",profile:"Профиль"},
    hero:{
      title:"Moody Creative Studio — премиальная креатив-команда",
      subtitle:"Делаем бренды, визуал, motion и web. Оплата → Бриф → Работа в чате → Сдача. Прозрачные сроки и рефанды.",
      ctaPricing:"Каталог и цены", ctaPremium:"Premium",
      designTitle:"Дизайн, который двигает бизнес",
      designBody:"Senior-команда со скоростью стартапа. Стратегия, брендинг, motion и web — предсказуемо, быстро, чисто.",
      metrics:[["8","ЛЕТ"],["120","БРЕНДОВ"],["350","АКТИВОВ"]],
      makeTitle:"Что делаем",
      makeItems:["Логотипы и айдентики","Оформление соцсетей и шаблоны","Креативы и рекламные наборы","Короткие видео и motion","Сайты и лендинги","AI-аватары и портреты"],
      selected:"Выбранные кейсы", seePricing:"Смотреть цены", socials:"Мы в соцсетях"
    },
    pricing:{title:"Цены",size:{S:"S",M:"M",L:"L"},includes:"Что входит",add:"Добавить",details:"Подробнее"},
    cart:{title:"Корзина",empty:"Корзина пуста",subtotal:"Итого",fee:"Комиссия шлюза",vat:"НДС (если применимо)",total:"К оплате",method:"Способ оплаты",methodCard:"Карта (7%)",methodCrypto:"Крипто (0%)",payCard:"Оплатить картой",payCrypto:"Оплатить крипто",remove:"Удалить"},
    premium:{title:"Premium — от $5,000 / мес",desc:"Формат подписки: выделенный дизайнер (или мини-команда) в вашу команду с QA, арт-дирекшеном и PM от студии. Контроль, предсказуемость и скорость senior-уровня.",cta:"Оставить заявку",benefits:["NDA","SLA","Аккаунт-менеджер","Senior-команда","Приоритет","Дорожная карта и отчёты"]},
    brief:{title:"Заявка на Premium",name:"Имя",email:"Email",company:"Компания",telegram:"Telegram",budget:"Бюджет",message:"Детали проекта",send:"Отправить"},
    join:{title:"В команду",name:"Имя",email:"Email",portfolio:"Ссылка на портфолио",about:"О себе",send:"Отправить",tg:"Telegram",wa:"WhatsApp",ig:"Instagram"},
    faq:{title:"FAQ"},
    profile:{title:"Профиль",tabs:{orders:"Заказы",chat:"Чат",settings:"Настройки"},order:"Заказ",statuses:["Принят","В работе (креатив)","Черновик на согласовании","Итерации","Сдано"],actions:{refund:"Рефанд",appeal:"Апелляция",arb:"Арбитраж"}},
    lang:{ru:"RU",en:"EN"}
  }
} as const;