import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  // Submenu
  const ref = useRef();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isMenuOpen]);

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
            <li className="nav-item nav-menu-item" ref={ref}>
              <Link
                to=""
                className="nav-links submenu"
                onClick={() => setIsMenuOpen((oldState) => !oldState)}
              >
                Directors
              </Link>
              {isMenuOpen && (
                <ul className="nav-submenu">
                  <li className="nav-submenu-item">
                    <Link to="/isao-takahata">Isao Takahata</Link>
                  </li>
                  <li className="nav-submenu-item">
                    <Link to="/satoshi-kon" onClick={closeMobileMenu}>
                      Satoshi Kon
                    </Link>
                  </li>
                  <li className="nav-submenu-item">
                    <Link to="/makoto-shinkai" onClick={closeMobileMenu}>
                      Makoto Shinkai
                    </Link>
                  </li>
                  <li className="nav-submenu-item">
                    <Link to="/hayao-miyazaki" onClick={closeMobileMenu}>
                      Hayao Miyazaki
                    </Link>
                  </li>
                  <li className="nav-submenu-item">
                    <Link to="/naoko-yamada" onClick={closeMobileMenu}>
                      Naoko Yamada
                    </Link>
                  </li>
                  <li className="nav-submenu-item">
                    <Link to="/mamoru-hosoda" onClick={closeMobileMenu}>
                      Mamoru Hosoda
                    </Link>
                  </li>
                </ul>
              )}
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
                to="/"
                className="nav-links btn-add"
                onClick={closeMobileMenu}
              >
                + Add
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
export default Navbar;
