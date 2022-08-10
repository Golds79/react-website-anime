import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

function NavbarWatchlist() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div
            className="logo"
            title="Anime Selection - Website dedicated to the most influential anime movies and series of all time"
            onClick={closeMobileMenu}
          >
            <Link to="/" title="Anime Selection">
              <span className="hidden-text">Anime Selection</span>
            </Link>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/watchlist"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Watch List
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/watched"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Watched
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/add"
                className="nav-links btn-add"
                onClick={closeMobileMenu}
              >
                + Add
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/studio-ghibli"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Studio Ghibli
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/recommended-anime"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Recommended
              </Link>
            </li>
            <div className="navbar-social-icon">
              <Link to="/facebook">
                <i className="fa-brands fa-facebook"></i>
              </Link>
              <Link to="/twiiter">
                <i className="fa-brands fa-twitter"></i>
              </Link>
              <Link to="/instagram">
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default NavbarWatchlist;
