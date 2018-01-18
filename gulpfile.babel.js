import {generateReactComponents} from './framework7-react-component-gen';

// const gulp = require('gulp'),
//     path = require('path'),
//     clean = require('gulp-clean'),
//     concat = require('gulp-concat'),
//     tsc = require('gulp-typescript'),
//     merge = require('merge2'),
//     replace = require('gulp-replace'),
//     sourcemaps = require('gulp-sourcemaps'),
//     webpack = require('webpack-stream'),
//     getWebpackConfig = require('./webpack.config.js').getWebpackConfig,
//     header = require('gulp-header'),
//     pkg = require('./package.json');

// function addHeader() {
//     const banner = [
//         '/**',
//         ' * Framework7 React <%= pkg.version %>',
//         ' * <%= pkg.description %>',
//         ' * <%= pkg.homepage %>',
//         ' * ',
//         ' * Copyright <%= date.year %>',
//         ' * ',
//         ' * http://www.framework7.io/',
//         ' * ',        
//         ' * Licensed under <%= pkg.license %>',
//         ' * ',
//         ' * Released on: <%= date.month %> <%= date.day %>, <%= date.year %>',
//         ' */',
//         ''
//     ].join('\n');    

//     const args = {
//         pkg: pkg,
//         date: (function () {
//             return {
//                 year: new Date().getFullYear(),
//                 month: ('January February March April May June July August September October November December').split(' ')[new Date().getMonth()],
//                 day: new Date().getDate()
//             };
//         })()
//     };

//     return header(banner, args);
// }

// function runWebpack(minify, includeKitchenSink, outputDirectory) {
//     var webpackConfig = getWebpackConfig(minify, includeKitchenSink);    

//     if (minify) process.NODE_ENV = 'production';
    
//     return webpack(webpackConfig, require('webpack'))
//         .pipe(addHeader())
//         .pipe(gulp.dest(outputDirectory));
// }    

// gulp.task('clean', () => {
//     return gulp.src(['./dist', './framework7-vue', './framework7-react'], { read: false })    
//         .pipe(clean());
// });

// gulp.task('generate-react-components', ['clean'], () => {
//     return generateReactComponents();
// });

// gulp.task('compile-ts', ['clean'], () => {
//     var tsProject = tsc.createProject('tsconfig.json');

//     var tsResult = tsProject.src()
//         .pipe(sourcemaps.init())
//         .pipe(tsProject());

//     return merge([
//         tsResult.dts.pipe(gulp.dest('dist/commonjs/')),
//         tsResult.js.pipe(sourcemaps.write('.', {
//             includeContent: false,
//             sourceRoot: function (file) {
//                 var sourceFile = path.join(file.cwd, file.sourceMap.file);
//                 return "../" + path.relative(path.dirname(sourceFile), __dirname);
//             }
//         }))
//         .pipe(gulp.dest('dist/commonjs/'))        
//     ]);
// });

// gulp.task('build-dependencies', [
//     'clean',
//     'generate-react-components',
// ]); 

// gulp.task('build-for-commonjs', [
//     'build-dependencies',
//     'compile-ts'
// ], () => {
//     return gulp.src('./framework7/Framework7.d.ts').pipe(gulp.dest('dist/commonjs/framework7/'));
// });

// gulp.task('build-for-umd', ['build-dependencies'], () => {
//     const outputDirectory = './dist/umd/js/';

//     return merge(
//         runWebpack(false, false, outputDirectory),
//         runWebpack(true, false, outputDirectory),
//         gulp.src('./node_modules/framework7-bencompton-fork/dist/css/*').pipe(gulp.dest('./dist/umd/css/'))
//     );    
// });

// gulp.task('build-for-release', [
//     'build-dependencies',
//     'build-for-commonjs',
//     'build-for-umd'
// ]);

// gulp.task('default', [
//     'build-dependencies',
//     'build-for-commonjs'
// ]); 

export const build = () => generateReactComponents();

export default build;