import React from "react";
import Image from "next/image";
import { Link } from "@nextui-org/react";

import iconCampus from "../../public/img/logoCampus.png";

export default function Footer() {
  return (
    <footer className="bg-[#F5F4F4] pb-2">
      <div className="border-gray-400 px-4 pt-6 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {/* Campuslands description */}
          <div className="order-1 sm:order-first">
            <h1 className="text-md lg:text-xl font-bold mb-3">Campuslands</h1>
            <p className="text-justify text-sm md:text-sm text-gray-500">
              Explora oportunidades educativas con nuestra página informativa
              sobre becas. Diseñada para todo tipo de público interesado en
              avanzar en su educación.
            </p>
          </div>
          {/* Campuslands contact */}
          <div className="flex flex-col sm:items-center order-last lg:order-2">
            <div className="text-start">
              <h1 className="text-md lg:text-xl font-bold mb-3">Contacto</h1>
              <p className="text-sm md:text-base text-gray-500">
                +52 315 555 55 55
              </p>
            </div>
          </div>
          {/* Campuslands email */}
          <div className="flex flex-col sm:justify-start order-2 lg:order-3">
            <h1 className="text-md lg:text-xl font-bold mb-3">Email</h1>
            <p className="text-sm md:text-base text-gray-500">
              campuslands@gmail.com
            </p>
            <p className="text-sm md:text-base text-gray-500">
              infor-acampuss@gmail.com
            </p>
          </div>
          {/* Campuslands logo */}
          <div className="flex justify-center items-start order-first lg:order-last">
            <Image
              className="bg-300 w-28 h-auto opacity-50"
              src={iconCampus}
              alt="..."
            />
          </div>
        </div>
        <div className="flex justify-center lg:justify-end mt-6 lg:mt-12 mb-2 pr-0 lg:pr-8">
          <div className="px-2 md:px-4">
            <Link href="#">
              <p className="text-xs text-justify md:text-base text-gray-500">
                behance.net/Estrada314
              </p>
            </Link>
          </div>
          <div className="px-2 md:px-4">
            <Link href="#">
              <p className="text-xs text-justify md:text-base text-gray-500">
                Términos y uso
              </p>
            </Link>
          </div>
          <div className="px-2 md:px-4">
            <Link href="#">
              <p className="text-xs text-justify md:text-base text-gray-500">
                Políticas y privacidad
              </p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
