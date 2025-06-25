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

- `f-v-weather-app/src`: Main application source code.
  - `f-v-weather-app/src/main.ts`: The entry point of the application.
  - `f-v-weather-app/src/App.vue`: The main App component.
  - `f-v-weather-app/src/components/`: Directory for reusable Vue components.
  - `f-v-weather-app/src/views/`: Directory for page-level components.
  - `f-v-weather-app/src/assets/`: Static assets like images, and styles.
- `f-v-weather-app/public/`: Public assets that are copied directly to the build output.
- `f-v-weather-app/cypress/`: End-to-end tests.
- `f-v-weather-app/package.json`: Project dependencies and scripts.
- `f-v-weather-app/.gitignore`: Files and folders to be ignored by git.

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
