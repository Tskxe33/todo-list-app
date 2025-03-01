# Todo List Application

A modern todo list application built with React, TypeScript, and Vite.

## Prerequisites

- Node.js (version 18 or higher)
- npm (comes with Node.js)

## Setup Instructions

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the root directory and add:

```bash
VITE_API_URL="https://jsonplaceholder.typicode.com"
```

## Available Scripts

- **Start development server:**

```bash
npm run dev
```

Runs the app in development mode on `http://localhost:5173`

- **Build for production:**

```bash
npm run build
```

Creates an optimized production version in the `dist` folder

- **Run tests:**

```bash
npm test
```

Runs tests in watch mode

- **Generate test coverage report:**

```bash
npm run coverage
```

Generates a test coverage report

- **Preview production build:**

```bash
npm run preview
```

Shows the production version locally

- **Run linter:**

```bash
npm run lint
```

Checks the code for potential errors and formatting issues

## Tech Stack

- React 19
- TypeScript
- Vite
- TailwindCSS
- Zustand (state management)
- React Router
- Vitest (testing)
- React Testing Library

## Features

- Create, read, and delete todos
- Mark todos as complete
- Generate random task (from https://jsonplaceholder.typicode.com/ API)
- Login Page (mock data)
- Drag and drop reordering
- Date picker for due dates
- Loading states
- Toast notifications
- Responsive design

### Mock Login Credentials

For testing purposes, use these credentials:

- Email: petro@dev.com
- Password: password123
