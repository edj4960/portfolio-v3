import React, { useEffect, useState } from 'react';
import styles from '../data/styles';
import { useCookies } from 'react-cookie';

import './StylePicker.scss';

const StylePicker = () => {
  const [cookies, setCookie] = useCookies(['styleIdx']);
  const [orderedStyles, setOrderedStyles] = useState([...styles]);
  
  const isValidIdx = (_idx) => {
    if ((!_idx && _idx !== 0) || !Number.isInteger(parseInt(_idx)) || _idx > styles.length) {
      return false;
    }
    return true;
  }

  const getRandomStyle = () => {
    return Math.floor(Math.random() * (styles.length-1));
  }

  const [idx, setIdx] = useState(isValidIdx(cookies?.styleIdx) ? parseInt(cookies?.styleIdx) : getRandomStyle());

  useEffect(() => {
    if (!isValidIdx(idx)) {
      let newStyleIdx = getRandomStyle();
      setIdx(newStyleIdx);
      setCookie('styleIdx', newStyleIdx);
      return;
    }

    const appStyle = document.getElementById('App').style;
    for (const key in styles[idx]) {
      appStyle.setProperty(`--${key}`, styles[idx][key]);
    }

    let newStylesArr = [...styles];
    for (let i = 0; i < idx; i++) {
      newStylesArr.push(newStylesArr.shift());
    }
    setOrderedStyles(newStylesArr);
  }, [idx, setCookie]);

  const changeStyle = () => {
    let newIdx = 0;

    if (idx < styles.length - 1) {
      newIdx = idx + 1;
    }

    setIdx(newIdx);
    setCookie('styleIdx', newIdx);
  }

  return (
    <div id="style-picker" onClick={changeStyle}>
      <div className='hint-circle' />
      {
        orderedStyles.slice(0,5).map((style, idx) => {
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