var gulp = require('gulp'),
	inquirer = require('inquirer'),
	conflict = require('gulp-conflict'),
	install = require('gulp-install');

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
				.pipe(conflict('./'))
				.pipe(gulp.dest('./'))
				.pipe(install())
				.on('finish', function () {
					done();
				});
			}
			if (answers.edition ==  'Jade') {
				gulp.src(__dirname + '/templates/jade/**')
				.pipe(conflict('./'))
				.pipe(gulp.dest('./'))
				.pipe(install())
				.on('finish', function () {
					done();
				});
			}
			
		});
});

