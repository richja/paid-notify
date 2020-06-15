const load = (typeof process !== "undefined") ? require("node-fetch") : fetch;

const getSites = async () => {
    let sitesArr;

    if (typeof chrome === "undefined") {
        sitesArr = require("./sites.json");
    }
    else {
        // const sitesFile = "https://raw.githubusercontent.com/richja/paid-notify/master/sites.json";
        const sitesFile = chrome.runtime.getURL("sites.json");
        const sitesRaw = await load(sitesFile);
        sitesArr = await sitesRaw.json();
    }

    return sitesArr.sites;
}

(async () => {
    getSites().then(sites => {
        checkForPaidContent(document.location.host, sites);
    });
})();

function checkForPaidContent(host, sites) {

    let siteMatch  = null;
    const siteMatchResult = sites.some((site) => {
        if (host.indexOf(site[0]) !==-1) {
            siteMatch = site;
            return site;
        }
    });

    if (!siteMatchResult) return;

    const timeoutMode = (siteMatch[3]) ? siteMatch[3] * 1000 : 0;

    setTimeout(() => {
        switch (siteMatch[1]) {
            case "searchForClass":
                searchForClass(siteMatch[2]);
                break;
            case "searchForId":
                searchForId(siteMatch[2]);
                break;
            case "searchForSelector":
                searchForSelector(siteMatch[2]);
                break;
            default:
                console.error(`Paid Notify extension error: function "${siteMatch[1]}" doesn't exist`);
                return;
        }
    }, timeoutMode);
}

function searchForClass(className) {
    if (document.getElementsByClassName(className).length) {
        showNotification();
    }
}

function searchForId(idName) {
    if (document.getElementById(idName)) {
        showNotification();
    }
}

function searchForSelector(query) {
    if (document.querySelectorAll(query).length) {
        showNotification();
    }
}

function showNotification() {
    const notifyDiv = document.createElement("div");
    notifyDiv.innerHTML = chrome.i18n.getMessage("extMessage") + "<div class='ext-paid-notify-close-btn'>&times;</div>";
    notifyDiv.className = "ext-paid-notify";
    document.body.appendChild(notifyDiv);

    const notifyDivBtn = document.getElementsByClassName("ext-paid-notify-close-btn");
    notifyDivBtn[0].addEventListener("click",  () => {
        closeNotification(notifyDiv);
    });
}

function closeNotification(targetDiv) {
    targetDiv.style.top = "-100px";
    setTimeout( () => {
        targetDiv.style.display = "none";
        targetDiv.remove()
    }, 1000);
}
