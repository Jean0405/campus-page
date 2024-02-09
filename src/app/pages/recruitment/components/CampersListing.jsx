"use client";
import { useEffect, useState } from "react";

// Icons imports
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import camperMen from "../../../../../public/img/camperMen.png";
import camperWoman from "../../../../../public/img/camperWoman.png";
import Image from "next/image";
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
} from "@nextui-org/react";

import * as Recruitment from "@/utils/recruitment";
import ModalCamper from "./ModalCamper";
import { showErrorToast } from "@/helpers/Toasts";

import { Chip, Spinner } from "@nextui-org/react";

const skills = [
  "php",
  "node",
  ".net",
  "express",
  "typescript",
  "mySQL",
  "javascript",
  "react",
  "mongoDB",
  "python",
  "aws",
  "azure",
];
const englishLevels = ["A1", "A2", "B1", "B2", "C1"];

function CampersListing() {
  const [campers, setCampers] = useState([]);
  const [focus, setFocus] = useState([]);
  const [loading, setLoading] = useState(false);
  const [checkFilter, setCheckFilter] = useState(false);
  const [filterSelected, setFilterSelected] = useState("none");
  const [selectedData, setSelectedData] = useState({
    skills: [],
    enfoque: null,
    nivelIngles: "",
  });

  const getAllCampers = async () => {
    const campers = await Recruitment.getCampers();
    if (!campers) {
      showErrorToast();
      return;
    }
    setCampers(campers);
    setLoading(true);
    return;
  };

  const getAllFocus = async () => {
    const response = await Recruitment.getAllFocus();
    if (!campers) {
      return;
    }
    setFocus(response.message);
    return;
  };

  // Submit campers filter
  const handleSubmitFilter = async(e) => {
    e.preventDefault();

    const dataToSend = {};
    if (filterSelected === "skills") {
      if (selectedData.skills.length > 0) {
        dataToSend.skills = selectedData.skills;
      }
    } else if (filterSelected === "routes") {
      if (selectedData.enfoque) {
        dataToSend.enfoque = selectedData.enfoque;
      }
    }

    if (selectedData.nivelIngles) {
      dataToSend.nivelIngles = selectedData.nivelIngles;
    }

    let response = await Recruitment.getCampersByFilter(dataToSend);
    if (!response || response.status !== 200) {
      showErrorToast();
      return;
    }

    const initialState = {
      skills: [],
      enfoque: null,
      nivelIngles: "",
    };
    console.log(dataToSend);
    console.log(response.message);
    setCampers(response.message);
    setSelectedData(initialState);
    setFilterSelected("none");
    setCheckFilter(!checkFilter);
  };

  useEffect(() => {
    getAllFocus();
    getAllCampers();
  }, []);

  return (
    <div className="p-5 lg:px-20 bg-white bg-opacity-90" id="campers">
      {/* <------ Section title ------> */}
      <div className="mb-10">
        <h1 className="text-center sm:text-left text-yellow-500 text-5xl sm:text-5xl md:text-6xl font-bold ">
          Talento
        </h1>
        <h1
          className="text-center sm:text-left text-4xl sm:text-6xl md:text-7xl font-extrabold"
          style={{ color: "#000087" }}
        >
          Campuslands
        </h1>
      </div>
      <div className="flex flex-col items-center sm:items-start gap-2">
        <Button
          className={`w-[5rem] font-bold ${
            !checkFilter
              ? "bg-yellow-500 text-[#000087]"
              : "bg-[#000087] text-white"
          }`}
          onClick={() => setCheckFilter(!checkFilter)}
        >
          FILTRAR
        </Button>
        {checkFilter && (
          <form
            onSubmit={handleSubmitFilter}
            className="bg-gray-200 flex flex-col gap-5 w-full rounded-lg p-3"
          >
            <h1 className="italic">
              <span className="font-bold">NOTA:</span> No puedes filtrar por
              rutas y habilidades al mismo tiempo.
            </h1>
            {/* Skills filter */}
            <h3
              onClick={() =>
                filterSelected === "skills"
                  ? setFilterSelected("none")
                  : setFilterSelected("skills")
              }
              className={`flex justify-between items-center ${
                filterSelected === "skills" ? "bg-yellow-500" : "bg-gray-300"
              } w-[9rem] text-center font-bold rounded-lg cursor-pointer mb-1 p-2`}
            >
              HABILIDADES <FontAwesomeIcon icon={faPlus} />
            </h3>
            {filterSelected === "skills" && (
              <div>
                <CheckboxGroup className="capitalize" orientation="horizontal" color="warning">
                  {skills.map((skill) => (
                    <Checkbox
                      key={skill.toLowerCase()}
                      value={skill}
                      checked={selectedData.skills.includes(skill)}
                      onChange={(e) => {
                        const value = e.target.value;
                        setSelectedData((prevState) => ({
                          ...prevState,
                          skills: prevState.skills.includes(value)
                            ? prevState.skills.filter((item) => item !== value)
                            : [...prevState.skills, value],
                        }));
                      }}
                    >
                      {skill}
                    </Checkbox>
                  ))}
                </CheckboxGroup>
              </div>
            )}
            {/* Route filter */}
            <h3
              onClick={() =>
                filterSelected === "routes"
                  ? setFilterSelected("none")
                  : setFilterSelected("routes")
              }
              className={`flex justify-between items-center border-2 ${
                filterSelected === "routes" ? "bg-yellow-500" : "bg-gray-300"
              } w-[9rem] text-center font-bold rounded-lg cursor-pointer mb-1 p-2`}
            >
              RUTAS <FontAwesomeIcon icon={faPlus} />
            </h3>
            {filterSelected === "routes" && (
              <div>
                <RadioGroup color="warning" orientation="horizontal">
                  {focus.length > 0 ? (
                    focus.map((focus) => (
                      <Radio
                        key={focus.id}
                        value={focus.id}
                        onChange={(e) =>
                          setSelectedData((prevState) => ({
                            ...prevState,
                            enfoque: Number(e.target.value),
                          }))
                        }
                      >
                        {focus.nombre}
                      </Radio>
                    ))
                  ) : (
                    <Spinner color="warning"></Spinner>
                  )}
                </RadioGroup>
              </div>
            )}
            {/* English level filter */}
            <div>
              <h3 className="font-bold mb-1">NIVEL DE INGLÉS</h3>
              <RadioGroup color="warning" orientation="horizontal">
                {englishLevels.map((level) => (
                  <Radio
                    key={level}
                    value={level}
                    onChange={(e) =>
                      setSelectedData((prevState) => ({
                        ...prevState,
                        nivelIngles: e.target.value,
                      }))
                    }
                  >
                    {level}
                  </Radio>
                ))}
              </RadioGroup>
            </div>
            <Button type="submit" className="bg-yellow-500 m-auto">
              BUSCAR
            </Button>
          </form>
        )}
      </div>
      <div className="mt-5 m-auto">
        {/* <------ Campers card container -------> */}
        {!loading ? (
          <div className="grid place-items-center text-center mt-10 mb-20">
            <Spinner color="warning" label="Cargando..." />
          </div>
        ) : (
          <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-8`}>
            {campers.length === 0 ? (
              <div className="col-span-4 text-center font-bold text-2xl sm:text-3xl">No hay registros.</div>
            ):campers.map((camper, index) => (
              // <------ Camper card ------>
              <div
                className="rounded-lg overflow-hidden text-white flex flex-col justify-between"
                style={{ boxShadow: "-5px 5px 10px #dbdada" }}
                key={index}
              >
                <div className="flex flex-col mb-5 bg-indigo-300">
                  <div className="w-full h-36 flex justify-center">
                    <Image
                      className={` ms-3 mt-2 w-36 h-full rounded-full  border-4 border-white`}
                      style={{
                        backgroundColor:
                          camper.info_usuario.genero == "masculino"
                            ? "#00AA80"
                            : "#F4B422",
                      }}
                      src={
                        camper.info_usuario.genero === "masculino"
                          ? camperMen
                          : camperWoman
                      }
                      alt="camper avatar"
                    />
                  </div>
                  <div
                    className="p-2 relative top-6 bg-indigo-50 mx-2"
                    style={{ boxShadow: "0px 5px 15px #ccc" }}
                  >
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
                  <ModalCamper camperId={camper.idUsuario} />
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
