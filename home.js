"use strict";
/* global menu */

var home = (function () {
    var showHome = function () {
        window.mainContainer.innerHTML = "";

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Filip Antonsson";

        var greeting = document.createElement("p");
        var timeOfDayGreeting = "Hej";
        var now = new Date();

        if (now.getHours() <= 10) {
            timeOfDayGreeting = "Godmorgon";
        } else if (now.getHours() >= 17) {
            timeOfDayGreeting = "Godkväll";
        }

        greeting.textContent = timeOfDayGreeting +
            ", mitt namn är Filip Antonsson. ";

        var image = document.createElement("img");

        image.src = "small2.jpg";
        image.className = "me";
        image.alt = "Filip Antonsson";

        var filler = document.createElement("p");

        filler.className = "filler";

        filler.textContent = "Jag är 28 år och kommer från Karlskrona. "+
        "Jag har tidigare studerat 2 år på Blekinge Tekniska Högskola "+
        "i Karlshamn. Efter det har jag arbetat 4 år som skolresurs på "+
        "ett mellanstadie. "+
        "Jag har nu valt att återuppta mina studier för att försöka avsluta "+
        "min utbildning inom webb-utveckling. "+
        "På min fritid sysslar jag mestadels med datorn, filmer eller att måla. "+
        "Där arbetar jag mestadels med akryl eller gouache som mina medium. "+
        "Tack för din översikt. "+
        "Hoppas vi kan ha en trevlig gemensam arbetsmiljö!";

        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(greeting);
        window.mainContainer.appendChild(image);
        window.mainContainer.appendChild(filler);

        window.rootElement.appendChild(window.mainContainer);

        menu.showMenu("home");
    };

    return {
        showHome: showHome
    };
})(home);
