import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MovieCardSearch from "./MovieCardSearch.jsx";

function MovieSearch({}) {
  const { query } = useParams();
  console.log("name2", query);

  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?language=es-ES&query=${query}&api_key=${import.meta.env.VITE_TOKEN}`;
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
      setMovies(res);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  //return <h1>pelicula {id}</h1>;
  return (
    <>
      <Link to="/">
        <h1>Movies</h1>
      </Link>{" "}
      <main className="container content" id="mimain">
        {movies.results?.map((movie) => {
          return <MovieCardSearch key={`${movie.id}${Math.random()}`} pelicula={movie} />;
        })}
      </main>
    </>
  );
}

export default MovieSearch;
