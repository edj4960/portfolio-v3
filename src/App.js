import React, { useEffect } from 'react';
import './App.scss';
import styles from './styles';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Jobs from './components/Jobs';

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
      <Header />
      <Home />
      <About />
      <Jobs />
    
    </div>
  );
}

export default App;
