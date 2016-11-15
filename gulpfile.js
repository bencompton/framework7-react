var gulp = require('gulp'),
    path = require('path'),
    del = require('del');    

var webpack = require('webpack-stream');

gulp.task('clean', function (callback) {
  var distFiles = ['./dist/**/*.*'];
  return del(distFiles, callback);
});   

gulp.task('webpack', ['clean'], function () {
    var webpackConfig = require('./webpack.config.js');

    return webpack(webpackConfig)    
        .pipe(gulp.dest('dist/'));
});

gulp.task('copy-less', ['clean'], function () {
    gulp
        .src('./src/less/**/*')
        .pipe(gulp.dest('./dist/less'))
});

gulp.task('default', ['webpack', 'copy-less']);