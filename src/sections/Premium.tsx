import React from "react";
import { Glass } from "../components/Glass";

export default function Premium({t,onBrief}:{t:any,onBrief:()=>void}){
  return <section>
    <h2 className="text-2xl md:text-3xl font-semibold mb-6">{t.premium.title}</h2>
    <Glass className="p-6 mb-6">
      <p className="text-white/85">{t.premium.desc}</p>
      <ul className="mt-4 grid sm:grid-cols-3 gap-2 text-sm text-white/70 list-disc pl-4">
        <li>Embed: выделенный senior/сквад внутри вашей команды +QA от студии.</li>
        <li>Контроль: SLA, аккаунт-менеджер, еженедельные отчёты.</li>
        <li>Гибкость: roadmap, спринты, пауза слота по договорённости.</li>
      </ul>
    </Glass>
    <div className="glass p-6">
      <div className="text-xs uppercase tracking-widest text-white/50 mb-2">Benefits</div>
      <div className="flex flex-wrap gap-2 mb-6">{t.premium.benefits.map((x:string,i:number)=>(<span key={i} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm">{x}</span>))}</div>
      <button onClick={onBrief} className="px-5 py-3 rounded-xl bg-white/10 border border-white/15 hover:bg-white/15 transition">{t.premium.cta}</button>
    </div>
  </section>
}
