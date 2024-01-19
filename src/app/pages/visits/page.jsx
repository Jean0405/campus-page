"use client";

import "./index.css";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import NavigationBar from "@/components/NavigationBar";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import v_slider_img1 from "../../../../public/img/v_slider_img1.png";
import v_slider_img2 from "../../../../public/img/v_slider_img2.png";
import v_slider_img3 from "../../../../public/img/v_slider_img3.png";
import v_slider_img4 from "../../../../public/img/v_slider_img4.png";
import v_slider_img5 from "../../../../public/img/v_slider_img5.png";
import v_slider_img6 from "../../../../public/img/v_slider_img6.png";
import v_slider_img7 from "../../../../public/img/v_slider_img7.png";
import v_slider_img8 from "../../../../public/img/v_slider_img8.png";
import v_slider_img9 from "../../../../public/img/v_slider_img9.png";
import v_slider_img10 from "../../../../public/img/v_slider_img10.png";
import ask from "../../../../public/assets/required_icon.svg";
import whatsapp from "../../../../public/assets/whatsapp.svg";
import calendar from "../../../../public/assets/calendar_icon.svg";
import id from "../../../../public/assets/id.svg";
import Footer from "@/components/Footer";


function SliderInfinite() {

  const [isChecked, setIsChecked] = useState(false);
  const [form, setForm] = useState({
    nombre: '',
    edad: '',
    interes: '',
    tel: '',
    cc: '',
    empresa: '',
    fecha_visita: '',
    vehiculo: '',
  });



  useEffect(() => {
    AOS.init({ duration: 900 });
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    let options = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',

      }),
      body: JSON.stringify({
        nombre: form.nombre,
        edad: form.edad,
        interes: form.interes,
        tel: form.tel,
        cc: form.cc,
        empresa: form.empresa,
        fecha_visita: form.fecha_visita,
        ...(isChecked && { vehiculo: form.vehiculo })
      })
    }
    try {
      const response = await (await fetch('http://192.168.110.106:5017/visitanos', options)).json();
      if (response.status === 200) {
        console.log(response);
      } else {
        console.error(response.message); // Log error message or data
      }
    } catch(err) {
      console.error('Error al enviar el formulario:', err);
    }
    
  };

  return (
    <>
      <NavigationBar />
      <div className="container h-full ">
        {/* FORM */}
        <div className="md:max-w-xl max-w-xs py-5 ">
          <h1 className="max-w-xl sm:text-7xl text-6xl font-bold ">Visítanos</h1>
          <p> llenando el siguiente formulario</p>

          <div>
            <form onSubmit={handleSubmit} action="POST" method="POST" className="space-y-3 pt-5 ">
              <label htmlFor="name">
                Nombre{" "}
                <Image
                  className="w-2 h-2 inline mb-3"
                  src={ask}
                  alt="campuslands logo"
                />
              </label>
              <input
                onChange={e => setForm({ ...form, nombre: e.target.value })}
                className="w-full rounded-sm bg-[#E7E7E7] p-3 text-sm"
                type="text"
                name="nombre"
                id="nombre"
              />
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
                    onChange={e => setForm({ ...form, edad: e.target.value })}
                    className="w-full rounded-sm bg-[#E7E7E7] p-3 text-sm"
                    type="number"
                    name="edad"
                    id="edad"
                  />
                </div>

                <div className="ms-5">
                  <label htmlFor="HeadlineAct" className="block ">
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
                    onChange={e => setForm({ ...form, interes: e.target.value })}
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
                    onChange={e => setForm({ ...form, tel: e.target.value })}

                    className="w-full  rounded-sm bg-[#E7E7E7] p-3 text-sm ps-8 outline-none"
                    type="phone"
                    id="tel"
                    name="tel"
                  />
                </div>
              </div>

              <div className="">
                <label htmlFor="name">
                  Cedula{" "}
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
                    onChange={e => setForm({ ...form, cc: e.target.value })}

                    className="w-full  rounded-sm bg-[#E7E7E7] p-3 text-sm ps-8 outline-none"
                    type="text"
                    id="cc"
                    name="cc"
                  />
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
                      onChange={e => setForm({ ...form, fecha_visita: e.target.value })}

                      className="w-full  rounded-sm bg-[#E7E7E7] p-3 text-sm ps-8 outline-none"
                      type="datetime-local"
                      id="fecha_visita"
                      name="fecha_visita"
                    />
                  </div>
                </div>

                <div className="md:ms-5 m-0">
                  <label htmlFor="empresa" className="block ">
                    Empresa
                  </label>
                  <input
                    onChange={e => setForm({ ...form, empresa: e.target.value })}
                    className="w-full rounded-sm bg-[#E7E7E7] p-3 text-sm"
                    type="text"
                    id="empresa"
                    name="empresa"
                  />
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
                    onChange={e => setForm({ ...form, vehiculo: e.target.value })}
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

              <div>
                <Button
                  type="submit"
                  className="block w-full rounded-md bg-[#ECAC22] text-lg text-white "
                >
                  Enviar
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* SLIDER */}
        <div className="slider-container h-screen">
          <div className="vertical_slider flex justify-center gap-3">
            <div className="slider_track gap-3">
              <div className="slide">
                <Image className="slide_img" src={v_slider_img9} />
              </div>
              <div className="slide">
                <Image className="slide_img" src={v_slider_img8} />
              </div>
              <div className="slide">
                <Image className="slide_img" src={v_slider_img2} />
              </div>
              <div className="slide">
                <Image className="slide_img" src={v_slider_img7} />
              </div>
              <div className="slide">
                <Image className="slide_img" src={v_slider_img6} />
              </div>
            </div>
            <div className="slider_track middle gap-3">
              <div className="slide">
                <Image className="slide_img" src={v_slider_img6} />
              </div>
              <div className="slide">
                <Image className="slide_img" src={v_slider_img10} />
              </div>
              <div className="slide">
                <div className="slide_img text-center text-2xl font-bold">
                  CONOCE
                  <br />
                  NUESTROS
                  <br />
                  ESPACIOS
                </div>
              </div>
              <div className="slide">
                <Image className="slide_img" src={v_slider_img4} />
              </div>
              <div className="slide">
                <Image className="slide_img" src={v_slider_img8} />
              </div>
            </div>
            <div className="slider_track gap-3">
              <div className="slide">
                <Image className="slide_img" src={v_slider_img6} />
              </div>
              <div className="slide">
                <Image className="slide_img" src={v_slider_img1} />
              </div>
              <div className="slide">
                <Image className="slide_img" src={v_slider_img3} />
              </div>
              <div className="slide">
                <Image className="slide_img" src={v_slider_img7} />
              </div>
              <div className="slide">
                <Image className="slide_img" src={v_slider_img5} />
              </div>
            </div>
          </div>
          <Link href="/pages/meetUs" className="explore_link flex justify-center items-center" data-aos="zoom-in">
            Explorar{" "}
            <FontAwesomeIcon className="icon" icon={faArrowRight} width={16} />
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SliderInfinite;
