import React from 'react'
import { infra } from '../InfraDB/InfraDB'
import { motion } from "framer-motion"
import "./Infra.css"

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

const Infra = () => {
  return (
    <motion.div 
      className='infra'
      initial={"offScreen"}
      whileInView={"onscreen"}
      viewport={{once:false, amount:1}}
      transition={{staggerChildren: 0.5}}
    >
      <motion.div className='details'>
        <motion.h1
        variants={txtAnimate}
        >Infratructure built for scale, speed and security</motion.h1>
        <motion.p
        variants={txtAnimate} 
        >Powered by TessaractDB for world's first purpose-built database for user engagement and retention, delivering incredible performance lightning-fast data processing and unlimited secure storage capacity</motion.p>
      </motion.div>
      <motion.div className='data'>
        {infra.map((item) => {
            return(
                <motion.div className='items' key={item.id}>
                    <motion.h2
                    variants={txtAnimate}
                    >{item.amount}</motion.h2>
                    <motion.p
                    variants={txtAnimate}
                    >{item.text}</motion.p>
                </motion.div>
            )
        })}
        
      </motion.div>
    </motion.div>
  )
}

export default Infra
