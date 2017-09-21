var sites = [
    //hostname, function to call, argument for function, [delay in seconds]
    ["digizone.cz", searchForClass, "paymentRequest"],
    ["e15.cz", searchForClass, "subscription-box"],
    ["wsj.com", searchForClass, "wsj-snippet-body"],
    ["thetimes.co.uk", searchForClass, "ArticleMarketing"],
    ["welt.de", searchForSelector, "[data-external-component='Premium.Article.Content']"],
    ["reportermagazin.cz", searchForClass, "article-lock"],
    ["bild.de", searchForClass, "conversion-page"],
    ["dtest.cz", searchForClass, "login-buy-box"],
    ["psychologie.cz", searchForClass, "about-pay-info"],
    ["montyrich.cz", searchForId, "component-news-premium"],
    ["echo24.cz", searchForClass, "lockBlock"],
    ["067.cz", searchForClass, "blocked"],
    ["telegraph.co.uk", searchForClass, "premium-paywall"],
    ["investors.com", searchForClass, "access_level-restricted"],
    ["irishtimes.com", searchForClass, "article_bodycopy_sample"],
    ["valor.com.br", searchForId, "block-valor_cadastro-2"],
    ["kyivpost.com", searchForClass, "exclusive-content"],
    ["haaretz.com", searchForClass, "tadvert"],
    ["lefigaro.fr", searchForClass, "fig-premium-paywall"],
    ["folha.uol.com.br", searchForClass, "teaser-warning", 2],
    ["ekonom.ihned.cz", searchForClass, "hard-paywall-ekonom"]
];

checkForPaidContent(document.location.host, sites);

function checkForPaidContent(host, sites) {

    var siteMatch  = null;
    var siteMatchResult = sites.some(function(site){
        if (host.indexOf(site[0]) !==-1) {
            siteMatch = site;
            return site;
        }
    });

    if (!siteMatchResult) return;

    var timeoutMode = (siteMatch[3]) ? siteMatch[3]*1000 : 0;

    console.log(siteMatch);

    setTimeout(function () {
        siteMatch[1](siteMatch[2]);
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
