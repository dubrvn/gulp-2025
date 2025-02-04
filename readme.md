## Gulp-2025
Соберёт и минифицирует html, css, js файлы. Ужмёт изображения, добавит webp формат для каждой картинки. Переведёт шрифты otf, ttf в  формат woff, woff2.
Сборка на Commonjs. Для js файлов подключен webpack и babel. 
Для стилей использован Sass 1.77.8 (до этой версии можно использовать @import)
CLI version: 3.0.0 Local version: 5.0.0
Спасибо автору: [CodeQuest](https://www.youtube.com/@CodeQuestRu)

## Установка
* Разархивируйте директорию, переименуйте в название проекта.
* Убедитесь, что установлена [LTS версия node.js](https://nodejs.org/en)  
* ```npm i``` — Инициализирует npm в директории проекта. Появится папка node_modules
* ```gulp run``` — Запустит сборку, создаст директорию /public c готовыми файлами, будет отслеживать изменения и обновлять в браузере localhost:3000.
* ```ctrl + C``` - Остановит сборку.

## Отдельный вызов задач
* ```gulp html``` — обработать html
* ```gulp css``` — обработать css (не подключена в сборку)
* ```gulp scss``` — обработать scss
* ```gulp js``` — обработать js
* ```gulp img``` — подготовить изображения
* ```gulp font``` — подготовить шрифты

## Файловая структура
/data
/gulpfile.js
	/config
		path.js
	/task
		clear.js
		css.js
		font.js
		html.js
		img.js
		js.js
		scss.js
	index.js
/src
	/css
	/font		
	/html
	/img
	/js
	/sass
.gitignore
package-lock.js
package.json
readme.md

