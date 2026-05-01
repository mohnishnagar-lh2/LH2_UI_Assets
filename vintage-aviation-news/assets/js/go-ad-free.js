(function () {
  // ===== CONFIGURATION =====
  var SCRIPT = document.currentScript || document.querySelector('script[src*="go-ad-free"]');
  var CFG = {
    delay: parseInt(attr("data-delay", "1500"), 10),
    poll: parseInt(attr("data-poll", "3000"), 10),
    extraSelectors: attr("data-selectors", ""),
  };
  function attr(name, fallback) {
    return SCRIPT && SCRIPT.getAttribute(name) || fallback;
  }

  // ===== BRAND THEMING =====
  var P = "#bb361b";
  var PD = "#9e2e17";
  var PL = "#fdf2f2";
  var PT = "rgba(192,57,43,0.25)";
  var SITE_NAME = "Vintage Aviation News";
  var SITE_CAUSE = "aviation heritage preservation";
  var SITE_AUDIENCE = "aviation enthusiasts worldwide";
  var SITE_TITLE = "Go Ad-Free";

  // ===== PRESETS =====
  var PRESETS = [5, 10, 25, 50];
  var POPULAR = 25;
  var FREQS = [
    { key: "one-time", label: "One-time", per: null },
    { key: "monthly", label: "Monthly", per: 30 },
    { key: "quarterly", label: "Quarterly", per: 90 },
    { key: "yearly", label: "Yearly", per: 365 },
  ];
  var FREQ_LABELS = { "one-time": "", monthly: " / month", quarterly: " / quarter", yearly: " / year" };

  // ===== WITTY COPY =====
  var wideCopy = [
    "Tired of ads? Read without distractions.",
    "Plot twist: this ad vanishes when you subscribe.",
    "Imagine this space \u2014 completely yours.",
    "Fun fact: subscribers never see this.",
    "Go ad-free. Lose the distractions.",
    "Less noise. More warbirds.",
  ];
  var narrowCopy = ["No more ads?", "Go clean", "Lose the ads", "Distraction-free"];
  var copyIdx = 0;

  // ===== MARKER =====
  var MARKER = "data-gaf-processed";

  // ===== INJECT CSS =====
  var styleEl = document.createElement("style");
  styleEl.textContent = `
@keyframes gafFadeIn{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}
@keyframes gafPopIn{from{opacity:0;transform:scale(.94) translateY(10px)}to{opacity:1;transform:scale(1) translateY(0)}}

/* === Wrapper for each ad banner === */
.gaf-ad-wrapper{
  flex:1;max-width:600px;display:flex;flex-direction:column;min-width:0;
}
.gaf-ad-wrapper .ad-banner{
  flex:unset;max-width:unset;width:100%;
}

/* === Badge above ad unit, right-aligned === */
.gaf-above-badge{
  display:flex;justify-content:flex-end;margin-bottom:1px;
  cursor:pointer;animation:gafFadeIn .35s ease-out;
}

/* === CTA button === */
.gaf-cta-pill{
  display:inline-flex;align-items:center;gap:3px;
  padding:3px 10px;border-radius:3px;
  background:${P};
  color:#fff;font:700 9px/1 'Inter',sans-serif;
  text-transform:uppercase;letter-spacing:0.5px;
  white-space:nowrap;
  transition:background .15s;
}
.gaf-cta-pill:hover{background:${PD};}

/* === STICKY BOTTOM BANNER === */
.gaf-sticky{
  position:fixed;bottom:0;left:0;right:0;z-index:99999;
  background:#1a2332;color:#fff;
  display:flex;align-items:center;justify-content:center;gap:16px;
  padding:12px 20px;
  font:400 14px/1.4 'Inter',sans-serif;
  box-shadow:0 -4px 20px rgba(0,0,0,.25);
  animation:gafFadeIn .4s ease-out;
}
.gaf-sticky-text{color:rgba(255,255,255,.85);}
.gaf-sticky-cta{
  display:inline-flex;align-items:center;gap:6px;
  padding:8px 22px;border-radius:6px;border:none;
  background:${P};color:#fff;
  font:600 13px/1 'Inter',sans-serif;
  cursor:pointer;transition:background .15s;
}
.gaf-sticky-cta:hover{background:${PD};}
.gaf-sticky-close{
  background:none;border:none;color:rgba(255,255,255,.5);
  font-size:18px;cursor:pointer;padding:4px 8px;line-height:1;
  transition:color .15s;
}
.gaf-sticky-close:hover{color:#fff;}

/* === PAYWALL MODAL (vintage editorial, design from claude.ai/design) === */
.gaf-modal-backdrop{
  position:fixed;inset:0;z-index:9999999;
  background:radial-gradient(1200px 600px at 50% -10%,#2d4a72 0%,#1f3a5f 40%,rgba(14,29,51,0.92) 100%),rgba(0,0,0,0.5);
  display:flex;align-items:center;justify-content:center;
  padding:24px 16px;
  animation:gafFadeIn .2s ease-out;
  font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
  -webkit-font-smoothing:antialiased;
}
.gaf-modal{
  --gaf-navy:#1f3a5f;--gaf-navy-deep:#142745;--gaf-red:#c8323a;--gaf-red-deep:#a8262d;--gaf-red-soft:#f3dad8;
  --gaf-cream:#f1e8d6;--gaf-cream-2:#e8dcc4;--gaf-cream-3:#d8c89f;--gaf-paper:#fbf7ee;
  --gaf-ink:#14202e;--gaf-ink-2:#3b4a5e;--gaf-ink-3:#7a8595;--gaf-rule:#ddd0b3;--gaf-rule-2:#e8e0cc;
  width:100%;max-width:460px;max-height:calc(100vh - 48px);overflow-y:auto;
  background:var(--gaf-paper);border-radius:14px;border:1px solid rgba(0,0,0,0.08);
  box-shadow:0 1px 0 rgba(255,255,255,0.05) inset,0 30px 80px -20px rgba(0,0,0,0.65),0 10px 30px -15px rgba(0,0,0,0.45);
  position:relative;color:var(--gaf-ink);
  animation:gafPop .35s cubic-bezier(.2,.7,.2,1) both;
}
.gaf-modal *{box-sizing:border-box;}
.gaf-modal .close{
  position:absolute;top:14px;right:14px;width:32px;height:32px;border-radius:50%;
  border:1px solid rgba(255,255,255,0.35);background:rgba(20,32,46,0.45);
  backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);
  color:#fff;display:grid;place-items:center;cursor:pointer;z-index:6;padding:0;
  transition:all .15s ease;
}
.gaf-modal .close:hover{background:rgba(20,32,46,0.7);border-color:rgba(255,255,255,0.6);}
.gaf-modal .close svg{width:12px;height:12px;}

/* PHOTO BANNER */
.gaf-modal .photo-banner{position:relative;height:180px;background-size:cover;background-position:center 42%;overflow:visible;}
.gaf-modal .brand-chip{
  position:absolute;top:14px;left:16px;
  display:inline-flex;align-items:center;gap:8px;
  padding:5px 10px 5px 6px;
  background:rgba(255,255,255,0.92);border-radius:999px;
  box-shadow:0 2px 8px rgba(0,0,0,0.18);
  backdrop-filter:blur(4px);
}
.gaf-modal .brand-chip img{width:22px;height:22px;object-fit:contain;}
.gaf-modal .brand-chip span{
  font-family:'Inter',sans-serif;font-size:9.5px;font-weight:700;
  letter-spacing:0.18em;color:var(--gaf-navy);text-transform:uppercase;
}
.gaf-modal .photo-fade{
  position:absolute;left:0;right:0;bottom:0;height:50px;
  background:linear-gradient(180deg,transparent,var(--gaf-paper));
  pointer-events:none;
}

/* No-Ads disc badge — solid red, half on photo / half on cream */
.gaf-modal .noads-badge{
  position:absolute;left:50%;bottom:-32px;
  transform:translateX(-50%) rotate(-6deg);
  width:84px;height:84px;border-radius:50%;
  background:linear-gradient(180deg,var(--gaf-red) 0%,var(--gaf-red-deep) 100%);
  box-shadow:
    0 0 0 4px var(--gaf-paper),
    0 0 0 5px rgba(168,38,45,0.25),
    0 10px 24px -6px rgba(168,38,45,0.55),
    inset 0 1px 0 rgba(255,255,255,0.18),
    inset 0 -2px 0 rgba(0,0,0,0.18);
  display:grid;place-items:center;z-index:3;
  animation:gafStampIn .55s cubic-bezier(.2,.9,.3,1) .15s both;
}
.gaf-modal .noads-badge svg{width:100%;height:100%;display:block;}

/* HERO content (cream) */
.gaf-modal .hero{position:relative;padding:48px 32px 24px;text-align:center;background:var(--gaf-paper);}
.gaf-modal .headline{
  font-family:'Playfair Display',Georgia,serif;font-weight:600;
  font-size:30px;line-height:1.1;letter-spacing:-0.015em;
  margin:0 0 8px;color:var(--gaf-navy-deep);text-wrap:balance;
}
.gaf-modal .headline .accent{
  font-family:'Playfair Display',Georgia,serif;color:var(--gaf-red);
  font-style:italic;font-weight:700;font-size:34px;line-height:1.05;
  display:inline-block;margin-top:2px;letter-spacing:-0.015em;
}
.gaf-modal .sub{margin:0;font-size:14px;color:var(--gaf-ink-2);line-height:1.5;}

/* PRICE */
.gaf-modal .price-block{padding:18px 32px 16px;text-align:center;background:var(--gaf-paper);}
.gaf-modal .price{display:inline-flex;align-items:baseline;gap:10px;font-family:'Playfair Display',serif;}
.gaf-modal .price .strike{
  font-size:17px;color:var(--gaf-ink-3);
  text-decoration:line-through;text-decoration-thickness:1.5px;text-decoration-color:var(--gaf-red);
  font-weight:500;
}
.gaf-modal .price .amount{font-size:38px;font-weight:700;color:var(--gaf-navy-deep);letter-spacing:-0.02em;line-height:1;}
.gaf-modal .price .per{font-family:'Inter',sans-serif;font-size:13.5px;color:var(--gaf-ink-2);font-weight:500;}
.gaf-modal .pill{
  display:inline-flex;align-items:center;gap:8px;margin-top:10px;
  padding:5px 13px;background:var(--gaf-red-soft);color:var(--gaf-red-deep);
  border-radius:999px;font-size:12.5px;font-weight:600;
  border:1px solid rgba(200,50,58,0.12);
}

/* FEATURES */
.gaf-modal .features{
  display:grid;grid-template-columns:repeat(3,1fr);gap:6px;
  padding:14px 24px 6px;border-top:1px solid var(--gaf-rule-2);margin:0 8px;
}
.gaf-modal .feature{display:flex;flex-direction:column;align-items:center;text-align:center;padding:4px 2px;gap:6px;}
.gaf-modal .feature-icon{
  width:36px;height:36px;border-radius:50%;background:#f1ece0;
  border:1px solid var(--gaf-cream-3);color:var(--gaf-navy);
  display:grid;place-items:center;box-shadow:0 1px 2px rgba(31,58,95,0.06);
}
.gaf-modal .feature-icon svg{width:15px;height:15px;}
.gaf-modal .feature-icon.red{color:var(--gaf-red);background:var(--gaf-red-soft);border-color:rgba(200,50,58,0.18);}
.gaf-modal .feature-text{font-size:11.5px;color:var(--gaf-ink-2);line-height:1.35;font-weight:500;max-width:12ch;}

/* CTA */
.gaf-modal .cta-wrap{padding:12px 24px 14px;}
.gaf-modal .cta{
  display:flex;align-items:center;justify-content:center;gap:10px;width:100%;
  background:linear-gradient(180deg,var(--gaf-red) 0%,var(--gaf-red-deep) 100%);
  color:#fff;border:none;border-radius:10px;padding:13px 18px;
  font-family:'Inter',sans-serif;font-size:15px;font-weight:700;letter-spacing:0.01em;
  cursor:pointer;position:relative;
  box-shadow:0 1px 0 rgba(255,255,255,0.18) inset,0 -1px 0 rgba(0,0,0,0.18) inset,0 6px 18px -4px rgba(168,38,45,0.5);
  transition:transform .12s ease,box-shadow .12s ease,filter .15s ease;
}
.gaf-modal .cta:hover{
  filter:brightness(1.05);transform:translateY(-1px);
  box-shadow:0 1px 0 rgba(255,255,255,0.18) inset,0 -1px 0 rgba(0,0,0,0.18) inset,0 10px 22px -4px rgba(168,38,45,0.6);
}
.gaf-modal .cta:active{transform:translateY(0);}
.gaf-modal .cta .arrow{
  position:absolute;right:20px;display:grid;place-items:center;
  width:22px;height:22px;border-radius:50%;background:rgba(255,255,255,0.18);
  transition:transform .15s ease,background .15s ease;
}
.gaf-modal .cta:hover .arrow{transform:translateX(3px);background:rgba(255,255,255,0.26);}
.gaf-modal .cta .arrow svg{width:11px;height:11px;}

.gaf-modal .meta{
  display:flex;align-items:center;justify-content:center;gap:10px;
  margin-top:10px;font-size:12px;color:var(--gaf-ink-3);
}
.gaf-modal .meta .lock{display:inline-flex;align-items:center;gap:5px;color:var(--gaf-navy);font-weight:600;}
.gaf-modal .meta .lock svg{width:11px;height:13px;}
.gaf-modal .meta .gaf-dot{width:3px;height:3px;border-radius:50%;background:var(--gaf-ink-3);opacity:0.5;}
.gaf-modal .meta .anytime{font-weight:500;color:var(--gaf-ink-2);}

.gaf-modal .no-thanks-row{text-align:center;padding:0 0 14px;}
.gaf-modal .no-thanks{
  background:none;border:none;font:inherit;font-family:'Inter',sans-serif;
  font-size:12.5px;color:var(--gaf-ink-3);
  text-decoration:underline;text-underline-offset:3px;text-decoration-color:var(--gaf-cream-3);
  cursor:pointer;padding:4px 8px;transition:color .15s ease;
}
.gaf-modal .no-thanks:hover{color:var(--gaf-navy);text-decoration-color:var(--gaf-ink-3);}

@keyframes gafPop{from{opacity:0;transform:translateY(8px) scale(0.98);}to{opacity:1;transform:translateY(0) scale(1);}}
@keyframes gafStampIn{0%{opacity:0;transform:translateX(-50%) rotate(-22deg) scale(1.4);}60%{opacity:1;transform:translateX(-50%) rotate(-3deg) scale(0.95);}100%{opacity:1;transform:translateX(-50%) rotate(-6deg) scale(1);}}

/* Short viewports — common laptop heights of 700–760px */
@media(max-height:780px){
  .gaf-modal-backdrop{padding:12px;}
  .gaf-modal .photo-banner{height:130px;}
  .gaf-modal .noads-badge{width:68px;height:68px;bottom:-26px;}
  .gaf-modal .hero{padding:36px 32px 16px;}
  .gaf-modal .headline{font-size:24px;margin-bottom:4px;}
  .gaf-modal .headline .accent{font-size:28px;}
  .gaf-modal .sub{font-size:12.5px;}
  .gaf-modal .price-block{padding:14px 32px 12px;}
  .gaf-modal .price .amount{font-size:32px;}
  .gaf-modal .price .strike{font-size:15px;}
  .gaf-modal .pill{margin-top:8px;padding:4px 11px;font-size:11.5px;}
  .gaf-modal .features{padding:10px 24px 4px;}
  .gaf-modal .feature{padding:2px 2px;gap:4px;}
  .gaf-modal .feature-icon{width:32px;height:32px;}
  .gaf-modal .feature-icon svg{width:13px;height:13px;}
  .gaf-modal .feature-text{font-size:11px;line-height:1.3;}
  .gaf-modal .cta-wrap{padding:8px 24px 10px;}
  .gaf-modal .cta{padding:11px 16px;font-size:14px;}
  .gaf-modal .meta{margin-top:8px;font-size:11px;}
  .gaf-modal .no-thanks-row{padding:0 0 10px;}
}

@media(max-width:480px){
  .gaf-modal .hero{padding:18px 24px 18px;}
  .gaf-modal .price-block{padding:16px 24px 14px;}
  .gaf-modal .features{padding:12px 16px 4px;margin:0;}
  .gaf-modal .cta-wrap{padding:12px 24px 14px;}
  .gaf-modal .headline{font-size:24px;}
  .gaf-modal .headline .accent{font-size:28px;}
  .gaf-modal .price .amount{font-size:34px;}
  .gaf-sticky{flex-wrap:wrap;gap:8px;padding:10px 16px;font-size:12px;}
}
`;
  document.head.appendChild(styleEl);

  // ===== STATE =====
  var S = { screen: 1, freq: "quarterly", preset: POPULAR, custom: "", isCustom: false, method: "", name: "", email: "" };

  function getAmount() { return S.isCustom ? (parseInt(S.custom, 10) || 0) : S.preset; }
  function getFreqLabel() { return FREQ_LABELS[S.freq] || ""; }
  function getPerDay() {
    var f = FREQS.find(function (x) { return x.key === S.freq; });
    if (!f || !f.per) return "";
    var amt = getAmount();
    return amt ? "$" + (amt / f.per).toFixed(2) + "/day" : "";
  }

  // ===== AD SCANNING =====
  // Wrap every .ad-banner in a wrapper div with a badge above it
  function scanAds() {
    document.querySelectorAll(".ad-banner").forEach(function (banner) {
      if (banner.hasAttribute(MARKER)) return;
      banner.setAttribute(MARKER, "1");

      // Create wrapper: badge + banner together
      var wrapper = document.createElement("div");
      wrapper.className = "gaf-ad-wrapper";
      // Full-width banners (e.g. style="max-width: 100%")
      if (banner.style.maxWidth === "100%") {
        wrapper.style.maxWidth = "100%";
      }
      banner.parentNode.insertBefore(wrapper, banner);
      wrapper.appendChild(makeAdBadge());
      wrapper.appendChild(banner);
    });
  }

  function getSupportUrl() {
    var path = window.location.pathname;
    var base = path.includes('/pages/') ? '../go-ad-free/' : 'go-ad-free/';
    // Preserve flow param across navigation
    if (FLOW) base += '?flow=' + FLOW;
    return base;
  }

  // ===== FLOW SELECTION =====
  // Default behavior: every "Subscribe" / "Remove Ads" CTA opens the
  // popup modal. Subscribe Now in the popup → payment page.
  // Opt-out via ?flow=landing to navigate directly to the landing page.
  var FLOW = (function () {
    try { return new URLSearchParams(window.location.search).get('flow') || 'popup'; }
    catch (e) { return 'popup'; }
  })();

  function makeAdBadge() {
    var badge = document.createElement("div");
    badge.className = "gaf-above-badge";
    badge.innerHTML = '<span class="gaf-cta-pill">Remove Ads</span>';
    badge.addEventListener("click", function (e) {
      e.preventDefault(); e.stopPropagation();
      if (FLOW === 'landing') {
        window.location.href = getSupportUrl();
      } else {
        openPopup();
      }
    });
    return badge;
  }

  // In popup flow (the default), intercept clicks on existing
  // <a href="...go-ad-free/"> CTAs (navbar Go Ad-Free button,
  // sticky-bottom button) and open the popup instead.
  if (FLOW === 'popup') {
    document.addEventListener('click', function (e) {
      // Don't intercept clicks that happen on the landing page itself
      if (window.location.pathname.indexOf('/go-ad-free/') !== -1) return;
      var link = e.target && e.target.closest && e.target.closest('a');
      if (!link) return;
      var href = link.getAttribute('href') || '';
      if (!/(^|\/)go-ad-free\/?(\?|#|$)/.test(href)) return;
      e.preventDefault();
      openPopup();
    }, true);
  }

  // Sticky bottom banner removed
  function injectStickyBanner() {}

  // ===== POPUP =====
  // Asset paths resolve relative to current page depth (sub-pages need ../).
  function getLogoUrl() {
    var path = window.location.pathname;
    if (path.includes('/pages/')) return '../assets/van-logo.png';
    return 'assets/van-logo.png';
  }
  function getPhotoUrl() {
    var path = window.location.pathname;
    if (path.includes('/pages/')) return '../assets/spitfire-sky.jpg';
    return 'assets/spitfire-sky.jpg';
  }

  // Inject Google Fonts for the popup typography (Playfair Display + Alfa Slab One).
  // Inter is already loaded by the host pages.
  function ensurePopupFonts() {
    if (document.getElementById('gaf-modal-fonts')) return;
    var link = document.createElement('link');
    link.id = 'gaf-modal-fonts';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&display=swap';
    document.head.appendChild(link);
  }

  var backdrop = null;

  function openPopup() {
    if (backdrop) return;
    ensurePopupFonts();
    var paymentUrl = getSupportUrl() + '#/payment';
    var logoUrl = getLogoUrl();
    var photoUrl = getPhotoUrl();

    backdrop = document.createElement("div");
    backdrop.className = "gaf-modal-backdrop";
    backdrop.innerHTML =
      '<div class="gaf-modal" role="dialog" aria-modal="true" aria-labelledby="gafModalTitle">' +
        '<button class="close" type="button" aria-label="Close">' +
          '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round">' +
            '<path d="M2 2 L10 10 M10 2 L2 10"/>' +
          '</svg>' +
        '</button>' +

        '<div class="photo-banner" aria-hidden="true" style="background-image:url(\'' + photoUrl + '\');">' +
          '<span class="brand-chip">' +
            '<img src="' + logoUrl + '" alt="" onerror="this.style.display=\'none\'">' +
            '<span>Vintage Aviation News</span>' +
          '</span>' +
          '<div class="photo-fade"></div>' +
          '<div class="noads-badge" aria-hidden="true">' +
            '<svg viewBox="0 0 84 84" fill="none">' +
              '<circle cx="42" cy="42" r="30" stroke="rgba(255,255,255,0.85)" stroke-width="1.5" fill="none"/>' +
              '<text x="42" y="48" text-anchor="middle" font-family="\'Alfa Slab One\', serif" font-size="17" letter-spacing="2" fill="#ffffff">ADS</text>' +
              '<line x1="20" y1="20" x2="64" y2="64" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>' +
            '</svg>' +
          '</div>' +
        '</div>' +

        '<section class="hero">' +
          '<h1 id="gafModalTitle" class="headline">' +
            'Read Vintage Aviation' +
            '<br/>' +
            '<span class="accent">Without Ads.</span>' +
          '</h1>' +
          '<p class="sub">No popups. No banners. Just pure content.</p>' +
        '</section>' +

        '<section class="price-block">' +
          '<div class="price">' +
            '<span class="strike">$3</span>' +
            '<span class="amount">$1</span>' +
            '<span class="per">/ month</span>' +
          '</div>' +
          '<div><span class="pill">Less than a coffee</span></div>' +
        '</section>' +

        '<div class="features">' +
          '<div class="feature">' +
            '<span class="feature-icon red">' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
                '<path d="M3 3l18 18"/>' +
                '<path d="M10.6 6.2A10.5 10.5 0 0 1 12 6c5 0 9 4.5 10 6-0.4 0.7-1.4 2-2.8 3.3"/>' +
                '<path d="M6.6 6.6C4.4 8 2.6 10.4 2 12c1 1.5 5 6 10 6 1.6 0 3.1-0.5 4.4-1.2"/>' +
                '<path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>' +
              '</svg>' +
            '</span>' +
            '<span class="feature-text">No ads.<br/>Ever.</span>' +
          '</div>' +
          '<div class="feature">' +
            '<span class="feature-icon">' +
              '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 L4 14 h6 l-1 8 9-12 h-6 l1-8 z"/></svg>' +
            '</span>' +
            '<span class="feature-text">Faster pages.<br/>Better experience.</span>' +
          '</div>' +
          '<div class="feature">' +
            '<span class="feature-icon red">' +
              '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7-4.35-9.5-9C1 8.5 3 5 6.5 5 8.6 5 10.5 6.2 12 8c1.5-1.8 3.4-3 5.5-3C21 5 23 8.5 21.5 12 19 16.65 12 21 12 21z"/></svg>' +
            '</span>' +
            '<span class="feature-text">Support quality content.</span>' +
          '</div>' +
        '</div>' +

        '<div class="cta-wrap">' +
          '<button class="cta" type="button">' +
            'Subscribe Now' +
            '<span class="arrow" aria-hidden="true">' +
              '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
                '<path d="M3 6 H9 M6 3 L9 6 L6 9"/>' +
              '</svg>' +
            '</span>' +
          '</button>' +

          '<div class="meta">' +
            '<span class="lock">' +
              '<svg viewBox="0 0 12 14" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">' +
                '<rect x="2" y="6" width="8" height="7" rx="1.2"/>' +
                '<path d="M4 6 V4 a2 2 0 0 1 4 0 V6"/>' +
              '</svg>' +
              'Secure payment' +
            '</span>' +
            '<span class="gaf-dot"></span>' +
            '<span class="anytime">Cancel anytime</span>' +
          '</div>' +
        '</div>' +

        '<div class="no-thanks-row">' +
          '<button class="no-thanks" type="button">No thanks</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(backdrop);
    document.body.style.overflow = "hidden";

    backdrop.addEventListener("click", function (e) { if (e.target === backdrop) closePopup(); });
    backdrop.querySelector(".close").addEventListener("click", closePopup);
    backdrop.querySelector(".no-thanks").addEventListener("click", closePopup);
    backdrop.querySelector(".cta").addEventListener("click", function () {
      window.location.href = paymentUrl;
    });
  }

  function closePopup() {
    if (!backdrop) return;
    backdrop.remove(); backdrop = null;
    document.body.style.overflow = "";
  }

  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closePopup(); });

  // ===== AUTO-OPEN =====
  // Allow ?popup=open (or ?popup=1) to auto-open the popup on page load.
  // Useful for sharing a "popup design" preview URL.
  var POPUP_AUTO = (function () {
    try {
      var p = new URLSearchParams(window.location.search).get('popup');
      return p === 'open' || p === '1';
    } catch (e) { return false; }
  })();

  // ===== INIT =====
  function init() {
    setTimeout(function () {
      scanAds();
      injectStickyBanner();
      if (CFG.poll > 0) setInterval(scanAds, CFG.poll);
      if (typeof MutationObserver !== "undefined") {
        new MutationObserver(function (mutations) {
          var shouldScan = false;
          mutations.forEach(function (m) { if (m.addedNodes.length) shouldScan = true; });
          if (shouldScan) scanAds();
        }).observe(document.body, { childList: true, subtree: true });
      }
    }, CFG.delay);

    if (POPUP_AUTO) setTimeout(openPopup, 600);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  // Expose globally so any CTA can trigger the popup:
  //   <button onclick="vanOpenAdFreePopup()">…</button>
  window.vanOpenAdFreePopup = openPopup;
})();
