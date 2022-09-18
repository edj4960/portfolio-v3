import React from 'react';

import './SectionHeader.scss';

const SectionHeader = ({ children }) => {

  return (
    <div className='section-header'>
      <h2 className='header-content'>
        {children}
      </h2>
    </div>
  )
}

export default SectionHeader;