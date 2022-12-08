import React from 'react'
import Frame from "../image/Frame.png"
import HghImg from "../image/Automation_HighPerformer.png"
import SecImg from "../image/Analytics_Leader.png"
import Mid from "../image/Analytics_Leader_Mid.png"
import FalImg from "../image/analytics_Leader_Leader.png"
import momentum from "../image/Analytics_MomentumLeader_Leader.png"
import "./Recog.css"

const Recog = () => {
  return (
    <div className='recog'>
        <div className='details'>
            <h1>Recognized by Real Customers as a Mobile Marketting & Personalized Leader</h1>
            <p>Rated highly by Q2 users with substanial Market Persence scene. CleverTap is recognised as a leader in the global fall 2022 GRID reports, across 7 categories</p>
            <a href="/">Read more</a>
            <div className='img-div'>
                <div>
                    <img src={HghImg} alt="" />
                </div>
                <div>
                    <img src={SecImg} alt="" />
                </div>
                <div>
                    <img src={Mid} alt="" />
                </div>
                <div>
                    <img src={FalImg} alt="" />
                </div>
                <div>
                    <img src={momentum} alt="" />
                </div>
            </div>
        </div>
        <div className='image'>
            <img src={Frame} alt="" />
        </div>
    </div>
  )
}

export default Recog
