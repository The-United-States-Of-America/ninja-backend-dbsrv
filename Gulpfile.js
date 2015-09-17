require('babel/register');

var gulp = require("gulp");
var babel = require("gulp-babel");
var esdoc = require("gulp-esdoc");
var del = require('del');

var mocha = require('gulp-mocha');

gulp.task('test', function() {
  return gulp.src('test/**/*.js')
    .pipe(mocha());
})

gulp.task('clean', function() {
    return del(['docs', 'dist']);
});

gulp.task('transpile', ['clean'], function() {
  return gulp.src("src/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task('document', ['clean'], function() {
  return gulp.src("./src")
    .pipe(esdoc({ destination: "./docs" }));
});

gulp.task('build', ['transpile', 'document']);
gulp.task('default', ['build']);
