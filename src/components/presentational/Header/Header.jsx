import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo';
import Wrapper from '../Wrapper';
import './Header.css';

const Header = () => (
  <Wrapper>
    <header className="idea-header">
      <Logo title="Ideaware" />
      <nav className="idea-header__nav">
        <h2 hidden>Navigation Menu</h2>
        <ul className="idea-header__list">
          <li className="idea-header__list-item">
            <NavLink to="/work" className="idea-header__link">Work</NavLink>
          </li>
          <li className="idea-header__list-item">
            <NavLink to="/about-us" className="idea-header__link">About us</NavLink>
          </li>
          <li className="idea-header__list-item">
            <NavLink to="/contact" className="idea-header__link">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  </Wrapper>
);

export default Header;
