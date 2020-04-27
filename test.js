describe('Paid Notify Extension tests', () => {
    it('Paid article notification is shown', async () => {
        await page.goto('https://www.firstclass.cz/2020/04/proc-zeny-potrebuji-oporu-a-muzi-pochopit-archimedia/', {waitUntil: 'networkidle2'});
        // await expect(page).toMatch('googleaaa');
        const extensionBar = await page.waitForSelector('.ext-paid-notifya', {
            timeout: 2000,
            visible: true
        });
    })
})