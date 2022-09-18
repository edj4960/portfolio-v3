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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae arcu fringilla, porta metus at, dignissim nulla. Mauris molestie leo eget fermentum hendrerit. Sed non ipsum cursus, gravida dui sed, vulputate nunc. Fusce accumsan justo ac lectus tristique, a varius lacus tempus.
          </p>
          <p>
            Vivamus vitae velit dignissim, mattis nibh id, aliquam dui. Mauris vehicula ante et dui fringilla commodo. Duis ligula diam, bibendum sit amet tellus ac, posuere porttitor velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt eu nibh id varius.
          </p>
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