"use client";
import React from "react";
import {
  useDisclosure,
  Select,
  SelectItem,
} from "@nextui-org/react";
import ModalCamper from "./ModalCamper";

function CampersListing() {
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
  const CAMPERS = [
    {
      id: 1,
      firstName: "Keanon Jeanpierre",
      lastName: "Angarita Olarte",
      genre: "M",
      englishLevel: "B1",
      stack: "Fullstack",
      hardSkills: [
        { skill: "Javacript" },
        { skill: "SQL" },
        { skill: "Mongo" },
        { skill: "React" },
      ],
      softSkills: [
        { skill: "Responsabilidad" },
        { skill: "Adaptabilidad" },
        { skill: "Puntualidad" },
        { skill: "Trabajo en equipo" },
      ],
    },
    {
      id: 2,
      firstName: "John",
      lastName: "Doe",
      genre: "M",
      englishLevel: "A2",
      stack: "Frontend",
      hardSkills: [
        { skill: "HTML" },
        { skill: "CSS" },
        { skill: "JavaScript" },
        { skill: "Vue" },
      ],
      softSkills: [
        { skill: "Comunicación" },
        { skill: "Creatividad" },
        { skill: "Resolución de problemas" },
      ],
    },
    {
      id: 3,
      firstName: "Alice",
      lastName: "Johnson",
      genre: "F",
      englishLevel: "B2",
      stack: "Backend",
      hardSkills: [{ skill: "Python" }, { skill: "Java" }, { skill: "Node" }],
      softSkills: [
        { skill: "Colaboración" },
        { skill: "Ética de trabajo" },
        { skill: "Innovación" },
      ],
    },
    {
      id: 4,
      firstName: "Michael",
      lastName: "Smith",
      genre: "M",
      englishLevel: "C1",
      stack: "Backend",
      hardSkills: [{ skill: "Python" }, { skill: "Java" }, { skill: "Node" }],
      softSkills: [
        { skill: "Liderazgo" },
        { skill: "Resolución de conflictos" },
        { skill: "Gestión del tiempo" },
      ],
    },
    {
      id: 5,
      firstName: "Sandra",
      lastName: "Taylor",
      genre: "F",
      englishLevel: "B1",
      stack: "Fullstack",
      hardSkills: [
        { skill: "React" },
        { skill: "Java" },
        { skill: "Node" },
        { skill: "SQL" },
      ],
      softSkills: [
        { skill: "Comunicación efectiva" },
        { skill: "Análisis crítico" },
        { skill: "Resolución de problemas" },
      ],
    },
    {
      id: 6,
      firstName: "Brian",
      lastName: "Anderson",
      genre: "M",
      englishLevel: "A2",
      stack: "Frontend",
      hardSkills: [
        { skill: "React Native" },
        { skill: "Swift" },
        { skill: "Android" },
      ],
      softSkills: [
        { skill: "Creatividad" },
        { skill: "Trabajo en equipo" },
        { skill: "Adaptabilidad" },
      ],
    },
    {
      id: 7,
      firstName: "Samantha",
      lastName: "Clark",
      genre: "F",
      englishLevel: "C2",
      stack: "Frontend",
      hardSkills: [
        { skill: "React" },
        { skill: "Tailwind" },
        { skill: "Next.js" },
      ],
      softSkills: [
        { skill: "Innovación" },
        { skill: "Colaboración" },
        { skill: "Liderazgo" },
      ],
    },
    {
      id: 8,
      firstName: "Daniel",
      lastName: "Martinez",
      genre: "M",
      englishLevel: "B2",
      stack: "Frontend",
      hardSkills: [
        { skill: "HTML" },
        { skill: "CSS" },
        { skill: "JavaScript" },
        { skill: "Angular" },
      ],
      softSkills: [
        { skill: "Comunicación" },
        { skill: "Resolución de problemas" },
        { skill: "Pensamiento crítico" },
      ],
    },
    {
      id: 9,
      firstName: "Elena",
      lastName: "Gonzalez",
      genre: "F",
      englishLevel: "C1",
      stack: "Fullstack",
      hardSkills: [
        { skill: "Java" },
        { skill: "Spring Boot" },
        { skill: "React" },
        { skill: "MySQL" },
      ],
      softSkills: [
        { skill: "Adaptabilidad" },
        { skill: "Trabajo en equipo" },
        { skill: "Innovación" },
      ],
    },
    {
      id: 10,
      firstName: "Marcus",
      lastName: "Williams",
      genre: "M",
      englishLevel: "B1",
      stack: "Backend",
      hardSkills: [
        { skill: "Node.js" },
        { skill: "Express.js" },
        { skill: "MongoDB" },
      ],
      softSkills: [
        { skill: "Responsabilidad" },
        { skill: "Puntualidad" },
        { skill: "Trabajo en equipo" },
      ],
    },
  ];
  const AVATARS = [
    {
      url: "https://png.pngtree.com/png-clipart/20221207/ourmid/pngtree-rock-girl-avatar-png-image_6514639.png",
    },
    {
      url: "https://static.vecteezy.com/system/resources/thumbnails/027/951/130/small/africa-guy-3d-avatar-character-illustrations-png.png",
    },
  ];

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
                  {camper.englishLevel}
                </span>
                <p className="text-lg text-center font-bold uppercase">
                  {camper.stack}
                </p>
              </div>
              <img
                className="w-80 h-80 m-auto"
                src={camper.genre === "M" ? AVATARS[1].url : AVATARS[0].url}
                alt="camper avatar"
              />
              <div
                className="flex flex-col rounded-b-lg py-2"
                style={{ color: "#000087", backgroundColor: "#E4E4DB" }}
              >
                <p className="text-2xl text-center font-bold">
                  {camper.firstName}
                </p>
                <p className="text-lg text-center">{camper.lastName}</p>
                {/* <------ modal camper card ------> */}
                <ModalCamper camper={camper}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CampersListing;
