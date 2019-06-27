# Paid Content Alert

**Addon to browsers to notify you when you are about to read just a snippet of an paid article with paid content.**

Available for [Google Chrome](https://chrome.google.com/webstore/detail/paid-content-alert/hnagmphbnaloflgnhkkbniknbpmlackl) and [Firefox](https://addons.mozilla.org/en-US/firefox/addon/paid-content-alert/).

Any feedback is more than welcomed, same as reporting websites you are missing here.

## Development
### Adding new website
1. Add to `sites` directory in `content.js`
2. Add domain to matches in manifest

### Using Gulp tasks
1. Run `npm install` to get Gulp ready
2. Run `gulp` to pack and minify all the files to a zipped folder. Ready to be uploaded.

Having issues running Gulp from command line?  
Run `npm i -g gulp-cli` and try again