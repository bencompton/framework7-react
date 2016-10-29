var gulp = require('gulp'),
    browserify = require('browserify'),
    tsify = require('tsify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer');

gulp.task('browserify', function () {
    browserify()
        .add('./index.ts')
        .plugin(tsify, { noImplicitAny: true })
        .bundle()
        .on('error', function (error) { console.error(error.toString()); })
        .pipe(source('./index.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./dist/'))
});

gulp.task('copy-f7-assets', function () {
    gulp
        .src('./node_modules/framework7/dist/**/*')
        .pipe(gulp.dest('./dist/'))
});

gulp.task('default', ['browserify', 'copy-f7-assets']);