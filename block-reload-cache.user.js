// ==UserScript==
// @name        Bloquear recarga caché
// @namespace   Violentmonkey Scripts
// @match       https://aulavirtual.uji.es/pluginfile.php/*
// @grant       none
// @version     1.0
// @author      adriadam10
// @description 12/12/2023, 10:40:36
// ==/UserScript==

(function() {
    'use strict';

    // Desactivar el evento de antes de cargar la caché
    window.addEventListener('beforeunload', function (event) {
        // Cancelar el evento de recarga de la página
        event.preventDefault();
        // Firefox requiere un mensaje personalizado
        event.returnValue = '';
    });
})();
