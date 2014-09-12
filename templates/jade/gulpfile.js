var gulp = require('gulp');

var concat = require('gulp-concat');

// Server
var webserver = require('gulp-webserver');

// Jade
var jade = require('gulp-jade');

// CSS
var sass = require('gulp-ruby-sass');
var minifyCSS = require('gulp-minify-css');

// JS
var minifyJS = require('gulp-minify');
var jshint = require('gulp-jshint');
var jshintStylish = require('jshint-stylish');

// Server
gulp.task('server', function() {
	gulp.src('./')
		.pipe(webserver({
			port: 9000,
			directoryListing: true
		}));
});

// Build
gulp.task('build-jade', function() {
	gulp.src('./example.jade')
		.pipe(jade({
			pretty: false
		}))
		.pipe(gulp.dest('./'));
});

gulp.task('build-css', function() {
	gulp.src('./sass/export.scss')
		.pipe(sass({
			compass: true
		}))
		.pipe(minifyCSS())
		.pipe(gulp.dest('./css/'));
});

gulp.task('build-js', function() {
	gulp.src(['bower_components/zepto/zepto.min.js', 'js/main.js'])
		.pipe(concat('export.js'))
		.pipe(minifyJS())
		.pipe(gulp.dest('./js/'));
});

gulp.task('build', ['build-jade', 'build-css', 'build-js'], function() {
});

// Test
gulp.task('test-js', function() {
	gulp.src('./js/main.js')
		.pipe(jshint())
		.pipe(jshint.reporter(jshintStylish));
});

gulp.task('test', ['test-js'], function() {
});

//  Default
gulp.task('default', ['build', 'test'], function() {
});
