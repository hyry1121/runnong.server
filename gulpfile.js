const gulp = require('gulp'),
			replace = require('gulp-replace')

const devURLHost = 'http://localhost:3000'

gulp.task( 'admin-js', () => {
	return gulp.src( './static/admin/static/js/*.js' )
		.pipe( replace(devURLHost, '') )
		.pipe( gulp.dest('./static/admin/static/js') )
})

gulp.task( 'client-js', () => {
	return gulp.src( './static/client/static/js/*.js' )
		.pipe( replace(devURLHost, '') )
		.pipe( gulp.dest('./static/client/static/js') )
})

gulp.task( 'default', ['admin-js', 'client-js'], () => {
	console.info( 'replace js ok ...' )
})