"use client";
import "./index.css";

// Icons imports
import {
  faRotateRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//API imports
import * as visitsAPI from "@/utils/visits";

//Components imports
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
  Pagination,
} from "@nextui-org/react";

//Assets import
import campus_CO from "../../../../public/img/campuslands.svg";
import Hooy from "../../../../public/img/hooy.svg";
import GBP from "../../../../public/img/grupo_bien_pensado.svg";
import MCD from "../../../../public/img/mcd.svg";
import PEER from "../../../../public/img/peer.svg";
import CONEXALAB from "../../../../public/img/Conexalab.svg";
import Image from "next/image";

const listCompanies = [
  { nombre: "Campuslands_CO", logo: campus_CO },
  { nombre: "HOOY", logo: Hooy },
  { nombre: "Campuslands_AC", logo: campus_CO },
  { nombre: "GBP", logo: GBP },
  { nombre: "My Conjunto Digital", logo: MCD },
  { nombre: "PEER", logo: PEER },
  { nombre: "Betrmedia", logo: MCD },
  { nombre: "Conexalab", logo: CONEXALAB },
  { nombre: "Colombia Taxnetwork", logo: MCD },
];

export default function TableVisits() {
  const [listVisitors, setListVisitors] = useState([]);
  const [listVisitorsByStatusCounter, setVisitorsByStatusCounter] = useState({
    accepted: 0,
    onStandBy: 0,
    made: 0,
    reassigned: 0,
    thisWeek: 0,
  });
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  //pagination
  const pages = Math.ceil(listVisitors.length / rowsPerPage);
  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return listVisitors.slice(start, end);
  }, [page, listVisitors, rowsPerPage]);

  //set rows per page
  const onRowsPerPageChange = useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  //set color to status indicator
  function setStatusClassname(status) {
    if (status === "en espera") {
      return "bg-red-500";
    } else if (status === "aceptado") {
      return "bg-green-500";
    } else if (status === "reasignado") {
      return "bg-yellow-500";
    } else {
      return "bg-black";
    }
  }

  // set company logo
  const getCompanyLogo = (companyName) => {
    const company = listCompanies.find((c) => c.nombre === companyName);
    return company ? company.logo : null;
  };

  //get all visits
  const getAllVisits = async () => {
    const data = await visitsAPI.getVisits();
    setListVisitors(data.message);
    setLoading(false);
  };

  //get visits counter by status
  const visitsByStatusCounter = async () => {
    const thisWeek = await visitsAPI.getThisWeekVisits();
    const accepted = await visitsAPI.getVisitsByStatus("aceptado");
    const onStandBy = await visitsAPI.getVisitsByStatus("en espera");
    const made = await visitsAPI.getVisitsByStatus("realizada");
    const reassigned = await visitsAPI.getVisitsByStatus("reasignado");
    setVisitorsByStatusCounter({
      accepted: accepted.message.length,
      onStandBy: onStandBy.message.length,
      made: made.message.length,
      reassigned: reassigned.message.length,
      thisWeek: thisWeek.message.length,
    });
    setLoading(false);
  };

  //get visits by status (FILTER)
  const FilterVisitsByStatus = async (status) => {
    const response = await visitsAPI.getVisitsByStatus(status);
    setListVisitors(response.message)
    setLoading(false);
  };

  //load visitors counter
  useEffect(() => {
    visitsByStatusCounter();
  }, [listVisitors]);

  //Load visitors table
  useEffect(() => {
    visitsByStatusCounter();
    getAllVisits();
  }, []);

  return (
    <>
      <div className="grid md:grid-cols-2 gap-3">
        {/* Status counter and filter */}
        <div className="flex flex-col items-center justify-center gap-2 pb-10">
          <div className="flex jsutify-center md:justify-around gap-3 cursor-pointer">
            {/* accepted status*/}
            <div className="flex flex-col items-center">
              <h2 className="text-sm">Aceptadas</h2>
              <div
                onClick={()=>FilterVisitsByStatus("aceptado")}
                className="w-20 h-20 md:w-24 md:h-24 bg-green-500 grid place-items-center text-3xl font-bold hover:bg-green-600 rounded-xl"
              >
                {listVisitorsByStatusCounter.accepted}
              </div>
            </div>
            {/* reassigned status*/}
            <div className="flex flex-col items-center">
              <h2 className="text-sm">Reasignadas</h2>
              <div onClick={()=>FilterVisitsByStatus("reasignado")} className="w-20 h-20 md:w-24 md:h-24 bg-yellow-500 grid place-items-center text-3xl font-bold hover:bg-yellow-600 rounded-xl">
                {listVisitorsByStatusCounter.reassigned}
              </div>
            </div>
            {/* declined status*/}
            <div className="flex flex-col items-center">
              <h2 className="text-sm">En espera</h2>
              <div onClick={()=>FilterVisitsByStatus("en espera")} className="w-20 h-20 md:w-24 md:h-24 bg-red-500 grid place-items-center text-3xl font-bold hover:bg-red-600 rounded-xl">
                {listVisitorsByStatusCounter.onStandBy}
              </div>
            </div>
            {/* made status*/}
            <div className="flex flex-col items-center">
              <h2 className="text-sm">Realizadas</h2>
              <div onClick={()=>FilterVisitsByStatus("realizado")} className="w-20 h-20 md:w-24 md:h-24 bg-black grid place-items-center text-white text-3xl font-bold hover:bg-neutral-800 rounded-xl">
                {listVisitorsByStatusCounter.made}
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
              {listVisitorsByStatusCounter.thisWeek}
            </div>
          </div>
        </div>
      </div>
      {/* Select rows per page */}
      <div className="flex justify-between py-3">
        <div className="flex items-center gap-5">
        <p className="text-md">
          Total <span className="font-bold">{listVisitors.length}</span>{" "}
          registros
        </p>
        <FontAwesomeIcon onClick={()=>getAllVisits()} className="cursor-pointer hover:text-xl hover:text-red-500" icon={faRotateRight} />
        </div>
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
          aria-label="visits table"
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
              empresa
            </TableColumn>
            <TableColumn className="hide-md uppercase bg-neutral-600 text-white">
              cargo
            </TableColumn>
            <TableColumn className="hide-md uppercase bg-neutral-600 text-white">
              visita
            </TableColumn>
            <TableColumn className="hide-md uppercase bg-neutral-600 text-white">
              interés
            </TableColumn>
            <TableColumn className="hide-md uppercase bg-neutral-600 text-white">
              contacto
            </TableColumn>
            <TableColumn className="hide-sm uppercase bg-neutral-600 text-white">
              fecha y hora
            </TableColumn>
            <TableColumn className="hide-md uppercase bg-neutral-600 text-white">
              vehiculo
            </TableColumn>
            <TableColumn className="uppercase bg-neutral-600 text-white">
              estado
            </TableColumn>
            <TableColumn className="uppercase bg-neutral-600 text-white">
              acciones
            </TableColumn>
          </TableHeader>
          <TableBody>
            {items.map((visitor) => (
              <TableRow className="capitalize cursor-pointer" key={visitor.id}>
                <TableCell>{visitor.visitante.nombre}</TableCell>
                <TableCell className="hide-md">
                  {visitor.visitante.empresa}
                </TableCell>
                <TableCell className="hide-md">
                  {visitor.visitante.cargo}
                </TableCell>
                <TableCell className="hide-md">
                  <Image
                    loading="lazy"
                    src={getCompanyLogo(visitor.codigo.nombre)}
                    width={60}
                    alt="company logo"
                  />
                </TableCell>
                <TableCell className="hide-md">{visitor.interes}</TableCell>
                <TableCell className="hide-md">
                  {visitor.visitante.tel}
                </TableCell>
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
