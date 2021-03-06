import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";

export default function ResultCard({ movie }) {
  const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } =
    useContext(GlobalContext);

  let storedMovie = watchlist.find((item) => item.id === movie.id);
  let watchedMovie = watched.find((item) => item.id === movie.id);

  const watchlistDisabled = storedMovie ? true : watchedMovie ? true : false;
  const watchedDisabled =  watchedMovie ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
        </div>
        <div className="controls">
          <button
            className="btn"
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
            ADD TO WATCHLIST
          </button>
          <button
            className="btn"
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
            ADD TO WATCHED
          </button>
        </div>
      </div>
    </div>
  );
}
