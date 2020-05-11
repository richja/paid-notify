module.exports = {
    launch: {
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
    },
    // browser: 'chrome',
    browserContext: 'default',
}
