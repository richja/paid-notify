module.exports = {
    launch: {
        dumpio: true,
        headless: false,
        args: [
            '--disable-extensions-except=C:/xampp/htdocs/projects/paid_notify/dist',
            '--load-extension=C:/xampp/htdocs/projects/paid_notify/dist',
        ],
        devtools: false
    },
    // browser: 'chrome',
    browserContext: 'default',
}
