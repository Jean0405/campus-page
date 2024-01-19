// /layout.jsx
'use client'
import Link from "next/link";

import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import Astronauta from './Astronauta.png';
import Image from "next/image";

async function Page() {

    const handleClick = async(e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.17.0.97:2021/login', {
              method: 'POST',
            });
        
            if (response.ok) {
              window.location = "/pages/admin";
            } else {
             
              console.log('Error al verificar el inicio de sesión');
            }
          } catch (error) {
            console.log('Error al realizar la solicitud:', error);
          }
        };


    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <div className="flex justify-center h-screen items-center ">
            <div className="LoginBody grid grid-cols-2 justify-center shadow-2xl">
                <div className="loginLeft flex flex-col justify-center text-center items-center">
                    <form onSubmit={handleClick} className=" w-5/6">
                        <div className="loginMainText">
                            <h1 className=" text-5xl font-extrabold" style={{ color: "#000087" }}>Bienvenidos</h1>

                            <p className="pt-5 pb-3">Panel administrador de <br /> Campuslands</p>
                        </div>
                        <div className="loginInputs">
                            <div>
                                <div className=" flex flex-col gap-3 items-center ">
                                    <Input isRequired color="primary" type="text" variant="underlined" label="Usuario" />
                                    <Input
                                        isRequired
                                        color="primary"
                                        label="Password"
                                        variant="underlined"
                                        placeholder="Enter your password"
                                        endContent={
                                            <button
                                                color="primary"
                                                className="focus:outline-none"
                                                type="button"
                                                onClick={toggleVisibility}
                                            >
                                                {isVisible ? (
                                                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                                ) : (
                                                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                                )}
                                            </button>
                                        }
                                        type={isVisible ? "text" : "password"}
                                        className="w-full"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="loginButtons flex flex-col items-center justify-center gap-3 p-3 w-full">
                            <div className="flex gap-8 pt-5 w-full">
                                <Link  
                                    href="/"
                                    className="text-white links rounded w-full flex items-center justify-center h-10" 
                                    style={{ backgroundColor: "#000087" }} 
                                    color="primary"
                                >
                                    VOLVER
                                </Link>
                                <Link href="/pages/register" className="links rounded w-full flex items-center justify-center h-10 text-white" style={{ backgroundColor: "#000087" }} color="warning">REGISTRATE</Link>
                            </div>
                            <button typeof="submit" className="links w-full screen rounded flex items-center justify-center h-10" style={{ backgroundColor: "#F4B422"}}>GO FOR IT</button>
                        </div>
                    </form>
                </div>
                <div className="loginRigth" style={{backgroundColor: "#000087"}}>
                    <Image
                        width={500}
                        src={Astronauta}
                        alt="..."

                    />
                </div>
            </div>
        </div>
    );
}

export default Page;
