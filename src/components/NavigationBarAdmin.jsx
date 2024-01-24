import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import Image from "next/image.js";
import { checkResponseStatus } from "@/helpers/checkResponses";
import { showErrorToast } from "@/helpers/Toasts";
import { ToastContainer } from "react-toastify";

import campusLogo from "../../public/img/logoCampus.svg"
import { logOut } from "@/utils/auth";

export default function NavigationBarAdmin() {
  const router = useRouter();
  const menuItems = [
    "Tablas",
    "Log Out",
  ];

  const handleLogOut = async()=>{
    const token = localStorage.getItem("token")
    let response = await logOut(token);

    response = checkResponseStatus(response,200);

    if (!response) {
      showErrorToast();
    }
    localStorage.removeItem("token");
    router.push('/pages/login');
  }

  return (
    <>
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
        <Image src={campusLogo} width={45} alt="Campus logo"/>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
        <Image src={campusLogo} width={45} alt="Campus logo"/>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button onClick={()=>handleLogOut()} color="warning" href="#" variant="flat">
            Cerrar sesión
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    <ToastContainer/>
    </>
  );
}
