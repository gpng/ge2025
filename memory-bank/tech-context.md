# Tech Context

*   **Technologies used:**
    *   **Runtime:** Node.js (v22.14.0)
    *   **Package Manager:** pnpm
    *   **Web Framework:** Next.js (v15+) with App Router
    *   **UI Library:** React (v19) with experimental React Compiler
    *   **Language:** TypeScript (v5.8+)
    *   **Styling:** Tailwind CSS (v3.4+) with PostCSS
    *   **Component Toolkit:** shadcn/ui (using Radix UI primitives)
    *   **Mapping:** MapLibre GL JS (via `react-map-gl` wrapper)
    *   **AI:** OpenAI API (via `openai` Node.js SDK, `@ai-sdk/react`)
    *   **Data Validation:** Zod
    *   **Linting/Formatting:** BiomeJS
    *   **Code Analysis:** Knip (unused export/dependency detection)
    *   **Git Hooks:** Husky + lint-staged
*   **Development setup:**
    1.  **Install Node.js:** Use a version manager like `asdf` with the `.tool-versions` file (`asdf install`) or manually install Node.js v22.14.0.
    2.  **Install pnpm:** If not already installed globally (`corepack enable`, `corepack prepare pnpm@latest --activate` or `npm install -g pnpm`).
    3.  **Install Dependencies:** Run `pnpm install`.
    4.  **Environment Variables:** Configure necessary environment variables (e.g., `OPENAI_API_KEY`) using Vercel's environment variable management system for deployments. For local development, consult Vercel's documentation on handling local environment variables (e.g., using `vercel env pull`).
    5.  **Run Development Server:** Run `pnpm run dev`. The application should be available at `http://localhost:3000`.
*   **Technical constraints:**
    *   Relies on the experimental React Compiler, which might have bugs or change.
    *   Core data persistence depends on JSON files hosted in the source GitHub repository (`gpng/ge2025`). Updates require commits to that repository.
    *   The AI feature depends on access to the OpenAI API and associated costs/rate limits. Requires appropriate environment variable configuration (managed via Vercel).
*   **Dependencies (External Services/Data):**
    *   **OpenAI API:** Required for the manifesto Q&A feature. API key needs to be configured via Vercel env vars.
    *   **GitHub (`raw.githubusercontent.com`):** Source for core election data JSON files.
    *   **Elections Department Singapore (ELD) Website:** External link target for constituency checks. 
