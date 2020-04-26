const sitesFile = chrome.runtime.getURL("sites.json");

fetch(sitesFile)
    .then((response) => {
        return response.json();
    })
    .then((sitesObj) => {
        console.log(sitesObj);
        checkForPaidContent(document.location.host, sitesObj.sites);
    });

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
        if (typeof window[siteMatch[1]] !== 'function') {
            console.error(`Paid Notify extension error: function "${siteMatch[1]}" doesn't exist`);
            return;
        }

        window[siteMatch[1]](siteMatch[2]);
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
