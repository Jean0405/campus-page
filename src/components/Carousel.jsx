"use client"

import React, { useEffect, useState } from "react";
import "../app/styles/home.css";
import Image from "next/image";

import aws from "../../public/assets/aws.svg";
import boostrap from "../../public/assets/boostrap.svg";
import css from "../../public/assets/css.svg";
import git from "../../public/assets/git.svg";
import html from "../../public/assets/html.svg";
import java from "../../public/assets/java.svg";
import js from "../../public/assets/js.svg";
import linux from "../../public/assets/linux.svg";
import mongo from "../../public/assets/mongo.svg";
import mysql from "../../public/assets/mysql.svg";
import nodejs from "../../public/assets/nodejs.svg";
import npm from "../../public/assets/npm.svg";
import php from "../../public/assets/php.svg";
import pyton from "../../public/assets/pyton.svg";
import reactjs from "../../public/assets/reactjs.svg";
import typescript from "../../public/assets/typescript.svg";

export default function Carousel() {

     const logos = [
          aws,
          boostrap,
          css,
          git,
          html,
          java,
          js,
          linux,
          mongo,
          mysql,
          nodejs,
          npm,
          php,
          pyton,
          reactjs,
          typescript,
     ]

     return (
          <div className="flex flex-col gap-2 mt-7">
               <div className="slider relative w-full h-auto m-auto overflow-hidden flex flex-col gap-1">
                    <div className="slide-track flex">
                         {logos.map((src, index) => (
                              <div className="slide w-52" key={index}>
                                   <Image
                                        className="inline-block"
                                        style={{width: "70px", height: "70px"}}
                                        src={src}
                                        alt={`Logo ${index + 1}`}
                                   />
                              </div>
                         ))}
                         {logos.map((src, index) => (
                              <div className="slide w-52" key={index}>
                                   <Image
                                        className="inline-block"
                                        style={{width: "70px", height: "70px"}}
                                        src={src}
                                        alt={`Logo ${index + 1}`}
                                   />
                              </div>
                         ))}
                    </div>
                    <div className="slide-track2 flex">
                         {logos.map((src, index) => (
                              <div className="slide w-52" key={index}>
                                   <Image
                                        className="inline-block"
                                        style={{width: "70px", height: "70px"}}
                                        src={src}
                                        alt={`Logo ${index + 1}`}
                                   />
                              </div>
                         ))}
                         {logos.map((src, index) => (
                              <div className="slide w-52" key={index}>
                                   <Image
                                        className="inline-block"
                                        src={src}
                                        style={{width: "70px", height: "70px"}}
                                        alt={`Logo ${index + 1}`}
                                   />
                              </div>
                         ))}
                    </div>
               </div>
          </div>
               
     )
}