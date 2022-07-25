import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Recommended.css';
import '../css/Directors.css';

function Directors() {
  return (
    <div className="recomm">
      <div className="directors-container">
        <div className="header-directors">
          <h3>Directors</h3>
        </div>
        <div className="recomm-box">
          <main className="directors-grid">
            <div className="directors director-1">
              <div className="inner-edge">
                <h5>
                  <Link to="/isao-takahata">Isao Takahata</Link>
                </h5>
              </div>
            </div>
            <div className="directors director-2">
              <div className="inner-edge">
                <h5>
                  <Link to="/satoshi-kon">Satoshi Kon</Link>
                </h5>
              </div>
            </div>
            <div className="directors director-3">
              <div className="inner-edge">
                <h5>
                  <Link to="/makoto-shinkai">Makoto Shinkai</Link>
                </h5>
              </div>
            </div>
            <div className="directors director-4">
              <div className="inner-edge">
                <h5>
                  <Link to="/hayao-miyazaki">Hayao Miyazaki</Link>
                </h5>
              </div>
            </div>
            <div className="directors director-5">
              <div className="inner-edge">
                <h5>
                  <Link to="/naoko-yamada">Naoko Yamada</Link>
                </h5>
              </div>
            </div>
            <div className="directors director-6">
              <div className="inner-edge">
                <h5>
                  <Link to="/mamoru-hosoda">Mamoru Hosoda</Link>
                </h5>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Directors;
