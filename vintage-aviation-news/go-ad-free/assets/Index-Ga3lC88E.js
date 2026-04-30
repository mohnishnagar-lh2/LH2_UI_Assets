import{j as e,r as o}from"./index-nHQ4xTaW.js";const c="/LH2_UI_Assets/vintage-aviation-news/go-ad-free/assets/hero-spitfire-DMHx5Klu.jpg",g="/LH2_UI_Assets/vintage-aviation-news/go-ad-free/assets/two-spits-DFptlkYR.jpg",x="/LH2_UI_Assets/vintage-aviation-news/go-ad-free/assets/bw-airfield-B0EvRLE0.jpg",d="#bb361b",l="/LH2_UI_Assets/vintage-aviation-news/assets/van-logo.png",r="/LH2_UI_Assets/vintage-aviation-news/",n=()=>{window.location.hash="#/payment"},m=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{background:"#fff",borderBottom:"1px solid #e0e0e0"},children:e.jsxs("div",{style:{maxWidth:1280,margin:"0 auto",padding:"12px 20px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx("div",{style:{display:"flex",gap:14,alignItems:"center"},children:["facebook-f","twitter","youtube","instagram"].map(a=>e.jsx("a",{href:"#",style:{color:"#777",fontSize:15,textDecoration:"none"},children:e.jsx("i",{className:`fab fa-${a}`})},a))}),e.jsx("a",{href:r+"index.html",style:{textDecoration:"none"},children:e.jsx("img",{src:l,alt:"Vintage Aviation News",style:{height:80}})}),e.jsxs("div",{style:{display:"flex",alignItems:"center",border:"1px solid #ddd",borderRadius:20,padding:"7px 16px",gap:8},children:[e.jsx("input",{type:"text",placeholder:"Search Headlines, News...",style:{border:"none",outline:"none",fontSize:13,width:180,fontFamily:"Inter,sans-serif",background:"transparent"}}),e.jsx("i",{className:"fas fa-arrow-circle-right",style:{color:"#aaa",fontSize:15,cursor:"pointer"}})]})]})}),e.jsx("nav",{style:{background:"#fff",borderBottom:"2px solid #eee",position:"sticky",top:0,zIndex:100},children:e.jsxs("div",{style:{maxWidth:1280,margin:"0 auto",padding:"0 20px",display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap"},children:[[{label:"Home",href:r+"index.html"},{label:"Restorations",href:r+"pages/restorations.html"},{label:"Warbirds News",href:r+"pages/warbirds-news.html"},{label:"Vintage",href:r+"pages/vintage.html"},{label:"Articles",href:r+"pages/articles.html"},{label:"Aviation Museum News",href:r+"pages/museum-news.html"},{label:"Sponsors",href:"#"}].map(a=>e.jsx("a",{href:a.href,style:{padding:"14px 16px",fontSize:14,fontWeight:600,color:"#333",textDecoration:"none",fontFamily:"Inter,sans-serif",whiteSpace:"nowrap"},children:a.label},a.label)),e.jsx("a",{href:r+"go-ad-free/",style:{padding:"8px 18px",fontSize:13,fontWeight:700,color:"#fff",background:d,borderRadius:4,textDecoration:"none",marginLeft:4,fontFamily:"Inter,sans-serif"},children:"Subscribe"})]})})]}),h=()=>e.jsx("footer",{style:{background:"#1a1a1a",color:"#ccc",padding:"48px 0 32px",fontFamily:"Inter,sans-serif"},children:e.jsxs("div",{style:{maxWidth:1280,margin:"0 auto",padding:"0 20px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:28,paddingBottom:24,borderBottom:"1px solid #333",flexWrap:"wrap",gap:16},children:[e.jsx("a",{href:r+"index.html",style:{textDecoration:"none"},children:e.jsx("img",{src:l,alt:"Vintage Aviation News",style:{height:60,opacity:.9}})}),e.jsx("div",{style:{display:"flex",gap:12},children:["facebook-f","twitter","youtube","instagram"].map(a=>e.jsx("a",{href:"#",style:{width:36,height:36,borderRadius:"50%",border:"1px solid #555",display:"flex",alignItems:"center",justifyContent:"center",color:"#aaa",fontSize:14,textDecoration:"none"},children:e.jsx("i",{className:`fab fa-${a}`})},a))})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2fr 1fr 1fr",gap:40},children:[e.jsx("p",{style:{fontSize:13,lineHeight:1.7,color:"#888",fontStyle:"italic"},children:"Vintage Aviation News is a company founded by a group of passionate aviation enthusiasts who love the history and technology Aviation and Flying Museums preserve for the public. It is our intention to play a role in safeguarding the heritage of these beautiful machines by providing increased awareness and education through the use of internet based digital media."}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:[["Home",r+"index.html"],["Restorations",r+"pages/restorations.html"],["Vintage Aviation",r+"pages/vintage.html"],["Aviation Museum News",r+"pages/museum-news.html"],["Articles",r+"pages/articles.html"],["Today in Aviation History","#"]].map(([a,s])=>e.jsx("a",{href:s,style:{color:"#999",fontSize:13,textDecoration:"none"},children:a},a))}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:["Privacy Policy","Terms of Service","Newsletter","About Us","Contact Us","Login","Ethics-Policy"].map(a=>e.jsx("a",{href:"#",style:{color:"#999",fontSize:13,textDecoration:"none"},children:a},a))})]})]})}),f=()=>{const[a,s]=o.useState(!1);return o.useEffect(()=>{const i=()=>s(window.scrollY>500);return window.addEventListener("scroll",i,{passive:!0}),()=>window.removeEventListener("scroll",i)},[]),e.jsx("header",{className:`fixed top-0 inset-x-0 z-[200] bg-background/90 backdrop-blur border-b border-border transition-transform duration-300 ${a?"translate-y-0":"-translate-y-full"}`,children:e.jsxs("div",{className:"max-w-5xl mx-auto flex items-center justify-between px-6 py-3",children:[e.jsx("span",{className:"font-serif font-semibold text-foreground",children:"Vintage Aviation News"}),e.jsx("button",{onClick:n,style:{padding:"8px 20px",background:d,color:"#fff",border:"none",borderRadius:6,fontSize:13,fontWeight:700,cursor:"pointer"},children:"Subscribe"})]})})},b=()=>{const[a,s]=o.useState(!1);return o.useEffect(()=>{const i=()=>{const t=document.querySelector(".gad-hero");if(!t)return;const p=t.getBoundingClientRect();s(p.bottom<60)};return window.addEventListener("scroll",i,{passive:!0}),i(),()=>window.removeEventListener("scroll",i)},[]),e.jsx("div",{className:`gad-stickybar ${a?"show":""}`,children:e.jsxs("div",{className:"container gad-stickybar-inner",children:[e.jsxs("span",{className:"gad-stickybar-price",children:[e.jsx("span",{className:"strike",children:"$3"}),e.jsx("span",{children:"$1"}),e.jsx("span",{className:"per",children:"/ month · Today Only"})]}),e.jsxs("button",{className:"gad-btn-primary",onClick:n,children:["Subscribe",e.jsx("span",{className:"arrow",children:e.jsx("svg",{viewBox:"0 0 12 12",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M3 6 H9 M6 3 L9 6 L6 9"})})})]})]})})},u=()=>e.jsx("section",{className:"gad-hero",children:e.jsxs("div",{className:"container hero-grid",children:[e.jsxs("div",{className:"hero-copy",children:[e.jsxs("p",{className:"eyebrow",children:[e.jsx("span",{className:"bar"}),"Go Ad-Free ",e.jsx("span",{className:"num",children:"№ 01 / Member Issue"})]}),e.jsxs("h1",{children:["The stories deserve ",e.jsx("span",{className:"ital",children:"your full attention."})]}),e.jsx("p",{className:"hero-sub",children:"No banners. No popups. No autoplay video. Just the warbirds, the restorations, and the people who keep them flying — start to finish."}),e.jsxs("div",{className:"hero-actions",children:[e.jsxs("button",{className:"gad-btn-primary",onClick:n,children:["Become a Member",e.jsx("span",{className:"arrow",children:e.jsx("svg",{viewBox:"0 0 12 12",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M3 6 H9 M6 3 L9 6 L6 9"})})})]}),e.jsxs("span",{className:"price-line",children:[e.jsx("span",{className:"strike",children:"$3/mo"}),e.jsx("span",{className:"now",children:"$1"}),e.jsx("span",{children:"/month"}),e.jsx("span",{className:"tag",children:"Today Only"})]})]})]}),e.jsxs("aside",{className:"hero-card","aria-hidden":"true",children:[e.jsxs("div",{className:"pip-row",children:[e.jsx("span",{children:"Member Pass"}),e.jsx("span",{className:"stamp",children:"PAID"})]}),e.jsx("div",{className:"kicker",children:"★ Vintage Aviation News ★"}),e.jsx("h3",{children:"Ad-Free Reading"}),e.jsx("p",{style:{fontFamily:"'Special Elite',monospace",fontSize:11,color:"var(--ink-3)",margin:"6px 0 0",letterSpacing:"0.04em"},children:"Issued to: Reader · Class: All-Access"}),e.jsx("hr",{}),e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Price"}),e.jsx("b",{children:"$1 / month"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Term"}),e.jsx("b",{children:"Cancel anytime"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Coverage"}),e.jsx("b",{children:"Every article"})]}),e.jsx("div",{className:"barcode"}),e.jsx("div",{className:"barcode-num",children:"VAN — 0014 / NO-ADS / 2026"})]})]})}),y=()=>e.jsx("section",{className:"gad-compare",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"compare-head",children:[e.jsxs("p",{className:"eyebrow",children:[e.jsx("span",{className:"bar"}),"The Difference is Immediate ",e.jsx("span",{className:"num",children:"№ 02"})]}),e.jsxs("h2",{className:"section-title",children:["Same article. Same content.",e.jsx("br",{}),"One lets you actually read it."]}),e.jsx("p",{className:"section-lede",style:{textAlign:"center"},children:"Same Spitfire restoration story. Two ways to read it."})]}),e.jsxs("div",{className:"compare-grid",children:[e.jsxs("article",{className:"compare-card bad",children:[e.jsxs("h4",{children:[e.jsx("span",{className:"chip"}),"With Ads"]}),e.jsxs("div",{className:"page-mock mock-ads",children:[e.jsxs("div",{className:"browser",children:[e.jsx("div",{className:"tl"}),e.jsx("div",{className:"tl"}),e.jsx("div",{className:"tl"}),e.jsx("div",{className:"url"})]}),e.jsxs("div",{className:"body",children:[e.jsxs("div",{className:"left",children:[e.jsx("div",{className:"ad",children:"SponsorBox · Advertisement"}),e.jsx("h5",{children:"Legendary Spitfire Restoration"}),e.jsx("div",{className:"ph"}),e.jsxs("div",{className:"lines",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}),e.jsx("div",{className:"ad r",style:{marginTop:6},children:"Banner Ad"})]}),e.jsxs("div",{className:"right",children:[e.jsxs("div",{className:"ad b tall",children:["Side",e.jsx("br",{}),"Promo"]}),e.jsx("div",{className:"ad g tall",children:"Sale!"}),e.jsxs("div",{className:"ad tall",children:["Watch",e.jsx("br",{}),"Ad"]})]})]}),e.jsx("div",{className:"popup",children:"⚠ Special Offer · 10% off"})]}),e.jsxs("ul",{className:"compare-list",children:[e.jsxs("li",{children:[e.jsx("span",{className:"icon",children:e.jsx("svg",{viewBox:"0 0 12 12",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:e.jsx("path",{d:"M3 3 L9 9 M9 3 L3 9"})})}),"Broken reading flow, ads between paragraphs"]}),e.jsxs("li",{children:[e.jsx("span",{className:"icon",children:e.jsx("svg",{viewBox:"0 0 12 12",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:e.jsx("path",{d:"M3 3 L9 9 M9 3 L3 9"})})}),"Slower pages, autoplay video, popups"]}),e.jsxs("li",{children:[e.jsx("span",{className:"icon",children:e.jsx("svg",{viewBox:"0 0 12 12",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:e.jsx("path",{d:"M3 3 L9 9 M9 3 L3 9"})})}),"Trackers and constant distractions"]})]})]}),e.jsxs("article",{className:"compare-card good",children:[e.jsxs("h4",{children:[e.jsx("span",{className:"chip"}),"Ad-Free"]}),e.jsxs("div",{className:"page-mock mock-clean",children:[e.jsxs("div",{className:"browser",children:[e.jsx("div",{className:"tl"}),e.jsx("div",{className:"tl"}),e.jsx("div",{className:"tl"}),e.jsx("div",{className:"url"})]}),e.jsxs("div",{className:"body",children:[e.jsx("h5",{children:"Legendary Spitfire Restoration"}),e.jsx("div",{className:"ph"}),e.jsxs("div",{className:"lines",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})]})]}),e.jsxs("ul",{className:"compare-list",children:[e.jsxs("li",{children:[e.jsx("span",{className:"icon",children:e.jsx("svg",{viewBox:"0 0 12 12",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M2 6 L5 9 L10 3"})})}),"Uninterrupted reading, every paragraph"]}),e.jsxs("li",{children:[e.jsx("span",{className:"icon",children:e.jsx("svg",{viewBox:"0 0 12 12",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M2 6 L5 9 L10 3"})})}),"Faster pages, lighter on every device"]}),e.jsxs("li",{children:[e.jsx("span",{className:"icon",children:e.jsx("svg",{viewBox:"0 0 12 12",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M2 6 L5 9 L10 3"})})}),"Full focus on the story — and the story alone"]})]})]})]})]})}),v=()=>e.jsx("section",{className:"gad-benefits",children:e.jsxs("div",{className:"container benefits-grid",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"eyebrow",children:[e.jsx("span",{className:"bar"}),"What you get ",e.jsx("span",{className:"num",children:"№ 03"})]}),e.jsx("h2",{className:"section-title",children:"A quieter way to read every story."}),e.jsx("p",{className:"section-lede",children:"Membership is a small thing that makes a big difference — to your reading, and to the writers who fill these pages each week."})]}),e.jsx("div",{className:"benefits-list",children:[["01","Zero advertising, anywhere on the site","No banners, no popups, no autoplay video, no sponsored boxes between paragraphs. Just the article and the photographs.","Reading"],["02","Faster, lighter pages on every device","Without the trackers and ad scripts, articles load in a fraction of the time — especially on mobile and at the airshow.","Speed"],["03","Privacy by default","No third-party trackers following you around the web. Your reading is your business.","Privacy"],["04","You support independent aviation journalism","Your $1 a month goes directly to the small team writing, photographing, and preserving the history of these aircraft.","Mission"]].map(([a,s,i,t])=>e.jsxs("div",{className:"benefit",children:[e.jsx("div",{className:"benefit-num",children:a}),e.jsxs("div",{children:[e.jsx("h3",{children:s}),e.jsx("p",{children:i})]}),e.jsx("div",{className:"benefit-tag",children:t})]},a))})]})}),j=()=>e.jsx("section",{className:"gad-pricing",id:"pricing",children:e.jsxs("div",{className:"narrow",children:[e.jsxs("p",{className:"eyebrow",children:[e.jsx("span",{className:"bar"}),"One Plan. No Surprises. ",e.jsx("span",{className:"num",children:"№ 04"})]}),e.jsx("h2",{className:"section-title",style:{textAlign:"center"},children:"A fair price for quiet pages."}),e.jsxs("div",{className:"price-card",children:[e.jsx("span",{className:"ribbon-tag",children:"Today Only · Save 67%"}),e.jsx("h3",{children:"Ad-Free Membership"}),e.jsxs("div",{className:"price",children:[e.jsx("span",{className:"strike",children:"$3"}),e.jsx("span",{className:"amount",children:"$1"}),e.jsx("span",{className:"per",children:"/ month"})]}),e.jsx("div",{style:{fontFamily:"'Special Elite',monospace",fontSize:12,color:"var(--ink-3)",letterSpacing:"0.04em"},children:"Billed monthly · Cancel anytime · No hidden fees"}),e.jsx("hr",{className:"dash"}),e.jsx("ul",{children:["Every article, no interruptions","No banners, popups, or video ads","Faster, lighter pages","Privacy — no third-party trackers","Support independent journalism"].map(a=>e.jsxs("li",{children:[e.jsx("svg",{viewBox:"0 0 14 14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M3 7 L6 10 L11 4"})}),a]},a))}),e.jsxs("button",{className:"gad-btn-primary",onClick:n,children:["Subscribe Now",e.jsx("span",{className:"arrow",children:e.jsx("svg",{viewBox:"0 0 12 12",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M3 6 H9 M6 3 L9 6 L6 9"})})})]}),e.jsx("div",{className:"reassure",children:"★ Cancel Anytime · Takes Seconds ★"})]})]})}),w=()=>e.jsx("section",{className:"gad-manifesto",children:e.jsxs("div",{className:"narrow",children:[e.jsxs("div",{className:"manifesto-eyebrow",children:["★ ",e.jsx("span",{children:"The Reader's Brief"})," ★"]}),e.jsxs("blockquote",{className:"pull",children:["You don't come here to scroll. You come for the ",e.jsx("em",{children:"vintage stories"})," — the warbirds, the restorations, the legacy behind every aircraft. Ads break that rhythm. Ad-free lets you stay with the story, start to finish."]}),e.jsxs("div",{className:"manifesto-byline",children:[e.jsx("span",{className:"line"}),e.jsx("span",{children:"Vintage Aviation News · Since 2014"}),e.jsx("span",{className:"line"})]})]})}),k=()=>e.jsx("section",{className:"gad-final-cta",children:e.jsxs("div",{className:"narrow",children:[e.jsxs("p",{className:"eyebrow",children:[e.jsx("span",{className:"bar"}),"Ready for Take-off ",e.jsx("span",{className:"num",children:"№ 05"})]}),e.jsxs("h2",{children:["You've read this far —",e.jsx("br",{}),"now read every article without interruptions."]}),e.jsx("p",{children:"$1 a month. No popups. No banners. Just the stories you came for."}),e.jsx("div",{className:"actions",children:e.jsxs("button",{className:"gad-btn-primary",onClick:n,children:["Subscribe — $1/month",e.jsx("span",{className:"arrow",children:e.jsx("svg",{viewBox:"0 0 12 12",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M3 6 H9 M6 3 L9 6 L6 9"})})})]})}),e.jsxs("div",{className:"meta",children:[e.jsx("span",{children:"Secure Payment"}),e.jsx("span",{className:"pip"}),e.jsx("span",{children:"Cancel Anytime"}),e.jsx("span",{className:"pip"}),e.jsx("span",{children:"Takes Seconds"})]})]})}),N=()=>e.jsxs(e.Fragment,{children:[e.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),e.jsx("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),e.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&family=Inter:wght@400;500;600;700&family=Special+Elite&display=swap",rel:"stylesheet"}),e.jsx("style",{children:`
.gad-page {
  --navy: #1f3a5f; --navy-deep: #142745; --navy-darker: #0a1628;
  --red: #c8323a; --red-deep: #a8262d; --red-ink: #8a1f25; --red-wash: #f3dad8;
  --cream: #f1e8d6; --cream-2: #e8dcc4; --cream-edge: #c9b78a;
  --paper: #faf5e9; --site-bg: #f4efe4;
  --ink: #14202e; --ink-2: #3b4a5e; --ink-3: #7a8595;
  --rule: #ddd0b3; --rule-2: #e8e0cc; --gold: #b8924a;
  font-family: 'Inter', system-ui, sans-serif;
  background: var(--site-bg);
  color: var(--ink);
  -webkit-font-smoothing: antialiased;
  line-height: 1.5;
  overflow-x: clip;
}
.gad-page * { box-sizing: border-box; }
.gad-page img { max-width: 100%; display: block; }
.gad-page .container { max-width: 1180px; margin: 0 auto; padding: 0 32px; }
.gad-page .narrow { max-width: 820px; margin: 0 auto; padding: 0 32px; }

.gad-page .eyebrow {
  font-family: 'Oswald', sans-serif;
  font-size: 11px; font-weight: 600;
  letter-spacing: 0.32em; text-transform: uppercase;
  color: var(--red);
  margin: 0 0 18px;
  display: inline-flex; align-items: center; gap: 14px;
  white-space: nowrap; flex-wrap: wrap;
}
.gad-page .eyebrow .num {
  font-family: 'Special Elite', monospace;
  color: var(--ink-3); letter-spacing: 0.05em;
  font-weight: 400; font-size: 11px;
}
.gad-page .eyebrow .bar { width: 28px; height: 1px; background: var(--red); display: inline-block; }
.gad-page h2.section-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 600; font-size: clamp(34px, 4vw, 48px);
  line-height: 1.05; letter-spacing: -0.02em;
  color: var(--navy-deep); margin: 0 0 14px;
  text-wrap: balance;
}
.gad-page .section-lede {
  font-family: 'Playfair Display', Georgia, serif; font-style: italic;
  font-size: 18px; color: var(--ink-2); line-height: 1.55;
  margin: 0 0 40px; max-width: 60ch;
}

.gad-btn-primary {
  display: inline-flex; align-items: center; gap: 14px;
  background: var(--red); color: #fff;
  border: 1px solid var(--red-ink);
  padding: 16px 28px; border-radius: 3px;
  font-family: 'Oswald', sans-serif; font-size: 14px;
  font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase;
  white-space: nowrap; cursor: pointer;
  box-shadow: 0 1px 0 rgba(255,255,255,0.18) inset, 0 -1px 0 rgba(0,0,0,0.18) inset, 0 6px 20px -4px rgba(168,38,45,0.4);
  transition: transform .12s, box-shadow .15s, filter .15s;
}
.gad-btn-primary:hover {
  transform: translateY(-1px); filter: brightness(1.05);
  box-shadow: 0 1px 0 rgba(255,255,255,0.18) inset, 0 -1px 0 rgba(0,0,0,0.18) inset, 0 10px 24px -4px rgba(168,38,45,0.5);
}
.gad-btn-primary .arrow {
  width: 22px; height: 22px; border-radius: 50%;
  background: rgba(255,255,255,0.2);
  display: grid; place-items: center;
  transition: transform .15s, background .15s;
}
.gad-btn-primary:hover .arrow { transform: translateX(3px); background: rgba(255,255,255,0.3); }
.gad-btn-primary .arrow svg { width: 10px; height: 10px; }

/* HERO */
.gad-hero { position: relative; background: var(--cream); border-bottom: 1px solid var(--rule); overflow: hidden; padding: 70px 0 90px; }
.gad-hero::before {
  content: ""; position: absolute; inset: 0;
  background:
    linear-gradient(180deg, rgba(241,232,214,0.10) 0%, rgba(241,232,214,0.05) 35%, rgba(241,232,214,0.55) 85%, var(--cream) 100%),
    linear-gradient(95deg, rgba(241,232,214,0.78) 0%, rgba(241,232,214,0.35) 38%, rgba(241,232,214,0) 60%, transparent 100%),
    url("${c}") center/cover no-repeat;
  z-index: 0; filter: saturate(0.95);
}
.gad-hero::after {
  content: ""; position: absolute; inset: 0;
  background-image:
    radial-gradient(1px 1px at 20% 30%, rgba(20,39,69,0.06) 50%, transparent 51%),
    radial-gradient(1px 1px at 65% 60%, rgba(20,39,69,0.05) 50%, transparent 51%),
    radial-gradient(1px 1px at 85% 25%, rgba(20,39,69,0.04) 50%, transparent 51%);
  background-size: 7px 7px, 11px 11px, 13px 13px;
  opacity: 0.8; z-index: 1; pointer-events: none; mix-blend-mode: multiply;
}
.gad-hero .hero-grid {
  position: relative; z-index: 2;
  display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr);
  gap: 60px; align-items: center;
}
.gad-hero .hero-copy { max-width: 560px; }
.gad-hero h1 {
  font-family: 'Playfair Display', serif; font-weight: 600;
  font-size: clamp(48px, 6vw, 76px); line-height: 0.98;
  letter-spacing: -0.025em; color: var(--navy-deep);
  margin: 18px 0 22px; text-wrap: balance;
}
.gad-hero h1 .ital { font-style: italic; color: var(--red); font-weight: 700; }
.gad-hero .hero-sub { font-size: 17px; color: var(--ink-2); line-height: 1.6; margin: 0 0 36px; max-width: 48ch; }
.gad-hero .hero-actions { display: flex; align-items: center; gap: 24px; flex-wrap: wrap; }

.gad-hero .price-line { font-family: 'Inter', sans-serif; font-size: 14px; color: var(--ink-2); display: inline-flex; align-items: baseline; gap: 8px; }
.gad-hero .price-line .strike { text-decoration: line-through; text-decoration-color: var(--red); color: var(--ink-3); }
.gad-hero .price-line .now { font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 700; color: var(--navy-deep); }
.gad-hero .price-line .tag {
  font-family: 'Oswald', sans-serif; font-size: 10px;
  letter-spacing: 0.22em; text-transform: uppercase;
  color: var(--red); background: var(--red-wash);
  padding: 3px 8px; border-radius: 2px; font-weight: 600;
}

.gad-hero .hero-card {
  position: relative; background: var(--paper);
  border: 1px solid var(--cream-edge); border-radius: 4px;
  padding: 26px 26px 22px;
  box-shadow: 0 30px 60px -25px rgba(20,39,69,0.35), 0 8px 20px -10px rgba(20,39,69,0.2);
  transform: rotate(1.2deg); max-width: 380px; justify-self: end;
}
.gad-hero .hero-card::before {
  content: ""; position: absolute; inset: 0;
  background-image:
    radial-gradient(1px 1px at 30% 30%, rgba(31,58,95,0.05) 50%, transparent 51%),
    radial-gradient(1px 1px at 70% 60%, rgba(31,58,95,0.04) 50%, transparent 51%),
    radial-gradient(1px 1px at 50% 80%, rgba(31,58,95,0.03) 50%, transparent 51%);
  background-size: 9px 11px, 13px 9px, 7px 13px;
  pointer-events: none; border-radius: 4px;
}
.gad-hero .hero-card .pip-row { display: flex; align-items: center; justify-content: space-between; font-family: 'Oswald', sans-serif; font-size: 10px; letter-spacing: 0.28em; text-transform: uppercase; color: var(--ink-3); margin-bottom: 14px; }
.gad-hero .hero-card .pip-row .stamp { color: var(--red); border: 1.5px solid var(--red); padding: 3px 7px; border-radius: 2px; transform: rotate(-3deg); font-weight: 700; letter-spacing: 0.2em; }
.gad-hero .hero-card h3 { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 700; color: var(--navy-deep); margin: 0 0 6px; line-height: 1.15; letter-spacing: -0.01em; }
.gad-hero .hero-card .kicker { font-family: 'Oswald', sans-serif; font-size: 10px; color: var(--red); letter-spacing: 0.24em; text-transform: uppercase; margin-bottom: 4px; }
.gad-hero .hero-card hr { border: none; border-top: 1px dashed var(--cream-edge); margin: 14px 0; }
.gad-hero .hero-card .row { display: flex; justify-content: space-between; gap: 12px; font-family: 'Oswald', sans-serif; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-2); padding: 6px 0; white-space: nowrap; }
.gad-hero .hero-card .row b { color: var(--navy-deep); font-weight: 700; }
.gad-hero .hero-card .barcode { height: 36px; margin-top: 14px; background-image: repeating-linear-gradient(90deg, var(--navy-deep) 0 2px, transparent 2px 4px, var(--navy-deep) 4px 5px, transparent 5px 9px, var(--navy-deep) 9px 12px, transparent 12px 14px); opacity: 0.85; }
.gad-hero .hero-card .barcode-num { font-family: 'Special Elite', monospace; font-size: 10px; color: var(--ink-3); text-align: center; margin-top: 6px; letter-spacing: 0.15em; }

