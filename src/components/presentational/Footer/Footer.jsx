import React from 'react';
import './Footer.css';
import facebookButton from '../../../assets/images/facebook-button.png';
import twitterButton from '../../../assets/images/twitter-button.png';
import youtubeButton from '../../../assets/images/youtube-button.png';

const Footer = () => (
  <footer className="idea-footer">
    <h2 hidden>Footer</h2>
    <div>
      <div className="idea-footer__contact">
        <h2 className="idea-footer__title">Contact Us</h2>
        <p><a href="mailto:ideaware@contact.us" className="idea-footer__email">ideaware@ideaware.co</a></p>
      </div>
      <ul className="idea-footer__list">
        <li className="idea-footer__list-item">
          <h3 hidden>Facebook</h3>
          <a href="https://www.facebook.com/ideaware/">
            <img src={facebookButton} alt="Facebook Ideaware" />
          </a>
        </li>
        <li className="idea-footer__list-item">
          <h3 hidden>Twitter</h3>
          <a href="https://twitter.com/ideawareco">
            <img src={twitterButton} alt="Twitter Ideaware" />
          </a>
        </li>
        <li className="idea-footer__list-item">
          <h3 hidden>Twitter</h3>
          <a href="https://www.youtube.com/ideaware">
            <img src={youtubeButton} alt="Youtube Ideaware" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
