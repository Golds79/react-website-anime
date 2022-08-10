import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import NavbarSingle from '../components/NavbarWatchlist';
import Footer from '../components/Footer';
import ListControls from '../components/ListControls';

function Watchlist() {
  const { watchlist } = useContext(GlobalContext);
  const [error] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [error]);

  return (
    <>
      <NavbarSingle />
      <header>
        <div className="img-bg recommended">
          <h1 className="title-text">Watch List</h1>
        </div>
      </header>
      <div className="single-container">
        <div className="box-description">
          <h5 className="single-text">Movies, TV Series and OVAs</h5>
          <div className="line-description"></div>
          <div className="single-container">
            <p className="single-text-description">
              It is now the year 2022, which marks a new era of anime, including
              new stories, new inspirations. But everything has to come from
              somewhere and so, it is a good time to look back and honor some of
              the anime series and movies which helped to shape the everchanging
              anime world nowadays. So with no further ado, here are the Most
              Influential Anime of All Time!
            </p>
          </div>
        </div>
        <div className="box-description">
          <h5 className="single-text">
            The Most Influential Anime of All Time
          </h5>
          <div className="line-description"></div>
        </div>
      </div>
      <div className="box-grid-single">
        <div className="recomm">
          <div className="recomm-container">
            <div className="recomm-box">
              <main className="grid">
                {watchlist.length > 0 ? (
                  watchlist.map((anime) => (
                    <div className="recomm-box-item" key={anime.mal_id}>
                      <div className="single-box">
                        <div className="box-img-single">
                          <img
                            src={anime.images.webp.large_image_url}
                            alt={anime.title}
                          />
                        </div>
                        <div className="box-content-single">
                          <div className="single-title">
                            <h4 className="text-img-single">{anime.title}</h4>
                          </div>
                          <p className="single-info">
                            Year: {anime.start_year}
                          </p>
                          <p className="single-info">Type: {anime.type}</p>
                          <ListControls type={'watchlist'} movie={anime} />
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div id="error">
                    <iframe
                      src="https://i.gifer.com/1J8w.gif"
                      width={480}
                      height={480}
                      frameBorder={0}
                      allowFullScreen
                      title="ERROR"
                    ></iframe>
                  </div>
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

export default Watchlist;