/* COMPARISON */
.gad-compare { padding: 100px 0 90px; background: var(--site-bg); border-top: 1px solid var(--rule-2); }
.gad-compare .compare-head { text-align: center; margin-bottom: 56px; }
.gad-compare .compare-head .eyebrow { justify-content: center; }
.gad-compare .compare-head .section-lede { margin: 0 auto; }
.gad-compare .compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; align-items: stretch; }
.gad-compare .compare-card { background: #fff; border: 1px solid var(--rule); border-radius: 4px; padding: 26px 26px 28px; display: flex; flex-direction: column; gap: 18px; position: relative; }
.gad-compare .compare-card.bad { border-color: rgba(200,50,58,0.28); background: #fbf3f3; }
.gad-compare .compare-card.good { border-color: var(--cream-edge); background: var(--paper); }
.gad-compare .compare-card h4 { font-family: 'Oswald', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.28em; text-transform: uppercase; margin: 0; display: inline-flex; align-items: center; gap: 10px; }
.gad-compare .compare-card.bad h4 { color: var(--red-deep); }
.gad-compare .compare-card.good h4 { color: var(--navy-deep); }
.gad-compare .compare-card h4 .chip { width: 8px; height: 8px; border-radius: 50%; }
.gad-compare .compare-card.bad .chip { background: var(--red); }
.gad-compare .compare-card.good .chip { background: var(--navy); }

.gad-compare .page-mock { aspect-ratio: 4/3; border-radius: 3px; border: 1px solid var(--rule); background: #fff; overflow: hidden; position: relative; box-shadow: 0 14px 30px -16px rgba(20,39,69,0.25); }
.gad-compare .page-mock .browser { height: 22px; background: #ebe2cf; border-bottom: 1px solid var(--rule); display: flex; align-items: center; padding: 0 8px; gap: 5px; }
.gad-compare .page-mock .browser .tl { width: 8px; height: 8px; border-radius: 50%; background: var(--cream-edge); }
.gad-compare .page-mock .browser .tl:nth-child(2) { background: #d4b87a; }
.gad-compare .page-mock .browser .tl:nth-child(3) { background: #97a78a; }
.gad-compare .page-mock .browser .url { flex: 1; height: 11px; background: #fff; border-radius: 6px; margin-left: 8px; margin-right: 4px; }

.gad-compare .mock-ads .body { padding: 8px; display: grid; grid-template-columns: 70% 30%; gap: 6px; height: calc(100% - 22px); }
.gad-compare .mock-ads .ad { background: repeating-linear-gradient(45deg, #f0c948 0 8px, #d49b1f 8px 16px); border: 1px solid #b88017; color: #5a3a04; font-family: 'Oswald', sans-serif; font-size: 8px; font-weight: 700; letter-spacing: 0.18em; display: grid; place-items: center; text-transform: uppercase; margin-bottom: 6px; }
.gad-compare .mock-ads .ad.r { background: repeating-linear-gradient(45deg, #c8323a 0 8px, #8a1f25 8px 16px); border-color: #6b1418; color: #fff; }
.gad-compare .mock-ads .ad.b { background: repeating-linear-gradient(45deg, #2d4a72 0 8px, #1f3a5f 8px 16px); border-color: #142745; color: #fff; }
.gad-compare .mock-ads .ad.g { background: repeating-linear-gradient(45deg, #5a7a3a 0 8px, #3e5a22 8px 16px); border-color: #2a4014; color: #fff; }
.gad-compare .mock-ads .left h5 { font-family: 'Playfair Display', serif; margin: 4px 0 6px; font-size: 10px; color: var(--navy-deep); }
.gad-compare .mock-ads .left .ph { height: 50px; background: linear-gradient(135deg, #b8b8b8, #888); border-radius: 2px; margin-bottom: 5px; position: relative; }
.gad-compare .mock-ads .lines { display: flex; flex-direction: column; gap: 3px; }
.gad-compare .mock-ads .lines span { height: 3px; background: #d4cdb8; border-radius: 2px; }
.gad-compare .mock-ads .lines span:nth-child(2) { width: 92%; }
.gad-compare .mock-ads .lines span:nth-child(3) { width: 76%; }
.gad-compare .mock-ads .right { display: flex; flex-direction: column; }
.gad-compare .mock-ads .ad.tall { height: 60px; font-size: 7px; }
.gad-compare .mock-ads .popup { position: absolute; bottom: 8px; left: 8px; background: #fff; border: 1px solid var(--red); padding: 5px 7px; font-family: 'Oswald', sans-serif; font-size: 7px; color: var(--red-deep); letter-spacing: 0.1em; text-transform: uppercase; box-shadow: 0 4px 8px rgba(0,0,0,0.18); }

.gad-compare .mock-clean .body { padding: 14px 18px; height: calc(100% - 22px); }
.gad-compare .mock-clean h5 { font-family: 'Playfair Display', serif; font-size: 13px; color: var(--navy-deep); margin: 4px 0 8px; line-height: 1.2; }
.gad-compare .mock-clean .ph { height: 70px; background: linear-gradient(135deg, #4a5d6e, #2d3f50); border-radius: 2px; position: relative; margin-bottom: 10px; }
.gad-compare .mock-clean .lines { display: flex; flex-direction: column; gap: 5px; }
.gad-compare .mock-clean .lines span { height: 4px; background: #e2dac3; border-radius: 2px; }
.gad-compare .mock-clean .lines span:nth-child(2) { width: 94%; }
.gad-compare .mock-clean .lines span:nth-child(3) { width: 84%; }
.gad-compare .mock-clean .lines span:nth-child(4) { width: 70%; }

.gad-compare .compare-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; }
.gad-compare .compare-list li { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; color: var(--ink); padding-bottom: 10px; border-bottom: 1px dotted var(--cream-edge); }
.gad-compare .compare-list li:last-child { border-bottom: none; padding-bottom: 0; }
.gad-compare .compare-list .icon { width: 18px; height: 18px; flex: 0 0 18px; border-radius: 50%; display: grid; place-items: center; margin-top: 1px; }
.gad-compare .compare-card.bad .icon { background: var(--red-wash); color: var(--red-deep); }
.gad-compare .compare-card.good .icon { background: rgba(31,58,95,0.1); color: var(--navy-deep); }
.gad-compare .compare-list .icon svg { width: 10px; height: 10px; }

/* BENEFITS */
.gad-benefits { background: var(--paper); border-top: 1px solid var(--rule); border-bottom: 1px solid var(--rule); padding: 100px 0; }
.gad-benefits .benefits-grid { display: grid; grid-template-columns: minmax(0, 360px) 1fr; gap: 80px; align-items: start; }
.gad-benefits .benefits-list { display: flex; flex-direction: column; border-top: 1px solid var(--rule); }
.gad-benefits .benefit { display: grid; grid-template-columns: 56px 1fr auto; gap: 24px; align-items: start; padding: 24px 0; border-bottom: 1px solid var(--rule); }
.gad-benefits .benefit-num { font-family: 'Playfair Display', serif; font-size: 36px; font-weight: 700; font-style: italic; color: var(--red); line-height: 1; letter-spacing: -0.02em; }
.gad-benefits .benefit h3 { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 600; color: var(--navy-deep); margin: 0 0 4px; letter-spacing: -0.01em; }
.gad-benefits .benefit p { margin: 0; color: var(--ink-2); font-size: 14.5px; line-height: 1.55; max-width: 52ch; }
.gad-benefits .benefit-tag { font-family: 'Oswald', sans-serif; font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--ink-3); padding-top: 8px; }

/* PRICING */
.gad-pricing { padding: 100px 0; background: var(--site-bg); text-align: center; position: relative; overflow: hidden; }
.gad-pricing::before { content: ""; position: absolute; inset: 0; background-image: radial-gradient(1.5px 1.5px at 12% 22%, rgba(20,39,69,0.06) 50%, transparent 51%), radial-gradient(1.5px 1.5px at 88% 70%, rgba(20,39,69,0.06) 50%, transparent 51%), radial-gradient(1px 1px at 60% 35%, rgba(20,39,69,0.04) 50%, transparent 51%); background-size: 240px 200px, 320px 260px, 180px 220px; pointer-events: none; }
.gad-pricing > * { position: relative; }
.gad-pricing .eyebrow { justify-content: center; }
.gad-pricing .price-card { margin: 48px auto 0; max-width: 460px; background: var(--paper); border: 1px solid var(--cream-edge); border-radius: 4px; padding: 40px 36px 32px; text-align: left; position: relative; box-shadow: 0 30px 70px -25px rgba(20,39,69,0.35); }
.gad-pricing .price-card::before, .gad-pricing .price-card::after { content: ""; position: absolute; width: 14px; height: 14px; border: 1.5px solid var(--cream-edge); }
.gad-pricing .price-card::before { top: 10px; left: 10px; border-right: none; border-bottom: none; }
.gad-pricing .price-card::after { bottom: 10px; right: 10px; border-left: none; border-top: none; }
.gad-pricing .price-card .ribbon-tag { position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: var(--red); color: #fff; border: 1px solid var(--red-ink); font-family: 'Oswald', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; padding: 7px 18px; border-radius: 2px; box-shadow: 0 4px 10px -2px rgba(168,38,45,0.4); white-space: nowrap; }
.gad-pricing .price-card h3 { font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 700; color: var(--navy-deep); margin: 8px 0 18px; letter-spacing: -0.015em; }
.gad-pricing .price-card .price { display: inline-flex; align-items: baseline; gap: 12px; margin-bottom: 12px; }
.gad-pricing .price-card .price .strike { font-family: 'Playfair Display', serif; font-size: 24px; color: var(--ink-3); text-decoration: line-through; text-decoration-thickness: 1.5px; text-decoration-color: var(--red); font-weight: 500; }
.gad-pricing .price-card .price .amount { font-family: 'Playfair Display', serif; font-size: 64px; font-weight: 700; color: var(--navy-deep); letter-spacing: -0.03em; line-height: 1; }
.gad-pricing .price-card .price .per { font-family: 'Oswald', sans-serif; font-size: 12px; color: var(--ink-2); letter-spacing: 0.22em; text-transform: uppercase; font-weight: 500; }
.gad-pricing .price-card hr.dash { border: none; border-top: 1px dashed var(--cream-edge); margin: 22px 0; }
.gad-pricing .price-card ul { list-style: none; margin: 0 0 26px; padding: 0; display: flex; flex-direction: column; gap: 10px; }
.gad-pricing .price-card ul li { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; color: var(--ink); }
.gad-pricing .price-card ul li svg { width: 14px; height: 14px; color: var(--red); flex: 0 0 14px; margin-top: 3px; }
.gad-pricing .price-card .gad-btn-primary { width: 100%; justify-content: center; position: relative; }
.gad-pricing .price-card .gad-btn-primary .arrow { position: absolute; right: 16px; }
.gad-pricing .price-card .reassure { text-align: center; margin-top: 14px; font-family: 'Oswald', sans-serif; font-size: 10px; color: var(--ink-3); letter-spacing: 0.22em; text-transform: uppercase; }

/* MANIFESTO */
.gad-manifesto { background: var(--navy-deep); color: var(--cream); padding: 110px 0; position: relative; overflow: hidden; border-top: 4px double var(--red); }
.gad-manifesto::before { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(20,39,69,0.55) 0%, rgba(20,39,69,0.65) 50%, rgba(20,39,69,0.82) 100%), url("${g}") center/cover no-repeat; }
.gad-manifesto::after { content: ""; position: absolute; inset: 0; background-image: radial-gradient(1px 1px at 25% 35%, rgba(241,232,214,0.08) 50%, transparent 51%), radial-gradient(1px 1px at 75% 65%, rgba(241,232,214,0.06) 50%, transparent 51%); background-size: 9px 9px, 13px 13px; pointer-events: none; }
.gad-manifesto > * { position: relative; }
.gad-manifesto .manifesto-eyebrow { font-family: 'Oswald', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.32em; text-transform: uppercase; color: rgba(241,232,214,0.6); margin-bottom: 28px; text-align: center; }
.gad-manifesto .manifesto-eyebrow span { color: var(--red); }
.gad-manifesto blockquote.pull { font-family: 'Playfair Display', serif; font-style: italic; font-weight: 500; font-size: clamp(28px, 3.4vw, 42px); line-height: 1.25; text-align: center; color: var(--cream); margin: 0 auto; max-width: 900px; text-wrap: balance; position: relative; }
.gad-manifesto blockquote.pull::before { content: "\\201C"; font-family: 'Playfair Display', serif; font-size: 120px; color: var(--red); position: absolute; left: 50%; top: -56px; transform: translateX(-50%); line-height: 1; opacity: 0.85; }
.gad-manifesto blockquote.pull em { color: #f5d3a6; font-weight: 600; }
.gad-manifesto .manifesto-byline { margin-top: 36px; display: flex; align-items: center; justify-content: center; gap: 14px; font-family: 'Oswald', sans-serif; font-size: 11px; letter-spacing: 0.28em; text-transform: uppercase; color: rgba(241,232,214,0.7); }
.gad-manifesto .manifesto-byline .line { width: 40px; height: 1px; background: rgba(241,232,214,0.4); }

/* FINAL CTA */
.gad-final-cta { background: var(--cream); padding: 110px 0; text-align: center; position: relative; overflow: hidden; border-bottom: 1px solid var(--rule); }
.gad-final-cta::before { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(241,232,214,0.85) 0%, rgba(241,232,214,0.45) 30%, rgba(241,232,214,0.35) 55%, rgba(241,232,214,0.7) 85%, var(--cream) 100%), url("${x}") center/cover no-repeat; pointer-events: none; filter: sepia(0.18) saturate(0.85); }
.gad-final-cta > * { position: relative; }
.gad-final-cta .eyebrow { justify-content: center; }
.gad-final-cta h2 { font-family: 'Playfair Display', serif; font-size: clamp(36px, 4.5vw, 56px); font-weight: 600; color: var(--navy-deep); margin: 0 0 22px; line-height: 1.05; letter-spacing: -0.02em; text-wrap: balance; }
.gad-final-cta p { color: var(--ink-2); font-size: 17px; line-height: 1.6; max-width: 56ch; margin: 0 auto 36px; }
.gad-final-cta .actions { display: inline-flex; align-items: center; gap: 22px; flex-wrap: wrap; justify-content: center; }
.gad-final-cta .meta { margin-top: 22px; font-family: 'Oswald', sans-serif; font-size: 11px; letter-spacing: 0.24em; text-transform: uppercase; color: var(--ink-3); display: inline-flex; align-items: center; gap: 14px; }
.gad-final-cta .meta .pip { width: 4px; height: 4px; background: var(--cream-edge); transform: rotate(45deg); }

/* STICKY BUY BAR */
.gad-stickybar { position: fixed; left: 0; right: 0; bottom: 0; background: var(--paper); border-top: 1px solid var(--rule); box-shadow: 0 -10px 24px -10px rgba(0,0,0,0.18); padding: 12px 0; z-index: 40; transform: translateY(100%); transition: transform .3s ease; }
.gad-stickybar.show { transform: translateY(0); }
.gad-stickybar-inner { display: flex; align-items: center; justify-content: space-between; gap: 18px; }
.gad-stickybar-price { font-family: 'Playfair Display', serif; color: var(--navy-deep); font-weight: 700; font-size: 17px; display: inline-flex; align-items: baseline; gap: 8px; }
.gad-stickybar-price .strike { color: var(--ink-3); text-decoration: line-through; text-decoration-color: var(--red); font-size: 14px; font-weight: 500; }
.gad-stickybar-price .per { font-family: 'Oswald', sans-serif; font-size: 11px; letter-spacing: 0.18em; color: var(--ink-2); text-transform: uppercase; font-weight: 500; }
.gad-stickybar .gad-btn-primary { padding: 12px 22px; font-size: 12px; }

/* responsive */
@media (max-width: 900px) {
  .gad-hero { padding: 50px 0 60px; }
  .gad-hero .hero-grid { grid-template-columns: 1fr; gap: 40px; }
  .gad-hero .hero-card { transform: none; justify-self: center; }
  .gad-compare .compare-grid { grid-template-columns: 1fr; }
  .gad-benefits .benefits-grid { grid-template-columns: 1fr; gap: 40px; }
  .gad-benefits .benefit { grid-template-columns: 44px 1fr; }
  .gad-benefits .benefit-tag { display: none; }
}
@media (max-width: 640px) {
  .gad-page .container, .gad-page .narrow { padding: 0 18px; }
  .gad-hero h1 { font-size: clamp(36px, 9vw, 56px); }
  .gad-hero .hero-sub { font-size: 16px; }
  .gad-hero .hero-card { max-width: 100%; }
  .gad-stickybar-inner { gap: 12px; }
  .gad-stickybar-price { font-size: 16px; }
  .gad-stickybar .gad-btn-primary { padding: 10px 16px; font-size: 11px; letter-spacing: 0.14em; }
}
@media (max-width: 540px) {
  .gad-page .container, .gad-page .narrow { padding: 0 16px; }
}
`})]}),S=()=>e.jsxs("div",{className:"gad-page",children:[e.jsx(N,{}),e.jsx(m,{}),e.jsx(f,{}),e.jsx(u,{}),e.jsx(y,{}),e.jsx(v,{}),e.jsx(j,{}),e.jsx(w,{}),e.jsx(k,{}),e.jsx(h,{}),e.jsx(b,{})]});export{S as default};
