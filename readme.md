# Paid Content Alert
[![CircleCI](https://circleci.com/gh/richja/paid-notify.svg?style=svg)](https://circleci.com/gh/richja/paid-notify)

**Browser addon to notify you when you are about to read just a snippet of an article with paid content.**

Available in stores:  
[![Google Chrome](https://developer.chrome.com/webstore/images/ChromeWebStore_BadgeWBorder_v2_206x58.png)](https://chrome.google.com/webstore/detail/paid-content-alert/hnagmphbnaloflgnhkkbniknbpmlackl) [![Firefox](https://ffp4g1ylyit3jdyti1hqcvtb-wpengine.netdna-ssl.com/addons/files/2015/11/get-the-addon.png)](https://addons.mozilla.org/en-US/firefox/addon/paid-content-alert/)

Any feedback is more than welcomed, same as reporting websites you are missing on the list.

## Development
### Adding new website
1. Add record to `sites.json`
2. Add a domain to matches in manifest
3. Bump version in manifest
4. Test locally and create a pull request

See [this commit](https://github.com/richja/paid-notify/commit/94c5840020e676cad1e8991aeda69ba078f58a17) for an example.

Arguments for a record in `sites.json`:
- website hostname
- function to call
- argument for called function
- [delay on called function, 0 by default]
- [sample url where notification should be visible]
- [sample url where notification should NOT be visible]))

### Using Gulp tasks
1. Run `npm install` to get Gulp ready
2. Run `gulp` to pack and minify all the files to a zipped folder
3. Gulp will generate versions for both Chrome and Firefox

Having issues running Gulp from command line?  
Run `npm i -g gulp-cli` and try again

### Tests
Run `npm test` to run all tests  
(You may need to run `gulp dist:chrome` first)
