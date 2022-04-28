import React from 'react'
import image from './images/Rectangle 90.png'

const Main = () => {
  return (
    <div className='main'>
        <img src={image} />
        <h1>Laura Smith</h1>
        <p className='frontend'>Frontend Developer</p>
        <p className='websiteLink'><small>laurasmith.website</small></p>
        <div className='buttons'>
            <div className='email'>
                <p>Email</p>
            </div>
            <div className='LinkedIn'>
                <p>LinkedIn</p>
            </div>
        </div>
        <div className='content'>
            <h3>About</h3>
            <p>
            I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
            </p>
            <h3>Interests</h3>
            <p>
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
        </div>
        
    </div>
  )
}

export default Main