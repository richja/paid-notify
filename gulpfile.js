var gulp = require('gulp'),
    terser = require('gulp-terser'),
    zip = require('gulp-zip');

var files = [
    'icon16.png',
    'icon48.png',
    'icon128.png',
    'style.css',
    'manifest.json',
    '_locales/**/*.*',
    'sites.json'
];

var jsFiles = [
    'content.js',
    'Loader.js',
];

var destPath = 'dist';

// compress js files
gulp.task('uglify', function () {
    return gulp.src(jsFiles)
        .pipe(terser())
        .pipe(gulp.dest(destPath));
});

// move rest of files to dist dir
gulp.task('move', function () {
    return gulp.src(files, { base: './' })
        .pipe(gulp.dest(destPath));
});

gulp.task('moveJs', function () {
    return gulp.src(jsFiles, { base: './' })
        .pipe(gulp.dest(destPath));
});

// zip them all
gulp.task('zip-chrome', function () {
    return gulp.src(destPath + '/**/*.*')
        .pipe(zip('paid-notify-chrome.zip'))
        .pipe(gulp.dest('./'));
});

gulp.task('zip-firefox', function () {
    return gulp.src(destPath + '/**/*.*')
        .pipe(zip('paid-notify-firefox.zip'))
        .pipe(gulp.dest('./'));
});

gulp.task('dist', gulp.series('uglify', 'move'));
gulp.task('chrome', gulp.series('uglify', 'move', 'zip-chrome'));
gulp.task('firefox', gulp.series('moveJs', 'move', 'zip-firefox'));
gulp.task('default', gulp.series('chrome', 'firefox'));
