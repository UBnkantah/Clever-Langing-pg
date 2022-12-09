import React from 'react'
import "./Want.css"
import {Button } from "semantic-ui-react"
import {motion} from "framer-motion"

const txtAnimate ={
    offScreen:{y:-100, opacity: 0},
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

const Want = () => {
  return (
    <motion.div className='want'
        initial={"offScreen"}
        whileInView={"onscreen"}
        viewport={{once:false, amount:1}}
        transition={{staggerChildren: 0.5}}
    >
        <motion.div className='details'>
            <motion.h1
            variants={txtAnimate}
            >
                Want to retain more customers?
            </motion.h1>
            <motion.p
            variants={txtAnimate}
            >
                Try the world's #1 Retention Cloud today and chum in it's backs
            </motion.p>
            <Button
            variants={txtAnimate}
            className='ui button wa-but' id="button">
                Get Stated
            </Button>
        </motion.div>
    </motion.div>
  )
}

export default Want