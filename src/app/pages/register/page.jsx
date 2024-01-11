"use client";
import React, { useState } from "react";
/* import Astronauta from "./Astronauta.png"; */
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import Link from "next/link";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import "../../styles/index.css";

function Page() {

  const handleClick = (e) => {
    e.preventDefault();
    window.location = "/pages/admin"
};

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex justify-center h-screen items-center ">
      <div className="registerBody grid grid-cols-2 justify-center shadow-2xl">
        <div className="registerRigth" style={{ backgroundColor: "#000087" }}>
          <img
            className=" m-auto"
            width={550}
            src="http://localhost:5173/src/assets/Img/Astronauta.png"
            alt="..."

          />
        </div>
        <div className="registerLeft flex flex-col justify-center text-center items-center">
          <form onSubmit={handleClick} className=" w-5/6">
            <div className="registerMainText">
              <h1 className=" text-4xl font-extrabold" style={{ color: "#000087" }}>Registro Campuslands
              </h1>

              <p className=" text-sm text-left flex m-auto max-w-unit-9xl pt-5 pb-3 leading-6">¡Inspira tu futuro y forma parte de nuestra comunidad de talentosos estudiantes! Registra tu CV y abre las puertas a increíbles oportunidades profesionales. Tu viaje hacia el éxito comienza aquí.</p>

              <p className=" text-red-700 font-bold text-lg text-left ">¡Importante!</p>
              <p className=" font-light text-sm flex text-left max-w-96">La contraseña debe tener al menos 8 caracteres e incluir símbolos y números.</p>
            </div>
            <div className="registerInputs">
              <div>
                <div className=" grid grid-cols-2 gap-3 items-center ">
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
                          <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                          ) : (
                          <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-non}e" />
                        )}
                      </button>
                    }
                    type={isVisible ? "text" : "password"}
                    className="w-full"
                  />
                  <Select isRequired label="Genero" color="primary" variant="underlined" className="max-w-xs">
                    <SelectItem value="masculino" >Masculino</SelectItem>
                    <SelectItem value="femenino" >Femenino</SelectItem>
                    <SelectItem value="otro" >Otro</SelectItem>
                  </Select>
                  <Input isRequired color="primary" type="number" min="0" variant="underlined" label="Telefono" />
                  <Input isRequired color="primary" type="email" variant="underlined" label="Correo" />
                  <Input isRequired color="primary" type="text" variant="underlined" label="Ciudad" />
                </div>
              </div>
            </div>
            <div className="registerButtons flex flex-col items-center justify-center gap-3 p-3 w-full">
              <div className="flex gap-8 pt-5 w-full">
                <Link href="/" className="buttonRegistro text-white w-full flex items-center justify-center h-10 screen rounded" style={{ backgroundColor: "#000087" }}>INICIO</Link>
                <button type="submit" className="buttonRegistro rounded w-full flex items-center justify-center h-10" style={{ backgroundColor: "#F4B422", color: "black" }} color="primary">GO FOR IT</button>
                <Link href="/pages/login" className="buttonRegistro rounded w-full flex items-center justify-center h-10 text-white" style={{ backgroundColor: "#000087" }} color="warning">LOGIN</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
