var gulp = require('gulp'),
    path = require('path'),
    rollup = require('rollup-stream'),
    buble = require('rollup-plugin-buble'),
    vue = require('rollup-plugin-vue2'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    fs = require('fs'),
    to = require('to-case');

const ensureDirectoryExistence = (filePath) => {
    var dirname = path.dirname(filePath);
    
    if (fs.existsSync(dirname)) {
        return true;
    }

    ensureDirectoryExistence(dirname);
    
    fs.mkdirSync(dirname);
};

export default function(cb) {
    const paths = [
        './node_modules/framework7-vue/src/components/',
        './node_modules/framework7-vue/src/mixins/'        
    ];
    
    const components = [];
    const imports = [];

    paths.forEach(path => {
        const files = fs.readdirSync(path);
        files.filter(file => file.indexOf('.vue') != -1).forEach(file => {
            const componentName = to.pascal(`vue-${file.replace('.vue', '')}${(path.indexOf('mixins') !== -1) ? '-mixin' : ''}`);
            imports.push(`import ${componentName} from '${'.' + path + file}'`);
            components.push(componentName);            
        });
    });

    const index = `${imports.join('\n')}\n\nexport {\n\t${components.join(',\n\t')}\n}`;

    ensureDirectoryExistence('./framework7-vue/index.js');

    fs.writeFileSync('./framework7-vue/index.js', index);

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
    .on('end', cb);    
};