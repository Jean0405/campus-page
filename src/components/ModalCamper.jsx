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


export default function ModalCamper({ camper, softSkills }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button className="w-40 m-auto my-3 text-lg text-white bg-[#00AA80] font-bold rounded-lg p-2" onPress={onOpen}>Ver más</Button>
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
                  {/* Camper name and english level */}
                  <div className="flex flex-col text-[#000087] text-xl justify-center items-center">
                    <p className="text-2xl font-bold uppercase">
                      {camper.nombre}
                    </p>
                    <p className="uppercase">
                      {camper.lastName}
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="text-[#F4B422] text-3xl font-bold">{camper.nivelIdioma}</p>
                  </div>
                </div>
                <Divider className="bg-[#000087] opacity-30 my-3" />
                {/* Camper description */}
                <div className="py-2">
                  <h2 className="text-[#000087] text-xl font-bold">DESCRIPCIÓN</h2>
                  <p className="text-[#000087] text-xl">
                    {camper.acercaDeMi}
                  </p>
                </div>
                {/* Camper hardskills */}
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#000087] font-bold">HARDSKILLS</h2>
                  <div className="flex flex-wrap gap-2">
                    {
                      camper.skills.map((hardSkill, index) => (
                        <span className="flex justify-center items-center bg-[#F4B422] text-[#000087] text-xl font-medium rounded-3xl px-3 py-1" key={index} >{hardSkill}</span>
                      ))
                    }
                  </div>
                </div>
                {/* Camper softskills */}
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#000087] font-bold">SOFTSKILLS</h2>
                  <div className="flex      -wrap gap-2">
                    {softSkills.map((cv, index) => (
                      <div className="cv" key={index}>
                        <div className="flex flex-wrap gap-2">
                          {cv.SoftSkills.map((softSkill, index) => (
                            <span
                              className="flex justify-center items-center bg-[#000087] text-[#F4B422] text-xl font-medium rounded-3xl px-3 py-1"
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
