import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function NavbarSingle() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <h1
            className="logo"
            title="Anime Selection - Website dedicated to the most influential anime movies and series of all time"
            onClick={closeMobileMenu}
          >
            <Link to="/" title="Anime Selection">
              <span className="hidden-text">Anime Selection</span>
            </Link>
          </h1>
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
                to="/isao-takahata"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Isao Takahata
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/satoshi-kon"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Satoshi Kon
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/makoto-shinkai"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Makoto Shinkai
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
                to="/recommended"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Recommended
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
            <Box sx={{ '& button': { m: 1 } }}>
              <div className="btn-menu">
                <Button variant="outlined" size="large" id="btn-navbar">
                  Sign Up
                </Button>
              </div>
            </Box>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default NavbarSingle;
