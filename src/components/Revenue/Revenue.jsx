import React from 'react'
import DashImg from "../image/Dashboard_image.png"
import "./Revenue.css"
import { motion } from "framer-motion"

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

const Revenue = () => {
  return (
    <motion.div
      initial={"offScreen"}
      whileInView={"onscreen"}
      viewport={{once:false, amount:1}}
      transition={{staggerChildren: 0.5}}
      className='revenue'>
      <motion.div className='details'>
          <motion.p 
           variants={txtAnimate}
          className='built'>BUILT FOR CUSTOMER ENGAGEMENT & RETENTION</motion.p>
          <motion.h1
           variants={txtAnimate}
          >Revenue Growth Through Increased Customer Lifetime Value</motion.h1>
          <motion.p
           variants={txtAnimate}
          >Offering one of it's kind automated, scalable and secure ecosystem, that is all encompassing. CleverTap helps companies understand segment and engage users in real time using contest and power AI/ML models</motion.p>
      </motion.div>
      <motion.div
      variants={imgAnimate}
      className='img'>
          <motion.img src={DashImg} alt="" />
      </motion.div>
    </motion.div>
  )
}

export default Revenue
