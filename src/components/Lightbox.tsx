import React from "react";import { X } from "lucide-react";import { AnimatePresence, motion } from "framer-motion";
export default function Lightbox({img,title,open,onClose}:{img:string,title:string,open:boolean,onClose:()=>void}){
  React.useEffect(()=>{const h=(e:KeyboardEvent)=>{if(e.key==="Escape") onClose()};window.addEventListener("keydown",h);return()=>window.removeEventListener("keydown",h)},[onClose]);
  return <AnimatePresence>{open&&<>
    <motion.div className="modal-backdrop z-50" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose}/>
    <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-6" initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:.96}}>
      <div className="max-w-5xl w-full">
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 relative">
          <button onClick={onClose} className="absolute right-3 top-3 z-10 p-2 bg-black/60 rounded-lg border border-white/10" aria-label="Close"><X size={16}/></button>
          <img src={img} className="w-full max-h-[70vh] object-contain" alt="case"/>
          <div className="p-4 text-white/90">{title}</div>
        </div>
      </div>
    </motion.div>
  </>}</AnimatePresence>
}
