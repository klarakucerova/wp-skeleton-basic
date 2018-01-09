
var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync');

var PATHS = {
    localhost: '',
    sass: {
        src: 'src/scss/',
        dest: 'src/css/'
    },
    css: {
        src: 'src/css/',
        dest: '.'
    }
}

gulp.task('browserSync', function() {
    browserSync({
        proxy: PATHS.localhost
    });
});

gulp.task('sass', function(){
  return gulp.src(PATHS.sass.src + '**/*.scss')
    .pipe(sass())
    .pipe(plugins.autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(PATHS.sass.dest))
    .pipe(browserSync.reload({
        stream: true
    }));
});

// Gulp watch syntax, browserSync and sass must run first
gulp.task('default', ['browserSync', 'sass', 'minify-css'], function(){
  gulp.watch(PATHS.sass.src + '**/*.scss', ['sass']); 

  gulp.watch('*.php', browserSync.reload);
  gulp.watch('templates/*', browserSync.reload);
  gulp.watch('template-parts/*', browserSync.reload);
  gulp.watch(PATHS.css.src + '*.css', ['minify-css']);
});

gulp.task('minify-css', () => {
    return gulp.src(PATHS.css.src + '*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(PATHS.css.dest));
});
