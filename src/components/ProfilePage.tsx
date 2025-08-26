import React from "react";import { Glass } from "./Glass";import { uid } from "../lib/utils";
type OrderItem={ id:string; name:string; tier:"S"|"M"|"L"; price:number; short:string[] }; type Order={ id:string; method:"card"|"crypto"; created:number; statusIdx:number; items:OrderItem[] };
export default function ProfilePage({t,lang,orders,setOrders}:{t:any,lang:"en"|"ru",orders:Order[],setOrders:(x:Order[])=>void}){
  const [tab,setTab]=React.useState<"orders"|"chat"|"settings">("orders"); const statuses=t.profile.statuses as string[];
  const advance=(id:string)=>setOrders(orders.map(o=>o.id===id?{...o,statusIdx:Math.min(o.statusIdx+1,statuses.length-1)}:o));
  const remove=(id:string)=>setOrders(orders.filter(o=>o.id!==id));
  return <section><h2 className="text-2xl md:text-3xl font-semibold mb-6">{t.profile.title}</h2>
  <div className="flex gap-2 mb-6">{(["orders","chat","settings"] as const).map(k=>(<button key={k} onClick={()=>setTab(k)} className={`px-4 py-2 rounded-xl border ${tab===k?"bg-white text-black border-white/20":"bg-white/5 border-white/10 text-white/80 hover:bg-white/10"}`}>{t.profile.tabs[k]}</button>))}</div>
  {tab==="orders"&&(<div className="space-y-4">{orders.length===0&&<Glass className="p-6 text-white/60">No orders yet.</Glass>}
  {orders.map(o=>(<Glass key={o.id} className="p-6"><div className="flex items-center justify-between"><div className="font-medium">{t.profile.order} #{o.id.toUpperCase()}</div><div className="text-xs text-white/60">{new Date(o.created).toLocaleString()}</div></div>
  <div className="mt-4"><div className="relative capsule p-1 overflow-hidden"><div className="relative flex gap-1">{statuses.map((s,idx)=>(<div key={idx} className={`relative flex-1 text-center px-3 py-2 rounded-full text-xs ${idx<=o.statusIdx?"bg-white text-black":"text-white/70"}`}>{s}</div>))}</div></div>
  <div className="mt-3 text-xs text-white/60">Method: {o.method.toUpperCase()}</div></div>
  <div className="mt-4 grid sm:grid-cols-2 gap-3">{o.items.map((it,i)=>(<div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-4"><div className="font-medium">{it.name} — {it.tier}</div><div className="text-xs text-white/60 mt-1">{it.short.join(" • ")}</div></div>))}</div>
  <div className="mt-4 flex flex-wrap gap-2"><button onClick={()=>advance(o.id)} className="px-3 py-2 rounded-xl bg-white text-black text-sm">Advance status</button>
  <button onClick={()=>alert("Demo: refund request submitted")} className="px-3 py-2 rounded-xl border border-white/20 hover:bg-white/10 text-sm">{t.profile.actions.refund}</button>
  <button onClick={()=>alert("Demo: appeal filed")} className="px-3 py-2 rounded-xl border border-white/20 hover:bg-white/10 text-sm">{t.profile.actions.appeal}</button>
  <button onClick={()=>alert("Demo: arbitration requested")} className="px-3 py-2 rounded-xl border border-white/20 hover:bg-white/10 text-sm">{t.profile.actions.arb}</button>
  <button onClick={()=>remove(o.id)} className="px-3 py-2 rounded-xl border border-white/20 hover:bg-white/10 text-sm">Remove</button></div></Glass>))}</div>)}
  {tab==="chat"&&(<ChatPanel t={t}/>)} {tab==="settings"&&(<Glass className="p-6 text:white/70">Settings — demo.</Glass>)}</section>
}
function ChatPanel({t}:{t:any}){ type Msg={id:string; me:boolean; text:string; at:number};
  const [msgs,setMsgs]=React.useState<Msg[]>(()=>{try{return JSON.parse(localStorage.getItem("mcs_chat")||"[]")}catch{return[]}}); const [text,setText]=React.useState(""); const [typing,setTyping]=React.useState(false);
  React.useEffect(()=>{localStorage.setItem("mcs_chat",JSON.stringify(msgs))},[msgs]);
  const send=()=>{ if(!text.trim()) return; setMsgs(m=>[...m,{id:uid(),me:true,text,at:Date.now()}]); setText(""); setTyping(true); setTimeout(()=>{ setMsgs(m=>[...m,{id:uid(),me:false,text:"Got it — working on it.",at:Date.now()}]); setTyping(false); },800) }
  return <div className="grid gap-4"><Glass className="p-6"><div className="text-lg font-medium mb-2">Anonymous chat</div><div className="text-xs text-white/60 mb-4">Client ↔ Designer (contacts hidden)</div>
  <div className="h-72 overflow-auto flex flex-col gap-2 p-2 rounded-xl bg-white/5 border border-white/10">{msgs.map(m=>(<div key={m.id} className={`max-w-[80%] px-3 py-2 rounded-xl ${m.me?"msg-me ml-auto":"msg-peer mr-auto"}`}>{m.text}</div>))}{typing&&<div className="max-w-[50%] px-3 py-2 rounded-xl msg-peer mr-auto opacity-70 text-sm">typing…</div>}</div>
  <form className="mt-3 flex gap-2" onSubmit={(e)=>{e.preventDefault();send()}}><input className="flex-1 px-3 py-2 rounded-xl bg-white/5 border border-white/10" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Message…"/><button className="px-4 py-2 rounded-xl bg-white text-black">{t.brief.send}</button></form></Glass></div>
}
