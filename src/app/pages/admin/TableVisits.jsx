"use client";
import "./index.css";

import { getVisits } from "@/utils/visits";
import { useCallback, useEffect, useMemo, useState } from "react";
import ModalVisits from "./modalVisits";
import { formatDateWithTime } from "@/helpers/formatDateWithTime";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
  Badge,
  Pagination,
} from "@nextui-org/react";

export default function TableVisits() {
  const [listVisitors, setListVisitors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  //pagination
  const pages = Math.ceil(listVisitors.length / rowsPerPage);
  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return listVisitors.slice(start, end);
  }, [page, listVisitors,rowsPerPage]);

  //set rows per page
  const onRowsPerPageChange = useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

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
        {/* Status counter and filter */}
        <div className="flex flex-col items-center justify-center gap-2 pb-10">
          <div className="flex jsutify-center md:justify-around gap-3 cursor-pointer">
            {/* accepted status*/}
            <div className="flex flex-col items-center">
              <h2 className="text-sm">Aceptadas</h2>
              <div className="w-20 h-20 md:w-24 md:h-24 bg-green-500 grid place-items-center text-3xl font-bold hover:bg-green-600 rounded-xl">
                {listVisitors.length}
              </div>
            </div>
            {/* reassigned status*/}
            <div className="flex flex-col items-center">
              <h2 className="text-sm">Reasignadas</h2>
              <div className="w-20 h-20 md:w-24 md:h-24 bg-yellow-500 grid place-items-center text-3xl font-bold hover:bg-yellow-600 rounded-xl">
                {listVisitors.length}
              </div>
            </div>
            {/* declined status*/}
            <div className="flex flex-col items-center">
              <h2 className="text-sm">En espera</h2>
              <div className="w-20 h-20 md:w-24 md:h-24 bg-red-500 grid place-items-center text-3xl font-bold hover:bg-red-600 rounded-xl">
                {listVisitors.length}
              </div>
            </div>
            {/* made status*/}
            <div className="flex flex-col items-center">
              <h2 className="text-sm">Realizadas</h2>
              <div className="w-20 h-20 md:w-24 md:h-24 bg-black grid place-items-center text-white text-3xl font-bold hover:bg-neutral-800 rounded-xl">
                {listVisitors.length}
              </div>
            </div>
          </div>
        </div>
        {/* filter options */}
        <div className="flex flex-col items-center justify-center gap-2 pb-10">
          {/* declined status*/}
          <div className="flex flex-col items-center">
            <h2 className="text-sm">Esta semana</h2>
            <div className="w-20 h-20 md:w-24 md:h-24 bg-neutral-400 grid place-items-center text-3xl font-bold hover:bg-neutral-600 rounded-xl">
              {listVisitors.length}
            </div>
          </div>
        </div>
      </div>
      {/* Select rows per page */}
      <div className="flex justify-between py-3">
      <p className="text-md">Total <span className="font-bold">{listVisitors.length}</span> registros</p>
      <label className="flex items-center text-black text-md">
            Filas por página:
            <select
              className="bg-transparent outline-none text-black font-bold text-md"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
      </div>
      {loading ? (
        <div className="text-center py-5">
          <Spinner color="warning" label="Cargando..." />
        </div>
      ) : (
        <Table
          color="default"
          selectionMode="single"
          bottomContent={
            <div className="flex w-full justify-center">
              <Pagination
                isCompact
                showControls
                showShadow
                color="warning"
                page={page}
                total={pages}
                onChange={(page) => setPage(page)}
              />
            </div>
          }
        >
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
            {items.map((visitor) => (
              <TableRow className="capitalize cursor-pointer" key={visitor.id}>
                <TableCell>{visitor.nombre}</TableCell>
                <TableCell className="hide-md">{visitor.edad}</TableCell>
                <TableCell className="hide-md">{visitor.interes}</TableCell>
                <TableCell className="hide-md">{visitor.tel}</TableCell>
                <TableCell className="hide-md">{visitor.doc}</TableCell>
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
