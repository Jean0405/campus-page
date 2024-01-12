// Icons imports
import { faArrowDown,faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Assets imports
import logo from "../../public/img/logo.png";
import right_arrow from "../../public/assets/right_arrow.png";

// Components imports
import NavigationBar from "@/components/NavigationBar";
import Link from "next/link";
import Image from "next/image";

function page() {
  return (
    <>
      <NavigationBar />
      {/* <------- Header -------> */}
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
            <Link className="flex items-center font-extrabold gap-2 hover:text-[#00AA80]" href="#">
              <p>CONÓCENOS</p>
              <FontAwesomeIcon height={14} icon={faArrowDown} />
            </Link>
          </div>
        </div>
        {/* second headers section */}
        <div className="relative col-span-2 flex flex-col text-center text-5xl sm:text-6xl font-extrabold mt-5 order-first">
          <span>LLEGUEMOS MÁS</span>
          <span>ALLÁ DE LAS</span>
          <span className="relative">
            <p>ESTRELLAS</p>
            <div className="hidden lg:flex absolute right-0 bottom-1 lg:bottom-2 border border-black rounded-3xl px-3">
            <Image
                className="w-10 h-10"
                src={right_arrow}
                alt="campuslands logo"
              />
            </div>
          </span>
        </div>
        {/* <------ Last headers section ------> */}
        <div className="">
          <Image
            className="w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48"
            src={logo}
            alt="campuslands logo"
          />
        </div>
      </section>

      {/* <------------ services section ----------> */}
      <section className="flex flex-wrap justify-around items-center gap-8 my-16">
        <div className="flex flex-col items-center">
          <div className="h-80 w-80 bg-[#000087] rounded-xl"></div>
          <p className="text-black font-bold py-2">Conócenos</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-80 w-80 bg-[#00AA80] rounded-xl"></div>
          <p className="text-black font-bold py-2">Estudio</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-80 w-80 bg-[#F4B422] rounded-xl"></div>
          <p className="text-black font-bold py-2">Contrata nuestro talento</p>
        </div>
      </section>
    </>
  );
}

export default page;
