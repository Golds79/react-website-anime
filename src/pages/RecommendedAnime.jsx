import React, { useEffect, useState, useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../css/Single.css';
import '../css/Recommended.css';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const getAnimes = async () => {
  try {
    const response = await fetch(
      'https://www.animeselection.com/media/api/favorites.json',
    );
    const animes = await response.json();
    return animes;
  } catch (error) {
    throw error;
  }
};

function Recommended() {
  const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } =
    useContext(GlobalContext);

  const [animes, setAnimes] = useState([]);
  const [animesToRender, setAnimesToRender] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  const fetchAnimes = async () => {
    try {
      const data = await getAnimes();
      setAnimes(data);
      setAnimesToRender(data.data);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchAnimes();
  }, [error]);
  return (
    <>
      <Navbar />
      <header>
        <div className="img-bg recommended">
          <h1 className="title-text">Recommended anime</h1>
        </div>
      </header>
      <div className="single-container">
        <div className="box-description">
          <h5 className="single-text">Movies, TV Series and OVAs</h5>
          <div className="line-description"></div>
          <div className="single-container">
            <p className="single-text-description">
              It is now the year 2022, which marks a new era of anime, including
              new stories, new inspirations. But everything has to come from
              somewhere and so, it is a good time to look back and honor some of
              the anime series and movies which helped to shape the everchanging
              anime world nowadays. So with no further ado, here are the Most
              Influential Anime of All Time!
            </p>
          </div>
        </div>
        <div className="box-description">
          <h5 className="single-text">
            The Most Influential Anime of All Time
          </h5>
          <div className="line-description"></div>
        </div>
      </div>
      <div className="box-grid-single">
        <div className="recomm">
          <div className="recomm-container">
            <div className="search-box">
              <h5 className="single-text">Search</h5>
              <input
                type="text"
                placeholder="search..."
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="recomm-box">
              <main className="grid">
                {error ? (
                  <div id="error">
                    <iframe
                      src="https://gifer.com/embed/76cI"
                      width={480}
                      height={480}
                      frameBorder={0}
                      allowFullScreen
                      title="ERROR"
                    ></iframe>
                  </div>
                ) : (
                  animes &&
                  animesToRender.anime
                    ?.filter((anime) =>
                      anime.title.toUpperCase().includes(search.toUpperCase()),
                    )
                    .map((anime) => {
                      let storedMovie = watchlist.find(
                        (o) => o.mal_id === anime.mal_id,
                      );
                      let storedMovieWatched = watched.find(
                        (o) => o.mal_id === anime.mal_id,
                      );
                      const watchlistDisabled = storedMovie
                        ? true
                        : storedMovieWatched
                        ? true
                        : false;
                      const watchedDisabled = storedMovieWatched
                        ? true
                        : storedMovieWatched
                        ? true
                        : false;
                      return (
                        <div className="recomm-box-item" key={anime.mal_id}>
                          <div className="single-box">
                            <div className="box-img-single">
                              <img
                                src={anime.images.webp.large_image_url}
                                alt={anime.title}
                              />
                            </div>
                            <div className="box-content-single">
                              <div className="single-title">
                                <h4 className="text-img-single">
                                  {anime.title}
                                </h4>
                              </div>
                              <p className="single-info">
                                Year: {anime.start_year}
                              </p>
                              <p className="single-info">Type: {anime.type}</p>
                              <div className="btn-box-single">
                                <Stack spacing={2} direction="row">
                                  <Link
                                    to={{
                                      pathname: `/${anime.mal_id}`,
                                    }}
                                  >
                                    <Button variant="contained" id="btn-single">
                                      View more cast details
                                    </Button>
                                  </Link>
                                </Stack>
                                <Stack spacing={2} direction="row">
                                  <Button
                                    disabled={watchlistDisabled}
                                    onClick={() => addMovieToWatchlist(anime)}
                                    variant="contained"
                                    id="btn-single"
                                  >
                                    Add to Watchlist
                                  </Button>
                                </Stack>
                                <Stack spacing={2} direction="row">
                                  <Button
                                    disabled={watchedDisabled}
                                    onClick={() => addMovieToWatched(anime)}
                                    variant="contained"
                                    id="btn-single"
                                  >
                                    Add to Watched
                                  </Button>
                                </Stack>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                )}
              </main>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Recommended;
