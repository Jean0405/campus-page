"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuLinks = [
    {
      name: "Inicio",
      href: "#headerHome",
    },
    {
      name: "Nosotros",
      href: "#aboutUs",
    },
    {
      name: "Campers",
      href: "#campers",
    },
    {
      name: "Éxitos",
      href: "#success_stories",
    },
    {
      name: "Admin",
      href: "/pages/login",
    },
  ];


  return (
    <Navbar
      className="shadow-md"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="#">
            <img
              className="w-14 h-14 sm:w-16 sm:h-16 sm:p-1"
              src="https://ugc.production.linktr.ee/ZJXG7pbLSwyitEyTNSc8_O1cTAW6KAObqc4un?io=true&size=avatar-v1_0"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-2 md:gap-4" justify="center">
        {menuLinks.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              className={
                index === menuLinks.length - 1
                  ? "bg-blue-300 text-sky-800 font-bold rounded px-2 py-1"
                  : "text-black"
              }
              href={item.href}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu className="flex justify-center items-center">
        {menuLinks.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={`w-full text-center text-xl ${index === menuLinks.length - 1 ? "text-blue-500 font-bold" : "text-black"}`}
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}