import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function ListControls({ movie, type }) {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);
  return (
    <div className="anime-controls">
      {type === 'watchlist' && (
        <>
          <button
            className="ctrl-btn"
            title="Add to Watched"
            onClick={() => addMovieToWatched(movie)}
          >
            <i className="fa-fw far fa-eye"></i>
          </button>

          <button
            className="ctrl-btn"
            title="Remove"
            onClick={() => removeMovieFromWatchlist(movie.mal_id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === 'watched' && (
        <>
          <button
            className="ctrl-btn"
            title="Add to Watch List"
            onClick={() => moveToWatchlist(movie)}
          >
            <i className="fa-fw far fa-eye-slash"></i>
          </button>
          <button
            className="ctrl-btn"
            title="Remove"
            onClick={() => removeFromWatched(movie.mal_id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
}

export default ListControls;
