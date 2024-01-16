"use client";
//Import AOS
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Icons imports
import {
  faArrowDown,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Assets imports
import logo from "../../public/img/logoCampus.svg";
import C_campus from "../../public/img/C_campus.png";
import Ellipse from "../../public/img/Ellipse.png";
import star_icon from "../../public/img/star_icon.png";
import camperWoman from "../../public/img/mujerCamper.png";
import right_arrow from "../../public/assets/right_arrow.png";
import camperWoman2 from "../../public/img/mujerCamper2.png";
import hombreSentado from "../../public/img/hombreSentado.png";
import right_arrow_white from "../../public/assets/right_arrow_white.png";

//fonts imports
import localFont from "next/font/local";
const stretchPro = localFont({ src: "../../public/fonts/StretchPro.otf" });

// Components imports
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import NavigationBar from "@/components/NavigationBar";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";

function page() {
  useEffect(() => {
    AOS.init({ duration: 900 });
  });

  return (
    <>
      {/* <--------- ********* NAVIGATION BAR ********* ---------> */}
      <NavigationBar />
      <div className="px-5 lg:px-10 m-auto" style={{ maxWidth: "1600px" }}>
        {/* <------- *********** HEADER ********** -------> */}
        <section className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-y-5 lg:mt-10 lg:px-5">
          {/* first headers section */}
          <div
            className="flex flex-col gap-2 md:order-first"
            data-aos="zoom-in"
          >
            <div className="relative h-20">
              <span className="absolute w-14 h-12 bottom-0 lg:top-3 left-0 bg-[#F4B422]"></span>
              <span className="absolute w-14 h-12 bottom-0 lg:top-3 left-6 bg-[#00AA80]"></span>
              <span className="absolute w-14 h-12 bottom-0 lg:top-3 left-12 bg-[#000087]"></span>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-md sm:text-lg lg:text-md xl:text-xl">
                Somos un centro de entrenamiento de alto rendimiento para
                programadores
              </p>
              <Link
                className="flex items-center font-extrabold gap-2 hover:text-[#00AA80]"
                href="#"
              >
                <p>CONÓCENOS</p>
                <FontAwesomeIcon height={14} icon={faArrowDown} />
              </Link>
            </div>
          </div>
          {/* second headers section */}
          <div
            className={`${stretchPro.className} relative col-span-2 flex flex-col order-first mt-5`}
            data-aos="zoom-in"
          >
            <div className="flex justify-center text-3xl sm:text-3xl lg:text-4xl xl:text-5xl pb-1">
              <p className="text-center tracking-tight">SOBREPASA<br/>LAS BARRERAS<br/>DEL ESPACIO</p>
              <div className="hidden lg:flex absolute -right-11 bottom-3 xl:-right-9 xl:bottom-4 border border-black rounded-3xl px-4">
              <Image
                className="w-6 h-6 xl:w-8 xl:h-7"
                src={right_arrow}
                alt="campuslands logo"
              />
            </div>
            </div>
          </div>
          {/* <------ Last headers section ------> */}
          <div className="relative w-full h-40" data-aos="zoom-in">
            <div className="absolute w-40 h-40 lg:w-44 lg:h-44 right-1 bottom-0">
              <Image src={logo} alt="campuslands logo" />
            </div>
          </div>
        </section>

        {/* <------------ *********** SERVICES SECTION ********** ----------> */}
        <section className="flex flex-wrap justify-around items-center gap-x-10 gap-y-20 mt-28">
          {/* <-------- First card -----------> */}
          <div className="flex flex-col items-center" data-aos="zoom-in">
            <div className="relative h-80 w-80 bg-black rounded-xl overflow-hidden">
              <Image
                className="C_campus absolute -top-24 -left-2"
                src={C_campus}
              />
              <Image
                className="ellipse absolute w-28 h-28 top-3 right-8 z-10"
                src={Ellipse}
              />
            </div>
            <p className="text-black text-lg font-bold py-2">Conócenos</p>
          </div>
          {/* <--------- Second card ---------> */}
          <div className="flex flex-col items-center" data-aos="zoom-in">
            <div className="relative h-80 w-80 border border-black rounded-xl">
              <Image
                className="absolute w-48 h-48 top-1 -left-6"
                src={star_icon}
              />
              <span className="absolute top-24 left-11 flex justify-center items-center text-9xl font-bold">
                100
              </span>
              <span
                className="absolute text-4xl font-bold"
                style={{ top: "106px", right: "35px" }}
              >
                %
              </span>
              <span
                className="absolute text-2xl font-medium"
                style={{ bottom: "70px", left: "40px" }}
              >
                Formación gratuita
              </span>
              <span
                className="absolute w-28 h-1 bg-black"
                style={{ bottom: "50px", left: "100px" }}
              ></span>

              {/* black dial of the second card */}
              <span className="absolute w-24 h-24 -right-5 -top-5 bg-black rounded-full"></span>
              <div className="absolute grid place-items-center w-24 h-24 -right-5 -top-5 rounded-full">
                <div className="relative flex flex-col pl-2">
                  <span className="text-white text-sm">Ver</span>
                  <span className="text-white text-sm">Explorar</span>
                </div>
              </div>
              <span
                className="absolute bg-white"
                style={{
                  right: "54px",
                  top: "28px",
                  width: "22px",
                  height: "1.7px",
                }}
              ></span>
              <span
                className="absolute bg-black"
                style={{
                  right: "76px",
                  top: "28px",
                  width: "60px",
                  height: "1.7px",
                }}
              ></span>
            </div>
            <p className="text-black text-lg font-bold py-2">Estudio</p>
          </div>

          {/* <----------- Last card ----------> */}
          <div className="flex flex-col items-center" data-aos="zoom-in">
            <div className="relative h-80 w-80 rounded-xl">
              <div className="absolute w-80 h-40 bg-[#F4B422] bottom-0 rounded-xl"></div>
              <Image
                className="absolute"
                src={camperWoman}
                style={{ height: "360px", bottom: "0px" }}
              />
            </div>
            <p className="text-black text-lg font-bold py-2">
              Contrata nuestro talento
            </p>
          </div>
        </section>
      </div>

      {/* <------------ *********** STUDY WITH US ********** ----------> */}
      <div className="Main flex justify-center mt-28 mb-10 ml-40 mr-40" data-aos="zoom-in">
        <div className="mainLeft">
          <h2
            className={`${stretchPro.className} relative text-6xl mb-8 whitespace-nowrap`}
          >
            ¿QUIERES ESTUDIAR
            <br /> CON NOSOTROS?{" "}
          </h2>
          <p className="tracking-wide text-2xl leading-9">
            Nuestro programa de entrenamiento de 8 a 10 meses, ofrece un sistema
            intensivo integral para Desarrolladores de Software, basado en
            Software Skills, Habilidades Socioemocionales e Inglés donde se
            dasarrollan las siguientes tecnologias:
          </p>
            <Carousel />
        </div>
        <div className="middle relative flex flex-col justify-center items-center mr-24">
          <Image
            className="hombreSentado w-unit-8xl h-96"
            src={hombreSentado}
            alt="Hombre sentado"
          />
          <Button
            radius="full"
            color="warning"
            className="text-white mt-6 h-14 font-extrabold text-large"
          >
            Unete Ahora{" "}
            <Image alt="..." className="w-5 ml-2" src={right_arrow_white} />{" "}
          </Button>
        </div>
        <p
          className="fullStack flex items-center justify-center rotate-180 font-extrabold "
          style={{ writingMode: "vertical-rl" }}
        >
          FULL STACK
        </p>
      </div>

      {/* <------- ******* SPONSORSHIP SECTION ******* -----------> */}
      <section
        className="flex justify-center items-center my-10 m-auto"
        style={{ maxWidth: "1600px" }}
      >
        {/* <------ SPONSORSHIP DESKTOP SECTION ------> */}
        <div className="hidden lg:flex relative" data-aos="zoom-in">
          {/* <--- Left text ---> */}
          <p
            className={`${stretchPro.className} absolute text-4xl font-bold -z-10`}
            style={{ top: "90px", left: "-240px" }}
          >
            CONTRATAR
          </p>
          <p
            className={`${stretchPro.className} absolute text-4xl font-bold -z-10`}
            style={{ top: "140px", left: "-340px" }}
          >
            NUESTROOS
          </p>
          <p
            className={`${stretchPro.className} absolute text-4xl font-bold -z-10`}
            style={{ top: "190px", left: "-272px" }}
          >
            CAMPERS
          </p>
          <Button
            className="absolute bg-black text-white text-md rounded-3xl w-32"
            as={Link}
            href="#"
            style={{ top: "250px", left: "-250px" }}
          >
            Ver <FontAwesomeIcon icon={faArrowRightLong} width={20} />
          </Button>
          <Image className="w-80" src={camperWoman2} />
          {/* <--- Right text ---> */}
          <p
            className={`${stretchPro.className} absolute text-4xl font-bold -z-10`}
            style={{ top: "90px", right: "-270px" }}
          >
            PATROOCINA
          </p>
          <p
            className={`${stretchPro.className} absolute text-3xl font-bold -z-10`}
            style={{ top: "140px", right: "-300px" }}
          >
            TRANSFORMA
          </p>
          <Button
            className="absolute bg-black text-white text-md rounded-3xl w-36"
            as={Link}
            href="#"
            style={{ top: "260px", right: "-335px" }}
          >
            Patrocinar <FontAwesomeIcon icon={faArrowRightLong} width={20} />
          </Button>

          {/* <--- Sponsorship items left ---> */}
          <span
            className="absolute sponsorship_item_left_1 w-14 h-9 bg-[#A5A6F6] rounded-3xl -z-10"
            style={{ top: "300px", left: "-70px" }}
          ></span>
          <span
            className="absolute sponsorship_item_left_2 w-48 h-9 bg-[#00AA80] rounded-3xl -z-10"
            style={{ top: "345px", left: "-150px" }}
          ></span>
          {/* <--- Sponsorship items right ---> */}
          <span
            className="absolute sponsorship_item_right_1 w-64 h-9 bg-[#00AA80] rounded-3xl -z-10"
            style={{ top: "216px", right: "-200px" }}
          ></span>
          <span
            className="absolute sponsorship_item_right_2 w-44 h-9 bg-[#A5A6F6] rounded-3xl -z-10"
            style={{ top: "262px", right: "-180px" }}
          ></span>
          <span
            className="absolute sponsorship_item_right_3 w-24 h-9 bg-[#5E3AE2] rounded-3xl -z-10"
            style={{ top: "308px", right: "-110px" }}
          ></span>
          <span
            className="absolute sponsorship_item_right_4 w-11 h-9 bg-[#00AA80] rounded-3xl -z-10"
            style={{ top: "308px", right: "-156px" }}
          ></span>
        </div>
        {/* <------- SPONSORSHIP MOBILE SECTION -------> */}
        <div className="relative lg:hidden w-screen flex flex-col justify-center items-center overflow-hidden">
          <div
            className="flex flex-col text-2xl sm:text-2xl md:text-4xl z-10"
            data-aos="zoom-in"
          >
            <p className={`${stretchPro.className}`}>PATROOCINA</p>
            <p className={`${stretchPro.className}`}>TRANSFORMA</p>
            <Button
              className="bg-black text-white rounded-3xl w-36 mt-2"
              as={Link}
              href="#"
            >
              Patrocinar <FontAwesomeIcon icon={faArrowRightLong} width={20} />
            </Button>
          </div>
          <div className="relative w-full h-80 flex justify-center">
            <Image
              className="absolute w-64 -top-9"
              src={camperWoman2}
              data-aos="zoom-in"
            />
            <div className="absolute w-64 -top-10">
              {/* <--- Sponsorship items left ---> */}
              <span
                className="absolute w-48 h-9 bg-[#A5A6F6] rounded-3xl -z-10"
                style={{ top: "205px", left: "-200px" }}
                data-aos="zoom-in"
              ></span>
              <span
                className="absolute w-48 h-9 bg-[#00AA80] rounded-3xl -z-10"
                style={{ top: "250px", left: "-90px" }}
                data-aos="zoom-in"
              ></span>
              {/* <--- Sponsorship items right ---> */}
              <span
                className="absolute w-64 h-9 bg-[#00AA80] rounded-3xl -z-10"
                style={{ top: "160px", right: "-150px" }}
                data-aos="zoom-in"
              ></span>
              <span
                className="absolute w-24 h-9 bg-[#5E3AE2] rounded-3xl -z-10"
                style={{ top: "205px", right: "-90px" }}
                data-aos="zoom-in"
              ></span>
            </div>
          </div>
          <div
            className="flex flex-col items-end text-2xl sm:text-2xl md:text-4xl mt-6 z-10"
            data-aos="zoom-in"
          >
            <Button
              className="bg-black text-white rounded-3xl w-32 mb-2"
              as={Link}
              href="#"
            >
              Ver <FontAwesomeIcon icon={faArrowRightLong} width={20} />
            </Button>
            <p className={`${stretchPro.className}`}>CONTRATAR</p>
            <p className={`${stretchPro.className}`}>A NUESTROOS</p>
            <p className={`${stretchPro.className}`}>CAMPERS</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default page;
