import Image from "next/image";
import qrcode from "../../../../../public/assets/qrCode.svg";
import whatsapp2 from "../../../../../public/assets/whatsapp2.svg";
import whatsapp3 from "../../../../../public/assets/whatsapp3.svg";
import facebook from "../../../../../public/assets/facebook.svg";
import github from "../../../../../public/assets/github.svg";
import instagram from "../../../../../public/assets/instagram.svg";
import telegram from "../../../../../public/assets/telegram.svg";
import twitter from "../../../../../public/assets/twitter.svg";
import whatsapp from "../../../../../public/assets/whatsapp.svg";
import { Button } from "@nextui-org/react";

export const QRCode = () => {
  const socialNetworks = [
    instagram,
    whatsapp,
    github,
    telegram,
    facebook,
    twitter,
  ];
  return (
    
    <div className="h-full  w-full mt-12 ">
      <div className="md:max-w-xl w-full py-5 m-auto">
        <h1 className=" w-10/12 sm:text-7xl text-6xl font-bold m-auto">
          Visítanos
        </h1>
        <p className="w-10/12 text-center m-auto">
          Escribe a nuestro WhatsApp y un administrador
          te atenderá y te dará un código de acceso
        </p>
        <Image src={qrcode} className="w-10/12 m-auto" />
          <div className="flex flex-col items-center justify-center  gap-3 mt-5">
            <Button className="inline-block w-10/12 h-full py-2   rounded-sm bg-[#00AA80] text-lg text-white">
              <Image
                className="w-8 h-8 inline me-1 text-white "
                src={whatsapp2}
                alt="campuslands logo"
              />
              Chat
            </Button>
          <Button className="inline-block  w-10/12 rounded-sm bg-[#E1E1E1] text-lg text-black">
            <Image
              className="w-8 h-8 inline me-1  text-white "
              src={whatsapp3}
              alt="campuslands logo"
            />
            315 555 55 55
            </Button>
            <Button
              onClick={() => (window.location.href = "/pages/visits")}
              className="block w-10/12 rounded-sm bg-[#FF5C5C] text-lg text-white "
            >
              Atras
            </Button>{" "}
        <div className="flex flex-col mt-6 ms-6  lg:items-start items-center">
          <div className="flex flex-col  ">
            <p className="text-md">
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
         
         
</div>
     
    </div>
  );
}
  
