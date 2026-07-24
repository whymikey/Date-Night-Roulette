👀 Preview

💡 About

An interactive React application designed to solve the eternal question: "What are we doing tonight?" It features a randomizer for choosing both movies and food delivery, built with React, TypeScript, and styled with Tailwind CSS.

Features ✨

Movie Roulette: Randomly selects a top-rated movie for your date night.

Food Roulette: Randomly chooses a food delivery category (Pizza, Sushi, Burgers, etc.) with a fun spinning animation.

Smart Loading States: Handles asynchronous API requests with clean loading UI.

Optimized Performance: Uses React.memo and useCallback to prevent unnecessary re-renders.

FSD Architecture: Clean code structure utilizing Feature-Sliced Design principles.

Responsive UI: Styled beautifully with Tailwind CSS for all screens.

🌐 API Used

This project uses the Kinopoisk API Unofficial to fetch movie data:

https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES

The API provides:

Movie titles (Original & Russian)

High-quality poster URLs

Release years

Kinopoisk / IMDb ratings

Note: You need to provide your own API key in src/features/movie-roulette/useMovieRoll.ts to fetch real data.

Tech Stack 🛠

React – UI components

TypeScript – Strict typing for reliable code

Tailwind CSS – Utility-first styling

Vite – Fast development server and bundler

Custom Hooks – Clean separation of business logic

Installation & Run ⚙️

Clone the repository:
``` bash
git clone https://github.com/whymikey/date-night-roulette
cd date-night-roulette

npm install

```  
Setup your API Key:

Get a free token from Kinopoisk API Unofficial.

Open src/features/movie-roulette/useMovieRoll.ts and replace "ТВОЙ_ТОКЕН_СЮДА" with your actual API key.

Start the development server:
``` bash
npm run dev
```