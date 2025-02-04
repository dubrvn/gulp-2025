const {src, dest} = require("gulp");

//конфигурация
const path = require("../config/path.js");



//Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const babel = require("gulp-babel");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const webpack = require("webpack-stream");




//Обработка Js
const js = () => {
	return src(path.js.src, {sourcemaps: true})
	.pipe(plumber({
		errorHandler: notify.onError()
	}))
	.pipe(babel())
	.pipe(webpack({mode: "development"}))
	.pipe(dest(path.js.dest, {sourcemaps: true}))
	.pipe(rename({suffix: ".min"}))
	.pipe(uglify())
	.pipe(dest(path.js.dest, {sourcemaps: true}));
}

module.exports = js;