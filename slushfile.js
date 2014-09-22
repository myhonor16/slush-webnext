var gulp = require('gulp'),
	install = require('gulp-install'),
	conflict = require('gulp-conflict'),
	template = require('gulp-template'),
	inquirer = require('inquirer');

gulp.task('default', function (done) {
	inquirer.prompt([
			{
				type: 'list', 
				name: 'edition', 
				message: 'Which version of WebNext do you want to use?',
				choices: [
					'HTML',
					'Jade'
				]
			},
			/*{
				type: 'input', 
				name: 'name', 
				message: 'What is the name of your project?',
				default: gulp.args.join('WebNext')
			},
			{
				type: 'input', 
				name: 'description', 
				message: 'What is the description of your project?',
				default: gulp.args.join('A template for creating websites with Gulp & Sass (SCSS)')
			},*/
			{
				type: 'confirm', 
				name: 'moveon', 
				message: 'Continue?'
			}
		],
		function (answers) {
			if (!answers.moveon) {
				return done();
			}
			if (answers.edition ==  'HTML') {
				gulp.src(__dirname + '/templates/html/**')
				/*.pipe(template(answers))*/
				.pipe(conflict('./'))
				.pipe(gulp.dest('./'))
				.pipe(install())
				.on('finish', function () {
					done();
				});
			}
			if (answers.edition ==  'Jade') {
				gulp.src(__dirname + '/templates/jade/**')
				/*.pipe(template(answers))*/
				.pipe(conflict('./'))
				.pipe(gulp.dest('./'))
				.pipe(install())
				.on('finish', function () {
					done();
				});
			}
			
		});
});

