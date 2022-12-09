import React from 'react'
import "./Want.css"
import {Button } from "semantic-ui-react"

const Want = () => {
  return (
    <div className='want'>
        <div className='details'>
            <h1>
                Want to retain more customers?
            </h1>
            <p>
                Try the world's #1 Retention Cloud today and chum in it's backs
            </p>
            <Button className='ui button wa-but' id="button">
                Get Stated
            </Button>
        </div>
    </div>
  )
}

export default Want