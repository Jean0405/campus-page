"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@nextui-org/react";

import { getVisits } from "@/utils/visits";
import { useEffect, useState } from "react";
import ModalVisits from "./modalVisits";


export default function TableVisits() {
  const [listVisitors, setVisitors] = useState([])

  const getAllVisits = async () => {
    const data = await getVisits();
    setVisitors(data.message);
  };

  useEffect(() => {
    getAllVisits()
  }, []);
  

  return (
    <>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn className="uppercase bg-neutral-600 text-white">
            nombre
          </TableColumn>
          <TableColumn className="hide-md uppercase bg-neutral-600 text-white">
            edad
          </TableColumn>
          <TableColumn className="uppercase bg-neutral-600 text-white">
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
            fecha
          </TableColumn>
          <TableColumn className="hide-md uppercase bg-neutral-600 text-white">
            vehiculo
          </TableColumn>
          <TableColumn className="uppercase bg-neutral-600 text-white">
            acciones
          </TableColumn>
        </TableHeader>
        <TableBody>
          {listVisitors && listVisitors.map((visitor) => (
            <TableRow className="capitalize" key={visitor.id}>
              <TableCell>{visitor.nombre}</TableCell>
              <TableCell className="hide-md">{visitor.edad}</TableCell>
              <TableCell>{visitor.interes}</TableCell>
              <TableCell className="hide-md">{visitor.tel}</TableCell>
              <TableCell className="hide-md">
                {visitor.cc}
              </TableCell>
              <TableCell className="hide-sm">{visitor.empresa}</TableCell>
              <TableCell className="hide-sm">{visitor.fecha_visita}</TableCell>
              <TableCell className="hide-md">
                {!visitor.vehiculo ? "No aplica" : visitor.vehiculo}
              </TableCell>
              <TableCell>
                <Button className="hide-md bg-red-300 rounded-lg mx-3">
                  Rechazar
                </Button>
                <Button
                  className="hide-md bg-green-300 rounded-lg"
                >
                  Aceptar
                </Button>
                <ModalVisits visitor={visitor}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
