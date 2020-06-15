const load = (typeof process !== "undefined") ? require("node-fetch") : fetch;

export const getSites = async () => {
    let sitesArr;

    if (typeof chrome === "undefined") {
        sitesArr = require("./sites.json");
    }
    else {
        const sitesFile = "https://raw.githubusercontent.com/richja/paid-notify/master/sites.json";
        // const sitesFile = chrome.runtime.getURL("sites.json");
        const sitesRaw = await load(sitesFile);
        sitesArr = await sitesRaw.json();
    }

    return sitesArr.sites;
}
