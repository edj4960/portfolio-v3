import React, { useEffect, useState } from 'react';
import './App.scss';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Jobs from './components/Jobs';
import Projects from './components/Projects';
import { ModalProvider } from './providers/ModalProvider';
import { ReactComponent as ArrowIcon } from './images/arrow.svg';
import { ReactComponent as ArrowIconSmall } from './images/arrowsmall.svg';
import { CookiesProvider, useCookies } from 'react-cookie';

function App() {
  const [cookies] = useCookies(['changedStyle']);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const onResize = () => {
    setScreenWidth(window.innerWidth);
  }

  useEffect(() => {
    setTimeout(() => {
      document.getElementById('App').classList.remove('preload');
    }, 500);

    window.addEventListener('resize', onResize);
  }, []);
  
  return (
    <div id="App" className='preload'>
      <CookiesProvider>
        <ModalProvider>
          <Header />

          <div id='user-guide' style={{opacity: cookies.changedStyle ? 0 : 1}}>
            {
              screenWidth > 500 ?
                <ArrowIcon className='arrow-icon' /> :
                <ArrowIconSmall className='arrow-icon' />
            }
            <p className='guide-text'>
              Click the circle to change the style
            </p>
          </div>

          <Home />
          <About />
          <Jobs />
          <Projects />
          <div className='footer'>
            <a href="https://github.com/edj4960/portfolio-v3" target="_blank" rel="noreferrer">
              Designed & Built by Evan Jones
            </a>
          </div>
        </ModalProvider>
      </CookiesProvider>
    </div>
  );
}

export default App;
