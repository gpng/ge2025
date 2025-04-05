# System Patterns

*   **System architecture:** Next.js 15 App Router based application. Server Actions fetch data, client components render UI.
*   **Key technical decisions:**
    *   Next.js for full-stack framework.
    *   TypeScript for type safety.
    *   Tailwind CSS + shadcn/ui for styling.
    *   MapLibre GL for interactive map.
    *   Vercel AI SDK for Q&A feature.
*   **Data Access Pattern:** Application data from `/data/*.json` is fetched server-side (`fetch-data.ts`) and provided via `DataContext` (`src/app/map/_components/contexts/data-context.tsx`). Client components use `useData()`.
*   **Global UI State Pattern (QnA Widget):** The global QnA widget's visibility is managed by `QnaWidgetContext` (`src/app/_components/contexts/qna-widget-context.tsx`). The `QnaWidgetProvider` wraps the root layout. The `QnaWidget` itself uses the context to control its rendering, and other components (like buttons) can use the `useQnaWidget` hook to trigger its opening.
*   **Design patterns in use:**
    *   React Context for global state (data, UI state).
    *   Server Actions for data fetching.
    *   Server Component -> Provider -> Client Component pattern for pages needing context.
*   **Component relationships:** Client components consume data/state via Context hooks. Server components handle initial data fetching and structure.

*   **Codebase Structure Overview:**

    The project follows standard Next.js 15 App Router conventions. The structure is designed to separate concerns, co-locate route-specific logic, and maintain clarity.

    *   **`/` (Root):** Contains configuration files (`next.config.mjs`, `tsconfig.json`, `package.json`, `biome.json`, etc.) defining the project setup, dependencies, and tooling.
    *   **`/data`:** Stores static JSON data files used by the application (e.g., `parties.json`, `news.json`). This data is primarily accessed via the `fetch-data.ts` Server Action.
    *   **`/memory-bank`:** Holds markdown documentation files (`*.md`) used to maintain project context and progress, essential for AI collaborator continuity.
    *   **`/public`:** Contains static assets served directly, such as images (`/public/images/logos`), favicons, etc.
    *   **`/src`:** The main application source code directory.
        *   **`/src/lib`:** Utility functions (`utils.ts`) and environment variable management (`env.ts`).
        *   **`/src/models`:** TypeScript type definitions (`*.ts`) for core data structures (e.g., `Party`, `News`).
        *   **`/src/app`:** The core of the Next.js application, following App Router conventions.
            *   **`/src/app/layout.tsx`:** The root layout component, wrapping all pages. It includes global providers like `ThemeProvider` and `QnaWidgetProvider`.
            *   **`/src/app/page.tsx`:** The application's homepage component.
            *   **`/src/app/_components`:** Shared components and contexts used across multiple routes.
                *   **`/src/app/_components/ui`:** Auto-generated shadcn/ui components.
                *   **`/src/app/_components/contexts`:** Global React Context providers (`DataContext`, `QnaWidgetContext`). See **Data Access Pattern** and **Global UI State Pattern** above.
                *   **`/src/app/_components/header.tsx`:** The main site navigation header.
            *   **`/src/app/actions`:** Server Actions, notably `fetch-data.ts` responsible for retrieving data from the `/data` directory.
            *   **`/src/app/api`:** API route handlers (e.g., `/src/app/api/qna/route.ts` for the Vercel AI SDK endpoint).
            *   **`/src/app/(routes)` (e.g., `/map`, `/manifestos`, `/news`):** Each directory represents a route segment. 
                *   `page.tsx` within a route directory is the main Server Component for that page. It typically fetches data (using `fetchData`) and sets up providers.
                *   `_components` subdirectories within routes (e.g., `/manifestos/_components`) contain components specific to that route, often including:
                    *   `providers.tsx`: Route-specific context providers if needed (though `DataContext` is currently global).
                    *   `content.tsx`: The main Client Component for the page, responsible for rendering UI and using context hooks (`useData`, `useQnaWidget`).
                *   The QnA widget (`/map/_components/qna-widget`) is currently located under `/map` but used globally via context.

    **Visual Tree Reference:**
    ```plaintext
    .vscode/
    .husky/
    data/ ... (JSON data files)
    memory-bank/ ... (*.md documentation)
    public/ ... (Static assets: images, favicons)
    src/
        app/
            _components/ ... (Shared UI, Contexts, Header)
                contexts/
                    data-context.tsx
                    qna-widget-context.tsx
                ...
            actions/ ... (Server Actions - fetch-data.ts)
            api/ ... (API Routes - qna/route.ts)
            (routes)/ ... (Specific page routes)
                map/
                    _components/ ... (Map-specific components, QnA widget source)
                    page.tsx
                manifestos/
                    _components/ ... (Manifesto page components - content.tsx, providers.tsx)
                    page.tsx
                news/
                    _components/ ... (News page components - content.tsx, providers.tsx)
                    page.tsx
                resources/
                    page.tsx
                ... (candidates/, parties/, timeline/ - currently placeholders)
            layout.tsx ... (Root Layout, Global Providers)
            page.tsx ... (Homepage)
            globals.css
            ...
        lib/ ... (Utilities, Env vars)
        models/ ... (TypeScript types)
    ... (Root config files: next.config.mjs, package.json, etc.)
    ```
