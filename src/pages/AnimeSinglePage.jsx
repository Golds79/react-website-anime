import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavbarSingle from '../components/NavbarSingle';
import Footer from '../components/Footer';
import '../css/Single.css';

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
      <NavbarSingle />
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
          </div>
        </div>
        <div className="container-trailer">
          <h5 className="single-text">Trailer</h5>
          <div className="line-description"></div>
          <div class="video-youtube">
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
