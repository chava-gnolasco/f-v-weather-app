# Gemini Workspace: Vue.js Weather App

## Project Overview

A brief, one-sentence description of the project's purpose.
*(e.g., "A simple weather application built with Vue.js to display current weather and forecasts.")*

## Tech Stack

- **Framework:** Vue.js
- **Language:** TypeScript
- **Testing:** Cypress
- **Package Manager:** npm

## Project Structure

A summary of the key files and directories.

- `index.html`: The main HTML file.
- `src/`: Main application source code.
  - `main.ts`: The entry point of the application.
  - `App.vue`: The main App component.
  - `assets/`: Static assets like images, and styles.
  - `components/`: Directory for reusable Vue components.
  - `services/`: Directory for weather API services.
  - `stores/`: Directory for state management.
  - `types/`: Directory for TypeScript types.
  - `utils/`: Directory for utility functions and constants.

## Build & Development Commands

Commonly used scripts from `package.json`.

- **Run development server:** `npm run dev`
- **Build for production:** `npm run build`
- **Run tests:** `npm run test`
- **Lint and format:** `npm run lint`

## Key Dependencies

List of important libraries and their purpose.

- `vue`: The core Vue.js library.
- `vue-router`: For handling routing.
- `axios`: For making HTTP requests to a weather API.
- `pinia` or `vuex`: For state management.

## Coding Style & Conventions

- Use Composition API.
- Follow the official Vue.js style guide.
- All components should be in PascalCase.
- Use TypeScript for all new code.

## Install Gemini cli

```bash
npm install -g @google/gemini-cli
gemini
```

## Prompts

```text
Review my code for JavaScript/TypeScript syntax errors, such as missing arrow functions (=>), incorrect function declarations, or misplaced parentheses/braces.
```
