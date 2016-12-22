var gulp = require('gulp'),
    path = require('path'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),    
    getF7FileList = require('./framework7-custom-build'),
    sourcemaps = require('gulp-sourcemaps'),
    tsc = require('gulp-typescript'),
    merge = require('merge2'),
    replace = require('gulp-replace');

gulp.task('clean', function () {
    return gulp.src('./dist', { read: false })
        .pipe(clean());
});   

gulp.task('build-framework7-core', ['clean'], function () {
    return merge(
        gulp.src(getF7FileList())
            .pipe(concat('Framework7.js'))
            .pipe(replace('window.Framework7 = ', 'window.Framework7 = module.exports.Framework7 = '))
            .pipe(replace('window.Dom7 = ', 'window.Dom7 = module.exports.Dom7 = '))
            .pipe(gulp.dest('dist/src/')),
        gulp.src('./src/Framework7.d.ts')
            .pipe(gulp.dest('./dist/src/'))
    ); 
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