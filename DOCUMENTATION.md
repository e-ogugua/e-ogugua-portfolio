# E. Ogugua Portfolio Documentation

## Project Overview
This project is a portfolio website for E. Ogugua, built with Next.js for server-side rendering and a React client-side application. The architecture uses a hybrid approach where Next.js handles the initial page load and routing, while the client-side React application (using Wouter for routing) manages the UI and interactions.

## Project Structure

### Key Directories
- `/pages`: Next.js pages for server-side routing
- `/client`: Client-side React application
  - `/client/src/App.tsx`: Main client application with Wouter routing
  - `/client/src/pages`: Client-side page components
  - `/client/src/components`: Reusable UI components

## Routing System

### Server-Side Routing (Next.js)
- `/pages/index.tsx`: Entry point that loads the client-side application
- `/pages/[...catchAll].tsx`: Handles all non-existent routes with a custom 404 page

### Client-Side Routing (Wouter)
The client-side routing is defined in `/client/src/App.tsx` and includes routes for:
- Home page (`/`)
- About page (`/about`)
- Projects page (`/projects`)
- Brands page (`/brands`)
- Learn page (`/learn`)
- Blog pages (`/blog`, `/blog/categories`, `/blog/category/:slug`, `/blog/:slug`)
- Service pages (`/development`, `/consulting`, `/training`)

## Error Handling

### 404 Not Found Pages
The application handles non-existent routes in two ways:

1. **Server-Side (Next.js)**: 
   - `/pages/[...catchAll].tsx` displays a custom 404 page with a message
   - Automatically redirects to the home page after 3 seconds

2. **Client-Side (Wouter)**:
   - The catch-all route (`<Route path="*">`) in App.tsx renders a hidden div
   - This prevents any visible UI for non-existent client-side routes

## Theme System
The application uses a theme provider (defined in `/client/src/hooks/use-theme.ts`) that supports light and dark modes. The theme is stored in local storage under the key `portfolio-theme`.

## State Management
- **Persona Context**: Manages the current persona/role view of the portfolio
- **React Query**: Used for data fetching and caching

## Development

### Running the Application
```bash
npm run dev
```
This starts the Next.js development server at http://localhost:3000.

### Building for Production
```bash
npm run build
npm start
```

## Recent Changes

### Routing and 404 Page Handling
- Modified the client-side catch-all route to render a hidden div instead of the NotFound component
- Updated the server-side catch-all route to show a custom 404 page with a redirect to home
- This prevents duplicate rendering of content when navigating to non-existent routes