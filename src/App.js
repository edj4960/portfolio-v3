import React, { useEffect } from 'react';
import './App.scss';
import styles from './data/styles';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Jobs from './components/Jobs';
import Projects from './components/Projects';
import Modal from './components/Modal';
import { ModalProvider } from './providers/ModalProvider';

function App() {
  useEffect(() => {
    const appStyle = document.getElementById('App').style;
    const idx = 1;

    for (const key in styles[idx]) {
      appStyle.setProperty(`--${key}`, styles[idx][key]);
    }

    // document.addEventListener('click', () => {
    // });
  }, []);

  return (
    <div id="App">
      <ModalProvider>
        <Header />
        <Home />
        <About />
        <Jobs />
        <Projects />
        <Modal />
      </ModalProvider>
    </div>
  );
}

export default App;
