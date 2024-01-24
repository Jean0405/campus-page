"use client"
import Image from "next/image";
import qrcode from "../../../../../public/assets/qrCode.svg";
import whatsapp2 from "../../../../../public/assets/whatsapp2.svg";
import whatsapp3 from "../../../../../public/assets/whatsapp3.svg";

import { Button } from "@nextui-org/react";
import { InsertCode } from "./InsertCode";
import insertCode from "../../../../../public/assets/insertCode.svg";
import requireCode from "../../../../../public/assets/requireCode.svg";
import { RequireCode } from "./RequireCode";
import { useState } from "react";
export const QRCode = () => {
  const [showQR, setShowQR] = useState(true);
  const [buttonPressed, setButtonPressed] = useState(null);
  const handleGoBack = () => {
    setShowQR(false);
  };
  const changeView = (buttonName) => {
    setButtonPressed(buttonName);
  };

  return (


    showQR ? (
      <div className="h-full  w-full mt-[-50px] " >
        <div className="md:max-w-xl w-full py-5 m-auto">
          <p className="w-full  ms-2 mb-6 mt-2">
            Escribe a nuestro WhatsApp y un administrador
            te atenderá y te dará un código de acceso
          </p>
          <Image src={qrcode} className="w-full m-auto" />
          <div className="flex flex-col items-center justify-center  gap-3 mt-5">
            <Button onClick={() => window.location.href = "https://wa.me/?text=Hola%2C%20me%20encantar%C3%ADa%20visitar%20las%20instalaciones.%20%C2%BFPodr%C3%ADamos%20programar%20una%20visita%20para%20conocer%20las%20instalaciones%3F%20Estoy%20muy%20emocionado%20por%20la%20oportunidad%20de%20visitar%20sus%20instalaciones.%20%C2%A1Gracias%21"} className="inline-block w-full h-full py-2   rounded-sm bg-[#00AA80] text-lg text-white">
              <Image
                className="w-8 h-8 inline me-1 text-white "
                src={whatsapp2}
                alt="campuslands logo"
              />
              Chat
            </Button>
            <p className="py-2  w-full opacity-85  text-lg text-center text-black">
              <Image
                className="w-8 h-8 inline me-1  text-white "
                src={whatsapp3}
                alt="campuslands logo"
              />
              315 555 55 55
            </p>
            <Button
              onClick={() => handleGoBack()}
              className="block w-full rounded-sm bg-[#FF5C5C] text-lg text-white "
            >
              Atras
            </Button>

          </div>


        </div>

      </div >
    ) : (
      buttonPressed === "insertCode" ? (
        <InsertCode />
      ) : buttonPressed === "requireCode" ? (
        <RequireCode />
      ) : (
        <>
          <p className="w-full ms-1 mt-[-20px]">Ingresa el código de acceso para sacar tu cita, si no cuentas con uno puedes solicitarlo</p>
          <Button
            className="bg-[#00AA80] flex flex-col  text-white text-md rounded-lg py-14 mb-5 mt-5"
            as="a"
            onClick={() => changeView("insertCode")}
          >
            <Image src={insertCode} />
            ¡Ya tengo codigo!
          </Button>
          <Button
            className="bg-[#A5A6F6] flex flex-col  text-000000 text-md rounded-lg py-14"
            as="a"
            onClick={() => changeView("requireCode")}
          >
            <Image src={requireCode} />
            Solicitar codigo de visita
          </Button>
        </>
      )
    )




  );
}

