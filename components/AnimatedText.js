import React from 'react'

import animated from '../styles/Animated.module.css'

export default function AnimatedText() {
  return (
    <div className='AnimatedText'>
        <div className={animated.waviy}>
            <span style={{"--i":1}}>R</span>
            <span style={{"--i":2}}>u</span>
            <span style={{"--i":3}}>n</span>
            <span style={{"--i":4}}>t</span>
            <span style={{"--i":5}}>i</span>
            <span style={{"--i":6}}>m</span>
            <span style={{"--i":7}}>e</span>
            <span style={{"--i":8}}>R</span>
            <span style={{"--i":9}}>u</span>
            <span style={{"--i":10}}>l</span>
            <span style={{"--i":11}}>e</span>
            <span style={{"--i":12}}>r</span>
        </div>
    </div>
  )
}
