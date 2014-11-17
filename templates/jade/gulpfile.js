var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	livereload = require('gulp-livereload'),
	notify = require('gulp-notify'),
	concat = require('gulp-concat');

var jade = require('gulp-jade');

var stylus = require('gulp-stylus'),
	autoprefixer = require('gulp-autoprefixer'),
	minifyCSS = require('gulp-minify-css');

var uglify = require('gulp-uglify');

// Build
	gulp.task('jade', function() {
		gulp.src(['./build/**/*.jade', '!./build/{templates,includes}/*'])
			.pipe(plumber())
			.pipe(jade({
				pretty: false
			}))
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

		/*gulp.src(['./bower_components/'])
			.pipe(plumber())
			.pipe(concat('main.js'))
			.pipe(uglify({
				mangle: false,
				output: {
					comments: true
				}
			}))
			.pipe(gulp.dest('./dist/js/lib/'))
			.pipe(livereload({
				auto: false
			}));*/

		// Your JS
		gulp.src(['./build/js/main.js'])
			.pipe(plumber())
			.pipe(concat('main.js'))
			.pipe(uglify())
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

		gulp.watch('./build/**/*.jade', ['jade']);
		gulp.watch('./build/css/**', ['css']);
		gulp.watch('./build/js/**', ['js']);
	});

// Default
	gulp.task('default', ['jade', 'css', 'js'], function() {
	});

