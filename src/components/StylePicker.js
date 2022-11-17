import React, { useEffect, useState } from 'react';
import styles from '../data/styles';

import './StylePicker.scss';

const StylePicker = () => {
  const [orderedStyles, setOrderedStyles] = useState([...styles]);

  useEffect(() => {
    const appStyle = document.getElementById('App').style;
    for (const key in orderedStyles[0]) {
      appStyle.setProperty(`--${key}`, orderedStyles[0][key]);
    }
  }, [orderedStyles]);

  const changeStyle = () => {
    document.cookie = "changedStyle=true";
    let newStylesArr = [...orderedStyles];
    newStylesArr.push(newStylesArr.shift());
    setOrderedStyles(newStylesArr);
  }

  return (
    <div id="style-picker" onClick={changeStyle}>
      <div className='hint-circle' />
      {
        orderedStyles.map((style, idx) => {
          let step = 90 / styles.length 
          let radius = 90 - (step * idx) + (idx * 4);
          return (
            <div
              key={idx}
              className='style-circle'
              style={{
                backgroundColor: style.main,
                borderColor: style.dark,
                width: radius*2,
                height: radius*2,
                top: -radius,
                left: -radius
              }}
            />
          )
        })
      }
    </div>
  )
}

export default StylePicker;