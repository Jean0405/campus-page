import React, { useState } from "react";
import NavigationBar from "@/components/NavigationBar";
import FormHeader from "./FormHeader";
import { Radio, RadioGroup } from "@nextui-org/react";

const englishLevels = ["A1", "A2", "B1", "B2", "C1"];
const devsCantity = ["1", "1 - 2", "3 - 6", "7 - 9", "Indefinido"];
const contractTime = [
  "2 meses",
  "2 - 3 meses",
  "4 - 6 meses",
  "3 - 6 meses",
  "1 año",
  "Indefinido",
];
const techs = [
  "Bootstrap",
  "Javascript",
  "NodeJS",
  "Python",
  "React",
  "Express",
  "HTML",
  "CSS",
  "MySQL",
  "Typescript",
  "C#",
  "PHP",
  "AWS",
  "Java",
];

const FormRecruitment = ({ setIsFormActive, setFormData, formData }) => {
  const [selectedSection, setSelectedSection] = useState("first");

  const handleValidateForm = (event, section) => {
    event.preventDefault();
    setSelectedSection(section);
  };

  return (
    <div>
      <NavigationBar />
      <main className="grid lg:grid-cols-3 pt-[4rem] px-5">
        {/* <----------- FORM -----------> */}
        <form className="col-span-2 w-full flex flex-col gap-5">
          {/* <--- DESKTOP FORM HEADER ---> */}
          <FormHeader />
          {/* <------------ FIRST FORM SECTION ------------> */}
          <section
            className={`${
              selectedSection !== "first" && "scale-0 h-0"
            } flex flex-col`}
          >
            {/* <--- FORM INPUTS ----> */}
            <div className="grid md:grid-cols-2 gap-3">
              <div className="col-span-2 md:col-span-1 flex flex-col gap-1">
                <label>Nombre de la empresa</label>
                <input
                  className="bg-gray-200 border-2 focus:border-sky outline-none rounded-lg p-2"
                  type="text"
                  placeholder="Nombre de tu empresa"
                />
              </div>
              <div className="col-span-2 md:col-span-1 flex flex-col gap-1">
                <label>Nit de la empresa</label>
                <input
                  className="bg-gray-200 border-2 focus:border-sky outline-none rounded-lg p-2"
                  type="text"
                  placeholder="Nombre de tu empresa"
                />
              </div>
              <div className="col-span-2 flex flex-col gap-1">
                <label>Correo electrónico</label>
                <input
                  className="bg-gray-200 border-2 focus:border-sky outline-none rounded-lg p-2"
                  type="text"
                  placeholder="Nombre de tu empresa"
                />
              </div>
            </div>
            {/* <--- BUTTON VALIDATE FORM ---> */}
            <div className="flex justify-end mt-4">
              <button
                onClick={(event) => {
                  handleValidateForm(event, "second");
                }}
                className="bg-sky hover:bg-red-500 font-bold text-white rounded-lg transition-all duration-500 p-2"
              >
                Siguiente
              </button>
            </div>
          </section>
          {/* <------------ SECOND FORM SECTION ------------> */}
          <section
            className={`${
              selectedSection !== "second" && "scale-0 h-0"
            } flex flex-col`}
          >
            {/* <--- FORM INPUTS ----> */}
            <div className="grid md:grid-cols-2 gap-3">
              <div className="col-span-2 flex flex-col gap-1">
                <label>Nombre del solicitante</label>
                <input
                  className="bg-gray-200 border-2 focus:border-sky outline-none rounded-lg p-2"
                  type="text"
                  placeholder="Nombre del solicitante"
                />
              </div>
              <div className="col-span-2 md:col-span-1 flex flex-col gap-1">
                <label>Cargo</label>
                <input
                  className="bg-gray-200 border-2 focus:border-sky outline-none rounded-lg p-2"
                  type="text"
                  placeholder="Cargo que cumples en tu empresa"
                />
              </div>
              <div className="col-span-2 md:col-span-1 flex flex-col gap-1">
                <label>Teléfono</label>
                <input
                  className="bg-gray-200 border-2 focus:border-sky outline-none rounded-lg p-2"
                  type="text"
                  placeholder="Teléfono"
                />
              </div>
              <div className="col-span-2 flex flex-col gap-1">
                <label>Descripción de tu empresa</label>
                <textarea
                  className="bg-gray-200 border-2 focus:border-sky outline-none rounded-lg p-2"
                  type="text"
                  maxLength={300}
                  placeholder="Descripción sobre los servicios y/o productos de tu empresa"
                />
              </div>
            </div>
            {/* <--- BUTTON VALIDATE FORM ---> */}
            <div className="flex justify-end mt-4">
              <button
                onClick={(event) => {
                  handleValidateForm(event, "third");
                }}
                className="bg-sky hover:bg-red-500 font-bold text-white rounded-lg transition-all duration-500 p-2"
              >
                Siguiente
              </button>
            </div>
          </section>
          {/* <------------ THIRD FORM SECTION ------------> */}
          <section
            className={`${
              selectedSection !== "third" && "scale-0 h-0"
            } flex flex-col`}
          >
            {/* <--- FORM INPUTS ----> */}
            <div>
              <label>
                Selecciona el tipo de contratación que deseas realizar
              </label>
              <RadioGroup
                orientation="horizontal"
                className="bg-gray-100 rounded-xl mt-4 px-3 py-5"
              >
                <div className="flex flex-col gap-6 mr-4">
                  <Radio value="fijo">Fijo</Radio>
                  <Radio value="arrendamiento">Arrendamiento</Radio>
                </div>
                <div className="flex flex-col gap-6 mr-4">
                  <Radio value="ops">OPS</Radio>
                  <Radio value="outsourcing">OutSourcing</Radio>
                </div>
                <div className="flex items-start mr-4">
                  <Radio value="freelance">Freelance</Radio>
                </div>
              </RadioGroup>
            </div>
            {/* <--- BUTTON VALIDATE FORM ---> */}
            <div className="flex justify-end mt-4">
              <button
                onClick={(event) => {
                  handleValidateForm(event, "fourth");
                }}
                className="bg-sky hover:bg-red-500 font-bold text-white rounded-lg transition-all duration-500 p-2"
              >
                Siguiente
              </button>
            </div>
          </section>
          {/* <------------ FOURTH FORM SECTION ------------> */}
          <section
            className={`${
              selectedSection !== "fourth" && "scale-0 h-0"
            } flex flex-col`}
          >
            {/* <--- FORM INPUTS ----> */}
            <div>
              <label>Selecciona las tecnologías que solicitas</label>
              <RadioGroup
                orientation=""
                className="bg-gray-100 rounded-xl mt-4 px-3 py-5"
              >
                <div className="flex flex-wrap gap-8">
                  {techs.map((tech) => (
                    <Radio key={tech} value={tech.toLowerCase()}>
                      {tech}
                    </Radio>
                  ))}
                </div>
              </RadioGroup>
            </div>
            {/* <--- BUTTON VALIDATE FORM ---> */}
            <div className="flex justify-end mt-4">
              <button
                onClick={(event) => {
                  handleValidateForm(event, "fifth");
                }}
                className="bg-sky hover:bg-red-500 font-bold text-white rounded-lg transition-all duration-500 p-2"
              >
                Siguiente
              </button>
            </div>
          </section>
          {/* <------------ FIFTH FORM SECTION ------------> */}
          <section
            className={`${
              selectedSection !== "fifth" && "scale-0 h-0"
            } flex flex-col`}
          >
            {/* <--- FORM INPUTS ----> */}
            <div>
              <label>Selecciona el nivel de inglés que solicitas</label>
              <RadioGroup
                orientation=""
                className="bg-gray-100 rounded-xl mt-4 px-3 py-5"
              >
                <div className="flex flex-wrap gap-10">
                  {englishLevels.map((level) => (
                    <Radio key={level} value={level.toLowerCase()}>
                      {level}
                    </Radio>
                  ))}
                </div>
              </RadioGroup>
            </div>
            {/* <--- BUTTON VALIDATE FORM ---> */}
            <div className="flex justify-end mt-4">
              <button
                onClick={(event) => {
                  handleValidateForm(event, "sixth");
                }}
                className="bg-sky hover:bg-red-500 font-bold text-white rounded-lg transition-all duration-500 p-2"
              >
                Siguiente
              </button>
            </div>
          </section>
          {/* <------------ SIXTH FORM SECTION ------------> */}
          <section
            className={`${
              selectedSection !== "sixth" && "scale-0 h-0"
            } flex flex-col`}
          >
            {/* <--- FORM INPUTS ----> */}
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label>Cantidad de desarrolladores de necesitas</label>
                <RadioGroup className="bg-gray-100 rounded-xl mt-4 p-5 h-[14rem]">
                  {devsCantity.map((cantity) => (
                    <Radio key={cantity} value={cantity.toLowerCase()}>
                      {cantity}
                    </Radio>
                  ))}
                </RadioGroup>
              </div>
              <div className="flex flex-col h-[10rem]">
                <label>Selecciona la duración del contrato</label>
                <RadioGroup className="bg-gray-100 rounded-xl mt-4 px-3 py-5">
                  {contractTime.map((time) => (
                    <Radio key={time} value={time.toLowerCase()}>
                      {time}
                    </Radio>
                  ))}
                </RadioGroup>
              </div>
            </div>
            {/* <--- BUTTON VALIDATE FORM ---> */}
            <div className="flex justify-end mt-4">
              <button
                onClick={(event) => {
                  handleValidateForm(event, "last");
                }}
                className="bg-yellow hover:bg-red-500 font-bold text-white rounded-lg transition-all duration-500 p-2"
              >
                Validar
              </button>
            </div>
          </section>
          {/* <------------ LAST FORM SECTION ------------> */}
          <section
            className={`${
              selectedSection !== "last" && "scale-0 h-0"
            } flex flex-col`}
          >
            {/* <--- FORM INPUTS ----> */}
            <div className="grid md:grid-cols-2 gap-3">
              <div className="col-span-2 md:col-span-1 flex flex-col justify-end gap-1">
                <label>Pon tu código aquí</label>
                <input
                  className="bg-gray-200 border-2 focus:border-yellow outline-none rounded-lg p-2"
                  type="text"
                  placeholder="Ingresa el código"
                />
              </div>
              <div className="flex items-end">
                <button
                  className="bg-yellow w-[100px] h-[45px] font-bold rounded-lg hover:bg-red-500 hover:text-white transition-all duration-500 p-2"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
            </div>
            <div className="mt-5">
              <p>
                ¿No ha llegado tu código?{" "}
                <span className="text-sky cursor-pointer">Reenviar código</span>
              </p>
            </div>
          </section>
        </form>
      </main>
    </div>
  );
};

export default FormRecruitment;
