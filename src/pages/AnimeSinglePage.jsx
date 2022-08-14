import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../css/Single.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { GlobalContext } from '../context/GlobalState';

const getAnimes = async (mal_id) => {
  try {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime/${mal_id}/full`,
    );
    const animes = await response.json();
    return animes;
  } catch (error) {
    console.error(error);
  }
};

function AnimeSinglePage() {
  let { id } = useParams();
  const [animes, setAnimes] = useState([]);

  const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } =
    useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.mal_id === animes.mal_id);
  let storedMovieWatched = watched.find((o) => o.mal_id === animes.mal_id);
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

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchAnimes = async () => {
      try {
        const data = await getAnimes(id);
        setAnimes(data.data);
      } catch (error) {}
    };

    fetchAnimes();
  }, [id]);

  return (
    <>
      <Navbar />
      <header>
        <div className="img-bg recommended">
          <h1 className="title-text">{animes.title}</h1>
        </div>
      </header>
      <section>
        <div className="container-single">
          <div className="container-single-left">
            <img src={animes.images?.webp.large_image_url} alt={animes.title} />
          </div>
          <div className="container-single-right">
            <h4>{animes.title_english}</h4>
            <p>
              <span>Original title:</span> {animes.title}
            </p>
            <p>
              <span>Synopsis:</span> {animes.synopsis}
            </p>
            <p>
              <span>Premiered:</span> {animes.year}
            </p>
            <p>
              <span>Type:</span> {animes.type}
            </p>
            <p>
              <span>Episodes:</span> {animes.episodes}
            </p>
            <p>
              <span>Duration:</span> {animes.duration}
            </p>
            <p>
              <span>Rating:</span> {animes.rating}
            </p>
            <Stack spacing={2} direction="row">
              <Button
                disabled={watchlistDisabled}
                onClick={() => addMovieToWatchlist(animes)}
                variant="contained"
                id="btn-single-page"
              >
                Add to Watchlist
              </Button>
            </Stack>
            <Stack spacing={2} direction="row">
              <Button
                disabled={watchedDisabled}
                onClick={() => addMovieToWatched(animes)}
                variant="contained"
                id="btn-single-page"
              >
                Add to Watched
              </Button>
            </Stack>
          </div>
        </div>
        <div className="container-trailer">
          <h5 className="single-text">Trailer</h5>
          <div className="line-description"></div>
          <div className="video-youtube">
            <iframe
              width="560"
              height="315"
              src={animes.trailer?.embed_url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AnimeSinglePage;
