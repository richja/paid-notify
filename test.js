describe('Paid Notify Extension tests', () => {
    it('Paid article notification is shown', async () => {
        const response = await page.goto('https://denikn.cz/354496/babisem-kritizovany-namestek-dostal-po-rezignaci-pres-milion-aby-neodesel-ke-konkurenci-za-sedm-tydnu-se-na-urad-vratil/?ref=tit', {waitUntil: 'networkidle2'});
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
})