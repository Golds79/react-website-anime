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
    const response = await fetch('https://api.jikan.moe/v4/people/1870/full');
    const animes = await response.json();
    return animes;
  } catch (error) {
    throw error;
  }
};

function HayaoMiyazaki() {
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
        <div className="img-bg hayaomiyazaki">
          <h1 className="title-text">Hayao Miyazaki</h1>
        </div>
      </header>
      <div className="single-container">
        <div className="box-description">
          <h5 className="single-text">
            Animator, filmmaker, screenwriter author, manga artist
          </h5>
          <div className="line-description"></div>
          <div className="single-container">
            <p className="single-text-description">
              Hayao Miyazaki (宮崎 駿, Miyazaki Hayao, [mijaꜜzaki hajao]; born
              January 5, 1941) is a Japanese animator, director, producer,
              screenwriter, author, and manga artist. A co-founder of Studio
              Ghibli, he has attained international acclaim as a masterful
              storyteller and creator of Japanese animated feature films, and is
              widely regarded as one of the most accomplished filmmakers in the
              history of animation. Born in Bunkyō ward of Tokyo, Miyazaki
              expressed interest in manga and animation from an early age, and
              he joined Toei Animation in 1963. During his early years at Toei
              Animation he worked as an in-between artist and later collaborated
              with director Isao Takahata. Notable films to which Miyazaki
              contributed at Toei include Doggie March and Gulliver's Travels
              Beyond the Moon. He provided key animation to other films at Toei,
              such as Puss in Boots and Animal Treasure Island, before moving to
              A-Pro in 1971, where he co-directed Lupin the Third Part I
              alongside Takahata. After moving to Zuiyō Eizō (later known as
              Nippon Animation) in 1973, Miyazaki worked as an animator on World
              Masterpiece Theater, and directed the television series Future Boy
              Conan (1978).
            </p>
            <p className="single-text-description">
              He joined Tokyo Movie Shinsha in 1979 to direct his first feature
              film The Castle of Cagliostro as well as the television series
              Sherlock Hound. In the same period, he also started writing and
              illustrating the manga Nausicaä of the Valley of the Wind
              (1982–1994), and he also directed the 1984 film adaptation
              produced by Topcraft. Miyazaki co-founded Studio Ghibli in 1985.
              He directed numerous films with Ghibli, including Castle in the
              Sky (1986), My Neighbor Totoro (1988), Kiki's Delivery Service
              (1989), and Porco Rosso (1992). The films were met with critical
              and commercial success in Japan. Miyazaki's film Princess Mononoke
              was the first animated film ever to win the Japan Academy Prize
              for Picture of the Year, and briefly became the highest-grossing
              film in Japan following its release in 1997;its distribution to
              the Western world greatly increased Ghibli's popularity and
              influence outside Japan. His 2001 film Spirited Away became the
              highest-grossing film in Japanese history,winning the Academy
              Award for Best Animated Feature at the 75th Academy Awards, and is
              frequently ranked among the greatest films of the 2000s.
              Miyazaki's later films—Howl's Moving Castle (2004), Ponyo (2008),
              and The Wind Rises (2013)—also enjoyed critical and commercial
              success.
            </p>
            <p className="single-text-description">
              Following the release of The Wind Rises, Miyazaki announced his
              retirement from feature films, though he returned to work on the
              upcoming feature film How Do You Live? in 2016. Miyazaki's works
              are characterized by the recurrence of themes such as humanity's
              relationship with nature and technology, the wholesomeness of
              natural and traditional patterns of living, the importance of art
              and craftsmanship, and the difficulty of maintaining a pacifist
              ethic in a violent world. The protagonists of his films are often
              strong girls or young women, and several of his films present
              morally ambiguous antagonists with redeeming qualities. Miyazaki's
              works have been highly praised and awarded; he was named a Person
              of Cultural Merit for outstanding cultural contributions in
              November 2012, and received the Academy Honorary Award for his
              impact on animation and cinema in November 2014. Miyazaki has
              frequently been cited as an inspiration for numerous animators,
              directors, and writers.
            </p>
          </div>
        </div>
        <div className="box-description">
          <h5 className="single-text">Hayao Miyazaki TV and Movies</h5>
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

export default HayaoMiyazaki;
