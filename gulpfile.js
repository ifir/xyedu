var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var minjs = require('gulp-uglify');
var mincss = require('gulp-minify-css');
var minimg = require('gulp-imagemin');
//路径
var scssPath = './src/assets/scss/*.scss';
var jsPath = './src/assets/js/*.js';
var imgPath = './src/assets/img/*.*';
var htmlPath = './src/*.html';
//编译scss文件输出css
gulp.task('sass', function  () {
	gulp.src(scssPath)
	//outputStyle => Type: String Default: nested Values: nested, expanded, compact, compressed
	.pipe(sass({outputStyle:'expanded'}))
	.pipe(gulp.dest('./src/dist/css'))
});
//js输出
gulp.task('js', function  () {
	gulp.src(jsPath)
	.pipe(gulp.dest('./src/dist/js'))
});
//图片输出
gulp.task('img', function  () {
	gulp.src(imgPath)
	.pipe(gulp.dest('./src/dist/img'))
});
//压缩css
gulp.task('min:css', function  () {
	gulp.src(scssPath)
	.pipe(sass())
	.pipe(mincss())
	.pipe(gulp.dest('./src/dist/css'))
});
//压缩js
gulp.task('min:js', function  () {
	gulp.src(jsPath)
	.pipe(minjs())
	.pipe(gulp.dest('./src/dist/js'))
});
//压缩图片
gulp.task('min:img', function  () {
	gulp.src(imgPath)
	.pipe(minimg())
	.pipe(gulp.dest('./src/dist/img'))
});
//实时刷新浏览器
/*gulp.task('reload', function  () {
	browserSync({
		files:'**', //监听整个项目
		server: {
			baseDir : './src' //监听当前路径
		},
		port: 3000 //端口号
	})
});*/
//监视文件变化
gulp.task('watch',function (){
	//gulp.watch([htmlPath,scssPath,imgPath,imgPath], ['reload']);
	gulp.watch([htmlPath]);
	gulp.watch([scssPath], ['sass']);
	gulp.watch([imgPath], ['img']);
	gulp.watch([imgPath], ['js']);
});

gulp.task('default', ['sass', 'js', 'img', 'watch']);
//gulp.task('default', ['sass', 'js', 'img', 'watch', 'reload']);
gulp.task('build', ['min:css', 'min:js', 'min:img', 'watch', 'reload']);