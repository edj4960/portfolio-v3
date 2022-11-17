import React from 'react';
import SectionHeader from './SectionHeader';

import './About.scss';

const About = () => {

  return (
    <section id="about-section">
      <div className='container'>
        <SectionHeader>Hi, I'm Evan</SectionHeader>
        <div className='section-text'>
          <p>
            I'm a Web Developer specializing in <b>React</b> and <b>NodeJS</b>.
            My interest in Web Development started 7 years ago when I created a WordPress site to commemorate all the great memories from freshman year of College
            (mostly consisting of funny videos and quotes from roommates). This led me to want to learn more about how the web worked and got me into learning HTML and CSS.
          </p>
          <p>
            Fast-forward to today and I have had the priviledge to work at a college housing office, lead development at multiple start-ups, and even do some freelance work.
            My main focus these days is creating excellent digital experiences and maintaining existing infastructures for NewAge's eccommerce platform.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
        </div>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Firebase</li>
          <li>Vue</li>
          <li>PHP</li>
        </ul>
      </div>
    </section>
  )
}

export default About;