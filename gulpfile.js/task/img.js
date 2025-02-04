const {src, dest} = require("gulp");

//конфигурация
const path = require("../config/path.js");

//Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const webp = require("gulp-webp");

//Обработка Изображений
const img = () => {
	return src(path.img.src, {encoding: false})
	.pipe(plumber({
		errorHandler: notify.onError()
	}))
	.pipe(newer(path.img.dest))
	.pipe(webp())
	.pipe(dest(path.img.dest))
	.pipe(src(path.img.src, {encoding: false}))
	.pipe(newer(path.img.dest))
	.pipe(imagemin({verbose: true}))
	.pipe(dest(path.img.dest));
}

module.exports = img;