var gulp = require('gulp'),
    path = require('path'),
    del = require('del'),
    concat = require('gulp-concat'),    
    getF7FileList = require('./framework7-custom-build');

var webpack = require('webpack-stream');

gulp.task('clean', function (callback) {
  var distFiles = ['./dist/**/*.*'];
  return del(distFiles, callback);
});   

gulp.task('build-framework7-core', function () {
    return gulp.src(getF7FileList())
        .pipe(concat('framework7.custom.js'))
        .pipe(gulp.dest('dist/temp/'));
});

gulp.task('webpack', ['clean', 'build-framework7-core'], function () {
    var webpackConfig = require('./webpack.config.js');   
             
    return webpack(webpackConfig, require('webpack'))
        .pipe(gulp.dest('dist/'));    
});

gulp.task('copy-less', ['clean'], function () {
    gulp
        .src('./src/less/**/*')
        .pipe(gulp.dest('./dist/less'))
});

gulp.task('default', ['build-framework7-core', 'webpack', 'copy-less']);