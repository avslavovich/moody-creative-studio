import React from "react";
export default function Join({t}:{t:any}){
  return <section>
    <h2 className="text-2xl md:text-3xl font-semibold mb-6">{t.join.title}</h2>
    <div className="grid md:grid-cols-2 gap-6 items-start">
      <div className="glass p-6">
        <form className="space-y-4" onSubmit={(e)=>{e.preventDefault(); alert("Demo submit")}}>
          <div className="grid md:grid-cols-2 gap-4">
            <div><label className="block text-sm text-white/70 mb-1">{t.join.name}</label><input className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10"/></div>
            <div><label className="block text-sm text-white/70 mb-1">{t.join.email}</label><input type="email" className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10"/></div>
          </div>
          <div><label className="block text-sm text-white/70 mb-1">{t.join.portfolio}</label><input className="w-full px-3 py-2 rounded-xl bg:white/5 border border-white/10" placeholder="https://…"/></div>
          <div className="grid md:grid-cols-3 gap-4">
            <div><label className="block text-sm text-white/70 mb-1">{t.join.tg}</label><input className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10" placeholder="@username"/></div>
            <div><label className="block text-sm text-white/70 mb-1">{t.join.wa}</label><input className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10" placeholder="+1 (___) ___-____"/></div>
            <div><label className="block text-sm text-white/70 mb-1">{t.join.ig}</label><input className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10" placeholder="@handle"/></div>
          </div>
          <div><label className="block text-sm text-white/70 mb-1">{t.join.about}</label><textarea rows={4} className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10" placeholder="Расскажи о себе кратко"/></div>
          <div className="pt-2"><button className="px-5 py-3 rounded-xl bg-white/10 border border-white/15 hover:bg-white/15" type="submit">{t.join.send}</button></div>
        </form>
      </div>
      <div className="relative">
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden border border-white/10"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop&grayscale" className="w-full h-48 object-cover" alt="team"/></div>
          <div className="rounded-2xl overflow-hidden border border-white/10"><img src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop&grayscale" className="w-full h-48 object-cover" alt="team"/></div>
          <div className="rounded-2xl overflow-hidden border border-white/10 col-span-2 relative">
            <img src="https://images.unsplash.com/photo-1500043357865-c6b8827edf39?q=80&w=1600&auto=format&fit=crop&grayscale" className="w-full h-56 object-cover" alt="team"/>
            <div className="absolute inset-0 mix-blend-overlay" style={{background:"linear-gradient(135deg, rgba(255,0,80,0.25), transparent 40%, rgba(255,0,80,0.25))"}}/>
          </div>
        </div>
      </div>
    </div>
  </section>
}
