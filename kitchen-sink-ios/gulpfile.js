var gulp = require('gulp'),
    tsc = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    tsProject = tsc.createProject('tsconfig.json'),
    path = require('path');

var merge = require('merge2'),
    del = require('del');

gulp.task('clean-ts', function (callback) {
  var typeScriptGenFiles = ['./dist/**/*.*'];
  return del(typeScriptGenFiles, callback);
});    

gulp.task('compile-ts', ['clean-ts'], function () {
    var tsResult = tsProject.src()
    .pipe(sourcemaps.init())
    .pipe(tsc(tsProject));

    return merge([
        tsResult.dts.pipe(gulp.dest('dist')),
        tsResult.js.pipe(sourcemaps.write('.', {
            includeContent: false,
            sourceRoot: function (file) {
                var sourceFile = path.join(file.cwd, file.sourceMap.file);
                return "../" + path.relative(path.dirname(sourceFile), __dirname);
            }
        })).pipe(gulp.dest('dist'))
    ]);
});

// gulp.task('webpack', ['compile-ts'], function () {
//     gulp
//         .src('./node_modules/framework7/dist/css/*.css')
//         .pipe(gulp.dest('./dist/css/'))
// });

gulp.task('default', ['clean-ts', 'compile-ts']);