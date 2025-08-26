import React from "react";import { AnimatePresence, motion } from "framer-motion";
export default function ProfileModal({open,onClose,t}:{open:boolean,onClose:()=>void,t:any}){
  React.useEffect(()=>{const h=(e:KeyboardEvent)=>{if(e.key==="Escape") onClose()};window.addEventListener("keydown",h);return()=>window.removeEventListener("keydown",h)},[onClose]);
  return <AnimatePresence>{open&&<>
    <motion.div className="modal-backdrop z-50" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose}/>
    <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-6" initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} exit={{y:20,opacity:0}}>
      <div className="w-full max-w-md glass p-6">
        <div className="text-lg font-medium mb-4">{t.labels.profile}</div>
        <form className="space-y-3" onSubmit={(e)=>{e.preventDefault(); onClose();}}>
          <input className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10" placeholder="Email"/>
          <input className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10" placeholder="Password" type="password"/>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-xl bg-white text-black">Sign in</button>
            <button type="button" className="px-4 py-2 rounded-xl border border-white/20 hover:bg-white/10" onClick={onClose}>Continue as demo</button>
          </div>
        </form>
      </div>
    </motion.div>
  </>}</AnimatePresence>
}
