var gulp = require('gulp');
var sass = require('gulp-sass');

var paths = {
  scssSource: 'assets/scss/',
  cssDestination: 'assets/css/'
};

gulp.task('styles', function () {
  return gulp.src(
  	[paths.scssSource + '**/main .scss'])
    	.pipe(sass({
    			includePaths: [
    				'./js/libs/foundation-sites/scss'
				]
    		}))
    	.pipe(gulp.dest(paths.cssDestination));
});
 
gulp.task('sass:watch', function () {
  gulp.watch(paths.scssSource + '**/*.scss', ['styles']);
});

gulp.task('default', ['styles']);