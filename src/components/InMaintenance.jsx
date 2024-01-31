import Image from 'next/image'
import React from 'react'
import Astronaut from '../../public/img/astronaut.png';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

function InMaintenance() {


  return (
    <div className='relative h-screen flex flex-col justify-center items-center gap-3 text-center overflow-hidden bg-emerald-50'>
        <h1 className='font-bold text-xl md:text-2xl lg:text-4xl uppercase'>Esta <span className='text-[#00AA80]'>página</span> está actualmente en mantenimiento</h1>
        <p className='text-lg md:text-2xl'>Estaremos de vuelta pronto, <span className='text-[#00AA80]'>gracias</span> por tu paciencia</p>
        <Button as={Link} href="/" className="bg-[#00AA80] font-bold text-white">Volver</Button>
        <Image className='absolute bottom-0 md:right-10' width={500} src={Astronaut} alt='Astronaut in maintenance logo'/>
    </div>
  )
}

export default InMaintenance