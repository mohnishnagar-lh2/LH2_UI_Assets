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

/* === PAYWALL MODAL (van_paywall_standalone, design from claude.ai/design) === */
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
  --van-navy:#1f3a5f;--van-navy-deep:#0e1d33;--van-red:#c8323a;--van-red-deep:#a8262d;
  --van-paper:#fbf7ee;--van-cream-line:#e8e0cc;
  --van-ink:#14202e;--van-ink-2:#3b4a5e;--van-ink-3:#7a8595;
  --van-peach:#fde2d6;--van-eyebrow:#ffb8bd;--van-italic:#ffd9a8;
  width:460px;max-width:100%;max-height:calc(100vh - 48px);overflow-y:auto;
  background:var(--van-paper);border-radius:14px;border:1px solid rgba(0,0,0,0.08);
  box-shadow:0 30px 80px -20px rgba(0,0,0,0.45);
  position:relative;color:var(--van-ink);
  animation:gafPop .35s cubic-bezier(.2,.7,.2,1) both;
}
.gaf-modal *{box-sizing:border-box;}
.gaf-modal .close{
  position:absolute;top:14px;right:14px;width:32px;height:32px;border-radius:50%;
  border:1px solid rgba(255,255,255,0.35);background:rgba(20,32,46,0.45);
  backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);
  color:#fff;display:grid;place-items:center;cursor:pointer;z-index:6;padding:0;
}
.gaf-modal .close svg{display:block;}

/* COVER PHOTO */
.gaf-modal .cover{position:relative;height:380px;background-size:cover;background-position:center 45%;}
.gaf-modal .cover::after{
  content:'';position:absolute;inset:0;
  background:linear-gradient(180deg,rgba(14,29,51,0) 30%,rgba(14,29,51,0.4) 60%,rgba(14,29,51,0.92) 100%);
}

