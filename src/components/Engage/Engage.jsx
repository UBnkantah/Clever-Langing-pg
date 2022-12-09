import React from 'react'
import EngImg from "../image/Omnichannel_Image.png"
import { motion } from "framer-motion"
import "./Engage.css"

const imgAnimate ={
  offScreen:{x: -100, opacity: 0},
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


const Engage = () => {
  return (
    <motion.div
      initial={"offScreen"}
      whileInView={"onscreen"}
      viewport={{once:false, amount:1}}
      transition={{staggerChildren: 0.5}}
      className='engage'
    >
        <motion.div 
        variants={imgAnimate}
        className='img'>
            <img src={EngImg} alt="" />
        </motion.div>
        <motion.div className='details'>
            <motion.p
            variants={txtAnimate}
            >OMNICHANNEL ENGAGEMENT</motion.p>
            <motion.h1
            variants={txtAnimate}
            >Engage users across messaging touchpoints</motion.h1>
            <motion.p
            variants={txtAnimate}
            >Deliver the ultimate omnichannel brand experience. Whether your users live inside your app or need a push to come back , our suite of messaging and engagement tools has you come.</motion.p>
        </motion.div>
    </motion.div>
  )
}

export default Engage
