var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    zip = require('gulp-zip');

var files = [
    'icon16.png',
    'icon48.png',
    'icon128.png',
    'style.css',
    'manifest.json',
    '_locales/**/*.*'
];

// compress js files
gulp.task('uglify', function () {
    return gulp.src('content.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// move rest of files to dist dir
gulp.task('move', function () {
    return gulp.src(files, { base: './' })
        .pipe(gulp.dest('dist'));
});

// zip them all
gulp.task('zip', function () {
    return gulp.src('dist/**/*.*')
        .pipe(zip('paid-notify.zip'))
        .pipe(gulp.dest('./'));
});

gulp.task('default', gulp.series('uglify', 'move', 'zip'));
