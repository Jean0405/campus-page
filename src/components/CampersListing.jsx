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
async function CampersListing() {
  // <------ list of filters for campers ------>
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
  const CAMPERS = await loadCampers();
  const SOFTSKILLS = await loadSoftSkills();
  


  return (
    <div className="p-5" style={{ backgroundColor: "#F4B422" }} id="campers">
      {/* <------ Section title ------> */}
      <div>
        <h1 className="text-center sm:text-left text-white text-4xl sm:text-5xl md:text-6xl font-bold">
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
      <div className="mt-5">
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
        {/* <------ Campers card container -------> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-8">
          {CAMPERS.map((camper, index) => (
            // <------ Camper card ------>
            <div
              className="rounded-lg text-white"
              key={index}
              style={{ backgroundColor: "#000087" }}
            >
              <div className="p-2">
                <span className="text-yellow-500 opacity-50 text-4xl font-extrabold">
                  {camper.nivelIdioma}
                </span>
                <p className="text-lg text-center font-bold uppercase">
                  {camper.enfoque.nombre}
                </p>
              </div>
              <Image className="w-80 h-80 m-auto" src={camper.info_usuario.genero === "masculino" ? camperMen : camperWoman} alt="camper avatar"
              />



              <div
                className="flex flex-col rounded-b-lg py-2"
                style={{ color: "#000087", backgroundColor: "#E4E4DB" }}
              >
                <p className="text-2xl text-center font-bold">
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
