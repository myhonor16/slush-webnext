WebNext: HTML Edition
=============

A template for creating websites with Gulp & Stylus

[![Version][version-img]][version-url] [![License][license-img]][license-url] [![Dependency Status][gemnasium-img]][gemnasium-url]

### Setup

run `bower install` & `npm install` to install dependencies (listed below)

You can also use the [WebNext slush generator][slush-webnext] instead of cloning this repo

* **-- bower --**
* HTML5shiv ^3.7.2
* Normalize.css ^3.0.2
* **-- npm --**
* gulp ^3.8.10
* gulp-plumber ^0.6.6
* gulp-livereload ^2.1.1
* gulp-notify ^2.0.1
* gulp-concat ^2.4.0
* gulp-stylus ^1.3.4
* gulp-autoprefixer ^2.0.0
* gulp-minify-css ^0.3.11
* gulp-minify ^0.0.3

### Usage

* `npm start` (requires http-server to be installed globally. simply run `npm install -g http-server` to install) to run a local server on port [:9000](http://127.0.0.1:9000)
  * works in the project base & the dist folder (copy package.json from dist to any other folder to make it work there too)
* `gulp` to process html, stylus & js files
  * `gulp html` to process just the html files
  * `gulp css` to process just the stylus files
  * `gulp js` to process just the js files
* `gulp watch` to watch for file changes and run the appropriate tasks

You must add your individual CSS & JS libraries to `gulpfile.js`. HTML files are detected automatically.

[version-url]: https://github.com/myhonor16/webnext-html/releases
[version-img]: http://img.shields.io/badge/Version-3.0.3-brightgreen.svg
[license-url]: https://github.com/myhonor16/webnext-html/blob/master/LICENSE
[license-img]: http://img.shields.io/badge/License-MIT-blue.svg
[travis-url]: https://travis-ci.org/myhonor16/webnext-html
[travis-img]: https://travis-ci.org/myhonor16/webnext-html.svg?branch=master
[gemnasium-url]: https://gemnasium.com/myhonor16/webnext-html
[gemnasium-img]: https://gemnasium.com/myhonor16/webnext-html.svg

[slush-webnext]: https://github.com/myhonor16/slush-webnext
