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

//fonts imports
import localFont from "next/font/local";
const stretchPro = localFont({ src: "../../public/fonts/StretchPro.otf" });

// Components imports
import NavigationBar from "@/components/NavigationBar";
import Tecnologias from "@/components/Tecnologias";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/react";


function page() {
  return (
    <>
    {/* <--------- ********* NAVIGATION BAR ********* ---------> */}
      <NavigationBar />
      {/* <------- *********** HEADER ********** -------> */}
      <section className="grid grid-cols-2 md:grid-cols-4 place-items-center lg:mt-10">
        {/* first headers section */}
        <div className="flex flex-col gap-2 md:order-first pl-5 lg:pl-20">
          <div className="relative h-20">
            <span className="absolute w-14 h-12 bottom-0 left-0 bg-[#F4B422]"></span>
            <span className="absolute w-14 h-12 bottom-0 left-6 bg-[#00AA80]"></span>
            <span className="absolute w-14 h-12 bottom-0 left-12 bg-[#000087]"></span>
          </div>
          <div className="flex flex-col gap-2">
            <p>
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
        >
          {/* LLEGUEMOS MÁS */}
          <div className="flex gap-5 text-2xl sm:text-3xl md:text-3xl lg:text-4xl">
            <div className="flex">
              <p>L</p>
              <p>LEGUEMOS</p>
            </div>
            <div>
              <p> MÁS</p>
            </div>
          </div>
          {/* ALLÁ DE LAS */}
          <div className="flex justify-center text-2xl sm:text-3xl md:text-3xl lg:text-4xl gap-5">
            <div className="flex">
              <p>AL</p>
              <p>LÁ</p>
            </div>
            <div>
              <p>DE LAS</p>
            </div>
          </div>
          <div className="flex justify-center text-2xl sm:text-3xl md:text-3xl lg:text-4xl">
            <p>ESTREL</p>
            <p>LAS</p>
          </div>
          <div className="hidden lg:flex absolute -right-1 bottom-1 border border-black rounded-3xl px-5">
            <Image
              className="w-8 h-7"
              src={right_arrow}
              alt="campuslands logo"
            />
          </div>
        </div>
        {/* <------ Last headers section ------> */}
        <div className="">
          <Image
            className="w-40 h-40 md:w-40 md:h-40 lg:w-44top lg:h-44"
            src={logo}
            alt="campuslands logo"
          />
        </div>
      </section>

      {/* <------------ *********** SERVICES SECTION ********** ----------> */}
      <section className="flex flex-wrap justify-around items-center gap-y-20 mt-28 md:px-5 lg:px-10">
        {/* <-------- First card -----------> */}
        <div className="flex flex-col items-center">
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
        <div className="flex flex-col items-center">
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

            {/* <----------- black dial of the second card ---------> */}
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
        <div className="flex flex-col items-center">
          <div className="relative h-80 w-80 md:w-96 rounded-xl">
            <div className="absolute w-full h-40 bg-[#F4B422] bottom-0 rounded-xl"></div>
            <Image
              className="absolute"
              src={camperWoman}
              style={{ height: "440px", bottom: "0px" }}
            />
          </div>
          <p className="text-black text-lg font-bold py-2">
            Contrata nuestro talento
          </p>
        </div>
      </section>

      {/* <------------ ***********   STUDY WITH US  ********** ----------> */}
      <Tecnologias/>
      
      {/* <----------- Sponsorship section  -----------> */}
      <section className="flex justify-center items-center my-10">
        {/* <------ Desktop section ------> */}
        <div className="hidden lg:flex relative">
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
          {/* <---- Image of camper woman ----> */}
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
      </section>
    </>
  );
}

export default page;
