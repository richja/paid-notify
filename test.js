const Loader = require('./Loader.js');
const puppeteer = require('puppeteer');

let page;
let browser;

describe('Notification tests', () => {

    beforeAll(async (done) => {
        const args = {
            dumpio: true,
            headless: false,
            args: [
                '--disable-extensions-except=C:/xampp/htdocs/projects/paid_notify/dist',
                '--load-extension=C:/xampp/htdocs/projects/paid_notify/dist',
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
});

describe('Loader tests', () => {

    it('Sites should be loaded as an array', () => {
        return Loader.getSites().then(data => {
            expect(Array.isArray(data)).toBeTruthy();
            expect(data.length).toBeGreaterThan(100);
        });
    });
});