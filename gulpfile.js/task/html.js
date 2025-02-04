const {src, dest} = require("gulp");

//конфигурация
const path = require("../config/path.js")



//Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const fileInclude = require("gulp-file-include");
const rename = require("gulp-rename");
const htmlmin = require("gulp-htmlmin");
const webpHtml = require("gulp-webp-html");


//Обработка HTML
const html = () => {
	return src(path.html.src)
	.pipe(plumber({
		errorHandler: notify.onError()
	}))
	.pipe(fileInclude())
	.pipe(webpHtml())
	.pipe(dest(path.html.dest))
	.pipe(rename({suffix: ".min"}))
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(dest(path.html.dest));
}

module.exports = html;