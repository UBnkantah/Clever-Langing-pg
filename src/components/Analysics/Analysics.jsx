import React from 'react'
import { ana } from '../AnalysicsDB/AnalysicsDB'
import "./Analysics.css"

const Analysics = () => {
  return (
    <div className='analysics'>
        {ana.map((ant) => {
            return(
                <div className='sub-analysics' key={ant.id}>
                    <div
                    className='img'>
                        <img src={ant.img} alt="" />
                    </div>
                    <div className='details'>
                        <h3>{ant.title}</h3>
                        <p>{ant.text}</p>
                        <a href="/">Learn more</a>
                    </div>
                </div>
            )
        })}
        
    </div>
  )
}

export default Analysics