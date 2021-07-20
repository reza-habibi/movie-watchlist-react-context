import React, { useContext } from "react";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import { GlobalContext } from "../../Context/GlobalState";

export default function MovieControls({ movie, type }) {
  const { removeMovieFromWatchlist, addMovieToWatched ,moveToWatchlist,
    removeFromWatched } =
    useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <FaEye />
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <FaTimes />
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={()=>moveToWatchlist(movie)} >
            <FaEyeSlash />
          </button>

          <button className="ctrl-btn" onClick={()=>removeFromWatched(movie.id)} >
            <FaTimes />
          </button>
        </>
      )}
    </div>
  );
}
