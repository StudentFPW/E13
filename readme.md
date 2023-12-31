## Практическая работа ↓
>1. Установить и настроить webpack-dev-server.
>2. Настроить hot module replacement.
>3. Сделать возможность запуска на разных окружениях (dev, prod) c разной конфигурацией (например, убрать HMR на проде).
>4. Настроить JSON-server и отображать полученные с него данные.
>5. Добавить запуск линтера при комите.

## Полезные команды для проверки домашнего задания ↓

### Пересобрать проект, то есть снова запустить:
        npx webpack
        или
        npm run build

### Чтобы каждый раз не пересобирать проект вручную, можно воспользоваться командой:
        npx webpack --watch

### Запустить server с помощью команды:
        npx webpack-dev-server
        или
        npx webpack serve

### В разных режимах dev и prod:
        npm run servedev
        или
        npm run servepro

### Запустить JSON-сервер командой:
        json-server --watch db.json

### Протестируйте запуск перехватчика перед фиксацией:
        git add -A
        и
        git commit -m "Keep calm and commit"
