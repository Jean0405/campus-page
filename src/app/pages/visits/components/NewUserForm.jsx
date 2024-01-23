"use client"
import { useState } from "react";

import Image from "next/image";
import { Button } from "@nextui-org/react";

import ask from "../../../../../public/assets/required_icon.svg";
import calendar from "../../../../../public/assets/calendar_icon.svg";
import id from "../../../../../public/assets/id.svg";

import whatsapp from "../../../../../public/assets/whatsapp.svg";
export const NewUserForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    edad: "",
    interes: "",
    tel: "",
    doc: "",
    tipo_doc: "",
    empresa: "",
    cargo: "",
    fecha_visita: "",
    vehiculo: "",
    codigo: localStorage.getItem('codigo'),
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
        doc: form.doc,
        tipo_doc: form.tipo_doc,
        empresa: form.empresa,
        fecha_visita: form.fecha_visita,
        cargo: form.cargo,
        ...(isChecked && { vehiculo: form.vehiculo }),
        codigo: form.codigo,
      }),
      
    };
    try {
      const response = await (
        await fetch("http://192.168.110.106:5017/visitas/nuevos", options)
      ).json();
      if (response.status === 200) {
        setForm({
          tipo_doc: '',
          doc: '',
          codigos: ''
        });
        console.log(response);
        localStorage.clear();
      } else {
        localStorage.clear();

        console.error(response.message);
      }
    } catch (err) {
      console.error("Error al enviar el formulario:", err);
    }
  };

  return (
    <div className="h-full max-w-lg  mt-[-40px]">

      <p> llenando el siguiente formulario</p>

      <div className="md:max-w-xl max-w-xs py-5 ">
        <div>
          <form
            onSubmit={handleSubmit}
            action="POST"
            method="POST"
            className="space-y-3 pt-5 "
          >
           <div>
              <label htmlFor="name" className="block">
                Nombre{" "}
                <Image
                  className="w-2 h-2 inline mb-3"
                  src={ask}
                  alt="campuslands logo"
                />
              </label>
              <input
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                className="w-full rounded-sm bg-[#E7E7E7] p-3 text-sm"
                type="text"
                name="nombre"
                id="nombre"
                required
              />
           </div>
            <div className="grid grid-cols-[0.5fr_1fr]">
              <div>
                <label htmlFor="age">
                  Edad{" "}
                  <Image
                    className="w-2 h-2 inline mb-3"
                    src={ask}
                    alt="campuslands logo"
                  />
                </label>
                <input
                  onChange={(e) => setForm({ ...form, edad: e.target.value })}
                  className="w-full rounded-sm bg-[#E7E7E7] p-3 text-sm"
                  type="number"
                  name="edad"
                  id="edad"
                  required
                />
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

            <div className="">
              <label htmlFor="name">
                Telefono{" "}
                <Image
                  className="w-2 h-2 inline mb-3"
                  src={ask}
                  alt="campuslands logo"
                />
              </label>
              <div className="flex items-center  bg-[#E7E7E7]">
                <div className="flex items-center relative ">
                  <Image
                    className="w-8 h-8  ms-2  "
                    src={whatsapp}
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
                  onChange={(e) => setForm({ ...form, tel: e.target.value })}
                  className="w-full  rounded-sm bg-[#E7E7E7] p-3 text-sm ps-8 outline-none"
                  type="phone"
                  id="tel"
                  name="tel"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-[0.5fr_1fr]">
              <div>
                <label htmlFor="tipo_doc" className="block ">
                  Tipo doc{" "}
                  <Image
                    className="w-2 h-2 inline mb-3"
                    src={ask}
                    alt="campuslands logo"
                  />
                </label>
                <select
                  name="tipo_doc"
                  id="tipo_doc"
                  onChange={(e) =>
                    setForm({ ...form, tipo_doc: e.target.value })
                  }
                  className=" w-full  rounded-sm py-[11.5px]  bg-[#E7E7E7] sm:text-sm -5"
                  required
                >
                  <option value=""></option>
                  <option value="CC">C.C</option>
                  <option value="TI">T.I</option>
                  <option value="PP">P.P</option>
                </select>
              </div>

              <div className="ms-5">
                <label htmlFor="name">
                  No. Documento{" "}
                  <Image
                    className="w-2 h-2 inline mb-3"
                    src={ask}
                    alt="campuslands logo"
                  />
                </label>
                <div className="flex items-center  bg-[#E7E7E7]">
                  <div className="flex items-center relative ">
                    <Image
                      className="w-6 h-6  ms-3 z-20  "
                      src={id}
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
                    onChange={(e) => setForm({ ...form, doc: e.target.value })}
                    className="w-full  rounded-sm bg-[#E7E7E7] p-3 text-sm ps-8 outline-none"
                    type="text"
                    id="doc"
                    name="doc"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-[0.5fr_1fr] grid-cols-1">
              <div className="">
                <label htmlFor="name">
                  Fecha de la visita{" "}
                  <Image
                    className="w-2 h-2 inline mb-3"
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
                    required
                  />
                </div>
              </div>

              <div className="md:ms-5 m-0">
                <label htmlFor="empresa" className="block ">
                  Empresa
                </label>
                <input
                  onChange={(e) =>
                    setForm({ ...form, empresa: e.target.value })
                  }
                  className="w-full rounded-sm bg-[#E7E7E7] p-3 text-sm"
                  type="text"
                  id="empresa"
                  name="empresa"
                />
              </div>
            </div>
           <div>
              <label htmlFor="cargo" className="block">
                Cargo empresarial

              </label>
              <input
                onChange={(e) => setForm({ ...form, cargo: e.target.value })}
                className="w-full rounded-sm bg-[#E7E7E7] p-3 text-sm"
                type="text"
                name="cargo"
                id="cargo"

              />
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
                className="block w-full rounded-md bg-[#ECAC22] text-lg text-white "
              >
                Enviar
              </Button>
              <Button
                onClick={() => (window.location.href = "/pages/visits")}
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
}