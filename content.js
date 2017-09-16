checkForPaidContent(document.location.host);

function checkForPaidContent(host) {

    //digizone.cz
    if (host.indexOf("digizone.cz")) {
        if (document.getElementsByClassName("paymentRequest").length) {
            showNotification();
            return;
        }
    }

    //wsj.com
    if (host.indexOf("wsj.com")) {

        if (document.getElementsByClassName("wsj-snippet-body").length) {
            showNotification();
            return;
        }
    }

    //the times.co.uk
    if (host.indexOf("thetimes.co.uk")) {

        if (document.getElementsByClassName("ArticleMarketing").length) {
            showNotification();
            return;
        }
    }

    //welt.de
    if (host.indexOf("welt.de")) {
        if (document.querySelectorAll("[data-external-component='Premium.Article.Content']").length) {
            showNotification();
            return;
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

