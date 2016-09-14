var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

// variables for Script and CSS leveraged in app
var scriptSources = [
	'js/main.js',
	'js/app.js'
];

var cssSources = [
	'css/*', 
	'node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css'
];

// task to concatenate CSS files and push to build
gulp.task('css', function() {
	gulp.src(cssSources)
		.pipe(concat('styles.css'))
		.pipe(gulp.dest('build'))
});

// task to concatenate JS files and push to build
gulp.task('js', function() {
	return browserify({ entries: scriptSources, debug: true }) 
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('build'))
});