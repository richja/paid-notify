checkForPaidContent(document.location.host);

function checkForPaidContent(host) {

    //digizone.cz
    if (host.indexOf("digizone.cz") !==-1) {
        if (document.getElementsByClassName("paymentRequest").length) {
            showNotification();
        }
        return;
    }

    //wsj.com
    if (host.indexOf("wsj.com") !==-1) {
        if (document.getElementsByClassName("wsj-snippet-body").length) {
            showNotification();
        }
        return;
    }

    //the times.co.uk
    if (host.indexOf("thetimes.co.uk") !==-1) {
        if (document.getElementsByClassName("ArticleMarketing").length) {
            showNotification();
        }
        return;
    }

    //welt.de
    if (host.indexOf("welt.de") !==-1) {
        if (document.querySelectorAll("[data-external-component='Premium.Article.Content']").length) {
            showNotification();
        }
        return;
    }

    //reportermagazin.cz
    if (host.indexOf("reportermagazin.cz") !==-1) {
        if (document.getElementsByClassName("article-lock").length) {
            showNotification();
        }
        return;
    }

    //bild.de
    if (host.indexOf("bild.de") !==-1) {
        if (document.getElementsByClassName("conversion-page").length) {
            showNotification();
        }
        return;
    }

    //dtest.cz
    if (host.indexOf("dtest.cz") !==-1) {
        if (document.getElementsByClassName("login-buy-box").length) {
            showNotification();
        }
        return;
    }

    //psychologie.cz
    if (host.indexOf("psychologie.cz") !==-1) {
        if (document.getElementsByClassName("about-pay-info").length) {
            showNotification();
        }
        return;
    }

    //montyrich.cz
    if (host.indexOf("montyrich.cz") !==-1) {
        if (document.getElementById("component-news-premium")) {
            showNotification();
        }
        return;
    }

    //echo24.cz
    if (host.indexOf("echo24.cz") !==-1) {
        if (document.getElementsByClassName("lockBlock").length) {
            showNotification();
        }
        return;
    }

    //067.cz
    if (host.indexOf("067.cz") !==-1) {
        if (document.getElementsByClassName("blocked").length) {
            showNotification();
        }
        return;
    }

    //telegraph.co.uk
    if (host.indexOf("telegraph.co.uk") !==-1) {
        if (document.getElementsByClassName("premium-paywall").length) {
            showNotification();
        }
        return;
    }

    //investors.com
    if (host.indexOf("investors.com") !==-1) {
        if (document.getElementsByClassName("access_level-restricted").length) {
            showNotification();
        }
    }
}

function closeNotification(targetDiv) {
    targetDiv.style.top = "-100px";
    setTimeout(function () {
        targetDiv.style.display = "none";
        targetDiv.remove()
    }, 1000);
}

function showNotification() {
    var notifyDiv = document.createElement("div");
    notifyDiv.innerHTML = chrome.i18n.getMessage("extMessage") + "<div class='ext-paid-notify-close-btn'>&times;</div>";
    notifyDiv.className = "ext-paid-notify";
    document.body.appendChild(notifyDiv);

    var notifyDivBtn = document.getElementsByClassName("ext-paid-notify-close-btn");
    notifyDivBtn[0].addEventListener("click", function () {
        closeNotification(notifyDiv);
    });
}

