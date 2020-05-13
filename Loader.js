const sitesFile = "https://raw.githubusercontent.com/richja/paid-notify/master/sites.json";
// const sitesFile = chrome.runtime.getURL("sites.json");

const load = (typeof process !== "undefined") ? require("node-fetch") : fetch;

export const getSites = async () => {
    const sitesRaw = await load(sitesFile);
    const sitesArr = await sitesRaw.json();
    return sitesArr.sites;
}
