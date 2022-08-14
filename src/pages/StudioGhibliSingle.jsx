import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../css/Single.css';

const getAnimes = async (id) => {
  try {
    const response = await fetch(`https://ghibliapi.herokuapp.com/films/${id}`);
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
        setAnimes(data);
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
            <img src={animes.image} alt={animes.title} />
          </div>
          <div className="container-single-right">
            <h4>{animes.title_english}</h4>
            <p>
              <span>Original title:</span> {animes.original_title_romanised}
            </p>
            <p>
              <span>Synopsis:</span> {animes.description}
            </p>
            <p>
              <span>Director:</span> {animes.director}
            </p>
            <p>
              <span>producer:</span> {animes.producer}
            </p>
            <p>
              <span>Duration:</span> {animes.running_time}
            </p>
            <p>
              <span>Duration:</span> {animes.running_time}
            </p>
            <p>
              <span>Rating:</span> {animes.rt_score}
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AnimeSinglePage;
