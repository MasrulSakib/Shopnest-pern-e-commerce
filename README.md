# ShopNest PERN E-commerce

ShopNest is a full-stack e-commerce solution built using the PERN stack (PostgreSQL, Express, React, and Node.js). The application provides a robust platform for product management, featuring a secured backend API and a high-performance frontend interface.

## Architecture Overview

The project is structured as a monorepo with a clear separation between the server-side logic and the client-side interface:

*   **Backend**: An Express.js REST API secured with Arcjet, connected to a PostgreSQL database via Neon.
*   **Frontend**: A modern React application optimized with Vite and styled with Tailwind CSS.

## Technology Stack

### Backend
*   **Runtime**: Node.js
*   **Framework**: Express 5
*   **Database**: PostgreSQL (via Neon Database)
*   **Security**: Arcjet (Rate limiting, Bot detection)
*   **Logging**: Morgan
*   **Middleware**: Helmet, CORS, JSON Parser

### Frontend
*   **Library**: React 19
*   **Build Tool**: Vite 6
*   **State Management**: Zustand
*   **Styling**: Tailwind CSS 4, DaisyUI
*   **Icons**: Lucide React
*   **Routing**: React Router 7

## Key Features

*   **Unified Product Management**: Full CRUD operations for products with persistent database storage.
*   **Enterprise Security**: Integrated Arcjet protection for rate-limiting, bot detection, and spoofed bot prevention.
*   **Modern State Management**: Global state handling via Zustand for a reactive and efficient UI.
*   **Production-Ready Build**: Automated build scripts that compile the frontend and serve it via the Express backend in production.
*   **Database Automation**: Automatic table initialization and seeding support.

## Getting Started

### Prerequisites
*   Node.js (latest LTS)
*   npm
*   PostgreSQL database (Neon Database recommended)

### Environment Setup

Create a `.env` file in the root directory and configure the following variables:

```env
PORT=3000
DATABASE_URL=your_postgresql_connection_string
ARCJET_KEY=your_arcjet_api_key
NODE_ENV=development
```

### Installation

1. Install root and backend dependencies:
    ```bash
    npm install
    ```
2. Install frontend dependencies:
    ```bash
    npm install --prefix frontend
    ```

### Development

To run the full-stack application in development mode:

```bash
npm run dev
```

The backend will start on port 3000, and the frontend will be accessible via Vite's development server.

## Production and Deployment

### Building for Production

The project includes a unified build command that installs all dependencies (including dev tools for TypeScript) and builds the frontend assets:

```bash
npm run build
```

### Starting the Server

In production, the application serves the compiled React assets directly from the backend:

```bash
npm start
```

## Project Structure

```text
├── backend/            # Express application logic
│   ├── config/         # Database and third-party configurations
│   ├── controller/     # Request handlers
│   ├── routes/         # API route definitions
│   └── server.ts       # Application entry point
├── frontend/           # React application
│   ├── src/            # Components, hooks, and stores
│   └── vite.config.ts  # Vite configuration
└── package.json        # Root workspace configuration
```