/* MASTHEAD bar at top of photo */
.gaf-modal .masthead{
  position:absolute;top:0;left:0;right:0;
  padding:14px 20px;display:flex;align-items:center;
  color:#fff;font-size:10px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;
  border-bottom:1px solid rgba(255,255,255,0.2);
  background:linear-gradient(180deg,rgba(0,0,0,0.45),transparent);
  z-index:2;
}
.gaf-modal .masthead .brand{display:inline-flex;align-items:center;gap:8px;}
.gaf-modal .masthead .logo{width:22px;height:22px;background:#fff;border-radius:4px;padding:2px;box-sizing:border-box;object-fit:contain;}

/* HEADLINE overlay (bottom of photo) */
.gaf-modal .headline-wrap{position:absolute;left:0;right:0;bottom:0;padding:20px 28px 22px;color:#fff;z-index:2;}
.gaf-modal .eyebrow{font-size:10.5px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;color:var(--van-eyebrow);margin-bottom:8px;}
.gaf-modal .headline{
  margin:0;font-family:'Playfair Display',Georgia,serif;
  font-size:40px;font-weight:600;line-height:1.05;letter-spacing:-0.02em;
  text-wrap:balance;
}
.gaf-modal .headline em{font-style:italic;color:var(--van-italic);}

/* PRICE */
.gaf-modal .price-block{padding:22px 28px 8px;text-align:center;}
.gaf-modal .price-row{display:inline-flex;align-items:baseline;gap:8px;font-family:'Playfair Display',Georgia,serif;}
.gaf-modal .price-old{font-size:18px;color:var(--van-ink-3);text-decoration:line-through;text-decoration-color:var(--van-red);text-decoration-thickness:1.5px;}
.gaf-modal .price-new{font-size:44px;font-weight:700;color:var(--van-navy-deep);letter-spacing:-0.02em;line-height:1;}
.gaf-modal .price-unit{font-family:'Inter',system-ui,sans-serif;font-size:13px;color:var(--van-ink-2);font-weight:500;}
.gaf-modal .pitch{margin:10px 0 0;font-size:13px;color:var(--van-ink-2);line-height:1.5;}

/* VALUE PROPS */
.gaf-modal .values{
  display:grid;grid-template-columns:repeat(3,1fr);gap:8px;
  padding:14px 24px 6px;margin:8px 16px 0;border-top:1px solid var(--van-cream-line);
}
.gaf-modal .value{display:flex;flex-direction:column;align-items:center;text-align:center;padding:6px 4px;gap:10px;}
.gaf-modal .value-icon{width:44px;height:44px;border-radius:50%;background:var(--van-peach);color:var(--van-red-deep);display:grid;place-items:center;}
.gaf-modal .value-icon svg{width:20px;height:20px;display:block;}
.gaf-modal .value-label{font-size:12px;color:var(--van-ink-2);line-height:1.4;font-weight:600;max-width:15ch;}

/* CTA */
.gaf-modal .cta-wrap{padding:18px 28px 18px;}
.gaf-modal .cta{
  display:flex;align-items:center;justify-content:center;gap:10px;width:100%;
  background:linear-gradient(180deg,var(--van-red) 0%,var(--van-red-deep) 100%);
  color:#fff;border:none;border-radius:10px;padding:16px 20px;
  font-family:'Inter',system-ui,sans-serif;font-size:15.5px;font-weight:700;letter-spacing:0.01em;
  cursor:pointer;position:relative;
  box-shadow:0 1px 0 rgba(255,255,255,0.18) inset,0 -1px 0 rgba(0,0,0,0.18) inset,0 6px 18px -4px rgba(168,38,45,0.53);
  transition:transform .12s ease,box-shadow .12s ease,filter .15s ease;
}
.gaf-modal .cta:hover{filter:brightness(1.05);transform:translateY(-1px);}
.gaf-modal .cta:active{transform:translateY(0);}
.gaf-modal .cta-arrow{position:absolute;right:20px;display:grid;place-items:center;width:22px;height:22px;border-radius:50%;background:rgba(255,255,255,0.18);transition:transform .15s ease,background .15s ease;}
.gaf-modal .cta:hover .cta-arrow{transform:translateX(3px);background:rgba(255,255,255,0.26);}
.gaf-modal .cta-arrow svg{display:block;}

.gaf-modal .assurance{margin-top:12px;display:flex;justify-content:center;gap:10px;font-size:12px;color:var(--van-ink-3);}
.gaf-modal .assurance strong{color:var(--van-navy);font-weight:600;}

.gaf-modal .nothanks{text-align:center;padding:2px 0 18px;}
.gaf-modal .nothanks button{
  background:none;border:none;font-family:'Inter',system-ui,sans-serif;font-size:13px;
  color:var(--van-ink-3);text-decoration:underline;text-underline-offset:3px;text-decoration-color:#d8c89f;
  cursor:pointer;padding:4px 8px;
}
.gaf-modal .nothanks button:hover{color:var(--van-navy);text-decoration-color:var(--van-ink-3);}

@keyframes gafPop{from{opacity:0;transform:translateY(8px) scale(0.98);}to{opacity:1;transform:translateY(0) scale(1);}}

/* Short viewports — common laptop heights of 700–760px */
@media(max-height:820px){
  .gaf-modal-backdrop{padding:12px;}
  .gaf-modal .cover{height:280px;}
  .gaf-modal .headline{font-size:32px;}
  .gaf-modal .price-block{padding:16px 28px 6px;}
  .gaf-modal .price-new{font-size:38px;}
  .gaf-modal .pitch{margin-top:8px;font-size:12.5px;}
  .gaf-modal .values{padding:10px 24px 4px;}
  .gaf-modal .value-icon{width:38px;height:38px;}
  .gaf-modal .value-icon svg{width:17px;height:17px;}
  .gaf-modal .value-label{font-size:11.5px;}
  .gaf-modal .cta-wrap{padding:12px 28px 14px;}
  .gaf-modal .cta{padding:13px 18px;font-size:14.5px;}
  .gaf-modal .nothanks{padding:0 0 14px;}
}
@media(max-height:680px){
  .gaf-modal .cover{height:220px;}
  .gaf-modal .headline-wrap{padding:14px 24px 16px;}
  .gaf-modal .headline{font-size:26px;}
  .gaf-modal .eyebrow{margin-bottom:6px;font-size:9.5px;}
  .gaf-modal .price-new{font-size:32px;}
  .gaf-modal .price-old{font-size:15px;}
}

@media(max-width:480px){
  .gaf-modal .cover{height:300px;}
  .gaf-modal .headline-wrap{padding:18px 22px 18px;}
  .gaf-modal .headline{font-size:30px;}
  .gaf-modal .price-block{padding:18px 22px 6px;}
  .gaf-modal .values{padding:12px 16px 4px;margin:8px 8px 0;}
  .gaf-modal .cta-wrap{padding:14px 22px 14px;}
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
    if (path.includes('/pages/')) return '../assets/historic-b17-5000th.jpg';
    return 'assets/historic-b17-5000th.jpg';
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
          '<svg viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round">' +
            '<path d="M2 2 L10 10 M10 2 L2 10"/>' +
          '</svg>' +
        '</button>' +

        '<div class="cover" style="background-image:url(\'' + photoUrl + '\');">' +
          '<div class="masthead">' +
            '<span class="brand">' +
              '<img class="logo" src="' + logoUrl + '" alt="" onerror="this.style.display=\'none\'">' +
              'Vintage Aviation News' +
            '</span>' +
          '</div>' +
          '<div class="headline-wrap">' +
            '<div class="eyebrow">The Subscriber Edition</div>' +
            '<h1 id="gafModalTitle" class="headline">Read every <em>story</em><br/>without a single ad.</h1>' +
          '</div>' +
        '</div>' +

        '<div class="price-block">' +
          '<div class="price-row">' +
            '<span class="price-old">$3</span>' +
            '<span class="price-new">$1</span>' +
            '<span class="price-unit">per month</span>' +
          '</div>' +
          '<p class="pitch">Less than a coffee. More than worth it.</p>' +
        '</div>' +

        '<div class="values">' +
          '<div class="value">' +
            '<span class="value-icon">' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
                '<path d="M3 3l18 18"/>' +
                '<path d="M10.6 6.2A10.5 10.5 0 0 1 12 6c5 0 9 4.5 10 6-0.4 0.7-1.4 2-2.8 3.3"/>' +
                '<path d="M6.6 6.6C4.4 8 2.6 10.4 2 12c1 1.5 5 6 10 6 1.6 0 3.1-0.5 4.4-1.2"/>' +
                '<path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>' +
              '</svg>' +
            '</span>' +
            '<span class="value-label">Unlimited stories</span>' +
          '</div>' +
          '<div class="value">' +
            '<span class="value-icon">' +
              '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 L4 14 h6 l-1 8 9-12 h-6 l1-8 z"/></svg>' +
            '</span>' +
            '<span class="value-label">No ads ever.</span>' +
          '</div>' +
          '<div class="value">' +
            '<span class="value-icon">' +
              '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7-4.35-9.5-9C1 8.5 3 5 6.5 5 8.6 5 10.5 6.2 12 8c1.5-1.8 3.4-3 5.5-3C21 5 23 8.5 21.5 12 19 16.65 12 21 12 21z"/></svg>' +
            '</span>' +
            '<span class="value-label">Faster pages.</span>' +
          '</div>' +
        '</div>' +

        '<div class="cta-wrap">' +
          '<button class="cta" type="button">' +
            'Subscribe' +
            '<span class="cta-arrow" aria-hidden="true">' +
              '<svg viewBox="0 0 12 12" width="11" height="11" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
                '<path d="M3 6 H9 M6 3 L9 6 L6 9"/>' +
              '</svg>' +
            '</span>' +
          '</button>' +
          '<div class="assurance">' +
            '<strong>Secure payment</strong>' +
            '<span>·</span>' +
            '<span>Cancel anytime</span>' +
          '</div>' +
        '</div>' +

        '<div class="nothanks">' +
          '<button type="button">No thanks</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(backdrop);
    document.body.style.overflow = "hidden";

    backdrop.addEventListener("click", function (e) { if (e.target === backdrop) closePopup(); });
    backdrop.querySelector(".close").addEventListener("click", closePopup);
    backdrop.querySelector(".nothanks button").addEventListener("click", closePopup);
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
