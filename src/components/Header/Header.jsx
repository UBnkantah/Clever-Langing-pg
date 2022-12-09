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
import { motion } from 'framer-motion'
import "./Header.css"

const imgAnimate ={
  offScreen:{x: 100, opacity: 0},
  onscreen:{
    x:0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: {type: "string",
    bounce: 0.5,
    duration: 1
  }
  }
}

const txtAnimate ={
  offScreen:{y:100, opacity: 0},
  onscreen:{
    y:0,
    opacity: 1,
    transition: {
      type: "string",
      bounce: 0.4,
      duration: 1
    }

  }
}


const Header = () => {
  return (
    <motion.div
     className='header'
      initial={"offScreen"}
      whileInView={"onscreen"}
      viewport={{once:false, amount:1}}
      transition={{staggerChildren: 0.5}}
     >
      <motion.div className='details'>
        <motion.h1
        variants={txtAnimate}
        >Making Mobile Retention a piece of</motion.h1>
        <motion.div
        
        >
          <img src={Chee} alt="chee" />
        </motion.div>
        <motion.p
        variants={txtAnimate}
        >For app first companies, CleverTap is the Platform that helps personalize and optimize all customer touch points, both inside and otside of the app</motion.p>
        <motion.div 
        variants={txtAnimate}
        className='button'>
          <Button className='ui button'>Get Started</Button>
        </motion.div>
        <motion.div className='header-logo'>
          <motion.div>
            <motion.img 
            variants={txtAnimate}
            src={swiggy} alt="" />
          </motion.div>
          <motion.div
          variants={txtAnimate}
          >
            <img src={DreamImg} alt="" />
          </motion.div>
          <motion.div
          variants={txtAnimate}
          >
            <img src={blinkitLogo} alt="" />
          </motion.div>
          <motion.div
          variants={txtAnimate}
          >
            <img src={Dominos} alt="" />
          </motion.div>
          <motion.div
          variants={txtAnimate}
          >
            <img src={Pharmeasy} alt="" />
          </motion.div>
          <motion.div
          variants={txtAnimate}
          >
            <img src={SonyLIV} alt="" />
          </motion.div>
          
        </motion.div>
      </motion.div>
      <motion.div 
      variants={imgAnimate}
      className='header-img'>
        <img src={Man} alt="" />
      </motion.div>
    </motion.div>
  )
}

export default Header
