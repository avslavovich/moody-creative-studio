import React from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, MeshTransmissionMaterial } from "@react-three/drei";
import Lightbox from "../components/Lightbox";
import { CASES } from "../lib/data";

function BG({cursor,notify}:{cursor:React.MutableRefObject<{x:number,y:number}>,notify:React.MutableRefObject<null|(()=>void)>}){
  const ref=React.useRef<any>(null);
  const {invalidate}=useThree();
  React.useEffect(()=>{notify.current=()=>invalidate()},[invalidate,notify]);
  useFrame(()=>{ if(ref.current){ ref.current.rotation.y=(cursor.current.x-.5)*0.8; ref.current.rotation.x=(cursor.current.y-.5)*0.5 } });
  return <mesh ref={ref} scale={2.4} position={[0,0,-1]}>
    <torusKnotGeometry args={[1.1,.28,256,64]}/>
    <MeshTransmissionMaterial thickness={3} transmission={1} roughness={0.2} ior={1.22} color={"#fff"} />
  </mesh>
}

export default function Hero({t,lang,onGoPricing,onGoPremium}:{t:any,lang:"en"|"ru",onGoPricing:()=>void,onGoPremium:()=>void}){
  const cursor=React.useRef({x:.5,y:.5});
  const inv=React.useRef<null|(()=>void)>(null);
  const onMove=(e:React.MouseEvent<HTMLDivElement>)=>{const r=(e.currentTarget as HTMLDivElement).getBoundingClientRect(); cursor.current.x=(e.clientX-r.left)/r.width; cursor.current.y=(e.clientY-r.top)/r.height; inv.current?.()};
  const [lb,setLb]=React.useState<{img:string,title:string}|null>(null);
  return <section className="relative pt-[88px]">
    <div className="absolute inset-0 -z-10 bg:white" onMouseMove={onMove}>
      <Canvas camera={{position:[0,0,4],fov:50}} gl={{antialias:true,powerPreference:"low-power"}} dpr={[1,1.35]} frameloop="demand">
        <ambientLight intensity={1}/><directionalLight position={[3,3,4]} intensity={.5}/><BG cursor={cursor} notify={inv}/><Environment preset="city"/>
      </Canvas>
    </div>

    <div className="mx-auto max-w-7xl px-4">
      <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white text-black p-8 md:p-12">
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">{t.hero.title}</h1>
        <p className="mt-4 text-black/70 text-base md:text-lg max-w-2xl">{t.hero.subtitle}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button onClick={onGoPricing} className="px-5 py-3 rounded-xl bg-black text-white border border:black hover:opacity-90">{t.hero.ctaPricing}</button>
          <button onClick={onGoPremium} className="px-5 py-3 rounded-xl border border-black/20 hover:bg-black/5">{t.hero.ctaPremium}</button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start mt-10">
        <div className="glass p-6">
          <div className="text-xl font-medium">{t.hero.designTitle}</div>
          <p className="mt-2 text-white/70">{t.hero.designBody}</p>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {t.hero.metrics.map((m:any,i:number)=>(<div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
              <div className="text-2xl font-semibold">{m[0]}</div><div className="text-xs uppercase tracking-widest text-white/60">{m[1]}</div>
            </div>))}
          </div>
        </div>
        <div className="glass p-6">
          <div className="text-xs uppercase tracking-widest text-white/60 mb-3">{t.hero.makeTitle}</div>
          <ul className="space-y-2 text-white/85">{t.hero.makeItems.map((x:string,i:number)=>(<li key={i} className="flex items:center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-white/50"/>{x}</li>))}</ul>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <div className="text-xl font-medium text-white/90">{t.hero.selected}</div>
          <button onClick={onGoPricing} className="text-sm text-white/70 hover:text-white underline underline-offset-4">{t.hero.seePricing}</button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASES.map(c=>(
            <button key={c.id} onClick={()=>setLb({img:c.img,title:c.title[lang]})} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left">
              <img src={c.img} className="w-full h-48 object-cover grayscale group-hover:opacity-90 transition" alt="case"/>
              <div className="p-4 flex items-center justify-between">
                <div className="text-white/90">{c.title[lang]}</div>
                <span className="px-3 py-1.5 rounded-full bg-white text-black text-xs">{lang==="ru"?"Открыть":"Open"}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 glass p-6">
        <div className="text-xs uppercase tracking-widest text-white/60 mb-3">{t.hero.socials}</div>
        <div className="flex flex-wrap gap-3">
          <a className="px-4 py-2 rounded-xl bg-white text-black">Instagram</a>
          <a className="px-4 py-2 rounded-xl border border-white/20 hover:bg-white/10">Telegram</a>
        </div>
      </div>
    </div>

    <Lightbox img={lb?.img||""} title={lb?.title||""} open={!!lb} onClose={()=>setLb(null)}/>
  </section>
}
