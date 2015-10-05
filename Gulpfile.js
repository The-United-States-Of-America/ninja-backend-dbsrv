require('babel/register');

const gulp = require("gulp"),
      babel = require("gulp-babel"),
      esdoc = require("gulp-esdoc"),
      eslint = require('gulp-eslint'),
      istanbul = require('gulp-istanbul'),
      mocha = require('gulp-mocha'),
      del = require('del');

gulp.task('lint', () => {
    return gulp.src(['src/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('test', () => {
  return gulp.src('test/**/*.js')
    .pipe(mocha())
    .pipe(istanbul.writeReports())
    .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }));
})

gulp.task('clean', () => {
    return del(['docs', 'dist']);
});

gulp.task('transpile', ['clean'], () => {
  return gulp.src("src/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task('document', ['clean'], () => {
  return gulp.src("./src")
    .pipe(esdoc({ destination: "./docs" }));
});

gulp.task('build', ['transpile', 'document']);
gulp.task('default', ['lint', 'build']);
