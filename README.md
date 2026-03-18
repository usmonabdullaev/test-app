# Marketplace (Test Project)

## Описание

Приложение представляет собой маркетплейс недвижимости с возможностью:

- Просмотра списка объявлений
- Фильтрации (цена, комнаты и т.д.)
- Сортировки
- Просмотра страницы конкретного объекта
- Добавления в избранное / корзину (mock)

---

## Стек технологий

### Frontend

- Next.js 16 (App Router)
- React
- Tailwind CSS
- shadcn/ui
- Zustand
- Axios

---

## Backend

В качестве backend используется сторонний mock-сервис:

- mokky.dev — для имитации REST API

http://mokky.dev - Сервис

https://mokky.gitbook.io/welcome - Документация

---

## Установка и запуск

### 1. Клонировать репозиторий

```
git clone <your-repo-url>
cd <project-folder>
```

### 2. Установить зависимости

```
npm install
```

### 3. Билд проекта

```
npm run build
```

### 4. Запуск проекта

```
npm run start
```

Открыть:
http://localhost:3000

---

## Архитектура

### App Router (Next.js)

- /app/page.tsx — главная
- /app/apartments/[id]/page.tsx — продукт

### Zustand

Используется для:

- фильтров
- loading состояния
- пользователя (mock)

---

## UI

- Адаптивный дизайн
- Skeleton loaders
- Pagination
- Модальные окна

---

## Автор

[Usmon Abdulloev](https://abdulloev-usmon.vercel.app)
