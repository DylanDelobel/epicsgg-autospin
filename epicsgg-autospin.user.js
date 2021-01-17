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

    let htmlIndicator = `<span class="_3uuZVb- _2VkVoz5"><button class="oW5nBSL _3FDj2sO"><svg viewBox="0 0 24 24"><path d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M21.7,10.7h-3.6C18,9.7,17.6,8.8,17,8l2.4-2.4 C20.6,7,21.5,8.7,21.7,10.7z M13,2.2c1.9,0.2,3.6,0.9,5,2l-2.4,2.4C14.9,6.1,14,5.7,13,5.5V2.2z M11,2.2v3.3c-1,0.2-1.9,0.5-2.6,1.1 L6,4.2C7.4,3.1,9.1,2.4,11,2.2z M4.6,5.6L7,8C6.4,8.8,6,9.7,5.9,10.7H2.3C2.5,8.7,3.4,7,4.6,5.6z M2.2,12.7h3.7 c0.2,1,0.5,1.9,1.1,2.6L4.2,18C3.1,16.5,2.3,14.7,2.2,12.7z M11,21.8c-2-0.2-3.9-1.1-5.4-2.3l2.8-2.8c0.8,0.6,1.7,0.9,2.6,1.1V21.8z M7.8,11.6c0-2.3,1.9-4.2,4.2-4.2s4.2,1.9,4.2,4.2s-1.9,4.2-4.2,4.2S7.8,14,7.8,11.6z M13,21.8v-4c1-0.2,1.9-0.5,2.6-1.1l2.8,2.8 C16.9,20.7,15,21.6,13,21.8z M19.8,18L17,15.3c0.6-0.8,0.9-1.7,1.1-2.6h3.7C21.7,14.7,20.9,16.5,19.8,18z"></path></svg><span class="_2dDDx9n">AUTO-SPIN ACTIVATED</span></button><span class="_2urn0fO" data-hide="false" style="--wait:100ms;"><span>Content Calendar</span></span></span>`

    // little wait
    setTimeout(() => {
        // Indicator
        let el = document.getElementsByClassName("_3uuZVb- _2VkVoz5")[3];
        console.log(el);
        el.insertAdjacentHTML('afterbegin', htmlIndicator);

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
