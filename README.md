# Heroku App Store

A modern, responsive web application that showcases trending and popular apps, built with React and Vite. This project simulates an app store experience, allowing users to browse, search, view details, and "install" (locally save) apps, with a focus on clean UI and interactive features.

## Why this project?

- **Learning Purpose:** Demonstrates a full-stack-like experience using only frontend technologies.
- **UI/UX Practice:** Implements modern design patterns, responsive layouts, and interactive components.
- **React Ecosystem:** Showcases routing, state management, and component-based architecture.

## Features

- **Home Page:** Hero section and trending apps display.
- **Apps Listing:** Search and filter all available apps.
- **App Details:** View detailed information, ratings, and download stats for each app.
- **Installations:** See and manage your locally "installed" apps.
- **Routing:** Client-side navigation with error handling.
- **Loading States:** Smooth loading experience with fallback loaders.
- **Responsive Design:** Works well on desktop and mobile devices.

## How to Use

1. **Clone the repository:**

   ```
   git clone https://github.com/your-username/heroku-app-store.git
   cd heroku-app-store
   ```

2. **Install dependencies:**

   ```
   npm install
   ```

3. **Run the development server:**

   ```
   npm run dev
   ```

4. **Build for production:**

   ```
   npm run build
   ```

5. **Preview the production build:**
   ```
   npm run preview
   ```

## Main Packages Used

- **React**: UI library for building components.
- **Vite**: Fast build tool and dev server.
- **React Router**: Client-side routing.
- **Recharts**: Data visualization for app ratings.
- **React Toastify**: Toast notifications for user feedback.
- **Tailwind CSS & DaisyUI**: Utility-first CSS framework and UI components.
- **Lucide React**: Icon library.
- **ESLint**: Linting and code quality.

## Project Structure

- `src/pages/`: Main pages (Home, Apps, AppDetails, Installations, etc.)
- `src/components/`: Reusable UI components (Hero, TrendingApp, Loader, Navbar, etc.)
- `src/routes/router.jsx`: Application routing configuration.
- `public/apps.json`: Mock data for apps.

## Data

All app data is stored in `public/apps.json` and loaded on demand.

## License

This project is for educational/demo purposes.
