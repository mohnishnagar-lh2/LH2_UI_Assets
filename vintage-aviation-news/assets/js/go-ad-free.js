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

/* === MODAL POPUP (Read Without Ads) === */
.gaf-modal-backdrop{position:fixed;inset:0;z-index:9999999;background:rgba(0,0,0,.65);display:flex;align-items:center;justify-content:center;padding:12px;animation:gafFadeIn .2s ease-out;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;}
.gaf-modal{width:500px;max-width:100%;max-height:calc(100vh - 24px);overflow-y:auto;border-radius:16px;background:#fff;box-shadow:0 30px 80px rgba(0,0,0,.45);position:relative;animation:gafPopIn .25s ease-out;}
.gaf-modal *{box-sizing:border-box;}
.gaf-modal-close{position:absolute;top:14px;right:14px;width:32px;height:32px;border-radius:50%;border:1px solid rgba(255,255,255,.35);background:transparent;color:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0;z-index:2;transition:background .15s;}
.gaf-modal-close:hover{background:rgba(255,255,255,.18);}

/* Header (dark) */
.gaf-modal-header{background:#0a1424;background:radial-gradient(circle at 50% 100%,#15263d 0%,#0a1424 65%);padding:24px 28px 28px;text-align:center;color:#fff;border-radius:16px 16px 0 0;}
.gaf-modal-logo{width:46px;height:auto;margin:0 auto 4px;display:block;filter:brightness(1.1);}
.gaf-modal-brand{font-size:11px;font-weight:700;letter-spacing:1.5px;color:#5fc4e0;margin-bottom:16px;}
.gaf-modal-no-ads{display:flex;justify-content:center;margin-bottom:12px;position:relative;}
.gaf-modal-no-ads-circle{width:56px;height:56px;border-radius:50%;border:3px solid ${P};display:inline-flex;align-items:center;justify-content:center;font-weight:800;color:${P};font-size:14px;letter-spacing:.4px;position:relative;}
.gaf-modal-no-ads-circle::before{content:'';position:absolute;width:66px;height:4px;background:${P};transform:rotate(-45deg);border-radius:2px;left:50%;top:50%;margin-left:-33px;margin-top:-2px;}
.gaf-modal-title{font-size:30px;font-weight:800;line-height:1.05;margin:0 0 8px;font-family:'Merriweather',Georgia,serif;letter-spacing:-.4px;}
.gaf-modal-title-accent{display:block;color:${P};}
.gaf-modal-subtitle{font-size:13px;color:rgba(255,255,255,.78);margin:0;font-weight:400;}

/* Body (white) */
.gaf-modal-body{padding:20px 28px 18px;background:#fff;border-radius:0 0 16px 16px;}
.gaf-modal-price{display:flex;align-items:baseline;justify-content:center;gap:8px;margin-bottom:8px;}
.gaf-modal-price-strike{font-size:24px;color:#bdbdbd;text-decoration:line-through;font-weight:700;}
.gaf-modal-price-now{font-size:46px;font-weight:800;color:#1a1a1a;letter-spacing:-1.2px;line-height:1;}
.gaf-modal-price-period{font-size:15px;color:#6d6e78;font-weight:400;}
.gaf-modal-coffee{display:inline-flex;align-items:center;gap:7px;background:${PL};color:${P};padding:5px 14px 5px 10px;border-radius:999px;font-size:13px;font-weight:600;margin:0 auto;}
.gaf-modal-coffee-wrap{display:flex;justify-content:center;margin-bottom:14px;}
.gaf-modal-coffee-icon{width:18px;height:18px;border-radius:50%;background:#ffe1d1;display:inline-flex;align-items:center;justify-content:center;font-size:10px;}
.gaf-modal-divider{border:none;border-top:1px solid #f0f0f0;margin:0 0 14px;}
.gaf-modal-features{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-bottom:14px;}
.gaf-modal-feature{text-align:center;padding:0 4px;}
.gaf-modal-feature-icon{width:42px;height:42px;border-radius:50%;background:${PL};margin:0 auto 8px;display:flex;align-items:center;justify-content:center;color:${P};}
.gaf-modal-feature-icon svg{width:18px;height:18px;}
.gaf-modal-feature-text{font-size:12px;font-weight:500;color:#1a1a1a;line-height:1.35;}
.gaf-modal-cta{width:100%;background:${P};color:#fff;border:none;border-radius:12px;padding:14px 20px;font-size:16px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:space-between;font-family:inherit;transition:background .15s,transform .1s;box-shadow:0 4px 14px ${PT};margin-bottom:10px;}
.gaf-modal-cta:hover{background:${PD};}
.gaf-modal-cta:active{transform:translateY(1px);}
.gaf-modal-cta-text{flex:1;text-align:center;margin-left:20px;}
.gaf-modal-cta-arrow{font-size:18px;line-height:1;font-weight:600;}
.gaf-modal-meta{text-align:center;font-size:12px;color:#6d6e78;margin:0 0 6px;display:flex;align-items:center;justify-content:center;gap:8px;}
.gaf-modal-meta-dot{color:#cfcfcf;}
.gaf-modal-no-thanks{display:block;margin:0 auto;background:none;border:none;color:#aaa;font-size:12px;text-decoration:underline;cursor:pointer;padding:2px 8px;font-family:inherit;}
.gaf-modal-no-thanks:hover{color:#6d6e78;}

@media(max-height:680px){
  .gaf-modal-header{padding:18px 28px 22px;}
  .gaf-modal-logo{width:38px;margin-bottom:2px;}
  .gaf-modal-brand{margin-bottom:10px;font-size:10px;}
  .gaf-modal-no-ads-circle{width:46px;height:46px;font-size:12px;border-width:2.5px;}
  .gaf-modal-no-ads-circle::before{width:54px;height:3px;margin-left:-27px;margin-top:-1.5px;}
  .gaf-modal-title{font-size:24px;margin-bottom:6px;}
  .gaf-modal-subtitle{font-size:12px;}
  .gaf-modal-body{padding:14px 28px 14px;}
  .gaf-modal-price-now{font-size:38px;}
  .gaf-modal-price-strike{font-size:20px;}
  .gaf-modal-feature-icon{width:34px;height:34px;margin-bottom:5px;}
  .gaf-modal-feature-icon svg{width:14px;height:14px;}
  .gaf-modal-feature-text{font-size:11px;}
  .gaf-modal-cta{padding:11px 18px;font-size:15px;}
}
@media(max-width:540px){
  .gaf-modal-header{padding:22px 20px 24px;}
  .gaf-modal-title{font-size:24px;}
  .gaf-modal-body{padding:18px 20px 16px;}
  .gaf-modal-price-now{font-size:38px;}
  .gaf-modal-price-strike{font-size:20px;}
  .gaf-modal-features{gap:4px;}
  .gaf-modal-feature-text{font-size:11px;}
  .gaf-modal-feature-icon{width:38px;height:38px;}
}
@media(max-width:480px){
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
  // Two demo flows, controlled by ?flow= query param:
  //   ?flow=landing -> all CTAs go to the go-ad-free landing page
  //   ?flow=popup   -> all CTAs open the modal popup
  //   (no param)    -> mixed: navbar/sticky -> landing, ad pills -> popup
  var FLOW = (function () {
    try { return new URLSearchParams(window.location.search).get('flow'); }
    catch (e) { return null; }
  })();

  function makeAdBadge() {
    var badge = document.createElement("div");
    badge.className = "gaf-above-badge";
    badge.innerHTML = '<span class="gaf-cta-pill">Go Ad-Free</span>';
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

  // When flow=popup, intercept clicks on existing <a href="...go-ad-free/"> CTAs
  // (navbar Go Ad-Free button, sticky-bottom button) and open the popup instead.
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
  // Logo path resolves relative to current page depth (sub-pages need ../).
  function getLogoUrl() {
    var path = window.location.pathname;
    if (path.includes('/pages/')) return '../assets/van-logo.png';
    return 'assets/van-logo.png';
  }

  var backdrop = null;

  function openPopup() {
    if (backdrop) return;
    var paymentUrl = getSupportUrl() + '#/payment';
    var logoUrl = getLogoUrl();

    backdrop = document.createElement("div");
    backdrop.className = "gaf-modal-backdrop";
    backdrop.innerHTML =
      '<div class="gaf-modal" role="dialog" aria-modal="true" aria-labelledby="gafModalTitle">' +
        '<button class="gaf-modal-close" type="button" aria-label="Close">&times;</button>' +
        '<div class="gaf-modal-header">' +
          '<img class="gaf-modal-logo" src="' + logoUrl + '" alt="' + SITE_NAME + '" onerror="this.style.display=\'none\'">' +
          '<div class="gaf-modal-brand">VINTAGE AVIATION NEWS</div>' +
          '<div class="gaf-modal-no-ads"><span class="gaf-modal-no-ads-circle">ADS</span></div>' +
          '<h2 class="gaf-modal-title" id="gafModalTitle">Read Vintage Aviation' +
            '<span class="gaf-modal-title-accent">Without Ads.</span>' +
          '</h2>' +
          '<p class="gaf-modal-subtitle">No popups. No banners. Just pure content.</p>' +
        '</div>' +
        '<div class="gaf-modal-body">' +
          '<div class="gaf-modal-price">' +
            '<span class="gaf-modal-price-strike">$3</span>' +
            '<span class="gaf-modal-price-now">$1</span>' +
            '<span class="gaf-modal-price-period">/ month</span>' +
          '</div>' +
          '<div class="gaf-modal-coffee-wrap">' +
            '<span class="gaf-modal-coffee">' +
              '<span class="gaf-modal-coffee-icon">☕</span> Less than a coffee' +
            '</span>' +
          '</div>' +
          '<hr class="gaf-modal-divider">' +
          '<div class="gaf-modal-features">' +
            featureHtml(eyeOffSvg(), 'No ads.<br>Ever.') +
            featureHtml(boltSvg(),   'Faster pages.<br>Better experience.') +
            featureHtml(heartSvg(),  'Support quality<br>content.') +
          '</div>' +
          '<button class="gaf-modal-cta" type="button">' +
            '<span class="gaf-modal-cta-text">Subscribe Now</span>' +
            '<span class="gaf-modal-cta-arrow">›</span>' +
          '</button>' +
          '<div class="gaf-modal-meta">' +
            '<span>🔒 Secure payment</span>' +
            '<span class="gaf-modal-meta-dot">•</span>' +
            '<span>Cancel anytime</span>' +
          '</div>' +
          '<button class="gaf-modal-no-thanks" type="button">No thanks</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(backdrop);
    document.body.style.overflow = "hidden";

    backdrop.addEventListener("click", function (e) { if (e.target === backdrop) closePopup(); });
    backdrop.querySelector(".gaf-modal-close").addEventListener("click", closePopup);
    backdrop.querySelector(".gaf-modal-no-thanks").addEventListener("click", closePopup);
    backdrop.querySelector(".gaf-modal-cta").addEventListener("click", function () {
      window.location.href = paymentUrl;
    });
  }

  function closePopup() {
    if (!backdrop) return;
    backdrop.remove(); backdrop = null;
    document.body.style.overflow = "";
  }

  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closePopup(); });

  function featureHtml(iconSvg, text) {
    return '<div class="gaf-modal-feature">' +
      '<div class="gaf-modal-feature-icon">' + iconSvg + '</div>' +
      '<div class="gaf-modal-feature-text">' + text + '</div>' +
    '</div>';
  }

  function eyeOffSvg() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>' +
      '<line x1="1" y1="1" x2="23" y2="23"/>' +
    '</svg>';
  }
  function boltSvg() {
    return '<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>';
  }
  function heartSvg() {
    return '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';
  }

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
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  // Expose globally so any CTA can trigger the popup:
  //   <button onclick="vanOpenAdFreePopup()">…</button>
  window.vanOpenAdFreePopup = openPopup;
})();
