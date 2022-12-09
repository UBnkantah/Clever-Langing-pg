import React from 'react'
import powerImg from "../image/girl_engage_Image.png"
import "./Power.css"



const Power = () => {
  return (
    <div className='power'>
        <div className='details'>
            <h1
            >Power of real-time first-party user data</h1>
            <p
            >CleverTap collects rich free-party data and activity intend across different devices and operating systems, so you can connect with users in the moments that most</p>
        </div>
        <div className='img'>
            <img src={powerImg} alt="" />
        </div>
    </div>
  )
}

export default Power