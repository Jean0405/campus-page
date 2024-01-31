"use client";
import React, { useEffect, useState } from "react";

import camperMen from "../../../../../public/img/camperMen.png";
import camperWoman from "../../../../../public/img/camperWoman.png";
import Image from "next/image";
import {
  Button,
  useDisclosure
} from "@nextui-org/react";

import * as Recruitment from "@/utils/recruitment";
import ModalCamper from "./ModalCamper";
import { showErrorToast } from "@/helpers/Toasts";

import { Chip, Spinner } from "@nextui-org/react";

function CampersListing() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [campers, setCampers] = useState([]);
  const [showModal , setShowModal] = useState(false)
  const [loading, setLoading] = useState(false);

  const getAllCampers = async () => {
    const campers = await Recruitment.getCampers();
    console.log(campers);
    if (!campers) {
      showErrorToast();
      return;
    }
    setCampers(campers);
    setLoading(true);
    return;
  };

  useEffect(() => {
    getAllCampers();
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
        {!loading ? (
          <div className="grid place-items-center text-center mt-10 mb-20">
            <Spinner color="warning" label="Cargando..." />
          </div>
        ) : (
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 ">
            {campers.map((camper, index) => (
              // <------ Camper card ------>
              <div
                className="rounded-lg overflow-hidden text-white flex flex-col justify-between" style={{boxShadow: '-5px 5px 10px #dbdada'}}
                key={index}
              >
                <div className="flex flex-col mb-5 bg-indigo-300">
                <div className="w-full h-36 flex justify-center">
                <Image
                    className={` ms-3 mt-2 w-36 h-full rounded-full  border-4 border-white`}
                    style={{backgroundColor: (camper.info_usuario.genero == "masculino") ?'#00AA80' :'#F4B422'}}
                    src={
                      camper.info_usuario.genero === "masculino"
                        ? camperMen
                        : camperWoman
                    }
                    alt="camper avatar"
                  />
                </div>
                  <div className="p-2 relative top-6 bg-white mx-2" style={{boxShadow: '0px 5px 15px #ccc'}}>
                    <p className="text-[#6a7bff] text-center text-2xl font-extrabold my-1">
                      {camper.nombre}
                    </p>
                    <p className="text-md text-[#180A0A] text-center font-bold uppercase my-1">
                      {camper.enfoque.nombre}
                    </p>
                    <div className="flex justify-center ">
                      <Chip color="success" size="xl" radius="lg" variant="dot">
                        Inglés {camper.nivelIngles}
                      </Chip>
                    </div>
                  </div>
                </div>

                <div className="my-2">
                <div className="flex flex-wrap justify-center gap-2  mt-5">
                    {camper.skills.map((hardSkill, index) => (
                      <Chip
                        key={index}
                        className="bg-gray-300"
                        size="md"
                        radius="sm"
                        variant="flat"
                      >
                        {hardSkill}
                      </Chip>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col rounded-b-lg py-3 ">
                  {/* <------ modal camper card ------> */}
                      <ModalCamper camperId={camper.idUsuario}/>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CampersListing;
