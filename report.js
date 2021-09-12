"use strict";
/* global menu */

var md = window.markdownit();

var report = (function () {
    var showReport = function (kmom) {
        window.mainContainer.innerHTML = "";

        fetch(`markdown/${kmom}.md`)
            .then(function(response) {
                return response.text();
            })
            .then(function(result) {
                window.mainContainer.innerHTML = md.render(result);
            });

        menu.showMenu("people");
    };

    return {
        showReport: showReport
    };
})(report);
