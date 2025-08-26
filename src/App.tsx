import React from "react";
import { I18N, type Lang } from "./lib/i18n";
import TopBar from "./components/TopBar";
import Hero from "./sections/Hero";
import Pricing from "./sections/Pricing";
import Premium from "./sections/Premium";
import FAQ from "./sections/FAQ";
import Join from "./sections/Join";
import CartDrawer from "./components/CartDrawer";
import { SERVICES } from "./lib/data";
import ProfileModal from "./components/ProfileModal";
import BriefModal from "./components/BriefModal";
import ProfilePage from "./components/ProfilePage";

type CartItem={id:string,tier:"S"|"M"|"L"};
type OrderItem={ id:string; name:string; tier:"S"|"M"|"L"; price:number; short:string[] };
type Order={ id:string; method:"card"|"crypto"; created:number; statusIdx:number; items:OrderItem[] };

export default function App(){
  const [lang,setLang]=React.useState<Lang>("ru"); const t=I18N[lang];
  const [route,setRoute]=React.useState<"main"|"pricing"|"premium"|"faq"|"join"|"profile"|"login">("main");
  const [cart,setCart]=React.useState<CartItem[]>([]);
  const [paymentMethod,setPaymentMethod]=React.useState<"card"|"crypto">("card");
  const [cartOpen,setCartOpen]=React.useState(false);
  const [briefOpen,setBriefOpen]=React.useState(false);
  const [rate,setRate]=React.useState(100);

  // Orders (Profile)
  const [orders,setOrders]=React.useState<Order[]>(()=>{ try{ return JSON.parse(localStorage.getItem("mcs_orders")||"[]") }catch{ return [] }});
  React.useEffect(()=>{ localStorage.setItem("mcs_orders",JSON.stringify(orders)) },[orders]);

  // Currency fetch (RU -> ₽)
  React.useEffect(()=>{ if(lang==="ru"){ (async()=>{ try{ const r=await fetch("https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=rub,usd",{cache:"no-store"}); const j=await r.json(); const rub=j?.tether?.rub; setRate((rub&&Number(rub)>0)?Number(rub):100) }catch{ setRate(100) } })(); } else setRate(1) },[lang]);

  const addToCart=(id:string,tier:"S"|"M"|"L")=>setCart(c=>[...c,{id,tier}]);
  const subtotal=cart.reduce((acc,it)=>{ const svc=(SERVICES as any).find((s:any)=>s.id===it.id); const price=svc?.tiers?.[it.tier]?.price||0; return acc+price*(lang==="ru"?rate:1)},0);
  const fee=paymentMethod==="card"?subtotal*0.07:0; const totals={subtotal,fee,vat:0,total:subtotal+fee};

  const handleCheckout=(method:"card"|"crypto")=>{
    if(cart.length===0) return;
    const items:OrderItem[]=cart.map(it=>{
      const svc=(SERVICES as any).find((s:any)=>s.id===it.id); const tier=it.tier;
      const price=svc.tiers[tier].price*(lang==="ru"?rate:1); const short=svc.tiers[tier].features[lang].slice(0,3);
      return { id:svc.id, name:svc.name[lang], tier, price, short }
    });
    const newOrder:Order={ id:Math.random().toString(36).slice(2,8), method, created:Date.now(), statusIdx:0, items };
    setOrders(o=>[newOrder,...o]); setCart([]); setCartOpen(false); setRoute("profile");
    if(method==="crypto"){ let i=1; const timer=setInterval(()=>{ setOrders(o=>o.map(ord=>ord.id===newOrder.id?{...ord,statusIdx:Math.min(ord.statusIdx+1,4)}:ord)); i++; if(i>4) clearInterval(timer); },2000) }
  };

  const NAV=[{k:"main",label:t.nav.main},{k:"pricing",label:t.nav.pricing},{k:"premium",label:t.nav.premium},{k:"faq",label:t.nav.faq},{k:"join",label:t.nav.join},{k:"profile",label:t.nav.profile}] as const;

  return <div className="relative min-h-screen text-white antialiased bg-black overflow-hidden">
    <TopBar brand={t.brand} nav={NAV as any} active={route} onRoute={(k)=>{ if(k==="profile"){ setRoute("profile"); return } setRoute(k as any) }} lang={lang} setLang={setLang} cartCount={cart.length} onOpenCart={()=>setCartOpen(true)} labels={{profile:t.labels.profile,cart:t.labels.cart}}/>

    <main className="mx-auto max-w-7xl px-4 py-10 space-y-12">
      {route==="main"&&(<Hero t={t} lang={lang} onGoPricing={()=>setRoute("pricing")} onGoPremium={()=>setRoute("premium")}/>)}
      {route==="pricing"&&(<Pricing lang={lang} t={t} addToCart={addToCart} rate={rate}/>)}
      {route==="premium"&&(<Premium t={t} onBrief={()=>setBriefOpen(true)}/>)}
      {route==="faq"&&(<FAQ lang={lang} t={t}/>)}
      {route==="join"&&(<Join t={t}/>)}
      {route==="profile"&&(<ProfilePage t={t} lang={lang} orders={orders} setOrders={setOrders}/>)}
    </main>

    <CartDrawer open={cartOpen} onClose={()=>setCartOpen(false)} items={cart} removeItem={(i)=>setCart(c=>c.filter((_,idx)=>idx!==i))} lang={lang} t={t} rate={rate} paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} totals={totals} onCheckout={handleCheckout}/>
    <ProfileModal open={route==="login"} onClose={()=>setRoute("main")} t={t}/>
    <BriefModal open={briefOpen} onClose={()=>setBriefOpen(false)} t={t}/>

    <footer className="mx-auto max-w-7xl px-4 pb-16 text-xs text-white/40">
      <div className="h-px bg-white/10 mb-6"/>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span>© {new Date().getFullYear()} Moody Creative Studio</span>
        <span>Monochrome • Liquid glass • Demo</span>
      </div>
    </footer>
  </div>
}
