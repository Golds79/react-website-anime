import React, { useEffect, useState } from 'react';
import NavbarSingle from '../components/NavbarSingle';
import Footer from '../components/Footer';
import '../css/Single.css';
import '../css/Recommended.css';
import { Link } from 'react-router-dom';

const getAnimes = async () => {
  try {
    const response = await fetch('https://api.jikan.moe/v4/people/5579/full');
    const animes = await response.json();
    return animes;
  } catch (error) {
    throw error;
  }
};

function IsaoTakahata() {
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
        <div className="img-bg takahata">
          <h1 className="title-text">Isao Takahata</h1>
        </div>
      </header>
      <div className="single-container">
        <div className="box-description">
          <h5 className="single-text">
            Film director, animation director, producer
          </h5>
          <div className="line-description"></div>
          <div className="single-container">
            <p className="single-text-description">
              Isao Takahata (高畑 勲, Takahata Isao, October 29, 1935 – April 5,
              2018) was a Japanese director, screenwriter and producer. A
              co-founder of Studio Ghibli, he has earned international critical
              acclaim for his work as a director of Japanese animated feature
              films. Born in Ujiyamada, Mie Prefecture, Takahata joined Toei
              Animation after graduating from the University of Tokyo in 1959.
              He worked as an assistant director, holding various positions over
              the years and collaborating with colleague Hayao Miyazaki,
              eventually directing his own film, The Great Adventure of Horus,
              Prince of the Sun (1969).
            </p>
            <p className="single-text-description">
              He continued his partnership with Miyazaki, and under Nippon
              Animation directed the television series Heidi, Girl of the Alps
              (1974), 3000 Leagues in Search of Mother (1976), and Anne of Green
              Gables (1979). Takahata, Miyazaki and others formed Studio Ghibli
              in 1985, where he would direct Grave of the Fireflies (1988), Only
              Yesterday (1991), Pom Poko (1994), and My Neighbors the Yamadas
              (1999). His last film as director was The Tale of the Princess
              Kaguya (2013), which was nominated for an Oscar in the category of
              Best Animated Feature Film at the 87th Academy Awards.
            </p>
          </div>
        </div>
        <div className="box-description">
          <h5 className="single-text">Isao Takahata TV and Movies</h5>
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

export default IsaoTakahata;
