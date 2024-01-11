"use client"
import React from 'react';
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Tabs, Tab } from "@nextui-org/react";
import TablaAcceso from './tablaAcceso';
import TablaValidar from './tablaValidar';
import TablaUsuarios from './tablaUsuarios';

export default function Page() {

     const [isMenuOpen, setIsMenuOpen] = React.useState(false);

     const menuItems = [
          "Dashboard",
          "Peril",
          "Salir"
     ];

     return (
          <div>
               <Navbar className='' style={{ backgroundColor: "#2A4B9B" }} onMenuOpenChange={setIsMenuOpen}>
                    <NavbarContent>
                         <NavbarMenuToggle
                              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                              className="sm:hidden"
                         />
                         <NavbarBrand className=''>
                              <img width={80} height={80} src="http://localhost:5173/src/assets/Img/logoBlanco.png" />
                         </NavbarBrand>
                    </NavbarContent>

                    <NavbarContent className="hidden sm:flex gap-4" justify="center">
                         <NavbarItem>
                              <Link className='text-white' href="#">
                                   Features
                              </Link>
                         </NavbarItem>
                         <NavbarItem >
                              <Link className='text-white underlined' href="#" aria-current="page">
                                   Customers
                              </Link>
                         </NavbarItem>
                         <NavbarItem>
                              <Link className='text-white' href="#">
                                   Integrations
                              </Link>
                         </NavbarItem>
                    </NavbarContent>
                    <NavbarMenu>
                         {menuItems.map((item, index) => (
                              <NavbarMenuItem key={`${item}-${index}`}>
                                   <Link
                                        color={
                                             index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                        }
                                        className="w-full"
                                        href="#"
                                        size="lg"
                                   >
                                        {item}
                                   </Link>
                              </NavbarMenuItem>
                         ))}
                    </NavbarMenu>
               </Navbar>
               <div className='body ml-96 mr-96'>
                    <div className='cuadrados flex justify-center items-center gap-12 mt-10'>
                         <div className='cuadrado w-full flex flex-col content-center shadow-2xl'>
                              <h2 className=' pt-5 text-1xl text-right mr-6' >Usuarios</h2>
                              <h3 className=' font-bold text-7xl pb-6 ml-20'>7</h3>
                         </div>
                         <div className='cuadrado w-full flex flex-col content-center shadow-2xl'>
                              <h2 className='pt-5 text-1xl text-right mr-6' >Cv Revisar</h2>
                              <h3 className=' font-bold text-7xl pb-6 ml-20'>1</h3>
                         </div>
                         <div className='cuadrado w-full flex flex-col content-center shadow-2xl'>
                              <h2 className='pt-5 text-1xl text-right mr-6' >Cv Publicadas</h2>
                              <h3 className=' font-bold text-7xl pb-6 ml-20'>4</h3>
                         </div>
                         <div className='cuadrado w-full flex flex-col content-center shadow-2xl'>
                              <h2 className='pt-5 text-1xl text-right mr-6' >Solicitudes</h2>
                              <h3 className=' font-bold text-7xl pb-6 ml-20'>0</h3>
                         </div>
                    </div>
                    <div className="flex w-full flex-col mt-10">
                         <Tabs variant='underlined' aria-label="Disabled Options">
                              <Tab key="Validar Cv" title="Validar Cv">
                                   <TablaValidar></TablaValidar>
                              </Tab>
                              <Tab key="Lista Usuarios" title="Lista Usuarios">
                                   <TablaUsuarios></TablaUsuarios>
                              </Tab>
                              <Tab key="Usuarios por permitir acceso" title="Usuarios por permitir acceso">
                                   <TablaAcceso></TablaAcceso>
                              </Tab>
                         </Tabs>
                    </div>
               </div>
          </div>
     )
}

