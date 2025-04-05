# Active Context

*   **Current work focus:** UI Refinements and preparing for future feature implementation (Parties, Candidates, Timeline).
*   **Recent changes:**
    *   Updated Header Navigation (`SiteHeader`): Commented out links for upcoming features (Parties, Candidates, Timeline) and added link for Manifestos page.
    *   Updated Landing Page (`HomePage`): Refreshed "Quick Links" section to match site style, highlighting currently available features (Map, Manifestos, Voting 101, News) and commenting out placeholders for upcoming ones.
    *   Implemented global state management for `QnaWidget` using `QnaWidgetContext`.
    *   Refactored `ManifestosPage` to use `DataContext` provider pattern.
    *   Updated initial message in `QnaWidget`.
    *   Updated `data/parties.json` (removed most manifesto links).
    *   Updated `system-patterns.md` with data/context patterns.
*   **Next steps:**
    *   Update `progress.md`.
    *   Update `system-patterns.md` with codebase structure.
    *   Begin implementation of commented-out features (Parties, Candidates, Timeline) when ready.
    *   Further refine `QnaWidget` context/functionality if needed.
*   **Active decisions and considerations:** Prioritize building out core available features before enabling links to upcoming ones.
