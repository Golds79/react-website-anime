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
                    <Link to="/soundtracks">Soundtracks</Link>
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
          </div>
          <div className="copyright-right">
            <ul>
              <Link to="/">Home</Link>
              <li>
                <Link to="/terms">Terms</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy</Link>
              </li>
              <li>
                <Link to="/policy">Policy</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
