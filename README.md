# Landing Monorepo

Монорепозиторий для быстрого запуска лендингов на **Vite + React + TypeScript + Tailwind**.

## Структура

```
landing-monorepo/
├── apps/
│   ├── template-base/   ← базовый шаблон (не трогать, только копировать)
│   └── psycho-site/     ← пример сайта
├── packages/
│   └── ui/              ← общие компоненты: Button, Input, Card, Section
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
```

## Создать новый сайт за 2 минуты

```bash
# 1. Скопировать шаблон
cp -r apps/template-base apps/massage-site

# 2. Переименовать проект (изменить "name" в package.json)
# apps/massage-site/package.json → "name": "massage-site"

# 3. Обновить зависимости из корня
pnpm install

# 4. Запустить в dev-режиме
pnpm dev --filter massage-site
```

Всё — новый сайт доступен на `http://localhost:5173`.  
Дальше меняйте текст, цвета и контент в `apps/massage-site/src/App.tsx`.

## Команды

| Команда | Описание |
|---|---|
| `pnpm dev --filter <site>` | Запустить конкретный сайт в dev-режиме |
| `pnpm dev` | Запустить все сайты одновременно |
| `pnpm build` | Собрать все сайты |
| `pnpm build --filter <site>` | Собрать конкретный сайт |
| `pnpm lint` | Проверить все проекты |

## Компоненты из `@repo/ui`

```tsx
import { Button, Card, Input, Section, cn } from "@repo/ui";

// Button: variant="primary|secondary|ghost", size="sm|md|lg"
<Button variant="primary" size="lg">Записаться</Button>

// Section: обёртка с паддингами и max-width контейнером
<Section>
  <h1>Заголовок</h1>
</Section>

// Card: белая карточка с тенью
<Card>Контент</Card>

// Input: поле с label и валидацией
<Input label="Телефон" type="tel" error="Обязательное поле" />

// cn: утилита объединения Tailwind-классов
<div className={cn("base-class", condition && "conditional-class")} />
```

## Добавить новый компонент в UI

Создайте файл в `packages/ui/src/components/MyComponent.tsx` и экспортируйте его в `packages/ui/src/index.ts`.  
Компонент сразу станет доступен во всех сайтах.
