export type Tier="S"|"M"|"L";
function p(x:number){ return Math.round(x*0.8) } // -20%
const BW=(id:string)=>`https://images.unsplash.com/${id}?q=80&w=1600&auto=format&fit=crop&grayscale`;

export const SERVICES = [
  { id:"logo", image:BW("photo-1557683316-973673baf926"), name:{en:"Logo",ru:"Логотип"}, desc:{en:"From mark to full identity",ru:"От знака до айдентики"},
    tiers:{
      S:{price:p(199),features:{en:["1–2 routes via interview","Monochrome system first","2 revision rounds","Logo export pack + usage one-pager"],ru:["1–2 направления по интервью","Монохром вначале","2 раунда правок","Пакет логотипа + базовые правила"]}},
      M:{price:p(399),features:{en:["3–4 concepts with rationale; color & type","3 revision rounds + art direction","Mini guide 6–8p: logo, palette, type, spacing","App icons & favicon"],ru:["3–4 концепции с обоснованием; палитра/типографика","3 раунда правок + арт-дирекшен","Мини-гайд 6–8 стр.: лого, палитра, типографика, отступы","Иконки приложений + favicon"]}},
      L:{price:p(699),features:{en:["5+ directions, iterate till approve","Guideline 16–24p: grids, usage, dos/don’ts","Social/mocks kit; real-life applications","Editable sources & structured handoff"],ru:["5+ направлений, итерации до утверждения","Гайдлайн 16–24 стр.: сетки, правила, dos/don’ts","Соцкит и мокапы; реальные носители","Исходники и структурированная передача"]}}
    }
  },
  { id:"social", image:BW("photo-1531297484001-80022131f5a1"), name:{en:"Social revamp",ru:"Оформление соцсетей"}, desc:{en:"Avatars, covers, templates",ru:"Аватары, обложки, шаблоны"},
    tiers:{
      S:{price:p(199),features:{en:["Avatar & cover","3×3 grid direction","5 story presets (editable)"],ru:["Аватар и обложка","Сетка 3×3","5 пресетов сториз (ред.)"]}},
      M:{price:p(349),features:{en:["+10 story presets; highlight icons","Unified post styling; profile polish"],ru:["+10 пресетов; иконки хайлайтов","Единый стиль постов; тюнинг профиля"]}},
      L:{price:p(549),features:{en:["+20 presets (stories/posts)","Editable templates pack","Reels thumbnails system"],ru:["+20 пресетов (сториз/посты)","Пакет шаблонов","Система превью Reels"]}}
    }
  },
  { id:"creatives", image:BW("photo-1520975922327-35dd222996f2"), name:{en:"Creatives/Banners",ru:"Креативы/баннеры"}, desc:{en:"Static ad sets",ru:"Статические рекламные наборы"},
    tiers:{
      S:{price:p(149),features:{en:["3 statics in 1 size","Copy polish + export"],ru:["3 статик в 1 размере","Тексты + экспорт"]}},
      M:{price:p(279),features:{en:["6 statics in 3 sizes","A/B variants; layered files"],ru:["6 статик в 3 размерах","A/B-варианты; исходники"]}},
      L:{price:p(449),features:{en:["10 creatives in 5 sizes","Copy variants tuned; delivery kit"],ru:["10 креативов в 5 размерах","Варианты текстов; пакет сдачи"]}}
    }
  },
  { id:"video", image:BW("photo-1480694313141-fce5e697ee25"), name:{en:"Video",ru:"Видео"}, desc:{en:"AI/editing to motion",ru:"От AI/монтажа до motion"},
    tiers:{
      S:{price:p(149),features:{en:["Up to 15s; AI/edit; licensed music","Basic captions"],ru:["До 15 сек; AI/монтаж; лиценз. музыка","Базовые титры"]}},
      M:{price:p(349),features:{en:["Up to 30s; color grade; motion titles","3 aspect ratios (9:16/1:1/16:9)"],ru:["До 30 сек; цветокор; motion-титры","3 формата (9:16/1:1/16:9)"]}},
      L:{price:p(799),features:{en:["Up to 60s; advanced motion & sound","Delivery pack for ads/socials"],ru:["До 60 сек; продвинутый motion и саунд","Пакет для рекламы и соцсетей"]}}
    }
  },
  { id:"web", image:BW("photo-1557682250-33bd709cbe85"), name:{en:"Website/Landing",ru:"Сайт/лендинг"}, desc:{en:"From single-screen to complex motion",ru:"От 1 экрана до сложного motion"},
    tiers:{
      S:{price:p(599),features:{en:["1 hero + 2 sections; base motion; responsive","Handoff in Figma"],ru:["1 экран + 2 секции; базовый motion; адаптив","Передача в Figma"]}},
      M:{price:p(1299),features:{en:["5–7 sections; UI kit; responsive; QA & handoff"],ru:["5–7 секций; UI-кит; адаптив; QA и передача"]}},
      L:{price:p(2499),features:{en:["10+ sections; complex motion/3D; CMS integration","Handoff to Tilda/Webflow"],ru:["10+ секций; сложный motion/3D; интеграция CMS","Передача в Tilda/Webflow"]}}
    }
  },
  { id:"ai", image:BW("photo-1512427691650-1e5a7b86a64d"), name:{en:"AI Avatars",ru:"AI-аватары"}, desc:{en:"Bulk renders",ru:"Пакетные рендеры"},
    tiers:{
      S:{price:p(49),features:{en:["30 renders; 1 style; basic retouch"],ru:["30 рендеров; 1 стиль; базовая ретушь"]}},
      M:{price:p(99),features:{en:["100 renders; 2 styles; retouch"],ru:["100 рендеров; 2 стиля; ретушь"]}},
      L:{price:p(149),features:{en:["200+ renders; 3 styles; PRO retouch; prompt pack"],ru:["200+ рендеров; 3 стиля; ретушь PRO; пакет промтов"]}}
    }
  }
];

export const CASES = [
  {id:"c1",title:{en:"Streetstyle poster system",ru:"Система постеров streetstyle"},img:BW("photo-1519681393784-d120267933ba")},
  {id:"c2",title:{en:"Liquid glass visuals",ru:"Визуалы «liquid glass»"},img:BW("photo-1526312426976-593c128eea49")},
  {id:"c3",title:{en:"Minimal brand refresh",ru:"Минимальный ребрендинг"},img:BW("photo-1520975922327-35dd222996f2")},
  {id:"c4",title:{en:"Editorial motion frames",ru:"Кадры editorial motion"},img:BW("photo-1519996529931-28324d5a630e")},
  {id:"c5",title:{en:"Product site concept",ru:"Концепт продуктового сайта"},img:BW("photo-1517694712202-14dd9538aa97")},
  {id:"c6",title:{en:"AI portrait styles",ru:"Стили AI-портретов"},img:BW("photo-1494790108377-be9c29b29330")}
];