Slush-WebNext
=============

A Slush generator for the WebNext website templates (HTML Edition, Jade Edition, etc.)

[![Version][version-img]][version-url] [![License][license-img]][license-url] [![Dependency Status][gemnasium-img]][gemnasium-url]

### Setup

First install slush globally: 

run `npm install -g slush`

Then install slush-webnext globally: 

clone the repo, move into it, and run `npm link .` 

### Usage

Move to the directory of your new project and run

`slush webnext`

You will then be prompted with whether you want to use webnext-html or webnext-jade.

You can skip the first question/prompt by running 

`slush webnext html` or `slush webnext jade`

for documentation on WebNext itself, visit [`myhonor16/webnext-html`][webnext-html-repo] or [`myhonor16/webnext-jade`][webnext-jade-repo]

### Getting To Know Slush

Slush is a tool that uses Gulp for project scaffolding.

Slush does not contain anything "out of the box", except the ability to locate installed slush generators and to run them with liftoff.

To find out more about Slush, check out the [documentation](https://github.com/slushjs/slush).

[version-url]: https://github.com/myhonor16/slush-webnext/releases
[version-img]: http://img.shields.io/badge/Version-3.0.0-brightgreen.svg
[license-url]: https://github.com/myhonor16/slush-webnext/blob/master/LICENSE
[license-img]: http://img.shields.io/badge/License-MIT-blue.svg
[gemnasium-url]: https://gemnasium.com/myhonor16/slush-webnext
[gemnasium-img]: https://gemnasium.com/myhonor16/slush-webnext.svg

[webnext-html-repo]: https://github.com/myhonor16/webnext-html
[webnext-jade-repo]: https://github.com/myhonor16/webnext-jade
