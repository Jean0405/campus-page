import React from 'react'

function AboutUs() {
  return (
    <div className='my-10 grid grid-cols-1 lg:grid-cols-2 gap-5 mx-5 lg:mx-10' >
        <div className='flex flex-col items-center justify-center gap-3 lg:px-14'>
            <h1 className='text-center text-2xl sm:text-3xl md:text-4xl font-bold' style={{color:'#000087'}}>Más de <span style={{color:'#F4B422'}}> <span className='md:text-5xl'>10</span> años</span> de experiencia</h1>
            <p className='text-center text-sm md:text-xl'>Nuestro objetivo es aumentar la productividad del sector de la construcción facilitando un trabajo colaborativo efectivo y la digitalización de procesos de forma sencilla, fiable y rentable.</p>
        </div>
        <div className='relative max-h-80 bg-sky-400 flex justify-center items-center lg:rounded-tl-3xl lg:rounded-br-3xl' style={{backgroundImage: 'url("https://www.laopinion.com.co/sites/default/files/styles/portada_principal_720x405/public/2023-11/campuslands-jovenes.jpg?itok=alPNoOmx")', backgroundSize: 'cover', backgroundPosition: 'center', height:'450px'}}>
            <span className='hidden rounded-3xl absolute w-60 h-10 lg:block -top-3 -right-3' style={{backgroundColor:'#F4B422'}}></span>
            <span className='hidden rounded-3xl absolute w-60 h-10 lg:block -bottom-3 -left-3' style={{backgroundColor:'#F4B422'}}></span>
            <span className='hidden absolute w-7 h-7 bg-blue-900 rounded-full lg:block bottom-12 right-3'></span>
            <span className='hidden absolute w-7 h-7 bg-white rounded-full lg:block bottom-3 right-3'></span>
            <span className='hidden absolute w-7 h-7 bg-blue-900 rounded-full lg:block top-12 left-3'></span>
            <span className='hidden absolute w-7 h-7 bg-white rounded-full lg:block top-3 left-3'></span>
        </div>
    </div>
  )
}

export default AboutUs