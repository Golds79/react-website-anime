import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import ListControls from '../components/ListControls';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import '../css/Single.css';

function Watched() {
  const { watched } = useContext(GlobalContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <header>
        <div className="img-bg recommended">
          <h1 className="title-text">Watched Movies</h1>
        </div>
      </header>
      <div className="single-container">
        <div className="box-description">
          <h5 className="single-text">
            {watched.length}{' '}
            {watched.length === 1 ? 'Movie/Serie' : 'Movies/Series'}
          </h5>
          <div className="line-description"></div>
        </div>
        <div className="box-description">
          <h5 className="single-text">How to use your Watched List</h5>
          <div className="single-container">
            <div className="single-text-description">
              <ul>
                <li>
                  <strong>Add an movie/series to Watched:</strong> Select Add to
                  watched below the movies/series.
                </li>
                <li>
                  <strong>View your Watched List:</strong> In the top menu or in
                  responsive go to the Watched link.
                </li>
                <li>
                  <strong>Remove an movie/series:</strong> Simply click on the X
                  icon under each movie/series.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="box-grid-single">
        <div className="recomm">
          <div className="recomm-container">
            <div className="recomm-box">
              <main className="grid">
                {watched.length > 0 ? (
                  watched.map((anime) => (
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
                          <div className="btn-box-single">
                            <Stack spacing={2} direction="row">
                              <Link
                                to={{
                                  pathname: `/${anime.mal_id}`,
                                }}
                              >
                                <Button variant="contained" id="btn-single">
                                  View more cast details
                                </Button>
                              </Link>
                            </Stack>
                          </div>
                          <ListControls type={'watched'} movie={anime} />
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div id="error">
                    <span>No movies in your Watched List! Add some!</span>
                    <div className="img-error">
                      <img
                        src="https://www.animeselection.com/media/videos/akage.gif"
                        alt="ERROR"
                        title="ERROR"
                      ></img>
                    </div>
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

export default Watched;
