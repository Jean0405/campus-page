//icons import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

//Fonts import
import localFont from "next/font/local";
const stretchPro = localFont({ src: "../../public/fonts/StretchPro.otf" });

//Components imports
import campusLogo from "../../public/img/logoCampus.svg";
import TypeWriter from "@/components/TypeWriter";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";

function NotFound() {
  return (
    <div
      className={`${stretchPro.className} relative h-screen flex flex-col sm:flex-row justify-center items-center gap-6 overflow-hidden`}
    >
      <Button className="absolute bg-[#F4B422] text-white top-12 rounded-xl" as={Link} href="/">
        <FontAwesomeIcon icon={faArrowLeft} width={16}/>
      </Button>
      <Image
        className="not-found-logo w-48 sm:w-60"
        src={campusLogo}
        alt="campus logo"
      />
      <div className=" flex flex-col justify-center items-center pl-4 sm:border-l-4 border-[#c7c7c7]">
        <span className="text-8xl xl:text-9xl">404</span>
        <TypeWriter customClass="text-4xl xl:text-5xl">Not found</TypeWriter>
      </div>
    </div>
  );
}

export default NotFound;
