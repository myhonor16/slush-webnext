WebNext: Jade Edition
=============

A template for creating websites with Gulp, Jade & Sass (SCSS)

[![Version][version-img]][version-url] [![License][license-img]][license-url] [![Dependency Status][gemnasium-img]][gemnasium-url]

### Setup

run `bower install` & `npm install` to install dependencies (listed below)

**NEW:** you can now use the new [WebNext slush generator][slush-webnext]

* **-- bower --**
* HTML5shiv ^3.7.2
* Zepto (Default) ^1.1.4
* jQuery (Optional) ^1.11.0
* Bootstrap (Sass Version) ^3.2.0
* Bootswatch-sass ^3.2.0
* **-- npm --**
* gulp ^3.8.8
* gulp-concat ^2.4.0
* gulp-webserver ^0.8.0
* gulp-jade ^0.8.0
* gulp-ruby-sass ^0.7.1
* gulp-minify-css ^0.3.8
* gulp-minify ^0.0.3
* gulp-jshint ^1.8.4
* jshint-stylish ^0.4.0

### Usage

* `gulp server` or `npm start` (`npm install -g http-server`) to run a local server on port [:9000](http://127.0.0.1:9000)
* `gulp build` to compile jade, sass & js files
* `gulp test` to run jshint

**FYI:** you must add your individual jade files to `gulpfile.js`

[version-url]: https://github.com/myhonor16/webnext-jade/releases
[version-img]: http://img.shields.io/badge/Version-1.1.0-yellow.svg
[license-url]: https://github.com/myhonor16/webnext-jade/blob/master/LICENSE
[license-img]: http://img.shields.io/badge/License-MIT-red.svg
[travis-url]: https://travis-ci.org/myhonor16/webnext-jade
[travis-img]: https://travis-ci.org/myhonor16/webnext-jade.svg?branch=master
[gemnasium-url]: https://gemnasium.com/myhonor16/webnext-jade
[gemnasium-img]: https://gemnasium.com/myhonor16/webnext-jade.svg

[slush-webnext]: https://github.com/myhonor16/slush-webnext
