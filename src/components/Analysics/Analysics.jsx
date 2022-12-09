import React from 'react'
import { ana } from '../AnalysicsDB/AnalysicsDB'
import { motion } from "framer-motion"
import "./Analysics.css"

const imgAnimate ={
    offScreen:{x: -100, opacity: 0},
    onscreen:{
      x:0,
      opacity: 1,
      rotate: [0, 10, 0],
      transition: {type: "string",
      bounce: 0.5,
      duration: 0.6
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
        duration: 0.8
      }
  
    }
  }

const Analysics = () => {
  return (
    <motion.div className='analysics'
    initial={"offScreen"}
      whileInView={"onscreen"}
      viewport={{once:false, amount:1}}
      transition={{staggerChildren: 0.5}}
    >
        {ana.map((ant) => {
            return(
                <motion.div className='sub-analysics' key={ant.id}>
                    <motion.div
                    variants={imgAnimate}
                    className='img'>
                        <img src={ant.img} alt="" />
                    </motion.div>
                    <motion.div className='details'>
                        <motion.h3
                        variants={txtAnimate}
                        >{ant.title}</motion.h3>
                        <motion.p
                        variants={txtAnimate}
                        >{ant.text}</motion.p>
                        <motion.a href="/"
                        variants={txtAnimate}
                        >Learn more</motion.a>
                    </motion.div>
                </motion.div>
            )
        })}
        
    </motion.div>
  )
}

export default Analysics