(function(){
"use strict";

// ========== CONFIG ==========
var STORAGE_KEY = "allmusic_user";

var DEMO_ACCOUNTS = [
  {name:"Mohnish Nagar", email:"mohnish.nagar@gmail.com", color:"#4285F4", initial:"M"},
  {name:"Mohnish Clive", email:"mohnish.clive@gmail.com", color:"#EA4335", initial:"M"}
];

// ========== STATE ==========
function getUser(){
  try{
    var raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  }catch(e){ return null; }
}
function setUser(u){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(u)); }catch(e){}
  applyState();
  document.dispatchEvent(new CustomEvent("am-auth-change", {detail:u}));
}
function clearUser(){
  try{ localStorage.removeItem(STORAGE_KEY); }catch(e){}
  applyState();
  document.dispatchEvent(new CustomEvent("am-auth-change", {detail:null}));
}

// ========== STYLES ==========
var CSS = ''
+ '.am-modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:10000;display:flex;align-items:center;justify-content:center;padding:20px;font-family:"Source Sans 3",-apple-system,sans-serif;animation:amFade .15s ease}'
+ '@keyframes amFade{from{opacity:0}to{opacity:1}}'
+ '.am-modal{background:#fff;border-radius:8px;width:100%;max-width:400px;box-shadow:0 16px 48px rgba(0,0,0,0.3);overflow:hidden;animation:amSlide .2s ease}'
+ '@keyframes amSlide{from{transform:translateY(8px);opacity:0}to{transform:translateY(0);opacity:1}}'
+ '.am-modal-head{padding:20px 24px 16px;border-bottom:1px solid #eee;display:flex;align-items:center;gap:10px}'
+ '.am-google-logo{width:22px;height:22px}'
+ '.am-modal-title{font-size:14px;color:#202124;font-weight:400}'
+ '.am-modal-sub{padding:18px 24px 6px;font-size:22px;color:#202124;font-weight:400;line-height:1.3}'
+ '.am-modal-app{padding:0 24px 18px;font-size:14px;color:#5f6368}'
+ '.am-modal-app strong{color:#1a73e8;font-weight:500}'
+ '.am-account{display:flex;align-items:center;gap:14px;padding:14px 24px;cursor:pointer;border:none;background:transparent;width:100%;text-align:left;font-family:inherit;border-top:1px solid #eee;transition:background .12s}'
+ '.am-account:hover{background:#f8f9fa}'
+ '.am-account-avatar{width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:500;font-size:16px;flex-shrink:0;font-family:Roboto,Arial,sans-serif}'
+ '.am-account-info{flex:1;min-width:0}'
+ '.am-account-name{font-size:14px;color:#202124;font-weight:500;line-height:1.3}'
+ '.am-account-email{font-size:13px;color:#5f6368;line-height:1.3;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}'
+ '.am-account-other{display:flex;align-items:center;gap:14px;padding:14px 24px;cursor:pointer;border:none;background:transparent;width:100%;text-align:left;font-family:inherit;border-top:1px solid #eee;color:#5f6368;font-size:14px;transition:background .12s}'
+ '.am-account-other:hover{background:#f8f9fa}'
+ '.am-account-other-icon{width:36px;height:36px;border-radius:50%;background:#f1f3f4;display:flex;align-items:center;justify-content:center;color:#5f6368;flex-shrink:0}'
+ '.am-modal-foot{padding:16px 24px;font-size:11px;color:#5f6368;line-height:1.5;border-top:1px solid #eee;background:#fafafa}'
+ '.am-modal-close{position:absolute;top:14px;right:14px;background:transparent;border:none;color:#5f6368;font-size:22px;cursor:pointer;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;line-height:1}'
+ '.am-modal-close:hover{background:rgba(0,0,0,0.05)}'
// Header user pill
+ '.am-user-pill{display:inline-flex;align-items:center;gap:8px;color:#fff;font-size:11px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase;font-family:"Source Sans 3",sans-serif}'
+ '.am-user-pill .am-gear,.am-user-pill .am-flag{cursor:pointer;color:#aaa;font-size:13px;line-height:1}'
+ '.am-user-pill .am-gear:hover,.am-user-pill .am-flag:hover{color:#fff}'
+ '.am-user-name{cursor:pointer}'
+ '.am-user-name:hover{text-decoration:underline}'
// Mark Remove Ads link visually when logged in
+ 'body.am-logged-in .am-remove-ads{outline:2px solid #d33;outline-offset:2px;border-radius:2px}'
;

function injectStyles(){
  if(document.getElementById("am-auth-style")) return;
  var s=document.createElement("style");
  s.id="am-auth-style";
  s.textContent=CSS;
  document.head.appendChild(s);
}

