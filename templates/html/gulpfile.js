var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	livereload = require('gulp-livereload'),
	notify = require('gulp-notify'),
	concat = require('gulp-concat');

var minifyHTML = require('gulp-minify-html');

var stylus = require('gulp-stylus'),
	autoprefixer = require('gulp-autoprefixer'),
	minifyCSS = require('gulp-minify-css');

var minifyJS = require('gulp-minify');

// Build
	gulp.task('html', function() {
		gulp.src(['./**/*.html'])
			.pipe(plumber())
			.pipe(minifyHTML())
			.pipe(gulp.dest('./dist/'))
			.pipe(livereload({
				auto: false
			}))
			.pipe(notify('<%= file.relative %> - Successful'));
	});

	gulp.task('css', function() {
		// Libraries
		gulp.src(['./bower_components/normalize-css/normalize.css'])
			.pipe(plumber())
			.pipe(concat('lib.css'))
			.pipe(minifyCSS())
			.pipe(gulp.dest('./dist/css/'))
			.pipe(livereload({
				auto: false
			}));

		// Your CSS
		gulp.src('./build/css/export.styl')
			.pipe(plumber())
			.pipe(stylus({
				compress: false,
				linenos: true
			}))
			.pipe(autoprefixer({
				cascade: false
			}))
			.pipe(concat('main.css'))
			.pipe(gulp.dest('./dist/css/'))
			.pipe(livereload({
				auto: false
			}));
			
		gulp.src('')
			.pipe(notify('CSS - Task Successful'));
	});

	gulp.task('js', function() {
		// Libraries
		gulp.src(['./bower_components/html5shiv/dist/html5shiv-printshiv.min.js'])
			.pipe(plumber())
			.pipe(gulp.dest('./dist/js/lib/'))
			.pipe(livereload({
				auto: false
			}));

		// Your JS
		gulp.src(['./build/js/main.js'])
			.pipe(plumber())
			.pipe(concat('main.js'))
			.pipe(minifyJS())
			.pipe(gulp.dest('./dist/js/'))
			.pipe(livereload({
				auto: false
			}));
			
		gulp.src('')
			.pipe(notify('JS - Task Successful'));
	});

// Watch
	gulp.task('watch', function() {
		livereload.listen();

		gulp.watch('./build/**/*.html', ['html']);
		gulp.watch('./build/css/**', ['css']);
		gulp.watch('./build/js/**', ['js']);
	});

// Default
	gulp.task('default', ['html', 'css', 'js'], function() {
	});

