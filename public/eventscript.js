"use strict";
(() => {
  var u = "https://collector.onedollarstats.com/events",
    l = document.currentScript,
    s = h(l);
  async function c(t, e) {
    let n = Object.assign(Object.assign({}, await d()), { e: [Object.assign({ h: s }, t)] });
    if ((e && Object.keys(e).length > 0 && (n.qs = e), navigator.sendBeacon !== void 0)) {
      if (navigator.sendBeacon(r(), JSON.stringify(n))) return;
      console.warn("sendBeacon() didn't queue the request, falling back to fetch()");
    }
    fetch(r(), {
      body: JSON.stringify(n),
      headers: { "Content-Type": "application/json" },
      keepalive: !0,
      method: "POST",
    }).catch((i) => console.error(`fetch() failed: ${i.message}`));
  }
  async function d() {
    let t = new URL(location.href);
    return (t.search = ""), { u: t.href };
  }
  function g() {
    let t = new URLSearchParams(location.search),
      e = {};
    return (
      ["utm_campaign", "utm_source", "utm_medium", "utm_term", "utm_content"].forEach((n) => {
        let i = t.get(n);
        i && (e[n] = i);
      }),
      e
    );
  }
  async function o() {
    if (w() && !m()) return a("PageView", "Running on localhost");
    if (p()) return a("PageView", "Running in a headless browser");
    if (v()) return a("PageView", "Ignore flag is set");
    if (!s && o.lastPage === location.pathname) return a("PageView", "Pathname has not changed");
    o.lastPage = location.pathname;
    let t = new URL(location.href),
      e = document.referrer ? new URL(document.referrer) : void 0;
    e && (e.search = "");
    let n = g();
    c({ t: "PageView", r: e && e.hostname !== t.hostname ? e.href : void 0 }, n);
  }
  (function (t) {
    t.lastPage = null;
  })(o || (o = {}));
  if (window.history.pushState) {
    let t = window.history.pushState;
    (window.history.pushState = function (e, n, i) {
      t.apply(this, [e, n, i]), o();
    }),
      window.addEventListener("popstate", o);
  }
  document.visibilityState !== "visible"
    ? document.addEventListener("visibilitychange", () => {
        !o.lastPage && document.visibilityState === "visible" && o();
      })
    : o();
  async function f(t, e) {
    c({ t, p: e || void 0 });
  }
  function r() {
    let t = document.querySelector("#stonks") || document.currentScript;
    return t?.getAttribute("data-url") || u;
  }
  window.trackCustomEvent = f;
  function h(t) {
    return t.getAttribute("data-hash-routing") !== null;
  }
  function m() {
    let t = document.querySelector("#stonks") || document.currentScript,
      e = t?.getAttribute("data-allow-localhost");
    return e === null ? !1 : e !== "false";
  }
  function w() {
    return (
      /^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(location.hostname) ||
      location.protocol === "file:"
    );
  }
  function p() {
    return !!(
      window._phantom ||
      window.__nightmare ||
      window.navigator.webdriver ||
      window.Cypress
    );
  }
  function v() {
    return window.localStorage.getItem("unexpected_ignore") === "true";
  }
  function a(t, e) {
    console.warn(`Ignoring event "${t}": ${e}`);
  }
})();
