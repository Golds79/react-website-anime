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
    const response = await fetch('https://api.jikan.moe/v4/people/7498/full');
    const animes = await response.json();
    return animes;
  } catch (error) {
    throw error;
  }
};

function NaokoYamada() {
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
        <div className="img-bg naokoyamada">
          <h1 className="title-text">Naoko Yamada</h1>
        </div>
      </header>
      <div className="single-container">
        <div className="box-description">
          <h5 className="single-text">
            Animator, director, storyboard, artist
          </h5>
          <div className="line-description"></div>
          <div className="single-container">
            <p className="single-text-description">
              Naoko Yamada (山田 尚子, Yamada Naoko) is a Japanese animator,
              television and film director. Working at Kyoto Animation, she
              directed the anime series K-On! (2009-2010) and Tamako Market
              (2013), and the anime films A Silent Voice (2016) and Liz and the
              Blue Bird (2018). In 2021, she directed the original net animation
              The Heike Story under Science SARU. The series will premiere on
              Japanese television in January 2022.She has won multiple awards
              for her work, as well as become world renowned for her stylistic
              choices in anime. She was also one of the youngest people to be
              made a director with Kyoto Animation, getting her first directing
              opportunity at the age of 23.
            </p>
          </div>
        </div>
        <div className="box-description">
          <h5 className="single-text">Naoko Yamada TV and Movies</h5>
          <div className="line-description"></div>
        </div>
      </div>
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
      <Footer />
    </>
  );
}

export default NaokoYamada;
