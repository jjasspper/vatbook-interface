var gulp = require('gulp'),
	plumber = require('gulp-plumber');
	notify = require('gulp-notify');

var sass = require('gulp-sass'),
	cleanCSS = require('gulp-clean-css');

var path = {
	sass: {
		src: 'assets/sass/vatbook-table.scss',
		dest: 'src'
	}
};

gulp.task('default', ['sass', 'watch']);

gulp.task('watch', function () {
	gulp.watch(path.sass.src, ['sass']);
});

gulp.task('sass', function () {
	gulp.src(path.sass.src)
		.pipe(plumber({
			errorHandler: function (err) {
				console.log(err.message);
				this.emit('End.');
			}
		}))
		.pipe(sass())
		.pipe(cleanCSS())
		.pipe(gulp.dest(path.sass.dest))
		.pipe(notify({
			message: 'Sass compiled.',
			onLast: true
		}));
});