"use client";
import { useState } from "react";
import { Tabs, Tab, Button } from "@nextui-org/react";
import TableVisits from "./TableVisits";

export default function TabsAdmin() {
  const [selected, setSelected] = useState("visits");

  return (
    <div className="flex flex-col p-5">
      <Tabs
        color="default"
        selectedKey={selected}
        onSelectionChange={setSelected}
        className="m-auto font-bold"
      >
        <Tab key="visits" title="Visitas">
          <h1 className="text-center text-2xl md:text-3xl font-bold py-5">Lista de <span className="text-[#F4B422]">visitantes</span></h1>
          <TableVisits />
        </Tab>
        <Tab key="hdv" title="HdV">
        <h1 className="text-center text-2xl md:text-3xl font-bold py-5">Lista de <span className="text-[#F4B422]">HdV</span></h1>
          <TableVisits />
        </Tab>
        <Tab key="usuarios" title="Usuarios">
        <h1 className="text-center text-2xl md:text-3xl font-bold py-5">Lista de <span className="text-[#F4B422]">usuarios</span></h1>
          <TableVisits />
        </Tab>
      </Tabs>
    </div>
  );
}
