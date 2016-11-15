var gulp = require('gulp'),
    path = require('path'),
    del = require('del');    

var webpack = require('webpack-stream');

gulp.task('clean', function() {
    return del(['./dist/']);
});

gulp.task('webpack', ['clean'], function () {
    var webpackConfig = require('./webpack.config.js');

    return webpack(webpackConfig)
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['webpack']);