import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function ListControls({ movie, type }) {
  const { removeMovieFromWatchlist, addMovieToWatched } =
    useContext(GlobalContext);
  return (
    <div className="inner-card-controls">
      {type === 'watchlist' && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <i className="fa-fw far fa-eye"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.mal_id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
}

export default ListControls;
