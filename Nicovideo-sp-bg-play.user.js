// ==UserScript==
// @name        Nicovideo sp Background Play
// @namespace   https://github.com/nashikinako/Nicovideo-sp-bg-play
// @match       *://sp.nicovideo.jp/*
// @icon        https://www.google.com/s2/favicons?domain=sp.nicovideo.jp&sz=256
// @grant       none
// @version     1.0.0
// @author      Nashikinako
// @description スマホブラウザ版ニコニコ動画でバックグラウンド再生ができるようにします。
// @supportURL  https://github.com/nashikinako/Nicovideo-sp-bg-play/issues
// ==/UserScript==

// Nicovideo sp Background Play | MIT License | https://github.com/nashikinako/Nicovideo-sp-bg-play/blob/main/LICENSE

window.addEventListener(
  "visibilitychange",
  (e) => e.stopImmediatePropagation(),
  true
);
