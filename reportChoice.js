"use strict";
/* global menu report */

var reportChoice = (function () {
    var showReports = function () {
        window.mainContainer.innerHTML = "";
        var title = document.createElement("h1");

        title.textContent = "Reports";

        window.mainContainer.appendChild(title);

        let kmoms = ["Kmom01", "Kmom02", "Kmom03", "Kmom04", "Kmom05", "Kmom06", "Kmom10"];

        kmoms.forEach(function(element) {
            console.log(element);

            var icon = document.createElement("i");

            icon.className = "material-icons";
            icon.textContent = "folder";

            let repChoices = document.createElement("a");

            repChoices.className = "reportPage";

            var text = document.createElement("span");

            text.className = "icon-text";
            text.textContent = element;

            repChoices.appendChild(icon);
            repChoices.appendChild(text);


            repChoices.addEventListener("click", function handleClick() {
                console.log(element);
                report.showReport(element.toLowerCase());
            });

            window.mainContainer.appendChild(repChoices);
        });

        menu.showMenu("people");
    };

    return {
        showReports: showReports
    };
})(reportChoice);
