import React from 'react'
import CeoImg from "../image/ceo_engage_Image.png"
import {motion} from "framer-motion"
import "./CRMLead.css"


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

const CRMLead = () => {
  return (
    <motion.div className='crmLead'
      initial={"offScreen"}
      whileInView={"onscreen"}
      viewport={{once:false, amount:1}}
      transition={{staggerChildren: 0.5}}
    >
        <motion.div className='details'>
            <motion.p
            variants={txtAnimate}
            >
                CleverTap has played an intergral role in accelerating our marketing automation.helping us optimize our journeys leading to increased customer engagement
                
            </motion.p>
            <motion.p
            variants={txtAnimate}
            >Sahil Bhojwani CRM Lead, Namshi</motion.p>
        </motion.div>
        <motion.div
        variants={imgAnimate}
        className='img'>
            <img src={CeoImg} alt="" />
        </motion.div>
    </motion.div>
  )
}

export default CRMLead