import React from 'react'
import linkedInLogo from "../image/mdi_linkedin.png"
import twitterLogo from "../image/mdi_twitter.png"
import instaLogo from "../image/mdi_instagram.png"
import FBLogo from "../image/uil_facebook.png"
import cleLogo from "../image/footer-logo.png"
import "./CleverFooter.css"

const CleverFooter = () => {
  return (
    <div className='main'>
        <div className='cleverFooter'>
            <div className='sub-clever'>
                <img src={cleLogo} alt="" />
            </div>
            <div className='sub-clever'>
                <img src={FBLogo} alt="" />
                <img src={twitterLogo} alt="" />
                <img src={instaLogo} alt="" />
                <img src={linkedInLogo} alt="" />
            </div>
            <div className='sub-clever'>
                <button><a href="/">Contact Us</a></button>
            </div>
        </div>
        <hr className='hr' style={{margin: "0 50px"}}/>
    </div>
    
  )
}

export default CleverFooter
