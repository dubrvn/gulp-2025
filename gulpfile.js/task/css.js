const {src, dest} = require("gulp");

//конфигурация
const path = require("../config/path.js")



//Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const concat = require("gulp-concat");
const cssimport = require("gulp-cssimport");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const groupCssMedia = require("gulp-group-css-media-queries");
const webpCss = require("gulp-webp-css");


//Обработка CSS
const css = () => {
	return src(path.css.src, {sourcemaps: true})
	.pipe(plumber({
		errorHandler: notify.onError()
	}))
	.pipe(concat("main.css"))
	.pipe(cssimport())
	.pipe(webpCss())
	.pipe(autoprefixer())
	.pipe(groupCssMedia())
	.pipe(dest(path.css.dest, {sourcemaps: true}))
	.pipe(rename({suffix: ".min"}))
	.pipe(csso())
	.pipe(dest(path.css.dest, {sourcemaps: true}));
}

module.exports = css;