import React from 'react';
import Image from 'next/image';

import right_arrow from "../../public/assets/right_arrow.png";
import calendar from "../../public/assets/calendar.svg";
import lilacCircle from "../../public/img/lilacCircle.png";
import purlpleCircle from "../../public/img/purpleCircle.png";
import video from "../../public/img/video.png";

export default function Visitas() {
     return (
          <div className='flex justify-center items-center ml-40 mr-40 mt-24 mb-10'>
               <div className='flex flex-col'>
                    <h2 className='text-5xl font-bold leading-tight whitespace-nowrap mb-4'>Si quieres saber más puedes <br /> visitarnos en nuestras <br /> instalaciones</h2>
                    <div className='flex justify-between items-center bg-white p-4 z-10' >
                         <div className='flex items-center gap-3'>
                              <Image src={calendar} className='w-7 h-7' alt='...' />
                              <p className='text-xl'>Agendar Cita</p>
                         </div>
                         <Image src={right_arrow} className='w-10 h-10' alt='...' />
                    </div>
                    <div>
                         <Image src={lilacCircle} alt='...' className='w-20 h-w-20 relative bottom-28 left-unit-8xl z-0 pointer-events-none'/>
                         <Image src={purlpleCircle} alt='...' className='w-20 h-w-20 relative bottom-28 right-8 pointer-events-none'/>
                    </div>
                    <div>
                         <p>No olvides conpartir con tus amigos y conocidos este gran proyecto </p>
                         <div className='flex'>
                              <Image src="" alt='...' />
                              <Image src="" alt='...' />
                              <Image src="" alt='...' />
                              <Image src="" alt='...' />
                              <Image src="" alt='...' />
                         </div>
                    </div>
               </div>
               <div>
                    <Image src={video} alt='...' className='ml-10' style={{width: "90%", height: "100%"}}/>
               </div>
          </div>
     )
}
