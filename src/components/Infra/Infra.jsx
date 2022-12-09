import React from 'react'
import { infra } from '../InfraDB/InfraDB'
import "./Infra.css"



const Infra = () => {
  return (
    <div className='infra'>
      <div className='details'>
        <h1>Infratructure built for scale, speed and security</h1>
        <p>Powered by TessaractDB for world's first purpose-built database for user engagement and retention, delivering incredible performance lightning-fast data processing and unlimited secure storage capacity</p>
      </div>
      <div className='data'>
        {infra.map((item) => {
            return(
                <div className='items' key={item.id}>
                    <h2>{item.amount}</h2>
                    <p>{item.text}</p>
                </div>
            )
        })}
        
      </div>
    </div>
  )
}

export default Infra
