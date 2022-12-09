import React from 'react'
import EngImg from "../image/Omnichannel_Image.png"
import "./Engage.css"


const Engage = () => {
  return (
    <div 
      className='engage'>
        <div className='img'>
            <img src={EngImg} alt="" />
        </div>
        <div className='details'>
            <p>OMNICHANNEL ENGAGEMENT</p>
            <h1>Engage users across messaging touchpoints</h1>
            <p>Deliver the ultimate omnichannel brand experience. Whether your users live inside your app or need a push to come back , our suite of messaging and engagement tools has you come.</p>
        </div>
    </div>
  )
}

export default Engage
