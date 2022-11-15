import React, { useEffect, useState } from 'react';

import './Header.scss';

const Header = () => {

  const [scroll, setScroll] = useState(window.scrollY);

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
      <header>
        <div className='container'>
          <div className='flex'>
            <div>
              <a href='/'>jonesevan.com</a>
            </div>
            <div className='navigation'>
              <ul>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Work</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;