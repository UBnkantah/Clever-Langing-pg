import React from 'react'
import Frame from "../image/Frame.png"
import HghImg from "../image/Automation_HighPerformer.png"
import SecImg from "../image/Analytics_Leader.png"
import Mid from "../image/Analytics_Leader_Mid.png"
import FalImg from "../image/analytics_Leader_Leader.png"
import momentum from "../image/Analytics_MomentumLeader_Leader.png"
import { motion } from "framer-motion"
import "./Recog.css"

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

const Recog = () => {
  return (
    <motion.div 
        className='recog'
        initial={"offScreen"}
        whileInView={"onscreen"}
        viewport={{once:false, amount:1}}
        transition={{staggerChildren: 0.5}}
    >
        <motion.div className='details'>
            <motion.h1
            variants={txtAnimate}
            >Recognized by Real Customers as a Mobile Marketting & Personalized Leader</motion.h1>
            <motion.p
             variants={txtAnimate}
            >Rated highly by Q2 users with substanial Market Persence scene. CleverTap is recognised as a leader in the global fall 2022 GRID reports, across 7 categories</motion.p>
            <motion.a href="/"
             variants={txtAnimate}
            >Read more</motion.a>
            <motion.div className='img-div'>
                <motion.div
                 variants={txtAnimate}
                >
                    <img src={HghImg} alt="" />
                </motion.div>
                <motion.div
                 variants={txtAnimate}
                >
                    <img src={SecImg} alt="" />
                </motion.div>
                <motion.div
                 variants={txtAnimate}
                >
                    <img src={Mid} alt="" />
                </motion.div>
                <motion.div
                 variants={txtAnimate}
                >
                    <img src={FalImg} alt="" />
                </motion.div>
                <motion.div
                 variants={txtAnimate}
                >
                    <img src={momentum} alt="" />
                </motion.div>
            </motion.div>
        </motion.div>
        <motion.div className='image'
        variants={imgAnimate}
        >
            <img src={Frame} alt="" />
        </motion.div>
    </motion.div>
  )
}

export default Recog
