import React from 'react';

import './Home.scss';
import MainBannerWave from './MainBannerWave';
import Button from './Button';
import BannerRight from './BannerRight';

const Home = () => {

  return (
    <section id="home">
      <div className='main-banner'>
        <div className='container'>
          <div className='banner-left'>
            <h1>Evan Jones</h1>
            <div className='accent-line' />
            <p className='sub-title'>Full-Stack Web Developer</p>
            <Button onClick={() => { window.open('mailto:evandj423@gmail.com') }}>
              Contact Me
            </Button>
          </div>
          <BannerRight />
        </div>
        <MainBannerWave />
      </div>
    </section>
  );
}

export default Home;