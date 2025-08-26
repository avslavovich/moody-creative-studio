import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Glass } from "./Glass";
import { X, Trash2 } from "lucide-react";
import type { Lang } from "../lib/i18n";
import { fm } from "../lib/utils";
import { SERVICES } from "../lib/data";

export default function CartDrawer({open,onClose,items,removeItem,lang,t,rate,paymentMethod,setPaymentMethod,totals,onCheckout}:{open:boolean,onClose:()=>void,items:{id:string,tier:"S"|"M"|"L"}[],removeItem:(i:number)=>void,lang:Lang,t:any,rate:number,paymentMethod:"card"|"crypto",setPaymentMethod:(m:"card"|"crypto")=>void,totals:{subtotal:number,fee:number,vat:number,total:number},onCheckout:(m:"card"|"crypto")=>void}){
  return (<AnimatePresence>{open&&(<>
    <motion.div className="fixed inset-0 z-50 bg-black/50" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose}/>
    <motion.div className="fixed right-0 top-0 bottom-0 z-50 w-[92vw] max-w-md" initial={{x:500}} animate={{x:0}} exit={{x:500}} transition={{type:"spring",damping:30,stiffness:300}}>
      <Glass className="h-full flex flex-col border-l border-white/10 rounded-none">
        <div className="p-4 flex items-center justify-between border-b border-white/10">
          <div className="text-lg font-medium">{t.cart.title}</div>
          <button className="p-2 rounded-lg bg-white/5 border border-white/10" onClick={onClose}><X size={16}/></button>
        </div>
        <div className="flex-1 overflow-auto p-4 space-y-3">
          {items.length===0&&<div className="text-white/50 text-sm">{t.cart.empty}</div>}
          {items.map((it,idx)=>{
            const svc=SERVICES.find(s=>s.id===it.id)!;
            const f=(svc.tiers as any)[it.tier].features[lang].slice(0,3);
            const price=(svc.tiers as any)[it.tier].price;
            return (
            <Glass key={idx} className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div><div className="font-medium">{svc.name[lang]} — {it.tier}</div><div className="text-xs text-white/60">{f.join(" • ")}</div></div>
                <div className="text-right">
                  <div className="text-sm">{fm(price,lang,rate)}</div>
                  <button className="mt-2 text-xs text-white/50 hover:text-white flex items-center gap-1" onClick={()=>removeItem(idx)}><Trash2 size={14}/> {t.cart.remove}</button>
                </div>
              </div>
            </Glass>)})}
          <Glass className="p-4">
            <div className="text-xs uppercase tracking-widest text-white/50 mb-2">{t.cart.method}</div>
            <div className="flex gap-2">
              <button onClick={()=>setPaymentMethod("card")} className={(paymentMethod==="card"?"bg-white text-black border-white/20 ":"bg:white/5 border-white/10 text-white/80 hover:bg-white/10 ")+"px-3 py-2 rounded-xl border text-sm"}>{t.cart.methodCard}</button>
              <button onClick={()=>setPaymentMethod("crypto")} className={(paymentMethod==="crypto"?"bg:white text:black border:white/20 ":"bg-white/5 border-white/10 text-white/80 hover:bg-white/10 ")+"px-3 py-2 rounded-xl border text-sm"}>{t.cart.methodCrypto}</button>
            </div>
          </Glass>
          <div className="space-y-2">
            <Row label={t.cart.subtotal} value={fm(totals.subtotal,lang)} />
            <Row label={t.cart.fee+(paymentMethod==="card"?" 7%":" 0%")} value={fm(totals.fee,lang)} />
            <Row label={t.cart.vat} value={fm(totals.vat,lang)} />
            <div className="h-px bg-white/10 my-2"/><Row bold label={t.cart.total} value={fm(totals.total,lang)} />
          </div>
        </div>
        <div className="p-4 border-t border-white/10 grid grid-cols-2 gap-3">
          <button onClick={()=>{alert("Demo: card checkout"); onCheckout("card")}} className="px-4 py-3 rounded-xl bg-white text-black text-sm hover:opacity-90">{t.cart.payCard}</button>
          <button onClick={()=>{alert("Demo: crypto checkout"); onCheckout("crypto")}} className="px-4 py-3 rounded-xl border border-white/20 hover:bg-white/10 text-sm">{t.cart.payCrypto}</button>
        </div>
      </Glass>
    </motion.div></> )}</AnimatePresence>)
}
function Row({label,value,bold}:{label:string,value:string,bold?:boolean}){return <div className="flex items-center justify-between text-sm"><div className={`text-white/70 ${bold?"font-medium text-white":""}`}>{label}</div><div className={bold?"font-semibold":"text-white/80"}>{value}</div></div>}
