import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
  const favorite = isFavorite(movie.id)

  function onFavourite(e) { 
    e.preventDefault()
    if (favorite) removeFromFavorites(movie.id)
    else addToFavorites(movie)
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`${movie.title} poster`}
        />
        <div className="movie-overlay">
          <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavourite}>
            &#x2665;
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
        {/* ?.split("-").slice(0, 2).join("-") for just the year and month e.g. 2026-08 */}
      </div>
    </div>
  );
}

export default MovieCard;
