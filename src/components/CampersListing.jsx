import React from "react";
import {
  useDisclosure,
  Select,
  SelectItem,
} from "@nextui-org/react";
import camperMen from "../../public/img/camperMen.png";
import camperWoman from "../../public/img/camperWoman.png";
import Image from "next/image";

import ModalCamper from "./ModalCamper";

const loadSoftSkills = async () => {
  const response = await fetch(" http://127.17.0.97:2021/skills/cv?id=1");
  const data = await response.json();
  const softSkills = data.message
  return softSkills
}


const loadCampers = async () => {
  const response = await fetch("http://127.17.0.97:2021/cv");
  const data = await response.json();
  const campers = data.message
  return campers
}

const filterTechnologies = async (technology) => {
  const response = await fetch(`http://127.17.0.97:2021/cv/filter?tecn=${technology}`);
  const data = await response.json();
  const filtered = data.message
  return filtered
}
async function CampersListing() {

  const CAMPERS = await loadCampers();
  const SOFTSKILLS = await loadSoftSkills();

  const TECHNOLOGIES = [
    { name: "Php" },
    { name: "Laravel" },
    { name: "React" },
    { name: "Java" },
    { name: "Node" },
    { name: "Express" },
    { name: "C#" },
    { name: ".Net" },
];
const ROUTES = [
    { name: "Backend" },
    { name: "Frontend" },
    { name: "Fullstack" },
];
const ENGLISH_LEVELS = [
    { level: "A1" },
    { level: "A2" },
    { level: "B1" },
    { level: "B2" },
    { level: "C1" },
];


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
      {/* <----- Selects to filter campers by Tecnology, Rute and english level -----> */}
      <div className="flex flex-col items-center sm:flex-row sm:justify-left sm:items-left gap-3">
            {/* Filter select by technology */}
            <Select
                color="default"
                radius="sm"
                items={TECHNOLOGIES}
                label="Tecnología"
                placeholder="Selecciona una tecnologia"
                className="max-w-sm"
            >
                {(technology) => (
                    <SelectItem className="text-black" key={technology.name}>
                        {technology.name}
                    </SelectItem>
                )}
            </Select>
            {/* Filter select by route */}
            <Select
                color="default"
                radius="sm"
                items={ROUTES}
                label="Ruta aprendizaje"
                placeholder="Selecciona una tecnologia"
                className="max-w-sm"
            >
                {(route) => (
                    <SelectItem className="text-black" key={route.name}>
                        {route.name}
                    </SelectItem>
                )}
            </Select>
            {/* Filter select by english level */}
            <Select
                color="default"
                radius="sm"
                items={ENGLISH_LEVELS}
                label="Ruta aprendizaje"
                placeholder="Selecciona una tecnologia"
                className="max-w-sm"
            >
                {(level) => (
                    <SelectItem className="text-black" key={level.level}>
                        {level.level}
                    </SelectItem>
                )}
            </Select>
        </div>
      <div className="mt-5">
       
        {/* <------ Campers card container -------> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-8 ">
          {CAMPERS.map((camper, index) => (
            // <------ Camper card ------>
            <div
              className="rounded-lg text-white bg-[#0F2167]"
              key={index}

            >
              <div className="p-2">
                <span className="text-[#6a7bff] text-4xl font-extrabold">
                  {camper.nivelIdioma}
                </span>
                <p className="text-lg text-center font-bold uppercase">
                  {camper.enfoque.nombre}
                </p>
              </div>
              <Image className={`m-auto mb-2 ${camper.info_usuario.genero === "masculino" ? "w-72 h-80" : "w-80 h-80"}`} src={camper.info_usuario.genero === "masculino" ? camperMen : camperWoman} alt="camper avatar"
              />



              <div
                className="flex flex-col rounded-b-lg py-2 bg-gray-500"
                
              >
                <p className="text-white text-2xl text-center font-bold">
                  {camper.nombre}
                </p>
                {/* <------ modal camper card ------> */}
                <ModalCamper camper={camper} softSkills={SOFTSKILLS} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CampersListing;
