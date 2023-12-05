import { useEffect, useState } from "react";
import MovieCard from "./MovieCard.jsx";

function Container() {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);

  const getMovies = async () => {
    try {
      setLoader(true);
      const url = `${import.meta.env.VITE_URL}?language=es-ES&page=${page}`; // template string

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
        if (movies.length === 0) {
          setMovies(res.results);
        } else {
          const nuevoArray = movies.concat(res.results); // forma más legible
          const nuevoArray2 = [...movies, ...res.results]; // forma nueva spread operator
          setMovies(nuevoArray);
        }
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoader(false);
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    setPage(page + 1);
  };

  useEffect(() => {
    getMovies();
  }, [page]);

  return (
    <>
      <main className="container content" id="mimain">
        {movies?.map((pelicula) => {
          return <MovieCard key={`${pelicula.id}${Math.random()}`} pelicula={pelicula} />;
        })}
      </main>

      {loader ? (
        <p className="loader">Cargando...</p>
      ) : (
        <button className="btn-seemore" onClick={handleClick}>
          Ver más
        </button>
      )}
    </>
  );
}

export default Container;
