# Sport Nutrition Shop Front (pet project)

## EN

Single-page mockup of a sports nutrition e-commerce storefront. The goal is to practice modern React + Redux layout techniques, build a marketing-heavy landing page, and prepare the codebase for the next steps toward a real shop front.

### What’s inside

- React 18 functional components for the entire UI.
- Redux + Redux Thunk to keep the architecture ready for real APIs.
- SASS/SCSS with color palettes, mixins, and a custom `ThemeProvider` that exposes `window.setTheme('dark' | 'light')`.
- Modular sections: `Header`, `Navbar`, hero `Banner`, catalog cards, testimonials, and a utility-rich footer.
- Mock products and reviews live in `src/API/PublicAPI.js` and `src/constants/strings.js`, so dropping in live data takes minutes.
- Responsive grid tuned for desktop/tablet and semantic markup for SEO-ready HTML.

### Stack & dependencies

- React 18, React Router 6
- Redux, React-Redux, Redux Thunk
- SASS (`sass@^1.55.0`) and custom mixins (`src/stylesheets`)
- Swiper 8 (already in package.json for future sliders)
- Testing Library + Jest (Create React App preset)

### Project structure

```
src/
├─ components/
│  ├─ App.js
│  ├─ HOC/ThemeProvider.js
│  ├─ reusable/ (product cards, rating, pagination dots)
│  └─ views/ (header, navbar, banner, mainPage, reviews, footer)
├─ store/ (actionTypes, reducers, local storage helpers, Redux config)
├─ constants/ (UI strings, contacts, build settings)
├─ API/ (mock reviews)
└─ images/, stylesheets/, index.js, index.css
```

### Getting started

```bash
npm install
npm start
```

Runs on `http://localhost:3000`. Everything is static, so no backend is required.

#### Production build

```bash
npm run build
```

Outputs to `build/`, ready for any static hosting (GitHub Pages, Netlify, etc.).

#### Tests

```bash
npm test
```

Uses the CRA Jest + Testing Library setup. Only a sample spec (`test/App.test.js`) is included, but the tooling is configured.

### Handy scenarios

- **Toggle theme**: run `window.setTheme('dark')` in DevTools.
- **Swap mock data**: edit `src/API/PublicAPI.js` for reviews and update card data in `src/components/views/mainPage/MainPage.js`.
- **Add a section**: drop a component into `src/components/views` and import it in `src/components/App.js`.

### Next steps

- Hook up real assortment/review APIs.
- Add a global cart/filter store slice.
- Expand unit/UI coverage for `Header`, `ProductCard`, `Reviews`.

Experiment freely—the project is built for it! 💪

---

## RU

Одностраничный макет интернет-магазина спортивного питания. Цель проекта — потренироваться в современной верстке с React и Redux, собрать насыщенную маркетинговую посадочную страницу и подготовить основу для дальнейшего развития в полноценный e-commerce фронт.

### Что внутри

- UI-слой на React 18 + функциональные компоненты.
- Управление состоянием через Redux + Redux Thunk (готово для интеграции с бекендом).
- SASS/SCSS с раздельными палитрами, миксинами и отдельным `ThemeProvider`, который позволяет переключать темы через `window.setTheme('dark' | 'light')`.
- Модульные блоки: `Header`, `Navbar`, hero-`Banner`, карточки каталога, отзывы, футер с быстрыми ссылками.
- Моковые данные (товары, отзывы) вынесены в `src/API/PublicAPI.js` и `src/constants/strings.js`, поэтому легко заменить на реальные API.
- Адаптивная сетка и семантическая верстка, ориентированная на десктоп и планшеты.

### Стек и зависимости

- React 18, React Router 6
- Redux, React-Redux, Redux Thunk
- SASS (`sass@^1.55.0`) и собственные миксины (`src/stylesheets`)
- Swiper 8 (подключен в зависимостях для будущих слайдеров)
- Testing Library + Jest (CRA пресет)

### Структура проекта

```
src/
├─ components/
│  ├─ App.js
│  ├─ HOC/ThemeProvider.js
│  ├─ reusable/ (карточки продуктов, рейтинг, индикаторы пагинации)
│  └─ views/ (header, navbar, banner, mainPage, reviews, footer)
├─ store/ (actionTypes, reducers, локальное хранилище, конфиг Redux)
├─ constants/ (строки интерфейса, контакты, настройки сборки)
├─ API/ (моки отзывов)
└─ images/, stylesheets/, index.js, index.css
```

### Как запустить

```bash
npm install
npm start
```

Приложение поднимется на `http://localhost:3000`. Все данные статичные, поэтому backend не требуется.

#### Production build

```bash
npm run build
```

Сборка попадает в папку `build/` и готова к деплою на любой статический хостинг (GitHub Pages, Netlify и т. п.).

#### Тесты

```bash
npm test
```

По умолчанию запускается CRA-пресет Jest + Testing Library. Тестов немного (лежит пример в `test/App.test.js`), но инфраструктура уже настроена.

### Полезные сценарии

- **Сменить тему**: откройте DevTools и выполните `window.setTheme('dark')`.
- **Заменить мок-данные**: обновите `src/API/PublicAPI.js` (отзывы) и данные карточек в `src/components/views/mainPage/MainPage.js`.
- **Добавить новые секции**: создайте компонент в `src/components/views` и подключите его в `src/components/App.js`.

### Дальнейшие планы

- Подключить реальные API с ассортиментом и отзывами.
- Завести глобальный стор для корзины и фильтров каталога.
- Добавить unit/UI-тесты на ключевые блоки (Header, ProductCard, Reviews).

Проект открыт для любых экспериментов — дерзайте! 💪
