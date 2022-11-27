import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { ReactComponent as GitHubIcon } from '../images/github.svg';
import { ReactComponent as LinkedInIcon } from '../images/linkedin.svg';
import { ReactComponent as BarsIcon } from '../images/bars.svg';

import './Header.scss';
import StylePicker from './StylePicker';

const Header = () => {
  const [scroll, setScroll] = useState(window.scrollY);
  const [show, setShow] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', name: 'Home', offset: -100 },
    { id: 'about-section', name: 'About' },
    { id: 'jobs-section', name: 'Jobs' },
    { id: 'projects-section', name: 'Projects' },
    { id: 'contact-section', name: 'Contact' },
  ]

  const updateScroll = () => {
    setScroll(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  useEffect(() => {
    const sections = document.getElementsByTagName('section');

    for (const section of sections) {
      const sectionEnd = section.offsetTop + section.offsetHeight;
      if (scroll >= section.offsetTop && scroll < sectionEnd) {
        setActiveSection(section.id);
        break;
      }
    }
  }, [scroll]);

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
                {
                  sections.map(section => <li key={section.id}>
                    <Link
                      to={section.id}
                      className={activeSection === section.id ? 'active' : ''}
                      smooth
                      isDynamic
                      offset={section?.offset || 1}
                      onClick={() => setShow(false)}
                    >
                      {section.name}
                    </Link>
                  </li>)
                }
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
                {/* <li>
                  <Button className="header-contact-me" onClick={() => { window.open('mailto:evandj423@gmail.com') }}>Contact Me</Button>
                </li> */}
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