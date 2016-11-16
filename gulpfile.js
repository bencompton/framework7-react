var gulp = require('gulp'),
    path = require('path'),
    del = require('del'),
    concat = require('gulp-concat'),
    merge = require('merge2'),
    getF7FileList = require('./framework7-custom-build');

var webpack = require('webpack-stream');

gulp.task('clean', function (callback) {
  var distFiles = ['./dist/**/*.*'];
  return del(distFiles, callback);
});   

gulp.task('webpack', ['clean'], function () {
    var webpackConfig = require('./webpack.config.js');

    return merge(
        gulp.src(getF7FileList()),        
        webpack(webpackConfig)
    )
    .pipe(concat('index.js'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('copy-less', ['clean'], function () {
    gulp
        .src('./src/less/**/*')
        .pipe(gulp.dest('./dist/less'))
});

gulp.task('default', ['webpack', 'copy-less']);