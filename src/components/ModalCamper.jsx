"use client"

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Divider,
} from "@nextui-org/react";
import Image from "next/image";
import camperMen from "../../public/img/camperMen.png";
import camperWoman from "../../public/img/camperWoman.png";

export default function ModalCamper({ camper, softSkills }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button className="w-40 m-auto my-3 text-lg text-white bg-[#1F1717] font-bold rounded-lg p-2" onPress={onOpen}>Ver más</Button>
      <Modal
        size="xl"
        scrollBehavior="inside"
        placement="center"
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col text-center uppercase gap-1">
                {camper.stack}
              </ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {/* Camper name and photo */}
                  <div className="flex flex-col text-[#0F2167] text-xl justify-center items-center">
                    <p className="text-2xl font-bold uppercase">
                      {camper.nombre}
                    </p>
                  </div>
                  <div className=" flex justify-center items-center ">
                  <Image className="w-24 h-24 bg-[#0F2167] rounded-full"  src={camper.info_usuario.genero === "masculino" ? camperMen : camperWoman} alt="camper avatar" />
                  </div>
                </div>
                <Divider className="bg-[#0F2167] opacity-30 my-3" />
                {/* Camper description */}
                <div className="py-2">
                  <h2 className="text-[#0F2167] text-xl font-bold">DESCRIPCIÓN</h2>
                  <p className="text-[#0F2167] text-lg">
                    {camper.acercaDeMi}
                  </p>
                </div>
                {/* Camper hardskills */}
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#0F2167] font-bold">HARDSKILLS</h2>
                  <div className="flex flex-wrap gap-2">
                    {
                      camper.skills.map((hardSkill, index) => (
                        <span className="flex justify-center items-center bg-[#FFB534] text-[#0F2167] text-xl font-medium rounded-3xl px-3 py-1" key={index} >{hardSkill}</span>
                      ))
                    }
                  </div>
                </div>
                {/* Camper softskills */}
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#0F2167] font-bold">SOFTSKILLS</h2>
                  <div className="flex flex-wrap gap-2">
                    {softSkills.map((cv, index) => (
                      <div className="cv" key={index}>
                        <div className="flex flex-wrap gap-2">
                          {cv.SoftSkills.map((softSkill, index) => (
                            <span
                              className="flex justify-center items-center bg-[#0F2167] text-white text-xl font-medium rounded-3xl px-3 py-1"
                              key={index}
                            >
                              {softSkill.competencia}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button className="bg-[#E4E4DB] " onPress={onClose}>
                  Close
                </Button>
                <Button className="bg-[#00AA80]" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
