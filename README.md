# приложение-чат

## Тестовые пользователи

-   name: Alice, password: 123123
-   name: Bob, password: qwerty
-   ame: Egor, password: 123

# Для запуска проекта достаточно написать в директории

-   `npm i`
-   `npm run start:dev`

## Реализовано:

-   Пересылка сообщений (цитирование)
-   Чат работает в рамках одного браузера
-   У каждой вкладки своя сессия
-   Данные пользователя и чата сохраняются и восстанавливаются при входе
-   При входе пользователь идентифицирует себя
-   Переключение 2 тем

## Скрипты

-   `npm run start:dev` - Запуск проекта в режиме разработки
-   `npm run start:prod` - Сборка в prod режиме
-   `npm run lint:ts` - Проверка ts файлов линтером
-   `npm run lint:ts:fix` - Исправление ts файлов линтером
-   `npm run lint:scss` - Проверка scss файлов style линтером
-   `npm run lint:scss:fix` - Исправление scss файлов style линтером
-   также в проекте реализована автоматическая проверка линтером файлов, которые были изменены при добавлении в коммит (при помощи husky)

---

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

### Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit.
Для нормализации данных сущности созданы с помощью EntityAdapter
Сохранение данных происходит в localStorage
Идентификация пользователя происходит в sessionStorage

---

## Сущности (entities)

-   [Authorization](/src/entities/Authorization)
-   [Chat](/src/entities/Chat)
-   [Message](/src/entities/Message)
-   [User](/src/entities/User)

## Фичи (features)

-   [Auth](/src/features/Auth)
-   [ThemeSwitcher](/src/features/ThemeSwitcher)

## Странички (pages)

-   [ChatDetailsPage](/src/pages/ChatDetailsPage)
-   [MainPage](/src/pages/MainPage)

## Виджеты (widgets)

-   [AddUserToChat](/src/widgets/AddUserToChat)
-   [ChatGeneral](/src/widgets/ChatGeneral)
-   [ChatWindow](/src/widgets/ChatWindow)
-   [CreateNewChat](/src/widgets/CreateNewChat)
-   [AddUserToChat](/src/widgets/AddUserToChat)
-   [PageError](/src/widgets/PageError)
-   [Sidebar](/src/pages/Sidebar)
