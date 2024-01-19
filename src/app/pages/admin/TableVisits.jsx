"use client";
import "./index.css";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
  Badge,
} from "@nextui-org/react";

import { getVisits } from "@/utils/visits";
import { useEffect, useState } from "react";
import ModalVisits from "./modalVisits";
import { formatDateWithTime } from "@/helpers/formatDateWithTime";

export default function TableVisits() {
  const [listVisitors, setListVisitors] = useState([]);
  const [loading, setLoading] = useState(true);

  //set color to status indicator
  function setStatusClassname(status) {
    if (status === "en espera") {
      return "bg-red-500";
    }
    if (status === "aceptada") {
      return "bg-green-500";
    } else {
      return "bg-yellow-500";
    }
  }

  //Get all de visitors
  const getAllVisits = async () => {
    const data = await getVisits();
    setListVisitors(data.message);
    setLoading(false);
  };

  //Load visitors table
  useEffect(() => {
    getAllVisits();
  }, [setListVisitors]);
 
  return (
    <>
      <div className="grid md:grid-cols-2 gap-3">
        {/* Status counters */}
        <div className="flex flex-col items-center justify-center gap-2 pb-10">
          <h2 className="text-xl sm:text-3xl font-bold">STATUS</h2>
          <div className="flex justify-around gap-2 cursor-pointer">
            <div className="w-24 h-24 bg-green-400 grid place-items-center text-3xl font-bold">
              {listVisitors.length}
            </div>
            <div className="w-24 h-24 bg-yellow-400 grid place-items-center text-3xl font-bold cursor-pointer">
              {listVisitors.length}
            </div>
            <div className="w-24 h-24 bg-red-400 grid place-items-center text-3xl font-bold cursor-pointer">
              {listVisitors.length}
            </div>
          </div>
        </div>
        {/* filter options */}
        <div className="flex flex-col items-center justify-center gap-2 pb-10">
          <h2 className="text-xl sm:text-3xl font-bold">FILTER OPTIONS</h2>
          <div className="flex justify-around gap-2 cursor-pointer">
            <div className="w-24 h-24 bg-neutral-400 grid place-items-center text-3xl font-bold">
              {listVisitors.length}
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="text-center py-5">
          <Spinner color="warning" label="Cargando..." />
        </div>
      ) : (
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn className="uppercase bg-neutral-600 text-white">
              nombre
            </TableColumn>
            <TableColumn className="hide-md uppercase bg-neutral-600 text-white">
              edad
            </TableColumn>
            <TableColumn className="hide-md uppercase bg-neutral-600 text-white">
              interés
            </TableColumn>
            <TableColumn className="hide-md uppercase bg-neutral-600 text-white">
              contacto
            </TableColumn>
            <TableColumn className="hide-md uppercase bg-neutral-600 text-white">
              cédula
            </TableColumn>
            <TableColumn className="hide-sm uppercase bg-neutral-600 text-white">
              empresa
            </TableColumn>
            <TableColumn className="hide-sm uppercase bg-neutral-600 text-white">
              fecha y hora
            </TableColumn>
            <TableColumn className="hide-md uppercase bg-neutral-600 text-white">
              vehiculo
            </TableColumn>
            <TableColumn className="uppercase bg-neutral-600 text-white">
              acciones
            </TableColumn>
            <TableColumn className="uppercase bg-neutral-600 text-white">
              estado
            </TableColumn>
          </TableHeader>
          <TableBody>
            {listVisitors.map((visitor) => (
              <TableRow className="capitalize" key={visitor.id}>
                <TableCell>{visitor.nombre}</TableCell>
                <TableCell className="hide-md">{visitor.edad}</TableCell>
                <TableCell className="hide-md">{visitor.interes}</TableCell>
                <TableCell className="hide-md">{visitor.tel}</TableCell>
                <TableCell className="hide-md">{visitor.cc}</TableCell>
                <TableCell className="hide-sm">{visitor.empresa}</TableCell>
                <TableCell className="hide-sm">
                  {formatDateWithTime(visitor.fecha_visita)}
                </TableCell>
                <TableCell className="hide-md">
                  {!visitor.vehiculo ? "No aplica" : visitor.vehiculo}
                </TableCell>
                <TableCell>
                  <div
                    className={`${setStatusClassname(
                      visitor.estado
                    )} status-indicator`}
                  ></div>
                  {visitor.estado}
                </TableCell>
                <TableCell>
                  <ModalVisits
                    visitor={visitor}
                    setListVisitors={setListVisitors}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
}
