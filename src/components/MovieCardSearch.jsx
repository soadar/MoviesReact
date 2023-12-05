import { useEffect } from "react";

function MovieCardSearch({ pelicula }) {
  // children key
  //LA FUNCION de COMPONENTES NO PUEDE SER ASINCRONA
  const { title, overview, poster_path, vote_average, vote_count, release_date, id } = pelicula;
  const realStar = Math.round(vote_average / 2);

  useEffect(() => {
    // console.log(pelicula)//ascii
  }, []);

  return (
    <article className="moviecard">
      <div className="moviecard-image">
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`Poster ${title}`} />
      </div>
      <div className="moviecard-description">
        <h3>{title}</h3>

        <p>{overview}</p>

        <span className="moviecard-vote">⭐ {realStar}/5</span>
      </div>
    </article>
  );
}

export default MovieCardSearch;