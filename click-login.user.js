// ==UserScript==
// @name         auto click login uji
// @namespace    http://tampermonkey.net/
// @version      1.9
// @description  auto click boton uji
// @match        https://aulavirtual.uji.es/login/*
// @author       adriadam10
// @grant        none
// ==/UserScript==

window.onload=function(){
  document.getElementsByClassName("btn login-identityprovider-btn btn-block")[0].click();
}
