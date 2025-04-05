# Progress

*   **What works:**
    *   Core project infrastructure: Next.js 15+, TypeScript, React 19, pnpm build system.
    *   Styling foundation: Tailwind CSS and shadcn/ui components are integrated.
    *   Development tooling: Biome for linting/formatting, Knip for analysis, Husky for hooks.
    *   Data fetching: Server Action (`fetch-data.ts`) successfully fetches and caches JSON data (parties, news, electoral divisions, profiles, boundaries) from the `gpng/ge2025` GitHub repository. This data is actual election data, updated manually as new information becomes available.
    *   Map Feature: The interactive map visualization using MapLibre GL is mostly implemented, displaying relevant boundary/electoral data.
    *   Basic application shell: Homepage (`page.tsx`) exists, and route directories for main sections (`candidates`, `parties`, `news`, etc.) are set up.
    *   Memory Bank: Core files created and populated with initial project context.
*   **What's left to build:**
    *   **Content Sections:** Build out the UI and content display for `candidates`, `parties`, `news`, `timeline`, and `resources` pages using the fetched data.
    *   **AI Q&A Feature:**
        *   Implement the standalone page for AI Q&A.
        *   Refine the existing widget implementation.
        *   Integrate actual manifesto parsing/data source.
        *   Ensure robust error handling and user feedback.
    *   **UI/UX Refinement:** Polish the user interface, ensure responsiveness, and improve overall user experience across the application.
    *   **Testing:** Implement unit, integration, or end-to-end tests (no framework currently configured).
*   **Current status:** Early/Mid-development. The foundational structure, data pipeline, and map feature are largely in place. The primary focus is currently on developing the AI Q&A feature. Most content display sections require implementation. Data updates are ongoing.
*   **Known issues:**
    *   No automated testing framework is set up.
    *   Ongoing data accuracy relies on the manual, continuous upkeep of JSON files in the `gpng/ge2025` GitHub repository as new information is released.
    *   Uses experimental React Compiler, which might introduce instability (low risk). 
