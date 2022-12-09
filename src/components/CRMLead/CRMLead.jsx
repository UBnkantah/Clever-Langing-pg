import React from 'react'
import CeoImg from "../image/ceo_engage_Image.png"
import "./CRMLead.css"



const CRMLead = () => {
  return (
    <div className='crmLead'>
        <div className='details'>
            <p >
                CleverTap has played an intergral role in accelerating our marketing automation.helping us optimize our journeys leading to increased customer engagement
                
            </p>
            <p>Sahil Bhojwani CRM Lead, Namshi</p>
        </div>
        <div className='img'>
            <img src={CeoImg} alt="" />
        </div>
    </div>
  )
}

export default CRMLead