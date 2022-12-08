import React from 'react'
import Left01 from "../image/analytics_Leader_Leader.png"
import Left02 from "../image/Analytics_MomentumLeader_Leader.png"
import Left03 from "../image/Analytics_Leader.png"
import Capterra from "../image/capterra.png"
import Badge01 from "../image/Badge-01.png"
import Badge02 from "../image/Badge-02.png"
import Badge03 from "../image/Badge-03.png"
import Badge04 from "../image/Badge-04.png"
import Badge05 from "../image/Badge-05.png"
import "./Badges.css"

const Badges = () => {
  return (
    <div>
        <hr style={{margin: "0px 50px"}} />
        <div className='footer-badges'>
            <div className='sub-badges-left div'>
                <div className='img-rgt-div'>
                    <img src={Left01} className="img-rgt" alt="" />
                </div>
                <div className='img-rgt-div'>
                    <img src={Left02} className="img-rgt" alt="" />
                </div>
                <div className='img-rgt-div'>
                    <img src={Left03} className="img-rgt" alt="" />
                </div>
                <div className='capterra'>
                    <img src={Capterra}  alt="" />
                </div>
            </div>
            <div className='sub-badges-right div'>
                <div className='img-div'>
                    <img src={Badge01} className="img" alt="" />
                </div>
                <div className='img-div'>
                    <img src={Badge02} className="img" alt="" />
                </div>
                <div className='img-div'>
                    <img src={Badge03} className="img" alt="" />
                </div>
                <div className='img-div'>
                    <img src={Badge04} className="img" alt="" />
                </div>
                <div className='img-div'>
                    <img src={Badge05} className="img" alt="" />
                </div>
            </div>
        </div>
        <hr style={{margin: "40px"}}/>
    </div>
  )
}

export default Badges
