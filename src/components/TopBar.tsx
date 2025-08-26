import React from "react";import { ShoppingCart, User, Globe } from "lucide-react";import type { Lang } from "../lib/i18n";
export default function TopBar({brand,nav,active,onRoute,lang,setLang,cartCount,onOpenCart,labels}:{brand:string,nav:{k:string,label:string}[],active:string,onRoute:(k:string)=>void,lang:Lang,setLang:(l:Lang)=>void,cartCount:number,onOpenCart:()=>void,labels:{profile:string,cart:string}}){
  const wrapRef=React.useRef<HTMLDivElement|null>(null); const liRefs=React.useRef<Record<string,HTMLButtonElement|null>>({}); const [pos,setPos]=React.useState({l:0,w:0});
  const rAF=React.useRef<number|undefined>(undefined);
  const measure=React.useCallback(()=>{ if(rAF.current) cancelAnimationFrame(rAF.current); rAF.current=requestAnimationFrame(()=>{ const el=liRefs.current[active]; const wrap=wrapRef.current; if(el&&wrap){ const er=el.getBoundingClientRect(), wr=wrap.getBoundingClientRect(); setPos({l:er.left-wr.left+4, w:er.width-8}) } }); },[active]);
  React.useEffect(()=>{ measure(); const ro=new ResizeObserver(measure); if(wrapRef.current) ro.observe(wrapRef.current);
    const onScroll=()=>measure(); window.addEventListener("resize",measure,{passive:true}); window.addEventListener("scroll",onScroll,{passive:true,capture:true});
    return()=>{ ro.disconnect(); window.removeEventListener("resize",measure); window.removeEventListener("scroll",onScroll,true); if(rAF.current) cancelAnimationFrame(rAF.current) }
  },[measure]);
  const [mx,setMx]=React.useState(50),[my,setMy]=React.useState(50);
  return <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/10" onMouseMove={(e)=>{const r=(e.currentTarget as HTMLDivElement).getBoundingClientRect(); setMx(((e.clientX-r.left)/r.width)*100); setMy(((e.clientY-r.top)/r.height)*100)}}>
    <svg style={{position:"absolute",width:0,height:0}}><defs><filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur"/><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"/><feBlend in="SourceGraphic" in2="goo"/></filter></defs></svg>
    <div className="mx-auto max-w-7xl px-4 py-4 grid grid-cols-[1fr_auto_1fr] items-center relative">
      <div className="absolute inset-0 pointer-events-none" style={{background:`radial-gradient(200px 180px at ${mx}% ${my}%, rgba(255,255,255,.04), transparent 60%)`}}/>
      <a onClick={()=>onRoute("main")} className="justify-self-start font-semibold tracking-[.35em] text-xs md:text-sm text-white/80 cursor-pointer select-none">{brand}</a>
      <div className="justify-self-center capsule nav-wrap goo" ref={wrapRef}>
        <div className="nav-highlight" style={{left:pos.l+"px",width:pos.w+"px",transform:"translateZ(0)"}}/>
        <div className="relative flex items-center gap-1">
          {nav.map(n=>(<button key={n.k} ref={el=>liRefs.current[n.k]=el} onClick={()=>onRoute(n.k)} className={`relative z-10 px-4 py-2 rounded-full text-sm transition ${active===n.k?"text-black":"text-white/85 hover:text-white"}`}>{n.label}</button>))}
        </div>
      </div>
      <div className="justify-self-end flex items-center gap-2">
        <button className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10 text-sm hover:bg-white/10" onClick={()=>setLang(lang==="en"?"ru":"en")}><Globe size={16}/><span>{lang==="en"?"EN":"RU"}</span></button>
        <button className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10 text-sm hover:bg-white/10" onClick={()=>onRoute("profile")}><User size={16}/><span className="hidden sm:inline">{labels.profile}</span></button>
        <button className="relative flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10 text-sm hover:bg-white/10" onClick={onOpenCart}>
          <ShoppingCart size={16}/><span className="hidden sm:inline">{labels.cart}</span>
          <span className="absolute -right-1 -top-1 min-w-[20px] h-[20px] px-1 rounded-full bg-white text-black text-xs flex items-center justify-center font-medium">{cartCount}</span>
        </button>
      </div>
    </div>
  </div>
}
