# Product Context

*   **Why this project exists:** To provide the general public and voters in Singapore with a clear, accessible, and centralized source of information for the upcoming 2025 General Election. It aims to simplify potentially complex official information.
*   **Problems it solves:**
    *   Reduces the effort needed for voters to find key election details (candidates, parties, constituencies, manifestos).
    *   Combats information overload or jargon by presenting data in a user-friendly format.
    *   Consolidates scattered information into one place.
    *   Provides a way to query and understand party manifestos easily via an AI feature.
*   **How it should work:**
    *   Users navigate through dedicated sections for Candidates, Parties, News, Maps, Timelines, and Resources.
    *   The homepage provides a welcoming overview and directs users to key tasks like checking their constituency (via an external official link).
    *   Map features allow visualization of electoral boundaries and related data.
    *   An AI chat interface allows users to ask questions specifically about the 2025 party manifestos.
    *   Core data (candidates, parties, electoral divisions) and news content are manually maintained within TypeScript files in the codebase (`src/data/`, `src/app/news/`). Contribution guidelines facilitate updates.
    *   Functionality to find a specific polling station will link out to an official government service when that service becomes available for GE2025.
*   **User experience goals:**
    *   **Clarity:** Information should be presented without jargon and be easy to understand.
    *   **Accessibility:** The site should be easy to navigate for the general public.
    *   **Trustworthiness:** Serve as a reliable source of election information, clearly indicating its manually maintained nature where applicable.
    *   **Engagement:** Provide interactive elements like maps and AI Q&A to help users explore the data. 
