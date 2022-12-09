import React from 'react'
import blinkitLogo from "../image/Blinkit_black_logo.png"
import swiggy from "../image/Swiggy_black_logo.png"
import Chee from "../image/chee.png"
import Dominos from "../image/Dominos_black_logo.png"
import DreamImg from "../image/Dream11_black_logo.png"
import Pharmeasy from "../image/Pharmeasy_black_logo.png"
import SonyLIV from "../image/SonyLIV_black_logo.png"
import Man from "../image/HP_Feature_img.png"
import { Button } from 'semantic-ui-react'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
      <div className='details'>
        <h1>Making Mobile Retention a piece of</h1>
        <div>
          <img src={Chee} alt="chee" />
        </div>
        <p>For app first companies, CleverTap is the Platform that helps personalize and optimize all customer touch points, both inside and otside of the app</p>
        <div 
        className='button'>
          <Button className='ui button'>Get Started</Button>
        </div>
        <div className='header-logo'>
          <div>
            <img src={swiggy} alt="" />
          </div>
          <div>
            <img src={DreamImg} alt="" />
          </div>
          <div>
            <img src={blinkitLogo} alt="" />
          </div>
          <div>
            <img src={Dominos} alt="" />
          </div>
          <div>
            <img src={Pharmeasy} alt="" />
          </div>
          <div>
            <img src={SonyLIV} alt="" />
          </div>
          
        </div>
      </div>
      <div className='header-img'>
        <img src={Man} alt="" />
      </div>
    </div>
  )
}

export default Header
