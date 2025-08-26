import React from "react";
import { SERVICES } from "../lib/data";
import type { Lang } from "../lib/i18n";
import { fm } from "../lib/utils";
import { Info, Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Pricing({lang,t,addToCart,rate}:{lang:Lang,t:any,addToCart:(id:string,tier:"S"|"M"|"L")=>void,rate:number}){
  return <section>
    <h2 className="text-2xl md:text-3xl font-semibold mb-6">{t.pricing.title}</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {SERVICES.map(svc=><Card key={svc.id} svc={svc} lang={lang} t={t} addToCart={addToCart} rate={rate}/>)}
    </div>
  </section>
}

function Card({svc,lang,t,addToCart,rate}:{svc:any,lang:Lang,t:any,addToCart:(id:string,tier:"S"|"M"|"L")=>void,rate:number}){
  const [tier,setTier]=React.useState<"S"|"M"|"L">("M");
  const [open,setOpen]=React.useState(false);
  const ref=React.useRef<HTMLDivElement|null>(null);
  const onMove=(e:React.MouseEvent<HTMLDivElement>)=>{
    const r=ref.current?.getBoundingClientRect(); if(!r) return;
    const x=((e.clientX-r.left)/r.width)*100, y=((e.clientY-r.top)/r.height)*100;
    ref.current!.style.setProperty("--mx",x+"%"); ref.current!.style.setProperty("--my",y+"%");
  }
  const FT=(svc.tiers as any)[tier].features[lang];

  return <div className="glass p-5 group relative overflow-hidden" onMouseMove={onMove} ref={ref as any}>
    {/* Свет на карточке (не поверх картинки) */}
    <div className="pointer-events-none absolute inset-0 z-0" style={{background:"radial-gradient(320px 260px at var(--mx,50%) var(--my,50%), rgba(255,255,255,.18), transparent 60%)"}}/>
    {/* Визуал */}
    <div className="relative h-36 rounded-xl border border-white/10 overflow-hidden mb-4 z-10">
      <img src={svc.image} className="absolute inset-0 w-full h-full object-cover grayscale opacity-95" alt={svc.name[lang]}/>
      <div className="absolute inset-0 bg-black/10"/>
    </div>
    {/* Заголовок + Details */}
    <div className="relative z-10 flex items-start justify-between gap-3">
      <div><div className="font-medium">{svc.name[lang]}</div><div className="text-xs text-white/50">{svc.desc[lang]}</div></div>
      <button className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10" onClick={()=>setOpen(s=>!s)} aria-label={t.pricing.details}><Info size={16}/></button>
    </div>
    {/* Тиры */}
    <div className="mt-4 flex items-center gap-2 relative z-10">{(["S","M","L"] as const).map(k=>(
      <button key={k} onClick={()=>setTier(k)} className={`relative px-3 py-1.5 rounded-full text-sm border transition ${tier===k?"bg-white text-black border-white/20":"bg-white/5 border-white/10 hover:bg-white/10 text-white/80"}`}>{t.pricing.size[k]}</button>
    ))}</div>
    {/* Цена + Добавить */}
    <div className="mt-4 flex items-center justify-between relative z-10">
      <div className="text-lg">{fm((svc.tiers as any)[tier].price,lang,rate)}</div>
      <button onClick={()=>addToCart(svc.id,tier)} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white text-black text-sm hover:opacity-90"><Plus size={16}/> {t.pricing.add}</button>
    </div>
    {/* Что входит */}
    <AnimatePresence initial={false}>{open&&(
      <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}} className="mt-4 overflow-hidden relative z-10">
        <div className="glass p-4 bg-white/5">
          <div className="text-xs uppercase tracking-widest text-white/50 mb-2">{t.pricing.includes} — {t.pricing.size[tier]}</div>
          <ul className="text-sm text-white/85 list-disc pl-5 space-y-1">{FT.map((f:string,i:number)=><li key={i}>{f}</li>)}</ul>
        </div>
      </motion.div>
    )}</AnimatePresence>
  </div>
}
