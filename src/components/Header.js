import React from 'react';

import './Header.scss';

const Header = () => {

  return (
    <div id='sticky-nav'>
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