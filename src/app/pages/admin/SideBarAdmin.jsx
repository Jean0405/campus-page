import React, { useState } from "react";
import {
  faBars,
  faXmark,
  faRectangleList,
  faCalendar,
  faUserTie,
  faChartSimple,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { Button, Divider, Tooltip } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { logOut } from "@/utils/auth";
import { checkResponseStatus } from "@/helpers/checkResponses";
import { showErrorToast } from "@/helpers/Toasts";
import TabsAdmin from "./TabsAdmin";

const menuItems = [
  {
    name: "Tablas",
    icon: faRectangleList,
  },
  {
    name: "Eventos",
    icon: faCalendar,
  },
  {
    name: "Estadísticas",
    icon: faChartSimple,
  },
];

export default function SideBarAdmin() {
  const router = useRouter();
  const [showMenuOverlay, setShowMenuOverlay] = useState(false);
  const [selectedSection, setSelectedSection] = useState("Tablas");

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
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="hidden bg-neutral-600 sm:flex flex-col items-center pt-5 fixed h-screen w-[60px] lg:w-[220px]">
          <div className="flex justify-center text-3xl text-neutral-200 gap-3">
            <FontAwesomeIcon icon={faUserTie} />
            <p className="font-bold text-white hidden lg:flex">ADMIN</p>
          </div>
          <Divider className="my-5 bg-white" />
          <div className="w-full flex flex-col justify-center items-center gap-5 px-2">
            {menuItems.map((item) => (
              <Tooltip
                key={item.name}
                className="ml-2 flex lg:hidden bg-amber-500 text-white font-bold"
                placement="right"
                content={item.name}
                closeDelay={10}
              >
                <div
                  onClick={() => setSelectedSection(item.name)}
                  className="w-full flex justify-start items-center cursor-pointer text-neutral-200 hover:bg-neutral-200 hover:text-black rounded p-2 gap-4"
                >
                  <FontAwesomeIcon className="text-2xl" icon={item.icon} />
                  <span className="hidden lg:flex">{item.name}</span>
                </div>
              </Tooltip>
            ))}
          </div>
          <div
            onClick={() => handleLogOut()}
            className="absolute w-full flex justify-center items-center font-bold bottom-0 text-white bg-black hover:text-amber-600 cursor-pointer duration-500 py-5 gap-2"
          >
            <FontAwesomeIcon className="text-2xl" icon={faRightFromBracket} />
            <span className="hidden lg:flex">Cerrar sesión</span>
          </div>
        </div>
        {/* main content */}
        <main className="w-full sm:ml-[60px] lg:ml-[210px]">
          <div className="sm:hidden flex justify-start p-5">
            <Button
              className="flex justify-start text-2xl bg-transparent p-0"
              onClick={() => setShowMenuOverlay(!showMenuOverlay)}
            >
              <FontAwesomeIcon
                className="hover:scale-125 duration-100"
                icon={faBars}
              />
            </Button>
          </div>
          {selectedSection === "Tablas" && <TabsAdmin />}
        </main>
      </div>
      {/* Menu overlay */}
      <div
        className={`${
          !showMenuOverlay ? "hidden" : "block"
        } sm:hidden w-screen h-screen bg-white top-0 left-0 z-50 fixed`}
      >
        <div className="h-full flex flex-col p-5">
          <div className="flex justify-start">
            <Button
              className="flex justify-start text-3xl bg-transparent p-0"
              onClick={() => setShowMenuOverlay(!showMenuOverlay)}
            >
              <FontAwesomeIcon
                className="hover:scale-125 duration-100"
                icon={faXmark}
              />
            </Button>
          </div>
          <Divider className="my-2" />
          <div className="h-full flex justify-center items-center">
            <ul className="flex flex-col gap-5 text-center">
              {menuItems.map((item) => (
                <li
                  className="flex gap-3 cursor-pointer hover:font-bold duration-100"
                  onClick={()=>{ setSelectedSection(item.name); setShowMenuOverlay(!showMenuOverlay);}}
                  key={item.name}
                >
                  <FontAwesomeIcon className="text-2xl" icon={item.icon} />
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <Button
              onClick={() => handleLogOut()}
              className="bg-amber-500 font-bold"
            >
              Cerrar sesión
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
