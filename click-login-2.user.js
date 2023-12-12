// ==UserScript==
// @name         auto click login uji 2
// @namespace    http://tampermonkey.net/
// @version      1.9
// @description  auto click login uji
// @match        https://xmlrpc.uji.es/lsmSSO-83/*
// @author       adriadam10
// @grant        none
// ==/UserScript==

window.onload=function(){
  setTimeout(() => {  document.getElementsByClassName("boton-form-sso")[0].click(); }, 1000);
}
