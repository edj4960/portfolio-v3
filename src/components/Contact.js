import React from 'react';
import SectionHeader from './SectionHeader';
import Button from './Button';
import { ReactComponent as ContactIcon } from '../images/contact.svg';

import './Contact.scss';

const Contact = () => {

  return (
    <div id="contact-section">
      <div className='container'>
        <SectionHeader>What's Next?</SectionHeader>

        <div className='contact-content'>
          <ContactIcon />
          <div className='contact-text'>
            <h3>Let's get to work!</h3>
            <p>
              Looking for a developer to build something amazing?
              Or just want to say hi?
              Either way my inbox is always open!
            </p>

            <Button onClick={() => { window.open('mailto:evandj423@gmail.com') }}>
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;