'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var pump = require('pump');
var runSequence = require('run-sequence');

gulp.task('default', function(){
  runSequence('clean', ['sass', 'uglify']);
});

gulp.task('sass', function () {
  return gulp.src('./assets/src/css/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'})
    .on('error', sass.logError))
    .pipe(gulp.dest('./assets/build/css'));
});

gulp.task('uglify', function (cb) {
  // returns a Node.js stream, but no handling of error messages
  // return gulp.src('./assets/src/js/**/*.js')
  //   .pipe(uglify())
  //   .on('error', function(err){ console.error('Error in uglify task', err.toString()); })
  //   .pipe(gulp.dest('./assets/build/js'));
  pump([
      gulp.src('./assets/src/js/**/*.js'),
      uglify(),
      gulp.dest('./assets/build/js')
    ],
    cb
  );
});

gulp.task('clean', function () {
    return gulp.src('./assets/build', {read: false})
        .pipe(clean({force: true}));
});
