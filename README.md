# P!NK
Адаптивная верстка макета P!NK.

Пакет включает в себя:
- **Grunt** - инструмент для автоматизированной сборки проекта
- **SASS** - CSS препроцессор

**Grunt** по-умолчанию уже настроен. Вам только остается в консоли перейти в папку Вашего нового проекта при помощи команды `cd путь_до_папки_вашего_проекта`, а затем, при помощи команды `npm i` загрузить все необходимые пакеты для нормального функционирования таскранера **Grunt**.

Для сборки проекта в папку `build` используйте команду `grunt build`.

## Файл `package.js`
Данный файл включает в себя список всех node пакетов _(в данном случае в основном таскранера **Grunt**)_.

## Файл `Gruntfile.js`
Данный файл включает в себя настройки всех **Grunt** пакетов.

## Файл `.gitignore`
Данный файл включает в себя список игнорированных файлов для системы контроля версий Git.

## Файл `.csscomb.json`
Данный файл включает в себя настройки **Grunt** пакета csscomb.

## Папка `src`
Данная папка содержит не компилированные и не минифицированные файлы.

В данной папке проводится редактирование проекта.

## Папка `build`
_(добавлена в .gitignore)_

Данная папка содержит скомпилированные и минифицированные файлы.

## Папка `_temp`
_(добавлена в .gitignore)_

Данная папка содержит все файлы макета.

В данной папке **запрещено** редактирование проекта.

Ссылка на макет: [pink.rar](https://drive.google.com/open?id=0B91tVOvzumxKX1E3QW9CVk9vMVE)

## Папка `node_modules` 
_(добавлена в .gitignore)_

Данная папка содержит все node пакеты.
