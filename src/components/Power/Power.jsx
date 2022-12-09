import React from 'react'
import powerImg from "../image/girl_engage_Image.png"
import { motion } from "framer-motion"
import "./Power.css"

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

const Power = () => {
  return (
    <motion.div className='power'
      initial={"offScreen"}
      whileInView={"onscreen"}
      viewport={{once:false, amount:1}}
      transition={{staggerChildren: 0.5}}
    >
        <motion.div className='details'>
            <motion.h1
            variants={txtAnimate}
            >Power of real-time first-party user data</motion.h1>
            <motion.p
            variants={txtAnimate}
            >CleverTap collects rich free-party data and activity intend across different devices and operating systems, so you can connect with users in the moments that most</motion.p>
        </motion.div>
        <motion.div
        variants={imgAnimate}
        className='img'>
            <img src={powerImg} alt="" />
        </motion.div>
    </motion.div>
  )
}

export default Power