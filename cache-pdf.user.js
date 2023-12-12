// ==UserScript==
// @name        Caché pdfs
// @namespace   Violentmonkey Scripts
// @match       https://aulavirtual.uji.es/pluginfile.php/*
// @grant       none
// @version     1.0
// @author      adriadam10
// @description 12/12/2023, 10:34:15
// ==/UserScript==

(function() {
    'use strict';

    // Agrega un evento para detectar cuando se carga un PDF
    document.addEventListener('DOMContentLoaded', function() {
        // Verifica si el documento es un PDF
        if (location.href.toLowerCase().endsWith('.pdf')) {
            // Forzar caché del PDF
            fetch(location.href, {cache: 'force-cache'});
        }
    });
})();
