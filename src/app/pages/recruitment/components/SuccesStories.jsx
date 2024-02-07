import "../styles.css";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectCards } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import Image from "next/image";

//Import assets
import prueba from "@/../../public/img/banner.jpg";

const success_stories = [
  {
    title: "Mujeres transforman futuro con Amaris",
    description: "Mujeres de Campuslands se incorporan a la empresa multinacional Amaris para crear soluciones mediante la programación",
    img:prueba
  },
  {
    title: "Campers rompen barreras en Bucaramanga",
    description: "10 jóvenes ingresan al ámbito laboral en empresas de la ciudad de Bucaramanga, desempeñandose como programadores ",
    img:prueba
  },
  {
    title: "5 jóvenes desarrolladores, una misión remota",
    description: "Cinco campers se unen a empresas multinacionales trabajando de forma remota como desarrolladores.",
    img:prueba
  },
]

function SuccesStories() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 py-5 px-10 my-20 overflow-hidden">
      <div className="flex justify-center items-center order-last lg:order-first mt-5 lg:mt-0">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper w-[15rem] h-[20rem] sm:w-[23rem] sm:h-[20rem] md:w-[25rem] md:h-[23rem] lg:w-[30rem] lg:h-[28rem] xl:w-[33rem]"
        >
          {
            success_stories.map((success_storie, index) => (
              <SwiperSlide className="relative" key={index}>
              <Image
                className="w-full h-full object-cover"
                src={success_storie.img}
                alt="imagen prueba"
              />
              <div className={`absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-[#000087] border-2 opacity-70`}></div>
              <div className="absolute top-0 left-0 bottom-0 right-0 p-5 flex flex-col justify-end">
                <h3 className="text-yellow-500 text-xl sm:text-2xl font-bold uppercase">
                  {success_storie.title}
                </h3>
                <p className="text-white text-md text-normal sm:font-semibold">
                  {success_storie.description}
                </p>
              </div>
            </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
      <div className=" w-full flex flex-col items-center lg:items-end gap-3">
        <div className="text-center">
          <h1 className=" m:text-end text-[#000087] text-5xl md:text-6xl md:text-7xl font-extrabold">
            Nuestros casos de
          </h1>
          <h1 className="text-yellow-500 text-8xl md:text-9xl font-extrabold">
            éxito
          </h1>
        </div>
        <p className="text-justify sm:text-end text-MD md:text-xl max-w-[1000px]">
          Nuestra sección de casos de éxito destaca cómo nuestros estudiantes
          han superado desafíos, alcanzado metas ambiciosas y construido
          carreras sólidas en programación. Cada historia refleja el poder de
          nuestra educación de calidad y el compromiso con el crecimiento
          personal.
        </p>
      </div>
    </div>
  );
}

export default SuccesStories;
