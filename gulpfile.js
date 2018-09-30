var gulp = require('gulp'),
//webpack ....
settings = require('./settings'),
browserSync = require('browser-sync').create(),
autoprefixer = require('autoprefixer'),
postcss =require('gulp-postcss'),
rgba = require('postcss-hexrgba'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
colorFunctions = require('postcss-color-function');


gulp.task('styles', function() {
	return gulp.src(settings.themeLocation + 'assets/styles/style.css')
	.pipe(postcss([cssImport, mixins, cssvars, nested, rgba, colorFunctions, autoprefixer]))
	.on('error', (error) => console.log(error.toString()))
	.pipe(gulp.dest(settings.themeLocation));
});


gulp.task('watch', function() {
	browserSync.init({
		notify: false,
		proxy: settings.urlToPreview,
		// ghostmode?
		ghostMode: false
	});

	gulp.watch('./**/*.php', function() {
		browserSync.reload();
	}); 
});