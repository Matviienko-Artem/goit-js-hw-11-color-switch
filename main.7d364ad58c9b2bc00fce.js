(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,n,e){},QfWi:function(t,n,e){"use strict";e.r(n);e("L1EO");var o=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],a={btnStart:document.querySelector('[data-action="start"]'),btnStop:document.querySelector('[data-action="stop"]'),bodyRef:document.querySelector("body")};a.btnStart.addEventListener("click",(function(){a.btnStart.disabled=!0,r=setInterval((function(){var t,n,e=(t=0,n=6,Math.floor(Math.random()*(n-t+1)+t));a.bodyRef.style.backgroundColor=""+o[e],console.log(e)}),1e3)})),a.btnStop.addEventListener("click",(function(){a.btnStart.disabled=!1,clearInterval(r)}));var r=null}},[["QfWi",1]]]);
//# sourceMappingURL=main.7d364ad58c9b2bc00fce.js.map