import React from 'react'
import DashImg from "../image/Dashboard_image.png"
import "./Revenue.css"


const Revenue = () => {
  return (
    <div
      className='revenue'>
      <div className='details'>
          <p 
          className='built'>BUILT FOR CUSTOMER ENGAGEMENT & RETENTION</p>
          <h1
          >Revenue Growth Through Increased Customer Lifetime Value</h1>
          <p
          >Offering one of it's kind automated, scalable and secure ecosystem, that is all encompassing. CleverTap helps companies understand segment and engage users in real time using contest and power AI/ML models</p>
      </div>
      <div
      className='img'>
          <img src={DashImg} alt="" />
      </div>
    </div>
  )
}

export default Revenue
