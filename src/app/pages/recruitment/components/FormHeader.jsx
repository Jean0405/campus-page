import Image from "next/image";

// Assets Imports
import yellowTriangle from "@/../../public/assets/yellowTriangle.svg";
import redTriangle from "@/../../public/assets/redTriangle.svg";
import hearthMessage from "@/../../public/assets/hearthMessage.svg";
import arrowDown from "@/../../public/assets/arrowDown.svg";

// Icons imports
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FormHeader() {
  return (
    <div className="hidden md:flex flex-col gap-3 mb-[2rem]">
      <div className="flex w-full items-center gap-3">
        <div className="w-[70px] h-[70px] bg-sky rounded-xl flex items-center justify-center">
          <FontAwesomeIcon className="text-4xl text-white" icon={faBriefcase} />
        </div>
        <h1 className="text-5xl font-bold">CONTRATACIÓN</h1>
        <div className="relative flex items-end gap-1">
          <Image
            className="absolute right-[50px] top-0"
            src={arrowDown}
            alt="arrow down figure"
            priority
          />
          <Image src={yellowTriangle} alt="triangle figure" priority/>
          <Image src={redTriangle} alt="triangle figure" priority/>
          <Image className="mb-3" src={hearthMessage} alt="triangle figure" priority/>
        </div>
      </div>
      <div>
        <p>
          <span className="font-bold text-xl">
            Es necesario completar este formulario
          </span>{" "}
          para validar y confiar en los datos suministrados por los posibles
          contratistas. Facilitamos el registro y la gestión para una posible
          contratación,{" "}
          <span className="underline underline-offset-4">
            brindándote confianza y seguridad en el proceso
          </span>
        </p>
      </div>
    </div>
  );
}

export default FormHeader;
