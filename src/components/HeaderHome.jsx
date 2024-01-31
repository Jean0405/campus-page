"use client"
import { Button } from '@nextui-org/react'
import "./prueba.css"
import React from 'react'

function HeaderHome() {
  return (
    <div className='relative flex flex-col items-center justify-center gap-5 p-5 bannerPri' id='headerHome'>
        <div className='overlay absolute inset-0 opacity-60' style={{backgroundColor:'#000087'}}></div>
        <h1 className='text-center text-white text-4xl sm:text-6xl lg:text-8xl font-bold p-2 z-10'><span style={{color:"#F4B422"}}>Campus</span>lands</h1>
        <div className='flex flex-col justify-center items-center text-white text-center md:text-center text-lg font-medium md:font-bold sm:text-xl sm:w-5/6 p-3 z-10' >
          <p>Transformamos futuros a través de la educación.</p>
          <p>Garantizamos formación en programación y empleabilidad.</p>
        </div>
        <Button className='text-white font-bold rounded-md' style={{backgroundColor:"#F4B422"}}>CONTACTANOS</Button>
    </div>
  )
}

export default HeaderHome