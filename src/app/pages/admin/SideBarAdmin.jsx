import React from "react";
import {
  faRectangleList,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import campusLogo from "../../../../public/img/logoCampus.svg";
import Image from "next/image";
import { Divider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { logOut } from "@/utils/auth";
import { checkResponseStatus } from "@/helpers/checkResponses";
import { showErrorToast } from "@/helpers/Toasts";

export default function SideBarAdmin() {
   const router = useRouter();

   const handleLogOut = async () => {
      const token = localStorage.getItem("token");
      let response = await logOut(token);
  
      response = checkResponseStatus(response, 200);
  
      if (!response) {
        showErrorToast();
      }
      localStorage.removeItem("token");
      router.push("/pages/login");
    };

  return (
    <>
      <div className="relative hidden sm:flex flex-col pt-5 px-2">
        <div>
          <Image className="w-16" src={campusLogo} alt="Logo Campus" />
        </div>
        <Divider className="my-5" />
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="cursor-pointer text-2xl text-neutral-500 hover:text-[#F4B422]">
            <FontAwesomeIcon icon={faRectangleList} />
          </div>
          <div className="cursor-pointer text-2xl text-neutral-500 hover:text-[#F4B422]">
            <FontAwesomeIcon icon={faRectangleList} />
          </div>
          <div className="cursor-pointer text-2xl text-neutral-500 hover:text-[#F4B422]">
            <FontAwesomeIcon icon={faRectangleList} />
          </div>
          <div className="cursor-pointer text-2xl text-neutral-500 hover:text-[#F4B422]">
            <FontAwesomeIcon icon={faRectangleList} />
          </div>
        </div>
        <div className="absolute bottom-2 left-6 cursor-pointer text-2xl text-[#F4B422] hover:text-neutral-700">
          <FontAwesomeIcon icon={faRightFromBracket} onClick={()=>handleLogOut()}/>
        </div>
      </div>
    </>
  );
}
