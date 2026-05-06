(function(){
"use strict";

var STYLE = ''
+ '.am-ra-pill{display:inline-flex;align-items:center;gap:6px;background:#e8633a;color:#fff;font-family:"Source Sans 3",-apple-system,sans-serif;font-size:12px;font-weight:700;letter-spacing:0.4px;padding:6px 14px;border-radius:4px;text-decoration:none;cursor:pointer;border:none;line-height:1;transition:background 0.15s, transform 0.15s}'
+ '.am-ra-pill:hover{background:#d44e25;color:#fff;text-decoration:none;transform:translateY(-1px)}'
+ '.am-ra-pill svg{width:11px;height:11px;flex-shrink:0;stroke:#fff;stroke-width:2.5;fill:none;stroke-linecap:round;stroke-linejoin:round}'
// Wrapper for inline ads (places pill above, right-aligned)
+ '.am-ra-wrap{display:flex;justify-content:flex-end;margin-bottom:6px;padding:0 4px}'
// Floating pill for fixed/sticky ads — sits ABOVE the ad container, right-aligned
+ '.am-ra-floating{position:absolute;bottom:calc(100% + 6px);right:0;z-index:5}'
;

function injectStyles(){
  if(document.getElementById("am-ra-style")) return;
  var s=document.createElement("style");
  s.id="am-ra-style";
  s.textContent=STYLE;
  document.head.appendChild(s);
}

function makePill(floating){
  var a=document.createElement("a");
  a.className="am-ra-pill" + (floating ? " am-ra-floating" : "");
  a.href="subscribe.html";
  a.innerHTML='<svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>Remove Ads';
  return a;
}

function annotate(){
  var ads = document.querySelectorAll(".demo-ad");
  Array.prototype.forEach.call(ads, function(ad){
    if(ad.getAttribute("data-am-ra")) return;
    ad.setAttribute("data-am-ra","1");

    var pos = getComputedStyle(ad).position;
    if(pos === "fixed" || pos === "absolute"){
      // Fixed/absolute ads: place pill inside, top-right
      if(getComputedStyle(ad).position === "static") ad.style.position = "relative";
      // Some fixed wrappers (.sv-container) already have inner content — append pill at top
      ad.appendChild(makePill(true));
    } else {
      // Inline ads: insert wrapper with pill ABOVE the ad
      var wrap = document.createElement("div");
      wrap.className = "am-ra-wrap";
      wrap.appendChild(makePill(false));
      ad.parentNode.insertBefore(wrap, ad);
    }
  });
}

if(document.readyState === "loading"){
  document.addEventListener("DOMContentLoaded", function(){ injectStyles(); annotate(); });
}else{
  injectStyles(); annotate();
}

// Re-run after dynamic insertions
if(typeof MutationObserver !== "undefined"){
  var obs = new MutationObserver(function(muts){
    var should=false;
    muts.forEach(function(m){ if(m.addedNodes.length) should=true; });
    if(should) setTimeout(annotate, 100);
  });
  obs.observe(document.documentElement, {childList:true, subtree:true});
}

})();
