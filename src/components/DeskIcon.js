import React from 'react';


const CoffeeSteam = ({id, x=0, y=0, begin=0}) => {

  return (
    <path
      id={id}
      d="M273.809 96C273.809 96 264.619 83.3713 273.809 73.4356C283 63.5 278.258 53 278.258 53"
      stroke="#076377"
      strokeWidth="10"
      strokeLinecap="round"
      opacity="0"
      transform={`translate(${x},${y})`}
    >
      <animateTransform
        attributeName='transform'
        attributeType="XML"
        type="translate"
        from={`${x} ${y+5}`}
        to={`${x} ${y-10}`}
        dur="6s"
        repeatCount="indefinite"
        begin={begin}

      />
      <animate
        repeatCount="indefinite"
        fill="remove"
        attributeName='opacity'
        begin={begin}
        dur="6s"
        values="0;0;0;.2;.3;.3;0"
      />
    </path>
  )
}

const DeskIcon = ({ className }) => {

  return (
    <div className={className}>
      <svg width="367" height="207" viewBox="0 0 367 207" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle className='svg-fill-accent' cx="274.5" cy="116.5" r="89.5" fillOpacity="0.37" />
        <path className='svg-stroke' d="M357 179H10C7.23858 179 5 181.239 5 184V197C5 199.761 7.23858 202 10 202H357C359.761 202 362 199.761 362 197V184C362 181.239 359.761 179 357 179Z" fill="white" strokeWidth="10" />
        <path className='svg-stroke' d="M313 117H263C260.239 117 258 119.239 258 122V157.75C258 184.238 318 185.257 318 157.75V122C318 119.239 315.761 117 313 117Z" fill="white" strokeWidth="10" />
        <path className='svg-stroke' d="M318 129H337.434C340.196 129 342.524 131.235 342.76 133.986C343.554 143.21 343.882 155 318 155" strokeWidth="10" />
        <path className='svg-stroke' d="M228 5H29C26.2386 5 24 7.23858 24 10V136.599C24 144 30 151 37.9333 151H215.583C224.043 151 233 143.551 233 136.599V10C233 7.23858 230.761 5 228 5Z" fill="white" strokeWidth="10" />
        <path className='svg-stroke' d="M23 126H232" strokeWidth="10" />
        
        <CoffeeSteam y={5} />
        <CoffeeSteam id={'steam2'} x={22} begin={'1s;steam2.end+1s'}  />
        
        <path className='svg-stroke' d="M129 154L129 172"  strokeWidth="13" strokeLinecap="round" />
        <line className='svg-stroke' x1="52" y1="81" x2="78" y2="81" strokeWidth="10" strokeLinecap="round" />
        <line className='svg-stroke' x1="52" y1="61" x2="68" y2="61" strokeWidth="10" strokeLinecap="round" />
        <line className='svg-stroke' x1="84" y1="61" x2="164" y2="61"  strokeWidth="10" strokeLinecap="round" />
        <line className='svg-stroke' x1="144" y1="81" x2="187" y2="81"  strokeWidth="10" strokeLinecap="round" />
        <line className='svg-stroke' x1="94" y1="81" x2="127" y2="81" strokeWidth="10" strokeLinecap="round" />
        <line className='svg-stroke' x1="52" y1="40" x2="88" y2="40" strokeWidth="10" strokeLinecap="round" />
        <line className='svg-stroke' x1="105" y1="40" x2="164" y2="40" strokeWidth="10" strokeLinecap="round" />
      </svg>
    </div>
  )
}

export default DeskIcon;