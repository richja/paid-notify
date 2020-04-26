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
    ["echo24.cz", searchForClass, "poutak-predplatitele"],
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
    ["archiv.ihned.cz", searchForClass, "article-header-pw-info"],
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
    ["handelsblatt.com", searchForClass, "vhb-paywall-wrapper"],
    ["plus.faz.net", searchForClass, "red-carpet-container"],
    ["lepoint.fr", searchForClass, "freemium-tronque"],
    ["nouvelobs.com", searchForClass, "abonnez-vous"],
    ["sudouest.fr", searchForClass, "article-premium-footer"],
    ["ouest-france.fr", searchForId, "monet-info"],
    ["letelegramme.fr", searchForId, "paywall-in-post"],
    ["ledauphine.com", searchForClass, "flagPaid"],
    ["lavoixdunord.fr", searchForClass, "gr-message-paywall"],
    ["dna.fr", searchForClass, "zoneSecure"],
    ["lesechos.fr", searchForClass, "block-paywall-article"],
    ["lemonde.fr", searchForId, "teaser_article"],
    ["humanite.fr", searchForClass, "field-name-block-non-abonnes"],
    ["ts.fi", searchForClass, "tsv3-c-common-article__paywall-landingbox"],
    ["savonsanomat.fi", searchForSelector, "body.article--premium"],
    ["karjalainen.fi", searchForId, "login_box"],
    ["ilkka.fi", searchForClass, "article__read-all__wrapper"],
    ["hbl.fi", searchForId, "loginwall-info"],
    ["ess.fi", searchForClass, "art-paid"],
    ["summa.talentum.fi", searchForId, "buy-content-region", 3],
    ["plus.iltalehti.fi", searchForClass, "promo-area__inner"],
    ["is.fi", searchForClass, "article-paywall"],
    ["hs.fi", searchForClass, "show-paywall"],
    ["fvn.no", searchForClass, "widget-fasten-salesposters"],
    ["krsby.no", searchForClass, "widget-salesposter"],
    ["aftenposten.no", searchForClass, "widget-fasten-salesposters"],
    ["dagbladet.no", searchForClass, "paywall"],
    ["pluss.vg.no", searchForId, "paywall"],
    ["bt.no", searchForClass, "widget-fasten-salesposters-bt"],
    ["foreignaffairs.com", searchForClass, "paywall-prompt"],
    ["content.time.com", searchForId, "subscribe-teaser"],
    ["barrons.com", searchForClass, "barrons-snippet-login"],
    ["politiken.dk", searchForClass, "stopsign__article"],
    ["information.dk", searchForId, "mini-panel-non_subscriber_ad_article"],
    ["kristeligt-dagblad.dk", searchForClass, "paywall"],
    ["jyllands-posten.dk", searchForClass, "artViewLock"],
    ["mediawatch.dk", searchForClass, "lockedArticleContainer"],
    ["energiwatch.dk", searchForClass, "lockedArticleContainer"],
    ["fodevarewatch.dk", searchForClass, "lockedArticleContainer"],
    ["medwatch.dk", searchForClass, "lockedArticleContainer"],
    ["finanswatch.dk", searchForClass, "lockedArticleContainer"],
    ["ejendomswatch.dk", searchForClass, "lockedArticleContainer"],
    ["shippingwatch.dk", searchForClass, "lockedArticleContainer"],
    ["finans.dk", searchForClass, "artViewLock"],
    ["business.dk", searchForClass, "paywall-hard"],
    ["b.dk", searchForClass, "paywall-hard"],
    ["idnes.cz", searchForId, "paywall"],
    ["denikn.cz", searchForId, "e_lock__hard"],
    ["dennikn.sk", searchForId, "e_lock__hard"],
    ["lvz.de", searchForClass, "pdb-article-paidcontent-registration-content", 2],
    ["denik.cz", searchForClass, "paywall-article-chapter", 2],
    ["independent.ie", searchForId, "flip-pay"],
    ["zive.cz", searchForClass, "premium-info"],
    ["firstclass.cz", searchForClass, "membership-content access-restricted"],
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

function closeNotification(targetDiv) {
    targetDiv.style.top = "-100px";
    setTimeout(function () {
        targetDiv.style.display = "none";
        targetDiv.remove()
    }, 1000);
}
