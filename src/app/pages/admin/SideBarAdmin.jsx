import React from "react";
import { faRectangleList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import campusLogo from "../../../../public/img/logoCampus.svg";
import Image from "next/image";
import { Divider } from "@nextui-org/react";

export default function SideBarAdmin() {
  return (
    <>
      <div className="relative flex-col p-2 bg-neutral-200 fixed">
         <div>
            <Image className="w-16" src={campusLogo} alt="Logo Campus"/>
         </div>
         <Divider className="my-5"/>
        <div className="flex flex-col justify-start items-center gap-5">
          <div className="cursor-pointer text-2xl text-neutral-600">
            <FontAwesomeIcon icon={faRectangleList}/>
          </div>
          <div className="cursor-pointer text-2xl text-neutral-600">
            <FontAwesomeIcon icon={faRectangleList} />
          </div>
          <div className="cursor-pointer text-2xl text-neutral-600">
            <FontAwesomeIcon icon={faRectangleList} />
          </div>
          <div className="cursor-pointer text-2xl text-neutral-600">
            <FontAwesomeIcon icon={faRectangleList} />
          </div>
        </div>
        <div className="flex justify-center items-center text-neutral-600 text-2xl" style={{ marginTop: 'auto' }}>
         <FontAwesomeIcon icon={faRectangleList}/>
        </div>
      </div>
    </>
  );
}
