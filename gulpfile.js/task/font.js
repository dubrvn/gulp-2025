const {src, dest} = require("gulp");

//конфигурация
const path = require("../config/path.js");

//Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const newer = require("gulp-newer");
const fonter = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2");



//Обработка Шрифтов
const font = () => {
	return src(path.font.src, {encoding: false})
	.pipe(plumber({
		errorHandler: notify.onError()
	}))
	.pipe(newer(path.font.dest))
	.pipe(fonter({
		formats: ["woff", "ttf"]
	}))
	.pipe(dest(path.font.dest))
	.pipe(ttf2woff2())
	.pipe(dest(path.font.dest));
}

module.exports = font;