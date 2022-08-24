import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../media/images/logo.webp';
import '../css/Footer.css';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

function Footer() {
  return (
    <footer>
      <div className="footer-area">
        <div className="footer-section">
          <div className="footer-container">
            <div className="footer-item-left">
              <div className="footer-logo">
                <img src={Logo} className="logo-img-footer" alt="Logo" />
              </div>
              <div className="footer-text">
                <p>
                  Anime Selection is a website dedicated to the most influential
                  anime movies and series of all time.
                </p>
              </div>
              <div className="footer-social-icon">
                <span>Follow us</span>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a target="_blank" rel="noreferrer" href="https://twitter.com">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="footer-item-center">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/isao-takahata">Isao Takahata</Link>
                  </li>
                  <li>
                    <Link to="/satoshi-kon">Satoshi Kon</Link>
                  </li>
                  <li>
                    <Link to="/makoto-shinkai">Makoto Shinkai</Link>
                  </li>
                  <li>
                    <Link to="/studio-ghibli">Studio Ghibli</Link>
                  </li>
                  <li>
                    <Link to="/recommended-anime">Recommended</Link>
                  </li>
                  <li>
                    <a
                      href="https://www.jerrygoldsmithlegacy.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Soundtracks
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-item-right">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text">
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <Stack direction="row" spacing={2}>
                      <Button
                        variant="contained"
                        endIcon={<SendIcon />}
                        id="btn-send"
                      >
                        Send
                      </Button>
                    </Stack>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="copyright-container">
          <div className="copyright-left">
            <p>Copyright © 2022, All Right Reserved Anime Selection</p>
            <br />
            <p>
              Web Design by &nbsp;
              <a
                href="https://www.xtrawebagency.com"
                target="_blank"
                rel="noreferrer"
              >
                Xtraweb Agency
              </a>
            </p>
          </div>
          <div className="copyright-right">
            <ul>
              <Link to="/">Home</Link>
              <li>
                <Link to="/">Terms</Link>
              </li>
              <li>
                <Link to="/">Privacy</Link>
              </li>
              <li>
                <Link to="/">Policy</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
