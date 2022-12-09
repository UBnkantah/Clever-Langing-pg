import React from 'react'
import { res } from '../ResourcesDB/ResourcesDB';
import "./Resources.css"



const Resources = () => {
  return (
    <div className='resources'>
        <h1>Resources that help you grow</h1>
        <div className='sub_resources'>
            {res.map((rest) => {
                return(
                    <div className='details' key={rest.id}>
                        <img src={rest.image} alt="" />
                        <div className='content'>
                            <h4>{rest.top}</h4>
                            <h5>{rest.header}</h5>
                            <a href="/">{rest.link}</a>
                        </div>
                    </div>
                )
            })}
            
            

        </div>
    </div>
  )
}

export default Resources
