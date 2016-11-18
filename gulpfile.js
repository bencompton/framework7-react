var gulp = require('gulp'),
    path = require('path'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),    
    getF7FileList = require('./framework7-custom-build'),
    sourcemaps = require('gulp-sourcemaps'),
    tsc = require('gulp-typescript'),
    merge = require('merge2');

var webpack = require('webpack-stream');

gulp.task('clean', function () {
    return gulp.src('./dist', { read: false })
        .pipe(clean());
});   

gulp.task('build-framework7-core', function () {
    return gulp.src(getF7FileList())
        .pipe(concat('framework7.custom.js'))
        .pipe(gulp.dest('dist/src/'));
});

gulp.task('copy-less', ['clean'], function () {
    gulp
        .src('./src/less/**/*')
        .pipe(gulp.dest('./dist/src/less'))
});

gulp.task('compile-ts', ['clean'], function () {
    var tsProject = tsc.createProject('tsconfig.json');

    var tsResult = gulp.src(['./src/**/*.ts', './src/**/*.tsx', './typings/**/*.ts'])
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));

    return merge([
        tsResult.dts.pipe(gulp.dest('dist/src/')),
        tsResult.js.pipe(sourcemaps.write('.', {
            includeContent: false,
            sourceRoot: function (file) {
                var sourceFile = path.join(file.cwd, file.sourceMap.file);
                return "../" + path.relative(path.dirname(sourceFile), __dirname);
            }
        }))
        .pipe(gulp.dest('dist/src/'))
    ]);
});

gulp.task('default', ['build-framework7-core', 'compile-ts', 'copy-less']);