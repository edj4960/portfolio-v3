import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import Button from './Button';
import { ReactComponent as GitHubIcon } from '../images/github.svg';
import { ReactComponent as LinkedInIcon } from '../images/linkedin.svg';
import { ReactComponent as BarsIcon } from '../images/bars.svg';

import './Header.scss';
import StylePicker from './StylePicker';

const Header = () => {
  const [scroll, setScroll] = useState(window.scrollY);
  const [show, setShow] = useState(false);

  const updateScroll = () => {
    setScroll(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <div
      id='sticky-nav'
      style={{
        top: scroll < 500 ? `-100px` : '0px',
        transition: scroll > 300 ? 'top .3s' : '',
        boxShadow: scroll > 300 ? '0px 5px 10px rgba(0,0,0,.2)' : ''
      }}
    >
      <StylePicker />
      <div
        className={`overlay-mask ${show ? 'show' : ''}`}
        onClick={() => setShow(false)}
      />
      <header>
        <div className='container'>
          <div className='flex'>
            <div>
              <a href='/' className='logo'>jonesevan.com</a>
            </div>
            <div className={`navigation ${show ? 'show' : ''}`}>
              <ul>
                <li>
                  <Link to="home" smooth spy={true} offset={-100} onClick={() => setShow(false)}>Home</Link>
                </li>
                <li>
                  <Link to="about-section" smooth spy={true} offset={-0} onClick={() => setShow(false)}>About</Link>
                </li>
                <li>
                  <Link to="jobs-section" smooth spy={true} offset={-0} onClick={() => setShow(false)}>Work</Link>
                </li>
                <li>
                  <Link to="projects-section" smooth spy={true} offset={-0} onClick={() => setShow(false)}>Projects</Link>
                </li>
                <li>
                  <a href="https://github.com/edj4960" target="_blank" rel="noreferrer" onClick={() => setShow(false)}>
                    <GitHubIcon />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/evan-d-jones/" target="_blank" rel="noreferrer" onClick={() => setShow(false)}>
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <Button className="header-contact-me" onClick={() => { window.open('mailto:evandj423@gmail.com') }}>Contact Me</Button>
                </li>
              </ul>
            </div>
            <div className='mobile-nav-toggle' onClick={() => setShow(true)}>
              <BarsIcon />
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;