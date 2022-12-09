import React from 'react'
import { res } from '../ResourcesDB/ResourcesDB'
import {motion} from "framer-motion"
import "./Resources.css"

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


const Resources = () => {
  return (
    <motion.div className='resources'
        initial={"offScreen"}
        whileInView={"onscreen"}
        viewport={{once:false, amount:1}}
        transition={{staggerChildren: 0.5}}
    >
        <motion.h1
            variants={txtAnimate}
        >Resources that help you grow</motion.h1>
        <motion.div className='sub_resources'>
            {res.map((rest) => {
                return(
                    <motion.div
                    variants={txtAnimate}
                    className='details' key={rest.id}>
                        <img src={rest.image} alt="" />
                        <motion.div className='content'>
                            <motion.h4
                            variants={txtAnimate}
                            >{rest.top}</motion.h4>
                            <motion.h5
                            variants={txtAnimate}
                            >{rest.header}</motion.h5>
                            <motion.a
                            variants={txtAnimate}
                            href="/">{rest.link}</motion.a>
                        </motion.div>
                    </motion.div>
                )
            })}
            
            

        </motion.div>
    </motion.div>
  )
}

export default Resources
