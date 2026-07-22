import { useState } from "react";
import "./App.css";

import Tabs from "./shared/ui/Tabs";
import FoodRoulette from "./features/food-roulette/FoodRoulette";
import MovieRoulette from "./features/movie-roulette/MovieRoulette";

function App() {
  const [activeTab, setActiveTab] = useState<"movie" | "food">("movie");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-4 flex flex-col items-center">
      <div className="w-full max-w-md flex flex-col items-center mt-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-fuchsia-500 mb-2">
            Date Night Roulette
          </h1>
          <p className="text-slate-400 text-sm">
            Хватит спорить. Пусть решает рандом.
          </p>
        </div>

        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
        {activeTab === "movie" ? (
          <MovieRoulette />
        ) : (
          <FoodRoulette />
        )}
      </div>
    </div>
  );
}

export default App;
