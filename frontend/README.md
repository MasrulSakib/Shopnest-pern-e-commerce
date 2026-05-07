# ShopNest Frontend

The frontend of the ShopNest E-commerce platform is a modern, high-performance web application built with React and TypeScript. It leverages Vite for optimized development and production builds, providing a seamless user experience for product management.

## Technology Stack

The application utilizes a curated selection of modern technologies to ensure scalability, maintainability, and performance:

*   **Core Library**: React 19
*   **Build Tool**: Vite 6
*   **State Management**: Zustand
*   **Routing**: React Router 7
*   **Styling**: Tailwind CSS 4 with DaisyUI
*   **Icons**: Lucide React
*   **Type Safety**: TypeScript 6

## Key Features

*   **Dynamic Product Catalog**: Real-time listing of available products fetched from the backend API.
*   **Product Management**: Comprehensive CRUD operations including adding new products, updating existing details, and deletion.
*   **State Management**: Centralized store for managing product data and theme states using Zustand.
*   **Responsive Design**: Mobile-first architecture ensured through Tailwind CSS and glassmorphism UI elements.
*   **Theming**: Integrated theme selector with persistent state management.

## Getting Started

### Prerequisites

*   Node.js (latest LTS recommended)
*   npm or yarn

### Installation

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm run dev
    ```

## Available Scripts

In the frontend directory, you can run:

*   `npm run dev`: Runs the app in development mode with HMR.
*   `npm run build`: Builds the application for production to the `dist` folder.
*   `npm run lint`: Runs ESLint to identify and report on patterns found in ECMAScript/JavaScript code.
*   `npm run preview`: Locally previews the production build.

## Environment Variables

The application expects the following environment variables if configured in the store:

*   `VITE_API_BASE_URL`: The base URL for the backend API (defaults to localhost:3000 in development).

## Project Structure

```text
src/
├── components/     # Reusable UI components
├── pages/          # Page-level components
├── store/          # Zustand state management and types
├── assets/         # Static assets and global styles
└── main.tsx        # Application entry point
```
