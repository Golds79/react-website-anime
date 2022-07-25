import React, { useEffect, useState } from 'react';
import NavbarSingle from '../components/NavbarSingle';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import '../css/Single.css';
import '../css/Recommended.css';

const getAnimes = async () => {
  try {
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    const animes = await response.json();
    return animes;
  } catch (error) {
    throw error;
  }
};

function StudioGhibli() {
  const [animes, setAnimes] = useState([]);
  const [animesToRender, setAnimesToRender] = useState([]);
  const [error, setError] = useState(null);

  const fetchAnimes = async () => {
    try {
      const data = await getAnimes();
      setAnimes(data);
      setAnimesToRender(data);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchAnimes();
  }, [error]);

  const handelOnChange = (event) => {
    const {
      target: { value },
    } = event;

    const animesFilteresByDirector = animes.filter(
      ({ director }) => director === value || value === 'All',
    );

    setAnimesToRender(animesFilteresByDirector);
  };

  return (
    <>
      <NavbarSingle />
      <header>
        <div className="img-bg studioghibli">
          <h1 className="title-text">Studio Ghibli</h1>
        </div>
      </header>
      <div className="single-container">
        <div className="box-description">
          <h5 className="single-text">
            Motion pictures, Video games, TV, commercials
          </h5>
          <div className="line-description"></div>
          <div className="single-container">
            <p className="single-text-description">
              Studio Ghibli Inc. (Japanese: 株式会社スタジオジブリ, Hepburn:
              Kabushiki-gaisha Sutajio Jiburi) is a Japanese animation film
              studio headquartered in Koganei, Tokyo. It is best known for its
              animated feature films, and has also produced several short
              subjects, television commercials, and two television films. Its
              mascot and most recognizable symbol is a character named Totoro, a
              giant spirit inspired by raccoon dogs (tanuki) and cats from the
              1988 anime film My Neighbor Totoro. Among the studio's
              highest-grossing films are Spirited Away (2001), Howl's Moving
              Castle (2004) and Ponyo (2008).
            </p>
            <p className="single-text-description">
              The studio was founded on June 15, 1985, by directors Hayao
              Miyazaki and Isao Takahata and producer Toshio Suzuki, after the
              successful performance of Topcraft's Nausicaä of the Valley of the
              Wind (1984). It has also collaborated with video game studios on
              the visual development of several games. Five of the studio's
              films are among the ten highest-grossing anime feature films made
              in Japan. Spirited Away is second, grossing 31.68 billion yen in
              Japan and over US$380 million worldwide; and Princess Mononoke is
              fourth, grossing 20.18 billion yen. Many of their works have won
              the Animage Grand Prix award. Four have won the Japan Academy
              Prize for Animation of the Year.
            </p>
            <p className="single-text-description">
              Five of their films have received Academy Award nominations.
              Spirited Away won the 2002 Golden Bear and the 2003 Academy Award
              for Best Animated Feature. On August 3, 2014, Studio Ghibli
              temporarily suspended production following Miyazaki's retirement.
              In February 2017, Suzuki announced that Miyazaki had come out of
              retirement to direct a new feature film, How Do You Live?, which
              he intended to be his last film.
            </p>
          </div>
        </div>
        <div className="box-description">
          <h5 className="single-text">Studio Ghibli Films</h5>
          <div className="line-description"></div>
        </div>
      </div>
      <div className="box-description">
        <form>
          <select
            role="combobox"
            defaultValue=""
            name="directors"
            id="directors"
            onChange={handelOnChange}
          >
            <option role="tab" value="" disabled>
              -- Select Director --
            </option>
            <option role="tab">All</option>
            <option role="tab">Isao Takahata</option>
            <option role="tab">Hayao Miyazaki </option>
            <option role="tab">Gorō Miyazaki </option>
            <option role="tab">Yoshifumi Kondō </option>
            <option role="tab">Hiromasa Yonebayashi</option>
          </select>
        </form>
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
                animesToRender.map((anime) => (
                  <div className="recomm-box-item" key={anime.id}>
                    <Link to={`/studio-ghibli/${anime.id}`}>
                      <div className="single-box">
                        <div className="box-img-single">
                          <img src={anime.image} alt={anime.title} />
                        </div>
                        <div className="box-content-single">
                          <div className="single-title">
                            <h4 className="text-img-single">{anime.title}</h4>
                          </div>
                          <p className="single-info">
                            Director: {anime.director}
                          </p>
                          <p className="single-info">
                            Producer: {anime.producer}
                          </p>
                          <p className="single-info">
                            Release date: {anime.release_date}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              )}
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default StudioGhibli;
