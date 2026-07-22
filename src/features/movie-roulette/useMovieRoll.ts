import { useState } from "react";
import type { Movie } from "../../types";

const API_KEY = "79d0bf33-8a2c-4189-9828-0405083cf2d5";

const MOCK_MOVIES: Movie[] = [
  {
    id: 1,
    title: "Джентльмены",
    description: "Талантливый выпускник Оксфорда создает нелегальную империю.",
    year: "2019",
    rating: 8.5,
    imageUrl:
      "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&q=80&w=400&h=600",
  },
  {
    id: 2,
    title: "Достать ножи",
    description:
      "Частный детектив расследует смерть 85-летнего автора криминальных романов.",
    year: "2019",
    rating: 8.1,
    imageUrl:
      "https://images.unsplash.com/photo-1585647347384-2593bc35786b?auto=format&fit=crop&q=80&w=400&h=600",
  },
  {
    id: 3,
    title: "Интерстеллар",
    description:
      "Исследователи отправляются за пределы галактики, чтобы спасти человечество.",
    year: "2014",
    rating: 8.6,
    imageUrl:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=400&h=600",
  },
  {
    id: 4,
    title: "Тайна Коко",
    description:
      "Мальчик Мигель отправляется в Страну Мертвых, чтобы найти своего кумира.",
    year: "2017",
    rating: 8.4,
    imageUrl:
      "https://images.unsplash.com/photo-1513224502586-d1e602410265?auto=format&fit=crop&q=80&w=400&h=600",
  },
];

const useMovieRoll = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movie, setMovie] = useState<Movie | null>(null);

  const rollMovie = async () => {
    if (isLoading) return;

    setIsLoading(true);
    setMovie(null);

    try {
      const randomPage = Math.floor(Math.random() * 13) + 1;

      const response = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=${randomPage}`,
        {
          method: "GET",
          headers: {
            "X-API-KEY": API_KEY,
            "Content-type": "application/json",
          },
        },
      );

      if (!response.ok) {
        throw new Error("Ошибка при загрузке фильма");
      }

      const data = await response.json();
      const randomItemIndex = Math.floor(Math.random() * data.items.length);
      const randomApiMovie = data.items[randomItemIndex];

      const formattedMovie: Movie = {
        id: randomApiMovie.kinopoiskId,
        title: randomApiMovie.nameRu || randomApiMovie.nameOriginal,
        description: randomApiMovie.description || randomApiMovie.shortDescription || 'Описание для этого фильма не найдено, но он точно стоит внимания!',
        year: randomApiMovie.year?.toString() || 'Неизвестно',
        rating: randomApiMovie.ratingKinopoisk || randomApiMovie.ratingImdb || 0,
        imageUrl: randomApiMovie.posterUrl
      }

      setMovie(formattedMovie)
    } catch (err){
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  };

  return { isLoading, movie, rollMovie };
};

export default useMovieRoll;
