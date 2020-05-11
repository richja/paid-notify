const Loader = require('./Loader.js');

describe('Paid Notify Extension tests', () => {
    it('Paid article notification is shown', async () => {
        const response = await page.goto('https://www.berlingske.dk/samfund/professor-slaaende-andel-af-coronadoedsfald-i-hovedstaden-og-sjaelland-kan', {waitUntil: 'networkidle2'});
        expect(response.ok()).toBeTruthy();

        try {
            const extensionBar = await page.waitForSelector('.ext-paid-notify', {
                timeout: 2000,
                visible: true
            });
        }
        catch (e) {
            console.log(e);
            fail("Extension notification was not rendered");
        }
    })

    it.only('Sites are loaded into array', () => {
        return Loader.getSites().then(data => {
            expect(Array.isArray(data)).toBeTruthy();
            expect(data.length).toBeGreaterThan(100);
        });
    });
})