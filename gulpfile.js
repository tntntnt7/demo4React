const gulp = require('gulp')
const shell = require('gulp-shell')
const del = require('del')
const gulp_tslint = require('gulp-tslint')
const path = require('path')
const fs = require('fs-extra')

gulp.task('default', ['start'])

gulp.task('start', ['clean'], shell.task('yarn start'))

gulp.task('clean', ['tslint'], async () => {
	await del('./build', { force: true })
	await del('./dist/bundle.js')
	return true
})

gulp.task('tslint', () => {
  return gulp.src(['./src/**/*.ts'])
    .pipe(gulp_tslint({
      formatter: "verbose"
      // configuration: "./tslint.json"
    }))
    .pipe(gulp_tslint.report({
      emitError: true,
      summarizeFailureOutput: true
    }));
});
