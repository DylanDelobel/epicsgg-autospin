// ==UserScript==
// @author       DylanDelobel
// @name         Epics.gg Auto-Spin
// @namespace    https://github.com/DylanDelobel/epicsgg-autospin
// @description  Auto-spin on Epic.gg every 30 minutes
// @version      1.3
// @match        https://app.epics.gg/csgo/spinner
// @match        https://app.epics.gg/csgo/spinner*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/DylanDelobel/epicsgg-autospin/master/epicsgg-autospin.user.js
// @updateURL    https://raw.githubusercontent.com/DylanDelobel/epicsgg-autospin/master/epicsgg-autospin.user.js
// ==/UserScript==
(function() {
    'use strict';

    // func
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    // little wait
    setTimeout(() => {
        // Indicator
        let el = document.getElementsByClassName("_1lliLt4")[0];
        //console.log(el);
        el.innerHTML = "Prize Wheel (AUTO SPIN ACTIVATED)";

        // start
        console.log("Starting auto-spin");
        let btns = document.getElementsByTagName("button");
        console.log(btns);
        let searchText = "SPIN THE WHEEL";
        let found;

        for (var i = 0; i < btns.length; i++) {
            if (btns[i].textContent == searchText) {
                found = btns[i];
                break;
            }
        }

        // check
        console.log("typeof:" + found);
        if (typeof found !== "undefined") {
            // spin
            console.log("SPIN SPIN SPIN");
            found.click();
            let randomTimer = 1000 + getRandomInt(5000);
            setTimeout(() => {
                location.reload();
            }, randomTimer);
        } else {
            // wait 30min
            console.log("Wait 30min....");
            let randomTimer = 1800000 + getRandomInt(5000);
            setTimeout(() => {
                location.reload();
            }, randomTimer);
        }
    }, 3000);
})();
