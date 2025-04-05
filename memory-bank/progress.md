# Progress

*   **What works:**
    *   Core project infrastructure: Next.js 15+, TypeScript, React 19, pnpm build system.
    *   Styling foundation: Tailwind CSS + shadcn/ui components.
    *   Development tooling: Biome, Knip, Husky.
    *   Data fetching & Context: Server Action (`fetch-data.ts`), `DataContext`, `QnaWidgetContext` implemented using standard patterns.
    *   Map Feature: Interactive map (`/map`) functional.
    *   Manifesto Page: Functional (`/manifestos`) with AI Q&A integration.
    *   News Page: Functional (`/news`).
    *   Resources Page: Functional (`/resources`).
    *   Landing Page (`/`): Structure in place, highlights available features.
    *   Header Navigation: Dynamically shows available pages.
    *   Memory Bank: Core files maintained.
*   **What's left to build:**
    *   **Content Sections (Currently Disabled):** Implement UI/content for `parties`, `candidates`, `timeline` pages. Links are currently commented out in `SiteHeader` and `HomePage`.
    *   **AI Q&A Feature:**
        *   Integrate actual manifesto parsing/data source for AI.
        *   Further refinement of context/features as needed.
    *   **UI/UX Refinement:** Ongoing polishing, responsiveness checks.
    *   **Testing:** Implement testing strategy.
*   **Current status:** Mid-development. Core features (Map, Manifestos, News, Resources, Data Handling, Q&A Widget) are functional. Landing page and navigation reflect current state. Focus can now shift to building out the remaining content sections (Parties, Candidates, Timeline) or enhancing existing features.
*   **Known issues:**
    *   No automated testing framework.
    *   Data accuracy relies on manual JSON updates.
    *   Uses experimental React Compiler. 
