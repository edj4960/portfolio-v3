import React from 'react';

const Button = ({style, className, children, onClick}) => {

  return (
    <button style={style} className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;