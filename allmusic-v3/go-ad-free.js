(function () {
  "use strict";

  // ===== CONFIG =====
  var SITE_NAME = "AllMusic";

  var SCRIPT = document.currentScript || document.querySelector('script[src*="go-ad-free"]');
  var CFG = {
    delay: parseInt((SCRIPT && SCRIPT.getAttribute("data-delay")) || "1000", 10),
    poll: parseInt((SCRIPT && SCRIPT.getAttribute("data-poll")) || "3000", 10),
    extra: (SCRIPT && SCRIPT.getAttribute("data-selectors")) || "",
  };

  // ===== AD SELECTORS =====
  var AD_SELECTORS = [
    "ins.adsbygoogle",
    '[id^="google_ads"]',
    '[id^="div-gpt-ad"]',
    ".gpt-ad",
    "[data-google-query-id]",
    '[id^="amzn-assoc"]',
    'iframe[src*="amazon-adsystem"]',
    '[id*="freestar"]',
    '[class*="freestar"]',
    '[id^="mediavine"]',
    '[class*="mediavine"]',
    "[data-mediavine]",
    '[class*="adthrive"]',
    "[data-ad]",
    "[data-ad-slot]",
    "[data-ad-unit]",
    "[data-adunit]",
    "[data-dfp]",
    'iframe[src*="doubleclick"]',
    'iframe[src*="googlesyndication"]',
  ];

  var MARKER = "data-gaf-processed";

  // ===== CSS =====
  var styleEl = document.createElement("style");
  styleEl.textContent = `
@keyframes gafFadeIn{from{opacity:0;}to{opacity:1;}}

/* Pill above each ad slot (top-right, sits above ad's top boundary) */
.gaf-bar{display:flex;justify-content:flex-end;padding:0 2px;background:none;animation:gafFadeIn .25s ease-out;box-sizing:border-box;font-family:'Inter','Source Sans 3',-apple-system,sans-serif;margin:0 0 4px;position:relative;z-index:2;}
.gaf-bar-cta{display:inline-flex;align-items:center;gap:5px;padding:4px 11px;background:#fff;color:#1a7a8a;font-size:11px;font-weight:600;border-radius:11px;white-space:nowrap;cursor:pointer;transition:background .15s,color .15s,border-color .15s;border:1px solid #d6e4e7;line-height:1.2;font-family:inherit;}
.gaf-bar-cta:hover{background:#1a7a8a;color:#fff;border-color:#1a7a8a;}
.gaf-bar-cta svg{width:9px;height:9px;flex-shrink:0;stroke-width:2.5;}

/* === PAYWALL MODAL (vintage editorial, design from claude.ai/design — AllMusic palette) === */
.gaf-modal-backdrop{
  position:fixed;inset:0;z-index:9999999;
  background:radial-gradient(1200px 600px at 50% -10%,#2c8d9e 0%,#1a7a8a 40%,rgba(13,77,86,0.92) 100%),rgba(0,0,0,0.5);
  display:flex;align-items:center;justify-content:center;
  padding:24px 16px;
  animation:gafFadeIn .2s ease-out;
  font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
  -webkit-font-smoothing:antialiased;
}
.gaf-modal{
  --gaf-navy:#1a7a8a;--gaf-navy-deep:#0d4d56;--gaf-red:#c8323a;--gaf-red-deep:#a8262d;--gaf-red-soft:#f3dad8;
  --gaf-cream:#f1e8d6;--gaf-cream-2:#e8dcc4;--gaf-cream-3:#d8c89f;--gaf-paper:#fbf7ee;
  --gaf-ink:#0d2229;--gaf-ink-2:#34525a;--gaf-ink-3:#7a8b8f;--gaf-rule:#ddd0b3;--gaf-rule-2:#e8e0cc;
  width:100%;max-width:460px;max-height:calc(100vh - 48px);overflow-y:auto;
  background:var(--gaf-paper);border-radius:14px;border:1px solid rgba(0,0,0,0.08);
  box-shadow:0 1px 0 rgba(255,255,255,0.05) inset,0 30px 80px -20px rgba(0,0,0,0.65),0 10px 30px -15px rgba(0,0,0,0.45);
  position:relative;color:var(--gaf-ink);
  animation:gafPop .35s cubic-bezier(.2,.7,.2,1) both;
}
.gaf-modal *{box-sizing:border-box;}
.gaf-modal .close{
  position:absolute;top:16px;right:16px;width:32px;height:32px;border-radius:50%;
  border:1px solid var(--gaf-rule);background:#fff;color:var(--gaf-navy);
  display:grid;place-items:center;cursor:pointer;z-index:5;padding:0;
  transition:all .15s ease;
}
.gaf-modal .close:hover{background:#fff;color:var(--gaf-navy-deep);border-color:var(--gaf-cream-3);}
.gaf-modal .close svg{width:12px;height:12px;}

/* HERO */
.gaf-modal .hero{
  background:radial-gradient(120% 80% at 50% 0%,#f7eedd 0%,var(--gaf-cream) 60%,var(--gaf-cream-2) 100%);
  padding:18px 32px 20px;text-align:center;position:relative;
}
.gaf-modal .hero::after{
  content:"";position:absolute;left:0;right:0;bottom:0;height:1px;
  background:linear-gradient(90deg,transparent,var(--gaf-cream-3) 30%,var(--gaf-cream-3) 70%,transparent);
}
.gaf-modal .hero>*{position:relative;}
.gaf-modal .brand{display:flex;flex-direction:column;align-items:center;gap:4px;margin-bottom:6px;}
.gaf-modal .brand img{width:54px;height:54px;object-fit:contain;border-radius:11px;image-rendering:-webkit-optimize-contrast;image-rendering:crisp-edges;}
.gaf-modal .brand-name{
  font-family:'Inter',sans-serif;font-size:10.5px;font-weight:700;
  letter-spacing:0.22em;color:var(--gaf-navy);text-transform:uppercase;margin:0;
}
.gaf-modal .brand-rule{width:28px;height:1px;background:var(--gaf-cream-3);margin-top:0;}

.gaf-modal .stamp-wrap{display:flex;justify-content:center;margin:2px 0 6px;}
.gaf-modal .icon-noads{width:50px;height:50px;transform:rotate(-6deg);display:block;animation:gafStampIn .55s cubic-bezier(.2,.9,.3,1) .15s both;}

.gaf-modal .headline{
  font-family:'Playfair Display',Georgia,serif;font-weight:600;
  font-size:28px;line-height:1.1;letter-spacing:-0.015em;
  margin:0 0 6px;color:var(--gaf-navy-deep);text-wrap:balance;
}
.gaf-modal .headline .accent{
  font-family:'Playfair Display',Georgia,serif;color:var(--gaf-red);
  font-style:italic;font-weight:700;font-size:32px;line-height:1.05;
  display:inline-block;margin-top:2px;letter-spacing:-0.015em;
}
.gaf-modal .sub{margin:0;font-size:13.5px;color:var(--gaf-ink-2);line-height:1.5;}

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
  display:grid;place-items:center;box-shadow:0 1px 2px rgba(26,122,138,0.08);
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
@keyframes gafStampIn{0%{opacity:0;transform:rotate(-22deg) scale(1.4);}60%{opacity:1;transform:rotate(-3deg) scale(0.95);}100%{opacity:1;transform:rotate(-6deg) scale(1);}}

@media(max-height:780px){
  .gaf-modal-backdrop{padding:12px;}
  .gaf-modal .hero{padding:14px 32px 16px;}
  .gaf-modal .brand img{width:44px;height:44px;}
  .gaf-modal .brand-name{font-size:9.5px;}
  .gaf-modal .icon-noads{width:42px;height:42px;}
  .gaf-modal .stamp-wrap{margin:0 0 4px;}
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
}
`;
  document.head.appendChild(styleEl);

  // Inject Google Fonts (Playfair Display + Alfa Slab One). Inter loaded by host page if available.
  function ensurePopupFonts() {
    if (document.getElementById("gaf-modal-fonts")) return;
    var link = document.createElement("link");
    link.id = "gaf-modal-fonts";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&display=swap";
    document.head.appendChild(link);
  }

  // ===== AD SCANNING =====
  function getAllSelectors() {
    var s = AD_SELECTORS.slice();
    if (CFG.extra) CFG.extra.split(",").forEach(function (x) { x = x.trim(); if (x) s.push(x); });
    return s;
  }

  function scanAds() {
    var sel;
    try { sel = document.querySelectorAll(getAllSelectors().join(",")); } catch (e) { return; }
    sel.forEach(function (ad) {
      if (ad.getAttribute(MARKER)) return;
      var rect = ad.getBoundingClientRect();
      if (rect.width < 40 || rect.height < 20) return;
      var pos = getComputedStyle(ad).position;
      if (pos === "fixed" || pos === "absolute") { ad.setAttribute(MARKER, "1"); return; }
      ad.setAttribute(MARKER, "1");
      injectBar(ad);
    });
  }

  function injectBar(ad) {
    var bar = document.createElement("div");
    bar.className = "gaf-bar";
    bar.innerHTML = '<button class="gaf-bar-cta" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>Remove Ads</button>';
    bar.querySelector(".gaf-bar-cta").addEventListener("click", function (e) {
      e.stopPropagation();
      openPopup();
    });
    ad.parentNode.insertBefore(bar, ad);
  }

  // ===== URLS =====
  function getLogoUrl() {
    var path = window.location.pathname;
    if (path.indexOf("/pages/") !== -1) return "../assets/logo.svg";
    return "assets/logo.svg";
  }

  function getPaymentUrl() {
    var path = window.location.pathname;
    if (path.indexOf("/pages/") !== -1) return "../payment.html";
    return "payment.html";
  }

  // ===== POPUP =====
  var backdrop = null;

  function openPopup() {
    if (backdrop) return;
    ensurePopupFonts();
    var paymentUrl = getPaymentUrl();
    var logoUrl = getLogoUrl();

    backdrop = document.createElement("div");
    backdrop.className = "gaf-modal-backdrop";
    backdrop.innerHTML =
      '<div class="gaf-modal" role="dialog" aria-modal="true" aria-labelledby="gafModalTitle">' +
        '<button class="close" type="button" aria-label="Close">' +
          '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round">' +
            '<path d="M2 2 L10 10 M10 2 L2 10"/>' +
          "</svg>" +
        "</button>" +

        '<section class="hero">' +
          '<div class="brand">' +
            '<img src="' + logoUrl + '" alt="' + SITE_NAME + '" onerror="this.style.display=\'none\'">' +
            '<p class="brand-name">' + SITE_NAME + "</p>" +
            '<span class="brand-rule" aria-hidden="true"></span>' +
          "</div>" +

          '<div class="stamp-wrap">' +
            '<svg class="icon-noads" viewBox="0 0 80 80" fill="none" aria-hidden="true">' +
              '<circle cx="40" cy="40" r="32" stroke="#c8323a" stroke-width="2.6" fill="none"/>' +
              '<circle cx="40" cy="40" r="27" stroke="#c8323a" stroke-width="1" fill="none" opacity="0.55"/>' +
              "<text x=\"40\" y=\"46\" text-anchor=\"middle\" font-family=\"'Alfa Slab One', serif\" font-size=\"16\" letter-spacing=\"2\" fill=\"#c8323a\">ADS</text>" +
              '<line x1="17" y1="17" x2="63" y2="63" stroke="#c8323a" stroke-width="2.8" stroke-linecap="round"/>' +
            "</svg>" +
          "</div>" +

          '<h1 id="gafModalTitle" class="headline">' +
            "Read AllMusic" +
            "<br/>" +
            '<span class="accent">Without Ads.</span>' +
          "</h1>" +
          '<p class="sub">No popups. No banners. Just pure music journalism.</p>' +
        "</section>" +

        '<section class="price-block">' +
          '<div class="price">' +
            '<span class="strike">$3</span>' +
            '<span class="amount">$1</span>' +
            '<span class="per">/ month</span>' +
          "</div>" +
          '<div><span class="pill">Less than a coffee</span></div>' +
        "</section>" +

        '<div class="features">' +
          '<div class="feature">' +
            '<span class="feature-icon red">' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
                '<path d="M3 3l18 18"/>' +
                '<path d="M10.6 6.2A10.5 10.5 0 0 1 12 6c5 0 9 4.5 10 6-0.4 0.7-1.4 2-2.8 3.3"/>' +
                '<path d="M6.6 6.6C4.4 8 2.6 10.4 2 12c1 1.5 5 6 10 6 1.6 0 3.1-0.5 4.4-1.2"/>' +
                '<path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>' +
              "</svg>" +
            "</span>" +
            '<span class="feature-text">No ads.<br/>Ever.</span>' +
          "</div>" +
          '<div class="feature">' +
            '<span class="feature-icon">' +
              '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 L4 14 h6 l-1 8 9-12 h-6 l1-8 z"/></svg>' +
            "</span>" +
            '<span class="feature-text">Faster pages.<br/>Better experience.</span>' +
          "</div>" +
          '<div class="feature">' +
            '<span class="feature-icon red">' +
              '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7-4.35-9.5-9C1 8.5 3 5 6.5 5 8.6 5 10.5 6.2 12 8c1.5-1.8 3.4-3 5.5-3C21 5 23 8.5 21.5 12 19 16.65 12 21 12 21z"/></svg>' +
            "</span>" +
            '<span class="feature-text">Support quality content.</span>' +
          "</div>" +
        "</div>" +

        '<div class="cta-wrap">' +
          '<button class="cta" type="button">' +
            "Subscribe Now" +
            '<span class="arrow" aria-hidden="true">' +
              '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
                '<path d="M3 6 H9 M6 3 L9 6 L6 9"/>' +
              "</svg>" +
            "</span>" +
          "</button>" +

          '<div class="meta">' +
            '<span class="lock">' +
              '<svg viewBox="0 0 12 14" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">' +
                '<rect x="2" y="6" width="8" height="7" rx="1.2"/>' +
                '<path d="M4 6 V4 a2 2 0 0 1 4 0 V6"/>' +
              "</svg>" +
              "Secure payment" +
            "</span>" +
            '<span class="gaf-dot"></span>' +
            '<span class="anytime">Cancel anytime</span>' +
          "</div>" +
        "</div>" +

        '<div class="no-thanks-row">' +
          '<button class="no-thanks" type="button">No thanks</button>' +
        "</div>" +
      "</div>";

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
    backdrop.remove();
    backdrop = null;
    document.body.style.overflow = "";
  }

  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closePopup(); });

  // ===== AUTO-OPEN =====
  // ?popup=open or ?popup=1 auto-opens the popup on page load
  var POPUP_AUTO = (function () {
    try {
      var p = new URLSearchParams(window.location.search).get("popup");
      return p === "open" || p === "1";
    } catch (e) { return false; }
  })();

  // ===== INTERCEPT EXISTING CTAs =====
  // Any anchor that points to landing.html or contains "Go Ad-Free" should open the popup.
  document.addEventListener("click", function (e) {
    var link = e.target && e.target.closest && e.target.closest("a");
    if (!link) return;
    var href = link.getAttribute("href") || "";
    // Intercept landing-page links so they open the popup instead.
    if (/(^|\/)landing\.html(\?|#|$)/.test(href) && !/[?&]flow=landing/.test(window.location.search)) {
      e.preventDefault();
      openPopup();
    }
  });

  // ===== INIT =====
  function init() {
    setTimeout(function () {
      scanAds();
      if (CFG.poll > 0) setInterval(scanAds, CFG.poll);
      if (typeof MutationObserver !== "undefined") {
        new MutationObserver(function (muts) {
          var should = false;
          muts.forEach(function (m) { if (m.addedNodes.length) should = true; });
          if (should) setTimeout(scanAds, 300);
        }).observe(document.body, { childList: true, subtree: true });
      }
    }, CFG.delay);

    if (POPUP_AUTO) setTimeout(openPopup, 500);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  // Globals — keep both names for compatibility with existing inline onclick handlers.
  window.gafOpenPopup = openPopup;
  window.gafOpenDonate = openPopup;
  window.gafOpenWithPlan = openPopup;
  window.amOpenAdFreePopup = openPopup;
})();
