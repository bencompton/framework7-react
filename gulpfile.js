var gulp = require('gulp'),
    path = require('path'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),    
    getF7FileList = require('./framework7-custom-build'),
    sourcemaps = require('gulp-sourcemaps'),
    tsc = require('gulp-typescript'),
    merge = require('merge2'),
    replace = require('gulp-replace'),
    sourcemaps = require('gulp-sourcemaps'),
    rollup = require('rollup-stream'),
    buble = require('rollup-plugin-buble'),
    vue = require('rollup-plugin-vue2'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    rename = require('gulp-rename'),
    fs = require('fs'),
    to = require('to-case');

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

gulp.task('compile-framework7-vue', ['clean'], function(cb) {
    const paths = [
        './node_modules/framework7-vue/src/components/',
        './node_modules/framework7-vue/src/mixins/'
    ];
    
    const components = [];
    const imports = [];

    paths.forEach(path => {
        files = fs.readdirSync(path);
        files.filter(file => file.indexOf('.vue') != -1).forEach(file => {
            const componentName = to.pascal(`vue-${file.replace('.vue', '')}${(path.indexOf('mixins') !== -1) ? '-mixin' : ''}`);
            imports.push(`import ${componentName} from '${'.' + path + file}'`);
            components.push(componentName);            
        });
    });

    const index = `${imports.join('\n')}\n\nexport {\n\t${components.join(',\n\t')}\n}`;

    fs.writeFile('./framework7-vue/index.js', index, () => {
        rollup({
            entry: './framework7-vue/index.js',
            plugins: [vue(), buble()],
            format: 'es',
            moduleName: 'Framework7Vue',
            useStrict: false,
            sourceMap: true
        })
        .pipe(source('framework7-vue.js', './framework7-vue'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./framework7-vue/'))
        .on('end', function() {
            gulp.src('./framework7-vue/framework7-vue.js')
                .pipe(gulp.dest('./dist/framework7-vue/'))
                .on('end', cb);
        });
    });   
});

gulp.task('compile-ts', ['clean', 'compile-framework7-vue'], function () {
    var tsProject = tsc.createProject('tsconfig.json');

    var tsResult = gulp.src(['./src/**/*.ts', './src/**/*.tsx', './typings/**/*.ts'])
        .pipe(sourcemaps.init())
        .pipe(tsProject());

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

gulp.task('default', ['clean', 'build-framework7-core', 'compile-framework7-vue', 'compile-ts', 'copy-less']);