import React from 'react'
import "./Footer.css"
import {motion} from "framer-motion"


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

const Footer = () => {
  return (
    <motion.div
    className='footer'
        initial={"offScreen"}
      whileInView={"onscreen"}
      viewport={{once:false, amount:1}}
      transition={{staggerChildren: 0.5}}
    >
        <motion.div
        variants={txtAnimate}
        >
            <h3>Product</h3>
            <ul>
                <li>Cross Champing Messaging</li>
                <li>Campaign Optimation</li>
                <li>Journey Segmentation</li>
                <li>Lifecycle Optimation</li>
                <li>Security and Compliance </li>
                <li>Pricing and Plans</li>
                <li>CleverTap for startups</li>
            </ul>
        </motion.div>
        <motion.div
        variants={txtAnimate}
        >
            <h3>Features</h3>
            <ul>
                <li>Push Notification</li>
                <li>Email Automation</li>
                <li>In App Messaging</li>
                <li>SMS Messaging</li>
                <li>Whatsapp</li>
                <li>Presentation</li>
                <li>A/B Testing</li>
            </ul>
        </motion.div>
        <motion.div
        variants={txtAnimate}
        >
            <h3>Sucesses</h3>
            <ul>
                <li>Customer SpotLight</li>
                <li>Case Studies</li>
            </ul>
        </motion.div>
        <motion.div
        variants={txtAnimate}
        >
            <h3>Resources </h3>
            <ul>
                <li>Blog</li>
                <li>Case Studies</li>
                <li>Webinar</li>
                <li>Videos and Podcast</li>
                <li>WhitePapers and Ebooks </li>
                <li>Guides </li>
                <li>Benchmark Report</li>
                <li>Podcast</li>
                <li>Intaractives Tools</li>
                <li>Demo Career</li>
                <li>Developer Documentation</li>
                <li>CleverTap Tech</li>
            </ul>
        </motion.div>
        <motion.div
        variants={txtAnimate}
        >
            <h3>Industries</h3>
            <ul>
                <li>Food Tech</li>
                <li>French</li>
                <li>Media & Entertainment</li>
                <li>Travel & Transportation</li>
                <li>Ecommerce</li>
                <li>Subscription</li>
            </ul>
        </motion.div>
        <motion.div
        variants={txtAnimate}
        >
            <h3>Company</h3>
            <ul>
                <li>About Us</li>
                <li>Partners</li>
                <li>Press & Media</li>
                <li>Careers</li>
                <li>CleverTap4Good</li>
                <li>Contact Us</li>
            </ul>
        </motion.div>
    </motion.div>
  )
}

export default Footer

 


