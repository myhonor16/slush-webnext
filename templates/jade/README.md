WebNext: Jade Edition
=============

A template for creating websites with Gulp, Jade & Sass (SCSS)

[![Build Status](https://travis-ci.org/myhonor16/webnext-jade.svg?branch=master)](https://travis-ci.org/myhonor16/webnext-jade)

### Setup

run `bower install` & `npm install` to install dependencies (listed below)

* **-- bower --**
* HTML5shiv v3.7.2
* Zepto (Default) v1.1.3
* jQuery (Optional) v1.11.0
* Bootstrap (Sass Version) v3.1.1
* **-- npm --**
* gulp v3.8.1
* gulp-concat v2.3.4
* gulp-webserver v0.6.0
* gulp-jade v0.6.0
* gulp-ruby-sass v0.5.0
* gulp-minify-css v0.3.5
* gulp-minify v0.0.3
* gulp-jshint v1.6.3
* jshint-stylish v0.2.0

### Usage

* `gulp server` to run a local server on port [:9000](http://127.0.0.1:9000)
* `gulp build` to compile jade, sass & js files
* `gulp test` to run jshint

**FYI:** you must add your individual jade files to `gulpfile.js`
