WebNext: Jade Edition
=============

A template for creating websites with Gulp, Jade & Stylus

[![Version][version-img]][version-url] [![License][license-img]][license-url] [![Dependency Status][gemnasium-img]][gemnasium-url] [![Open Issues][issues-img]][issues-url]

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
* gulp-jade ^0.8.0
* gulp-stylus ^1.3.4
* gulp-autoprefixer ^2.0.0
* gulp-minify-css ^0.3.11
* gulp-minify ^0.0.3

### Usage

* `npm start` (requires http-server to be installed globally. simply run `npm install -g http-server` to install) to run a local server on port [:9000](http://127.0.0.1:9000)
  * works in the project base & the dist folder (copy package.json from dist to any other folder to make it work there too)
* `gulp` to compile jade, stylus & js files
  * `gulp jade` to compile just the jade files
  * `gulp css` to compile just the stylus files
  * `gulp js` to compile just the js files
* `gulp watch` to watch for file changes and run the appropriate tasks

You must add your individual CSS & JS libraries to `gulpfile.js`. Jade files are detected automatically.

[version-url]: https://github.com/myhonor16/webnext-jade/releases
[version-img]: http://img.shields.io/badge/Version-3.0.2-brightgreen.svg?style=flat
[license-url]: https://github.com/myhonor16/webnext-jade/blob/master/LICENSE
[license-img]: http://img.shields.io/badge/License-MIT-blue.svg?style=flat
[gemnasium-url]: https://gemnasium.com/myhonor16/webnext-jade
[gemnasium-img]: http://img.shields.io/gemnasium/myhonor16/webnext-jade.svg?style=flat
[issues-url]: https://github.com/myhonor16/webnext-jade/issues
[issues-img]: http://img.shields.io/github/issues/myhonor16/webnext-jade.svg?style=flat

[slush-webnext]: https://github.com/myhonor16/slush-webnext
