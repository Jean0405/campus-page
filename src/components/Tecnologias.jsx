"use client"

import React, { useEffect } from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image"
import hombreSentado from "../../public/img/hombreSentado.png";
import right_arrow_white from "../../public/assets/right_arrow_white.png";

//TODO -- SVGS del carrucel
import aws from "../../public/assets/aws.svg";
import boostrap from "../../public/assets/boostrap.svg";
import c_chart from "../../public/assets/c_chart.svg";
import css from "../../public/assets/css.svg";
import git from "../../public/assets/git.svg";
import html from "../../public/assets/html.svg";
import java from "../../public/assets/java.svg";
import js from "../../public/assets/js.svg";
import linux from "../../public/assets/linux.svg";
import mongo from "../../public/assets/mongo.svg";
import mysql from "../../public/assets/mysql.svg";
import node from "../../public/assets/node.svg";
import npm from "../../public/assets/npm.svg";
import php from "../../public/assets/php.svg";
import pyton from "../../public/assets/pyton.svg";
import react from "../../public/assets/react.svg";

import localFont from "next/font/local"

const stretchPro = localFont({ src: "../../public/fonts/StretchPro.otf" })

export default function Tecnologias() {

     useEffect(() => {
          const copyLogos = () => {
               const logosSlide = document.querySelector('.logos-slide');
               if (logosSlide) {
                    const copy = logosSlide.cloneNode(true);
                    document.querySelector('.logos').appendChild(copy);
               }
          };

          copyLogos();
     }, []);

     return (
          <div className="Main flex justify-center mt-28 mb-10" >
               <div className="left ">
                    <h2 className={`${stretchPro.className} relative text-6xl mb-8`} >¿QUIERES ESTUDIAR <br /> CON NOSOTROS? </h2>
                    <p className="tracking-wide text-2xl" style={{ maxWidth: "800px" }}>Nuestro programa de entrenamiento de 8 a 10 meses, ofrece un sistema intensivo integral para Desarrolladores de Software, basado en Software Skills, Habilidades Socioemocionales e Inglés donde se dasarrollan las siguientes tecnologias:</p>
                    <div className="flex flex-col gap-5 mt-10" style={{ maxWidth: "800px" }}>
                         <div className="logos overflow-hidden relative">
                              <div className="logos-slides flex gap-5">
                                   <Image className="bg-slate-300 w-14 h-14" src={aws} alt="..." />
                                   <Image className="bg-slate-300 w-14 h-14" src={boostrap} alt="..." />
                                   <Image className="bg-slate-300 w-14 h-14" src={c_chart} alt="..." />
                                   <Image className="bg-slate-300 w-14 h-14" src={css} alt="..." />
                                   <Image className="bg-slate-300 w-14 h-14" src={git} alt="..." />
                                   <Image className="bg-slate-300 w-14 h-14" src={html} alt="..." />
                                   <Image className="bg-slate-300 w-14 h-14" src={java} alt="..." />
                                   <Image className="bg-slate-300 w-14 h-14" src={js} alt="..." />
                                   <Image className="bg-slate-300 w-14 h-14" src={linux} alt="..." />
                                   <Image className="bg-slate-300 w-14 h-14" src={mongo} alt="..." />
                                   <Image className="bg-slate-300 w-14 h-14" src={mysql} alt="..." />
                                   <Image className="bg-slate-300 w-14 h-14" src={node} alt="..." />
                                   <Image className="bg-slate-300 w-14 h-14" src={npm} alt="..." />
                                   <Image className="bg-slate-300 w-14 h-14" src={php} alt="..." />
                                   <Image className="bg-slate-300 w-14 h-14" src={pyton} alt="..." />
                                   <Image className="bg-slate-300 w-14 h-14" src={react} alt="..." />
                              </div>
                         </div>
                         <div className="overflow-hidden relative">
                              <div className="logos-slides2 flex gap-5">
                                   <Image className="bg-slate-300 w-14 h-14" src={aws} alt="..." />
                                   <Image className="bg-slate-300 w-14 h-14" src={boostrap} alt="..." />
                                   <Image className="bg-slate-300 w-14 h-14" src={c_chart} alt="..." />
                                   <Image className="bg-slate-300 w-14 h-14" src={css} alt="..." />
                                   <Image className="bg-slate-300 w-14 h-14" src={git} alt="..." />
                                   <Image className="bg-slate-300 w-14 h-14" src={html} alt="..." />
                                   <Image className="bg-slate-300 w-14 h-14" src={java} alt="..." />
                                   <Image className="bg-slate-300 w-14 h-14" src={js} alt="..." />
                                   <Image className="bg-slate-300 w-14 h-14" src={linux} alt="..." />
                                   <Image className="bg-slate-300 w-14 h-14" src={mongo} alt="..." />
                                   <Image className="bg-slate-300 w-14 h-14" src={mysql} alt="..." />
                                   <Image className="bg-slate-300 w-14 h-14" src={node} alt="..." />
                                   <Image className="bg-slate-300 w-14 h-14" src={npm} alt="..." />
                                   <Image className="bg-slate-300 w-14 h-14" src={php} alt="..." />
                                   <Image className="bg-slate-300 w-14 h-14" src={pyton} alt="..." />
                                   <Image className="bg-slate-300 w-14 h-14" src={react} alt="..." />
                              </div>
                         </div>
                    </div>
               </div>
               <div className="relative middle flex flex-col justify-center items-center mr-24">
                    <Image
                         className="w-unit-8xl h-96"
                         src={hombreSentado}
                         alt="Hombre sentado"
                    />
                    <Button radius="full" color="warning" className="text-white mt-6 h-14 w-2/5 font-extrabold text-large" >Unete Ahora  <Image className="w-5 ml-2" src={right_arrow_white} /> </Button>
               </div>
               <p className="flex items-center justify-center rotate-180 font-extrabold " style={{ writingMode: "vertical-rl" }}>FULL STACK</p>
          </div>
     )
}