import React from "react";
import useMovieRoll from "./useMovieRoll";
import Button from "../../shared/ui/Button";

const MovieRoulette = () => {
  const { isLoading, movie, rollMovie } = useMovieRoll();

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full aspect-[2/3] bg-slate-900 rounded-2xl border border-slate-800 flex flex-col items-center justify-center overflow-hidden relative mb-6 shadow-xl">
        {!movie && !isLoading && (
          <div className="text-center p-6 text-slate-500">
            <span className="text-6xl block mb-4">🎬</span>
            <p>
              Нажмите кнопку,
              <br />
              чтобы выбрать фильм на вечер
            </p>
          </div>
        )}

        {isLoading && (
          <div className="flex flex-col items-center animate-pulse">
            <div className="w-12 h-12 border-4 border-rose-500/30 border-t-rose-500 rounded-full animate-spin mb-4"></div>
            <p className="text-rose-400 font-medium">Ищем шедевр...</p>
          </div>
        )}
        {movie && !isLoading && (
          <div className="absolute inset-0 flex flex-col">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
              style={{ backgroundImage: `url(${movie.imageUrl})` }}
            ></div>

            <div className="relative z-10 flex flex-col h-full bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent p-6 justify-end">
              <div className="flex justify-between items-end mb-2">
                <h2 className="text-2xl font-black text-white">
                  {movie.title}
                </h2>
                <div className="flex items-center bg-rose-500/20 text-rose-400 px-2 py-1 rounded font-bold text-sm border border-rose-500/30">
                  ⭐ {movie.rating}
                </div>
              </div>
              <p className="text-slate-400 text-xs mb-3 font-medium uppercase tracking-wider">
                {movie.year}
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                {movie.description}
              </p>
            </div>
          </div>
        )}
      </div>

      <Button
        onClick={rollMovie}
        disabled={isLoading}
        className="bg-gradient-to-r from-rose-500 to-fuchsia-600 hover:from-rose-400 hover:to-fuchsia-500 shadow-rose-500/25"
      >
        {isLoading ? "Ищем..." : "Крутить рулетку"}
      </Button>
    </div>
  );
};

export default MovieRoulette;
