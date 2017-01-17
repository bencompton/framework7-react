var gulp = require('gulp'),
    path = require('path'),
    del = require('del');    

var webpack = require('webpack-stream');

gulp.task('clean', function() {
    return del(['./dist/']);
});

gulp.task('webpack', ['clean'], function () {
    var webpackConfig = require('./webpack.config.js');

    return webpack(webpackConfig, require('webpack'))    
        .pipe(gulp.dest('dist/'));
});

gulp.task('copyFw7', function() {
    return gulp.src([
        './node_modules/framework7-vue/kitchen-sink/framework7/*'])
        .pipe(gulp.dest('./framework7/'));
});



gulp.task('default', ['webpack', 'copyFw7']);