import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard.jsx";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=es-ES`;
    const config = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
      },
    };
    const req = await fetch(url, config);
    if (req.status === 200) {
      const res = await req.json();
      setMovie(res);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="oneMovie">
      <MovieCard key={`${movie.id}${Math.random()}`} pelicula={movie} />
    </div>
  );
}

export default Movie;
