import React from 'react'
import { BsFacebook, BsLinkedin, BsTwitter, BsGithub, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='footer'>
        <BsFacebook className='reactIcons'/>
        <BsLinkedin className='reactIcons'/>
        <BsTwitter className='reactIcons'/>
        <BsInstagram className='reactIcons'/>
        <BsGithub className='reactIcons'/>
    </div>
  )
}

export default Footer