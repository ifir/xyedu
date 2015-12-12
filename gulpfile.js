var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var minjs = require('gulp-uglify');
var mincss = require('gulp-minify-css');
var minimg = require('gulp-imagemin');


var scssPath = './src/assets/scss/*.scss';
var jsPath = './src/assets/js/*.js';
var imgPath = './src/assets/img/*.*';
var htmlPath = './src/*.html';

gulp.task('sass', function  () {
	gulp.src(scssPath)
	.pipe(sass())
	.pipe(gulp.dest('./src/dist/css'))
});

gulp.task('js', function  () {
	gulp.src(jsPath)
	.pipe(gulp.dest('./src/dist/js'))
});

gulp.task('img', function  () {
	gulp.src(imgPath)
	.pipe(minimg())
	.pipe(gulp.dest('./src/dist/img'))
});

gulp.task('reload', function  () {
	browserSync({
		files:'**', //监听整个项目
		server: {
			baseDir : './src' //监听当前路径
		},
		port: 3000 //端口号
	})
});

gulp.task('watch',function (){
	gulp.watch([scssPath,jsPath,imgPath,htmlPath], ['reload']);
	gulp.watch([scssPath], ['sass']);
	gulp.watch([imgPath], ['img']);
});

gulp.task('default', ['sass', 'js', 'img', 'watch', 'reload']);