import React, { useEffect, useState } from 'react';
import NavbarSingle from '../components/NavbarSingle';
import Footer from '../components/Footer';
import '../css/Single.css';
import '../css/Recommended.css';
import { Link } from 'react-router-dom';

const getAnimes = async () => {
  try {
    const response = await fetch('https://api.jikan.moe/v4/people/5067/full');
    const animes = await response.json();
    return animes;
  } catch (error) {
    throw error;
  }
};

function MamoruHosoda() {
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
        <div className="img-bg mamoruhosoda">
          <h1 className="title-text">Mamoru Hosoda</h1>
        </div>
      </header>
      <div className="single-container">
        <div className="box-description">
          <h5 className="single-text">Animation director</h5>
          <div className="line-description"></div>
          <div className="single-container">
            <p className="single-text-description">
              Mamoru Hosoda (細田 守, Hosoda Mamoru, born September 19, 1967) is
              a Japanese film director and animator. He was nominated for an
              Academy Award in the category Best Animated Feature Film at the
              91st Academy Awards for his eighth film Mirai. Formerly employed
              at Toei Animation, he went to work at Madhouse from 2005 to 2011.
              Hosoda left Madhouse in 2011 to establish his own animation
              studio, Studio Chizu. He first came to public attention in the
              early 2000s with the first two films in the Digimon Adventure
              series and the sixth film in the One Piece series. In the later
              2000s, he diversified more with other films, including 2006's The
              Girl Who Leapt Through Time, 2009's Summer Wars, and 2012's Wolf
              Children.
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
      <Footer />
    </>
  );
}

export default MamoruHosoda;
