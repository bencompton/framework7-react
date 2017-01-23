import {generateReactComponents} from './framework7-react-component-gen';
import compileFramework7Vue from  './framework7-vue-build';

const gulp = require('gulp'),
    path = require('path'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),    
    getF7FileList = require('./framework7-custom-build'),    
    tsc = require('gulp-typescript'),
    merge = require('merge2'),
    replace = require('gulp-replace'),
    sourcemaps = require('gulp-sourcemaps');    

gulp.task('clean', () => {
    return gulp.src(['./dist', './framework7-vue', './framework7-react'], { read: false })
        .pipe(clean());
});   

gulp.task('build-framework7-core', ['clean'], () => {
    return merge(
        gulp.src(getF7FileList())
            .pipe(concat('Framework7.js'))
            .pipe(replace('window.Framework7 = ', 'window.Framework7 = module.exports.Framework7 = '))
            .pipe(replace('window.Dom7 = ', 'window.Dom7 = module.exports.Dom7 = '))                        
            .pipe(replace('window.Template7 = ', 'window.Template7 = module.exports.Template7 = '))
            .pipe(gulp.dest('dist/src/')),
        gulp.src('./src/Framework7.d.ts')
            .pipe(gulp.dest('./dist/src/'))
    ); 
});

gulp.task('compile-framework7-vue', ['clean'], (cb) => {
    return compileFramework7Vue(() => {
        gulp.src('./node_modules/framework7-vue/src/utils/router.js')
            .pipe(gulp.dest('./framework7-vue/'))
            .pipe(gulp.dest('./dist/framework7-vue/'))
            .on('end', cb);
    });
});

gulp.task('generate-react-components', ['clean', 'compile-framework7-vue'], () => {
    return generateReactComponents({
        overrides: {
            FormInput: {
                events: [
                   'focus',
                   'blur',
                   'change',
                   'click'
                ]
            }
        }
    });
});

gulp.task('compile-ts', ['clean', 'compile-framework7-vue'], () => {
    var tsProject = tsc.createProject('tsconfig.json');

    var tsResult = tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject());

    return merge([
        tsResult.dts.pipe(gulp.dest('dist/')),
        tsResult.js.pipe(sourcemaps.write('.', {
            includeContent: false,
            sourceRoot: function (file) {
                var sourceFile = path.join(file.cwd, file.sourceMap.file);
                return "../" + path.relative(path.dirname(sourceFile), __dirname);
            }
        }))
        .pipe(gulp.dest('dist/'))        
    ]);
});

gulp.task('tidy-dist-dir', ['compile-ts'], () => {
    return gulp.src(['./dist/*.js', './dist/*.map'], { read: false })
        .pipe(clean());
});

gulp.task('default', 
    [
        'clean',
        'build-framework7-core',
        'compile-framework7-vue',
        'generate-react-components',
        'compile-ts',
        'tidy-dist-dir'        
    ]
);