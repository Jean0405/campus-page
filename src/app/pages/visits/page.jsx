"use client";
import { useEffect, useState } from "react";

import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import insertCode from "../../../../public/assets/insertCode.svg";
import requireCode from "../../../../public/assets/requireCode.svg";
import facebook from "../../../../public/assets/facebook.svg";
import github from "../../../../public/assets/github.svg";
import instagram from "../../../../public/assets/instagram.svg";
import telegram from "../../../../public/assets/telegram.svg";
import twitter from "../../../../public/assets/twitter.svg";
import whatsapp from "../../../../public/assets/whatsapp.svg";

import NavigationBar from "@/components/NavigationBar";
import { Slider } from "./components/Slider";
import { InsertCode } from "./components/InsertCode";
import { RequireCode } from "./components/RequireCode";
import Footer from "@/components/Footer";
import { InsertCode } from "./components/insertCode";
import { RequireCode } from "./components/requireCode";

function VisitUs() {


  const [buttonPressed, setButtonPressed] = useState(null);

  const changeView = (buttonName) => {
    setButtonPressed(buttonName);
  };

  useEffect(() => {
    AOS.init({ duration: 900 });
  });

  const socialNetworks = [
    instagram,
    whatsapp,
    github,
    telegram,
    facebook,
    twitter,
  ];

  return (
    <>
      <NavigationBar />
      <div className="container h-full w-full m-auto">
        <div className="h-full lg:max-w-lg w-full mt-24 flex flex-col  lg:items-start items-center">
          <h1 className=" lg:max-w-xl max-w-full sm:text-7xl text-6xl font-bold">
            Visítanos
          </h1>
         {
          buttonPressed ? (
              <p className="hidden">
                Ingresa el código de acceso para sacar tu cita, si no cuentas con
                uno puedes solicitarlo
              </p>
          ) : (
                <p className="lg:w-10/12 w-10/12 text-center ms-1">
                  Ingresa el código de acceso para sacar tu cita, si no cuentas con
                  uno puedes solicitarlo
                </p>
          )
         }
          <div className="flex flex-col w-5/6  gap-8 mt-5">
            {buttonPressed === "insertCode" ? (
              <InsertCode />
            ) : buttonPressed === "requireCode" ? (
              <RequireCode />
            ) : (
              <>
                <Button
                  className="bg-[#00AA80] flex flex-col  text-white text-md rounded-lg py-14"
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
            )}

          
          </div>
            <div className="flex flex-col mt-10  lg:items-start items-center">
            <div className="flex flex-col  ">
              <p className="text-md text-center">
                No olvides compartir con tus amigos y conocidos este gran
                proyecto
              </p>
            </div>
          <div className="text-xl flex gap-10 mt-5">
            {socialNetworks.map((src, index) => (
              <Image
                key={index}
                className="inline-block"
                style={{ width: "35px" }}
                src={src}
                alt={`Logo ${index + 1}`}
              />
            ))}
          </div>
            </div>
        </div>
        <Slider />
      </div>
      <Footer />
    </>
  );
}

export default VisitUs;
