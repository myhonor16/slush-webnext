Slush-WebNext
=============

A Slush generator for the WebNext website templates (HTML Edition, Jade Edition, etc.)

[![Version][version-img]][version-url] [![License][license-img]][license-url] [![Build Status][travis-img]][travis-url]

### Setup

run `npm install -g slush` and `npm install -g slush-webnext`

### Usage

Move to the directory of your new project and run

`slush webnext`

You will then be prompted with whether you want to use webnext-html or webnext-jade, followed by a prompt for the name & description of your project.

You can skip the first question/prompt by running 

`slush webnext html` or `slush webnext jade`

for documentation on WebNext itself, visit [`myhonor16/webnext-html`](https://github.com/myhonor16/webnext-html) or [`myhonor16/webnext-jade`](https://github.com/myhonor16/webnext-jade)

### Getting To Know Slush

Slush is a tool that uses Gulp for project scaffolding.

Slush does not contain anything "out of the box", except the ability to locate installed slush generators and to run them with liftoff.

To find out more about Slush, check out the [documentation](https://github.com/slushjs/slush).

[version-url]: https://github.com/myhonor16/slush-webnext/releases
[version-img]: http://img.shields.io/badge/Version-0.1.0-yellow.svg
[license-url]: https://github.com/myhonor16/slush-webnext/blob/master/LICENSE
[license-img]: http://img.shields.io/badge/License-MIT-red.svg
[travis-url]: https://travis-ci.org/myhonor16/slush-webnext
[travis-img]: https://travis-ci.org/myhonor16/slush-webnext.svg?branch=master
