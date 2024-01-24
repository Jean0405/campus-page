"use client";
import { useState } from "react";

import ask from "../../../../../public/assets/required_icon.svg";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import calendar from "../../../../../public/assets/calendar_icon.svg";
import { InsertCode } from "./InsertCode";
import insertCode from "../../../../../public/assets/insertCode.svg";
import requireCode from "../../../../../public/assets/requireCode.svg";
import { RequireCode } from "./RequireCode";
import { sendExistedUserVisit } from "@/utils/visits";


export const ExistedUserForm = () => {
  const [showForm, setShowForm] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [form, setForm] = useState({
    tipo_doc: localStorage.getItem('tipo'),
    doc: localStorage.getItem('doc'),
    interes: "",
    fecha_visita: "",
    vehiculo: "",
    codigo: localStorage.getItem('codigo'),
  });

  const [buttonPressed, setButtonPressed] = useState(null);
  const changeView = (buttonName) => {
    setButtonPressed(buttonName);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let options = {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        tipo_doc: form.tipo_doc,
        doc: form.doc,
        interes: form.interes,
        fecha_visita: form.fecha_visita,
        ...(isChecked && { vehiculo: form.vehiculo }),
        codigo: form.codigo
      }),
    };
    sendExistedUserVisit(options)
  };

  return (
    showForm ? (
      <div className="h-full max-w-lg mt-[-20px]">
        <p className="w-full ms-2"> llenando el siguiente formulario</p>
        <div className="md:max-w-xl max-w-xs py-5 ">
          <div>
            <form
              onSubmit={handleSubmit}
              action="POST"
              method="POST"
              className="space-y-3 pt-5 "
            >
              <div className="grid grid-cols-[1.5fr_1fr]">
                <div className="">
                  <label htmlFor="fecha_visita">Fecha de la visita
                    <Image
                      className="w-2 h-2 inline mb-3 ms-1"
                      src={ask}
                      alt="campuslands logo"
                    />
                  </label>
                  <div className="flex items-center  bg-[#E7E7E7]">
                    <div className="flex items-center relative ">
                      <Image
                        className="w-6 h-6  ms-3 z-20  "
                        src={calendar}
                        alt="campuslands logo"
                      />
                      <svg
                        className="absolute left-12"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1"
                        height="30"
                        viewBox="0 0 1 40"
                        fill="none"
                      >
                        <line
                          x1="0.5"
                          y1="2.18557e-08"
                          x2="0.499998"
                          y2="40"
                          stroke="#515151"
                        />
                      </svg>
                    </div>

                    <input
                      onChange={(e) =>
                        setForm({ ...form, fecha_visita: e.target.value })
                      }
                      className="w-full  rounded-sm bg-[#E7E7E7] p-3 text-sm ps-8 outline-none"
                      type="datetime-local"
                      id="fecha_visita"
                      name="fecha_visita"
                      min={new Date().toISOString().slice(0, 16)}
                      required
                    />
                  </div>
                </div>
                <div className="ms-5">
                  <label htmlFor="interes" className="block ">
                    Interes{" "}
                    <Image
                      className="w-2 h-2 inline mb-3"
                      src={ask}
                      alt="campuslands logo"
                    />
                  </label>
                  <select
                    name="interes"
                    id="interes"
                    onChange={(e) =>
                      setForm({ ...form, interes: e.target.value })
                    }
                    className=" w-full  rounded-sm py-[11.5px]  bg-[#E7E7E7] sm:text-sm -5"
                    required
                  >
                    <option value=""></option>
                    <option value="Empleabilidad">Empleabilidad</option>
                    <option value="Networking">Networking</option>
                    <option value="Conocer">Conocer</option>
                    <option value="Negocios">Negocios</option>
                  </select>
                </div>

              </div>

              <div className="grid grid-cols-[0.5fr_1fr]">
                <div className="">
                  <label htmlFor="name" className="block">
                    Vehiculo{" "}
                  </label>

                  <label className="relative inline-flex items-center mb-5 cursor-pointer">
                    <input
                      type="checkbox"
                      name="vehiculo"
                      onChange={() => setIsChecked(!isChecked)}
                      checked={isChecked}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className={`ms-5 ${isChecked ? "" : "hidden"}`}>
                  <label htmlFor="HeadlineAct" className="block ">
                    Tipo{" "}
                    <Image
                      className="w-2 h-2 inline mb-3"
                      src={ask}
                      alt="campuslands logo"
                    />
                  </label>
                  <select
                    onChange={(e) =>
                      setForm({ ...form, vehiculo: e.target.value })
                    }
                    value={form.vehiculo}
                    name="vehiculo"
                    id="vehiculo"
                    className=" w-full rounded-sm py-[11.5px] bg-[#E7E7E7] sm:text-sm -5"
                  >
                    <option value=""></option>
                    <option value="Automovil">Automovil</option>
                    <option value="Motocicleta">Motocicleta</option>
                  </select>
                </div>
              </div>
              <hr />
              <h3 className="font-bold">Condiciones</h3>
              <div className="bg-[#FF6161] text-transparent rounded-full inline-block ">
                {"***"}
              </div>
              <p className="inline-block ms-2">No se permiten mascotas</p>
              <br />
              <div className="bg-[#00AA80] text-transparent rounded-full inline-block ">
                {"***"}
              </div>
              <p className="inline-block ms-2 ">Tener una buena presentación</p>
              <br />
              <div className="bg-[#00AA80] text-transparent rounded-full inline-block ">
                {"***"}
              </div>
              <p className="inline-block ms-2 ">Traer Documento en Fisico</p>
              <hr />

              <div className="flex items-center">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-800 focus:ring-2 dark:bg-blue-700 dark:border-blue-600"
                />
                <label
                  htmlFor="link-checkbox"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Aceptar{" "}
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    terminos y condiciones
                  </a>{" "}
                </label>
              </div>
              <div className="flex flex-col gap-3 mt-10">
                <Button
                  type="submit"
                  className="block w-full rounded-md bg-[#A5A6F6] text-lg text-white "
                >
                  Solicitar Visita
                </Button>
                <Button
                  onClick={() =>
                    setShowForm(false)
                  }
                  className="block w-full rounded-md bg-[#FF5C5C] text-lg text-white "
                >
                  Atras
                </Button>
              </div>
            </form>
          </div>

        </div>
      </div>
    ) : (
      buttonPressed === "insertCode" ? (
        <InsertCode />
      ) : buttonPressed === "requireCode" ? (
        <RequireCode />
      ) : (
        <>
          <p className="w-full ms-1 mt-[-20px]">Ingresa el código de acceso para sacar tu cita, si no cuentas con uno puedes solicitarlo</p>
          <Button
            className="bg-[#00AA80] flex flex-col  text-white text-md rounded-lg py-14 mb-8 mt-5"
            as="a"
            onClick={() => changeView("insertCode")}
          >
            <Image src={insertCode} />
            ¡Ya tengo codigo!
          </Button>
          <Button
            className="bg-[#A5A6F6] flex flex-col  text-000000 text-md rounded-lg py-14"
            as="a"
            onClick={() => changeView("requireCode")}
          >
            <Image src={requireCode} />
            Solicitar codigo de visita
          </Button>
        </>
      )
    )
  );
};
