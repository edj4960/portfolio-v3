import React from 'react';

import './MainBannerWave.scss';

const MainBannerWave = () => {

  return (
    <div className='main-banner__wave-wrapper tablet--hidden mobile--hidden'>
      <svg role="img" className="main-banner__wave" width="100%" height="400px" fill="none" aria-labelledby="main-banner-wave-title" focusable="false"><title id="main-banner-wave-title">Main banner animation wave</title>
        <path
          fill="white"
          d="M 1653 309.001 C 1415.88 440.366 1147.33 369.309 1016 309.001 C 769 195.581 423.8 185.5 1 281.5 V 421 H 3560 V 133.501 C 3138 15.0014 2794.5 -22.8922 2506 15.0014 C 2053 74.5014 1940 150.001 1653 309.001 Z"
        >
          <animate
            repeatCount="indefinite"
            fill="freeze"
            attributeName="d"
            dur="20s"
            values="
              M 1653 309.001 C 1415.88 440.366 1147.33 369.309 1016 309.001 C 769 195.581 423.8 185.5 1 281.5 V 421 H 3560 V 133.501 C 3138 15.0014 2794.5 -22.8922 2506 15.0014 C 2053 74.5014 1940 150.001 1653 309.001 Z;
              M1668.5 257.999C1427 342.999 1285 364.499 993.5 342.999C596.562 313.722 507 232.999 1 281.633V421.133H3560V206C3106 -33.4996 2940 -24.5 2495.5 40.9994C2043.49 107.605 1977.99 149.068 1668.5 257.999Z;
              M 1653 309.001 C 1415.88 440.366 1147.33 369.309 1016 309.001 C 769 195.581 423.8 185.5 1 281.5 V 421 H 3560 V 133.501 C 3138 15.0014 2794.5 -22.8922 2506 15.0014 C 2053 74.5014 1940 150.001 1653 309.001 Z;
            "
          >
          </animate>
        </path>
      </svg>
    </div>
  );
}

export default MainBannerWave;