const gulp = require('gulp'),
    terser = require('gulp-terser'),
    zip = require('gulp-zip'),
    del = require('del'),
    rename = require('gulp-rename');

const files = [
    'icon16.png',
    'icon48.png',
    'icon128.png',
    'style.css',
    'manifest.json',
    '_locales/**/*.*',
    'sites.json'
];

const jsFiles = [
    'content.js',
    'Loader.js',
];

const contentJsFirefox = [
    'content-firefox.js',
];

const destPath = 'dist';

// clean /dist folder
gulp.task('clean', function () {
    return del([
        destPath + '/**/*',
    ]);
});

// prepare content.js for Firefox
gulp.task('move-and-rename', () => {
    return gulp.src(contentJsFirefox)
        .pipe(rename('content.js'))
        .pipe(gulp.dest(destPath));
});

// compress js files
gulp.task('uglify', () => {
    return gulp.src(jsFiles)
        .pipe(terser())
        .pipe(gulp.dest(destPath));
});

// move rest of files to dist dir
gulp.task('move', () => {
    return gulp.src(files, { base: './' })
        .pipe(gulp.dest(destPath));
});

//zip folder for chrome
gulp.task('zip-chrome', () => {
    return gulp.src(destPath + '/**/*.*')
        .pipe(zip('paid-notify-chrome.zip'))
        .pipe(gulp.dest('./'));
});

//zip folder for firefox
gulp.task('zip-firefox', () => {
    return gulp.src(destPath + '/**/*.*')
        .pipe(zip('paid-notify-firefox.zip'))
        .pipe(gulp.dest('./'));
});

gulp.task('dist:chrome', gulp.series('clean', 'uglify', 'move'));
gulp.task('dist:firefox', gulp.series('clean', gulp.parallel('move-and-rename', 'move')));
gulp.task('chrome', gulp.series('dist:chrome', 'zip-chrome'));
gulp.task('firefox', gulp.series('dist:firefox', 'zip-firefox'));
gulp.task('default', gulp.series('chrome', 'firefox'));
