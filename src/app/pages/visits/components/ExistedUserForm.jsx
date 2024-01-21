"use client";
import {  useState } from "react";

import Image from "next/image";
import { Button } from "@nextui-org/react";
import calendar from "../../../../../public/assets/calendar_icon.svg";



export const ExistedUserForm = () => {
  const [form, setForm] = useState({
    nombre: "",
    edad: "",
    interes: "",
    tel: "",
    cc: "",
    empresa: "",
    fecha_visita: "",
    vehiculo: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    let options = {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        nombre: form.nombre,
        edad: form.edad,
        interes: form.interes,
        tel: form.tel,
        cc: form.cc,
        empresa: form.empresa,
        fecha_visita: form.fecha_visita,
        ...(isChecked && { vehiculo: form.vehiculo }),
      }),
    };
    try {
      const response = await (
        await fetch("http://192.168.110.106:5017/visitanos", options)
      ).json();
      if (response.status === 200) {
        console.log(response);
      } else {
        console.error(response.message);
      }
    } catch (err) {
      console.error("Error al enviar el formulario:", err);
    }
  };
  return (
    <div className="h-full max-w-lg mt-12">
      <h1 className=" max-w-xl sm:text-7xl text-6xl font-bold">Visítanos</h1>
      <p> llenando el siguiente formulario</p>

      <div className="md:max-w-xl max-w-xs py-5 ">
        <div>
          <form
            onSubmit={handleSubmit}
            action="POST"
            method="POST"
            className="space-y-3 pt-5 "
          >
            <div className="grid md:grid-cols-[0.5fr_1fr] grid-cols-1">
              <div className="">
                <label htmlFor="name">Fecha de la visita</label>
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
                  />
                </div>
              </div>

              <div className="ms-5">
                <label htmlFor="vehiculo" className="block ">
                  Vehiculo
                </label>
                <select
                  name="vehiculo"
                  id="vehiculo"
                  onChange={(e) =>
                    setForm({ ...form, vehiculo: e.target.value })
                  }
                  className=" w-full  rounded-sm py-[11.5px]  bg-[#E7E7E7] sm:text-sm -5"
                >
                  <option value=""></option>
                  <option value="Empleabilidad">Empleabilidad</option>
                  <option value="Networking">Networking</option>
                  <option value="Conocer">Conocer</option>
                  <option value="Negocios">Negocios</option>
                </select>
              </div>
            </div>

            <div className="">
              <label htmlFor="tipoVehivulo" className="block ">
                Tipo de Vehiculo
              </label>
              <select
                name="tipoVehivulo"
                id="tipoVehiculo"
                onChange={(e) =>
                  setForm({ ...form, tipoVehiculo: e.target.value })
                }
                className=" w-full  rounded-sm py-[11.5px]  bg-[#E7E7E7] sm:text-sm -5"
              >
                <option value=""></option>
                <option value="Empleabilidad">Empleabilidad</option>
                <option value="Networking">Networking</option>
                <option value="Conocer">Conocer</option>
                <option value="Negocios">Negocios</option>
              </select>
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
                  (window.location.href = "/pages/visits")
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
  );
};
