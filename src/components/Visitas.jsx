import React from 'react';
import Image from 'next/image';

import right_arrow from "../../public/assets/right_arrow.png";
import calendar from "../../public/assets/calendar.svg";
import lilacCircle from "../../public/img/lilacCircle.png";
import purlpleCircle from "../../public/img/purpleCircle.png";
import video from "../../public/img/video.png";
import facebook from "../../public/assets/facebook.svg";
import github from "../../public/assets/github.svg";
import instagram from "../../public/assets/instagram.svg";
import telegram from "../../public/assets/telegram.svg";
import twitter from "../../public/assets/twitter.svg";
import whatsapp from "../../public/assets/whatsapp.svg";

import "../app/styles/home.css";

export default function Visitas() {

     const socialNetworks = [
          instagram,
          whatsapp,
          github,
          telegram,
          facebook,
          twitter,
     ]

     return (
          <div className='mainVisits grid xl:grid-cols-2 px-10 sm:px-20 m-auto my-20' style={{ maxWidth: "1600px" }}>
               <div className='divUp'>
                    <div className='divDown flex flex-col relative'>
                         <h2 className='mainH2Visits flex text-4xl lg:text-5xl xl:text-4xl font-bold mb-4' style={{lineHeight: "55px"}}>Si Quieres Saber Más Puedes <br /> Visitarnos En Nuestras <br /> Instalaciones</h2>
                         <div className='divButtonCita flex justify-between p-5 bg-white z-10' style={{ width: "400px" }}>
                              <div className='calendarVisitas flex gap-5'>
                                   <Image src={calendar} className='w-7 h-7' alt='...' />
                                   <p className='text-xl'>Agendar Cita</p>
                              </div>
                              <Image src={right_arrow} className='rightArrow w-10 h-10' alt='...' />
                         </div>
                         <div>
                              <Image src={lilacCircle} alt='...' className='lilaCircle w-20 h-w-20 absolute z-0' style={{top: "9rem", left: "22rem"}} />
                              <Image src={purlpleCircle} alt='...' className='purpleCircle w-20 h-w-20 absolute z-0' style={{top: "14rem" , left: "-2rem" }} />
                         </div>
                    </div>
                    <div className='hidden xl:flex flex-col mt-14'>
                         <p className='text-xl' style={{maxWidth: "35rem"}}>No olvides compartir con tus amigos y conocidos este gran proyecto </p>
                         <div className=' text-xl flex gap-14 mt-5'>
                              {socialNetworks.map((src, index) => (
                                   <Image
                                        key={index}
                                        className="inline-block"
                                        style={{ width: "40px", height: "40px" }}
                                        src={src}
                                        alt={`Logo ${index + 1}`}
                                   />
                              ))}
                         </div>
                    </div>
               </div>
               <div className='videoVisitas bg-blue-900'>
                    <Image src={video} alt='...' className=' h-full w-full' />
               </div>
               <div className='redesDiv xl:hidden'>
                    <p className='text-xl'>No olvides compartir con tus amigos y conocidos este gran proyecto </p>
                    <div className='socialNetworks'>
                         {socialNetworks.map((src, index) => (
                              <Image
                                   key={index}
                                   className="redSocial inline-block"
                                   style={{ width: "40px", height: "40px" }}
                                   src={src}
                                   alt={`Logo ${index + 1}`}
                              />
                         ))}
                    </div>
               </div>
          </div>
     )
}
