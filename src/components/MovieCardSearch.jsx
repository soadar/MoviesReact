import { Link } from "react-router-dom";

function MovieCardSearch({ pelicula }) {
  const { title, overview, poster_path, vote_average, vote_count, release_date, id } = pelicula;
  const realStar = Math.round(vote_average / 2);

  return poster_path ? (
    <article className="moviecard">
      <Link to={`/${id}`}>
        <div className="moviecard-image">
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`Poster ${title}`} />
        </div>
        <div className="moviecard-description">
          <h3>{title}</h3>
          <p>{overview}</p>
          <span className="moviecard-vote">⭐ {realStar}/5</span>
        </div>
      </Link>
    </article>
  ) : null;
}

export default MovieCardSearch;
