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
    ["ekonom.ihned.cz", searchForClass, "hard-paywall-ekonom"],
    ["lexpress.fr", searchForClass, "premium_content"],
    ["mediapart.fr", searchForClass, "content-restricted"],
    ["pressandjournal.co.uk", searchForClass, "pandj_mpp_block_meter"],
    ["polityka.pl", searchForClass, "paid-article-popup"],
    ["newsweek.pl", searchForId, "PAYWALL_ARTICLE_BANNER"],
    ["gazetapolska.pl", searchForClass, "kiosk"],
    ["gloswielkopolski.pl", searchForId, "smsPaymentRegion"],
    ["kurierlubelski.pl", searchForId, "smsPaymentRegion"],
    ["dziennikzachodni.pl", searchForId, "smsPaymentRegion"],
    ["dzienniklodzki.pl", searchForId, "smsPaymentRegion"],
    ["dziennikbaltycki.pl", searchForId, "smsPaymentRegion"],
    ["gs24.pl", searchForId, "smsPaymentRegion"],
    ["pomorska.pl", searchForId, "smsPaymentRegion"],
    ["gazetalubuska.pl", searchForId, "smsPaymentRegion"],
    ["expressilustrowany.pl", searchForId, "smsPaymentRegion"],
    ["plus.echodnia.eu", searchForId, "smsPaymentRegion"],
    ["pb.pl", searchForClass, "npb-promo-box"],
    ["gazetaprawna.pl", searchForId, "smsGateStep0"],
    ["wyborcza.pl", searchForId, "p_lock_header"],
    ["espresso.repubblica.it", searchForId, "iframepay"],
    ["zeit.de", searchForClass, "gate--register"],
    ["spiegel.de", searchForId, "laterpay-replacement"],
    ["thueringer-allgemeine.de", searchForClass, "pc-pricing"],
    ["haz.de", searchForId, "pda-pc-article-paywall"],
    ["freiepresse.de", searchForId, "paywall-info"],
    ["handelsblatt.com", searchForClass, "vhb-paywall-wrapper"]
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
