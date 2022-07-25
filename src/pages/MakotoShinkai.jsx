import React, { useEffect, useState } from 'react';
import NavbarSingle from '../components/NavbarSingle';
import Footer from '../components/Footer';
import '../css/Single.css';
import '../css/Recommended.css';
import { Link } from 'react-router-dom';

const getAnimes = async () => {
  try {
    const response = await fetch('https://api.jikan.moe/v4/people/1117/full');
    const animes = await response.json();
    return animes;
  } catch (error) {
    throw error;
  }
};

function MakotoShinkai() {
  const [animes, setAnimes] = useState([]);
  const [animesToRender, setAnimesToRender] = useState([]);
  const [error, setError] = useState(null);

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
      <NavbarSingle />
      <header>
        <div className="img-bg makotoshinkai">
          <h1 className="title-text">Makoto Shinkai</h1>
        </div>
      </header>
      <div className="single-container">
        <div className="box-description">
          <h5 className="single-text">
            Animator, filmmaker, author, manga artist
          </h5>
          <div className="line-description"></div>
          <div className="single-container">
            <p className="single-text-description">
              Makoto Niitsu (新津 誠, Niitsu Makoto); born February 9, 1973),
              known as Makoto Shinkai (新海 誠, Shinkai Makoto), is a Japanese
              animator, filmmaker, author, and manga artist. Shinkai began his
              career as a video game animator with Nihon Falcom in 1996, and
              gained recognition as a filmmaker with the release of the original
              video animation (OVA) She and Her Cat (1999). Beginning his
              longstanding association with CoMix Wave Films, Shinkai then
              released the science-fiction OVA Voices of a Distant Star in 2002,
              and followed this with his debut feature film The Place Promised
              in Our Early Days (2004).
            </p>
            <p className="single-text-description">
              Shinkai's second feature film, the romantic drama anthology 5
              Centimeters per Second (2007), gained critical acclaim, as did his
              subsequent releases, the dramas Children Who Chase Lost Voices
              (2011) and The Garden of Words (2013). Shinkai's 2016 fantasy
              romance Your Name was a critical and commercial success, becoming
              the third highest-grossing anime film of all time.His 2019 film,
              Weathering with You, also achieved similar critical and commercial
              success.His sixth film, Suzume no Tojimari, is scheduled for
              release in November 2022.
            </p>
          </div>
        </div>
        <div className="box-description">
          <h5 className="single-text">Makoto Shinkai TV and Movies</h5>
          <div className="line-description"></div>
        </div>
      </div>
      <div className="box-grid-single">
        <div className="recomm">
          <div className="recomm-container">
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
                  animesToRender.anime?.map((anime) => {
                    return (
                      <div className="recomm-box-item" key={anime.anime.mal_id}>
                        <Link to={`/${anime.anime.mal_id}`}>
                          <div className="single-box">
                            <div className="box-img-single">
                              <img
                                src={anime.anime.images.webp.large_image_url}
                                alt={anime.anime.title}
                              />
                            </div>
                            <div className="box-content-single">
                              <div className="single-title">
                                <h4 className="text-img-single">
                                  {anime.anime.title}
                                </h4>
                              </div>
                              <p className="single-info">
                                Occupation: {anime.position}
                              </p>
                            </div>
                          </div>
                        </Link>
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

export default MakotoShinkai;
