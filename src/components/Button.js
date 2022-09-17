import React, { Children } from 'react';

const Button = ({text, link, children}) => {

  return (
    <button>
      {children}
    </button>
  );
}

export default Button;