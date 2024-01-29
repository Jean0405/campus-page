"use client"
import React, { useEffect, useState } from "react";

import camperMen from "../../../../../public/img/camperMen.png";
import camperWoman from "../../../../../public/img/camperWoman.png";
import Image from "next/image";

import * as Recruitment from '@/utils/recruitment';
import ModalCamper from "./ModalCamper";
import { showErrorToast } from "@/helpers/Toasts";

import { Chip } from "@nextui-org/react";


function CampersListing() {
  const [campers, setCampers] = useState([]);

  const getAllCampers = async () => {
    const campers = await Recruitment.getCampers();
    if (!campers) {
      showErrorToast();
      return
    };
    setCampers(campers);
    return;
  }

  const getModalInfoCampers = async (id) => {
    const modalInfo = await Recruitment.getAllInfoCamper(id);
    if (!modalInfo) {
      showErrorToast();
      return
    };
    return modalInfo
  }

  useEffect(() => {
    getAllCampers()
  }, []);


  return (
    <div className="p-5 bg-white bg-opacity-90" id="campers">
      {/* <------ Section title ------> */}
      <div className="mb-10">
        <h1 className="text-center sm:text-left text-yellow-500 text-4xl sm:text-5xl md:text-6xl font-bold ">
          Talento
        </h1>
        <h1
          className="text-center sm:text-left text-5xl sm:text-6xl md:text-7xl font-extrabold"
          style={{ color: "#000087" }}
        >
          Campuslands
        </h1>
      </div>

      <div className="mt-5 px-10 m-auto">
        {/* <------ Campers card container -------> */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 ">
          {campers.map((camper, index) => (
            // <------ Camper card ------>
            <div
              className="rounded-lg text-white  w-full h-full flex flex-col ring  ring-indigo-50  shadow-xl"
              key={index}
            >

              <div className="flex justify-evenly mb-10 ">
                <Image className={` ms-3 mt-2 ${camper.info_usuario.genero === "masculino" ? "w-24 h-28" : "w-32 h-32"}`} src={camper.info_usuario.genero === "masculino" ? camperMen : camperWoman} alt="camper avatar"
                />
                <div className="p-5 ">
                  <p className="text-[#6a7bff]   text-2xl font-extrabold my-1">
                    {camper.nombre}
                  </p>
                  <p className="text-md text-[#180A0A]  font-bold uppercase my-1">
                    {camper.enfoque.nombre}
                  </p>
                  <div className="flex  ">
                    <Chip color="success" size="xl" radius="lg" variant="dot">{camper.nivelIdioma}</Chip>

                  </div>
                </div>
              </div>
             
           

                <div className="flex flex-col items-center my-2">
                  <div className="flex flex-wrap gap-4 ">
                    {
                      camper.skills.map((hardSkill, index) => (
                        <Chip key={index} color="primary" size="lg" radius="sm" variant="flat" className="mt-1">{hardSkill}</Chip>
                      ))
                    }
                  </div>
              </div>
              <div
                className="flex flex-col rounded-b-lg py-3 "
              >
                {/* <------ modal camper card ------> */}
                <ModalCamper camper={camper} getModalInfoCampers={getModalInfoCampers} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CampersListing;
