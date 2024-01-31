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
import tourBtnImg from "../../../../public/img/tourBtn.png";

import NavigationBar from "@/components/NavigationBar";
import { Slider } from "./components/Slider";
import { InsertCode } from "./components/InsertCode";
import { RequireCode } from "./components/RequireCode";
import Footer from "@/components/Footer";


function VisitUs() {
  const [buttonPressed, setButtonPressed] = useState(null);

  const changeView = (buttonName) => {
    setButtonPressed(buttonName);
  };

  useEffect(() => {
    AOS.init({ duration: 900 });
  });
  const socialNetworks = [
    {
      src: instagram,
      href: "https://www.instagram.com/campuslands/",

    },
    {
      src: whatsapp,
      href: "#",

    },
    {
      src: facebook,
      href: "https://www.facebook.com/Campuslands/",

    },
    {
      src: twitter,
      href: "#",
    },
    {
      src: telegram,
      href: "#",

    },
    {
      src: github,
      href: "#",

    }
  ];

  return (
    <>
      <NavigationBar />
      <div className="container h-full w-full ">
        <div className="h-full lg:max-w-lg w-full mt-24 flex flex-col  lg:items-start items-center">
          <h1 className=" lg:max-w-xl max-w-full sm:text-7xl text-6xl font-bold">
            Visítanos
          </h1>
         {
          buttonPressed ? (
              <p className="hidden">
                Ingresa el código de acceso para solicitar tu cita, si no cuentas con
                un codigo, puedes solicitarlo.
              </p>
          ) : (
                <p className="lg:w-10/12 w-10/12 text-center lg:text-start ms-1">
                Ingresa el código de acceso para solicitar tu cita, si no cuentas con
                un codigo, puedes solicitarlo.
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
                      className="bg-[#00AA80] flex flex-col transition hover:scale-105 shadow hover:shadow-2xl   text-white text-md rounded-lg py-14"
                  as="a"
                  onClick={() => changeView("insertCode")}
                >
                  <Image src={insertCode} alt="insertCode" />
                  ¡Ya tengo código!
                </Button>
                <Button
                      className="bg-[#A5A6F6] flex flex-col   text-md rounded-lg py-14 transition hover:scale-105 shadow hover:shadow-2xl"
                  as="a"
                  onClick={() => changeView("requireCode")}
                >
                  <Image src={requireCode} alt="requireCode" />
                  Solicitar código de visita
                </Button>
                
                    {/* <Button
                    id="tour_btn"
                      className=" flex flex-col text-center  tracking-wide	 text-xl text-balance font-bold rounded-lg py-14 transition hover:scale-105 shadow hover:shadow-2xl"
                      as="a"
                      onClick={() => changeView("requireCode")}
                    >
                      <Image id="tour_img" alt="confeti" src={tourBtnImg}/>
                      <p id="tour_text" className="text-white "> ¡¡¡Participa en nuestro
                        tour  por campus!!!</p>
                     
                    </Button> */}
              </>
            )}

          
          </div>
            <div className="flex flex-col mt-8  lg:items-start items-center">
            <div className="flex flex-col  ">
              <p className="text-md text-center lg:text-start">
                No olvides compartir con tus amigos y conocidos este gran
                proyecto.
              </p>
            </div>
          <div className="text-xl flex gap-10 mt-5">
              {socialNetworks.map((item, index) => (
                <a href={item.href} key={index} target="_blank"
                >
                  <Image
                    className="redSocial inline-block w-10 h-10"
                    src={item.src}
                    alt={`Logo ${index + 1}`}
                  />
                </a>
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
