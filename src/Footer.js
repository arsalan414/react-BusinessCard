import React from 'react'
import twitter from './images/t.png'
import fb from './images/fb.png'
import ig from './images/ig.png'
import gh from './images/gh.png'
import li from './images/li.png'

const Footer = () => {
  return (
    <div className='footer'>
        <img src={twitter} />
        <img src={fb} />
        <img src={ig} />
        <img src={gh} />
    </div>
  )
}

export default Footer