const Loader = require('./Loader.js');
const puppeteer = require('puppeteer');
const fs = require("fs");

let page;
let browser;

describe('Notification tests', () => {

    beforeAll(async (done) => {
        const extensionLocation = `${__dirname}/dist`;
        if (!fs.existsSync(extensionLocation)) {
            throw Error (`Extension cannot be located at "${extensionLocation}", run gulp first`);
        }

        const args = {
            dumpio: true,
            headless: false,
            args: [
                `--disable-extensions-except=${extensionLocation}`,
                `--load-extension=${extensionLocation}`,
                '--disable-features=AudioServiceOutOfProcess',
                '--no-first-run',
                '--disable-gpu',
                '--disable-software-rasterizer',
                '--disable-dev-shm-usage',
                '--disable-setuid-sandbox',
                '--no-sandbox',
                '--no-zygote',
            ],
            devtools: false,
        };
        browser = await puppeteer.launch(args);
        page = await browser.newPage();

        done();
    });

    afterAll(async (done) => {
        await browser.close();

        done();
    });

    it('Notification should be rendered', async () => {

        const response = await page.goto('https://www.berlingske.dk/samfund/professor-slaaende-andel-af-coronadoedsfald-i-hovedstaden-og-sjaelland-kan', {waitUntil: 'networkidle2'});

        expect(response.ok()).toBeTruthy();

        await page.waitForSelector('.paywall-hard', {
            timeout: 2000,
        });

        await page.waitForSelector('.ext-paid-notify', {
            timeout: 2000,
            visible: true
        });

    });

    it('Notification should NOT be rendered', async () => {

        const response = await page.goto('https://www.berlingske.dk/samfund/dronning-margrethe-ansaetter-ny-hofdame', {waitUntil: 'networkidle2'});

        expect(response.ok()).toBeTruthy();

        await expect(page).not.toMatchElement('.ext-paid-notify');
        await expect(page).not.toMatchElement('.paywall-hard');
    });

    it('Regression: All notifications should be rendered', async () => {

        let errors = [];

        await Loader.getSites().then(async data => {

            const sites = data.filter(record => record.length > 4);

            for (let i = 0; i < sites.length; i++) {
                const site = sites[i].length > 5 ? sites[i][4] : sites[i][3]

                try {
                    const response = await page.goto(site, {waitUntil: 'networkidle2'});

                    expect(response.ok()).toBeTruthy();

                    await page.waitForSelector('.ext-paid-notify', {
                        timeout: 2000,
                        visible: true
                    });
                }
                catch (e) {
                    errors.push(`Error for ${site}`, e)
                }

                if (errors.length) {
                    fail(errors);
                }
            }
        });
    });
});

describe('Loader tests', () => {
    it('Sites should be loaded as an array', () => {

        Loader.getSites().then(data => {
            expect(Array.isArray(data)).toBeTruthy();
            expect(data.length).toBeGreaterThan(100);
        });
    });
});
