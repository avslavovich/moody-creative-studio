import React from "react";import { AnimatePresence, motion } from "framer-motion";
export default function BriefModal({open,onClose,t}:{open:boolean,onClose:()=>void,t:any}){
  React.useEffect(()=>{const h=(e:KeyboardEvent)=>{if(e.key==="Escape") onClose()};window.addEventListener("keydown",h);return()=>window.removeEventListener("keydown",h)},[onClose]);
  return <AnimatePresence>{open&&<>
    <motion.div className="modal-backdrop z-50" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose}/>
    <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-6" initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} exit={{y:20,opacity:0}}>
      <div className="w-full max-w-lg glass p-6">
        <div className="text-lg font-medium mb-4">{t.brief.title}</div>
        <form className="space-y-3" onSubmit={(e)=>{e.preventDefault(); alert("Brief sent (demo)")}}>
          <input className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10" placeholder={t.brief.name}/>
          <input className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10" placeholder={t.brief.email}/>
          <input className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10" placeholder={t.brief.company}/>
          <input className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10" placeholder={t.brief.telegram}/>
          <select className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10"><option>5k–7k</option><option>7k–10k</option><option>10k+</option></select>
          <textarea rows={4} className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10" placeholder={t.brief.message}/>
          <div className="pt-2"><button className="px-5 py-3 rounded-xl bg-white/10 border border-white/15 hover:bg-white/15">{t.brief.send}</button></div>
        </form>
      </div>
    </motion.div>
  </>}</AnimatePresence>
}
