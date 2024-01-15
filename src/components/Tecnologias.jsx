"use client"

import React from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image"
import hombreSentado from "../../public/img/hombreSentado.png";
import right_arrow_white from "../../public/assets/right_arrow_white.png";
import Carousel from "./Carousel";

import localFont from "next/font/local"

const stretchPro = localFont({ src: "../../public/fonts/StretchPro.otf" })

export default function Tecnologias() {
     return (
          <div className="Main flex justify-center mt-28 mb-10" >
               <div className="left" style={{ maxWidth: "900px" }}>
                    <h2 className={`${stretchPro.className} relative text-6xl mb-8 whitespace-nowrap`} >¿QUIERES ESTUDIAR<br /> CON NOSOTROS? </h2>
                    <p className="tracking-wide text-2xl leading-9">Nuestro programa de entrenamiento de 8 a 10 meses, ofrece un sistema intensivo integral para Desarrolladores de Software, basado en Software Skills, Habilidades Socioemocionales e Inglés donde se dasarrollan las siguientes tecnologias:</p>
                    <div className="flex flex-col gap-2 mt-7">
                         <Carousel/>
                    </div>
               </div>
               <div className="relative middle flex flex-col justify-center items-center mr-24">
                    <Image
                         className="w-unit-8xl h-96"
                         src={hombreSentado}
                         alt="Hombre sentado"
                    />
                    <Button radius="full" color="warning" className="text-white mt-6 h-14 w-2/5 font-extrabold text-large" >Unete Ahora  <Image alt="..." className="w-5 ml-2" src={right_arrow_white} /> </Button>
               </div>
               <p className="flex items-center justify-center rotate-180 font-extrabold " style={{ writingMode: "vertical-rl" }}>FULL STACK</p>
          </div>
     )
}