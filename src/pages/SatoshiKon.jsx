import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../css/Single.css';
import '../css/Recommended.css';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const getAnimes = async () => {
  try {
    const response = await fetch('https://api.jikan.moe/v4/people/4580/full');
    const animes = await response.json();
    return animes;
  } catch (error) {
    throw error;
  }
};

function SatoshiKon() {
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
      <Navbar />
      <header>
        <div className="img-bg satoshikon">
          <h1 className="title-text">Satoshi Kon</h1>
        </div>
      </header>
      <div className="single-container">
        <div className="box-description">
          <h5 className="single-text">
            Animator, film director, screenwriter, manga artist
          </h5>
          <div className="line-description"></div>
          <div className="single-container">
            <p className="single-text-description">
              Satoshi Kon (今 敏, Kon Satoshi, October 12, 1963 – August 24,
              2010) was a Japanese film director, animator, screenwriter and
              manga artist from Sapporo, Hokkaidō and a member of the Japanese
              Animation Creators Association (JAniCA).Tsuyoshi Kon [ja], a
              guitarist, is his brother.He was a graduate of the Graphic Design
              department of the Musashino Art University. He is best known for
              his acclaimed anime films Perfect Blue (1997), Millennium Actress
              (2001), Tokyo Godfathers (2003), and Paprika (2006). He died of
              pancreatic cancer at the age of 46 on August 24, 2010.
            </p>
          </div>
        </div>
        <div className="box-description">
          <h5 className="single-text">Satoshi Kon TV and Movies</h5>
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
                            <div className="btn-box-single">
                              <Stack spacing={2} direction="row">
                                <Link
                                  to={{
                                    pathname: `/${anime.anime.mal_id}`,
                                  }}
                                >
                                  <Button variant="contained" id="btn-single">
                                    View more cast details
                                  </Button>
                                </Link>
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

export default SatoshiKon;