// ========== GOOGLE SSO MODAL ==========
function svgGoogleLogo(){
  return '<svg class="am-google-logo" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>';
}

function showSignInModal(opts){
  injectStyles();
  opts = opts || {};
  var siteName = opts.siteName || "AllMusic";

  var overlay = document.createElement("div");
  overlay.className = "am-modal-overlay";
  overlay.setAttribute("role","dialog");

  var accountsHtml = DEMO_ACCOUNTS.map(function(a, i){
    return ''
      + '<button class="am-account" data-idx="'+i+'">'
      +   '<div class="am-account-avatar" style="background:'+a.color+'">'+a.initial+'</div>'
      +   '<div class="am-account-info">'
      +     '<div class="am-account-name">'+a.name+'</div>'
      +     '<div class="am-account-email">'+a.email+'</div>'
      +   '</div>'
      + '</button>';
  }).join("");

  overlay.innerHTML = ''
    + '<div class="am-modal" style="position:relative">'
    +   '<button class="am-modal-close" aria-label="Close">&times;</button>'
    +   '<div class="am-modal-head">'+ svgGoogleLogo() +'<span class="am-modal-title">Sign in with Google</span></div>'
    +   '<div class="am-modal-sub">Choose an account</div>'
    +   '<div class="am-modal-app">to continue to <strong>'+siteName+'</strong></div>'
    +   accountsHtml
    +   '<button class="am-account-other"><span class="am-account-other-icon"><i class="fas fa-user-plus"></i></span><span>Use another account</span></button>'
    +   '<div class="am-modal-foot">To continue, Google will share your name, email address, language preference, and profile picture with '+siteName+'. Before using this app, you can review '+siteName+'\'s <a href="#">privacy policy</a> and <a href="#">terms of service</a>.</div>'
    + '</div>';

  document.body.appendChild(overlay);
  document.body.style.overflow = "hidden";

  function close(){
    document.body.style.overflow = "";
    overlay.remove();
  }

  overlay.querySelector(".am-modal-close").addEventListener("click", close);
  overlay.addEventListener("click", function(e){ if(e.target===overlay) close(); });

  Array.prototype.forEach.call(overlay.querySelectorAll(".am-account"), function(btn){
    btn.addEventListener("click", function(){
      var idx = parseInt(btn.getAttribute("data-idx"),10);
      var acc = DEMO_ACCOUNTS[idx];
      setUser({name:acc.name, email:acc.email, color:acc.color, initial:acc.initial});
      close();
      if(typeof opts.onSignedIn === "function") opts.onSignedIn(getUser());
    });
  });

  overlay.querySelector(".am-account-other").addEventListener("click", function(){
    var acc = {name:"Demo User", email:"demo.user@gmail.com", color:"#34A853", initial:"D"};
    setUser(acc);
    close();
    if(typeof opts.onSignedIn === "function") opts.onSignedIn(getUser());
  });
}

// ========== STATE APPLICATION ==========
function applyState(){
  var u = getUser();
  if(u){
    document.body.classList.add("am-logged-in");
    document.body.classList.remove("am-logged-out");
  }else{
    document.body.classList.add("am-logged-out");
    document.body.classList.remove("am-logged-in");
  }

  // Hide help banner when logged in
  var banner = document.getElementById("helpBanner");
  if(banner){
    banner.style.display = u ? "none" : "";
  }

  // Header right zone — swap SIGN UP/LOG IN with user pill
  var authBox = document.querySelector(".auth-links");
  if(authBox){
    if(u){
      authBox.innerHTML = ''
        + '<span class="am-user-pill">'
        +   '<span class="am-user-name" title="'+u.email+'">'+ (u.name.split(" ")[0].toUpperCase()) +'</span>'
        +   '<span class="am-gear" title="Settings"><i class="fas fa-cog"></i></span>'
        +   '<span class="am-flag" title="Sign out" data-am-signout><i class="fas fa-flag"></i></span>'
        + '</span>';
      var signoutEl = authBox.querySelector("[data-am-signout]");
      if(signoutEl){
        signoutEl.addEventListener("click", function(){
          if(confirm("Sign out of AllMusic?")) clearUser();
        });
      }
    }else{
      authBox.innerHTML = '<a href="login.html">SIGN UP</a> / <a href="login.html">LOG IN</a>';
    }
  }
}

// ========== PUBLIC API ==========
window.AMAuth = {
  getUser: getUser,
  setUser: setUser,
  signOut: clearUser,
  signIn: showSignInModal,
  apply: applyState
};

document.addEventListener("DOMContentLoaded", function(){
  injectStyles();
  applyState();
});

// React to changes from other tabs
window.addEventListener("storage", function(e){
  if(e.key === STORAGE_KEY) applyState();
});

})();
