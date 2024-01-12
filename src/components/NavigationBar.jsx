"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      name: "Inicio",
      href: "#",
    },
    {
      name: "Conocenos",
      href: "#",
    },
    {
      name: "Contratar",
      href: "#",
    },
    {
      name: "Patrocinar",
      href: "#",
    },
    {
      name: "Contratar",
      href: "#",
    },
    {
      name: "Visitanos",
      href: "#",
    },
  ];

  return (
    <Navbar className="bg-white" isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      {/* <------ Mobile navbar --------> */}
      <NavbarContent className="sm:hidden pr-3" justify="startleft">
        <NavbarBrand>
          <Link href="/">
            <div className="relative w-40 h-16">
              <p className="absolute text-black top-2 left-0  text-2xl font-extrabold">
                Campus.
              </p>
              <p className="absolute text-black text-md font-bold" style={{top:"28px", left:"67px"}}>
                lands
              </p>
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      {/* <------ Desktop navbar --------> */}
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          <Link href="/">
            <div className="relative h-16">
              <p className="absolute text-black top-2 left-0 text-2xl font-extrabold">
                Campus.
              </p>
              <p className="absolute text-black text-md font-bold" style={{top:"28px", left:"67px"}}>
                lands
              </p>
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      {/* <------ Navbar menu icon ------> */}
      <NavbarContent className="md:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* <------- Desktop Navbar menu items -------> */}
      <NavbarContent className="hidden md:flex gap-6" justify="end">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              className={
                index === menuItems.length - 1
                  ? "bg-[#00AA80] text-white font-normal rounded px-2 py-1"
                  : "text-black font-light hover:font-medium transition duration-100 ease-in-out"
              }
              href={item.href}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      {/* <------- Mobile navbar menu items -------> */}
      <NavbarMenu className="flex justify-center items-center">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={`w-full text-center text-xl ${
                index === menuItems.length - 1
                  ? "text-blue-500 text-md font-normal"
                  : "text-black text-md font-light"
              }`}
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
