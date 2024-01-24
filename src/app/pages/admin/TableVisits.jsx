"use client";
import "./index.css";

// Icons imports
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//API imports
import * as visitsAPI from "@/utils/visits";

//Components imports
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useCallback, useEffect, useMemo, useState } from "react";
import { formatDateWithTime } from "@/helpers/formatDateWithTime";
import { checkResponseStatus } from "@/helpers/checkResponses";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
  Pagination,
  Badge,
  Select,
  SelectItem,
} from "@nextui-org/react";
import ModalVisits from "./modalVisits";

//Assets import
import campus_CO from "../../../../public/img/campuslands.svg";
import Hooy from "../../../../public/img/hooy.svg";
import GBP from "../../../../public/img/grupo_bien_pensado.svg";
import MCD from "../../../../public/img/mcd.svg";
import PEER from "../../../../public/img/peer.svg";
import CONEXALAB from "../../../../public/img/Conexalab.svg";
import Image from "next/image";
import { showErrorToast } from "@/helpers/Toasts";


const listCompanies = [
  { name: "Campuslands_CO", logo: campus_CO },
  { name: "HOOY", logo: Hooy },
  { name: "Campuslands_AC", logo: campus_CO },
  { name: "GBP", logo: GBP },
  { name: "My Conjunto Digital", logo: MCD },
  { name: "PEER", logo: PEER },
  { name: "Betrmedia", logo: MCD },
  { name: "Conexalab", logo: CONEXALAB },
  { name: "Colombia Taxnetwork", logo: MCD },
];

const filterStatus = ["aceptado", "reasignado", "en espera", "finalizado"];

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
  const [statusCompany, setStatusCompany] = useState({
    status: "en espera",
    company: "",
  });

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
    const company = listCompanies.find((c) => c.name === companyName);
    return company ? company.logo : null;
  };

  //get all visits
  const getAllVisits = async () => {
    let response = await visitsAPI.getVisits();

    response = checkResponseStatus(response, 200);

    if (!response) {
      showErrorToast();
      return;
    }

    setListVisitors(response.message);
    setLoading(false);
    return;
  };

  //get visits counter by status
  // const visitsByStatusCounter = async () => {
  //   let thisWeek = await visitsAPI.getThisWeekVisits();
  //   let accepted = await visitsAPI.getVisitsByStatus("aceptado");
  //   let onStandBy = await visitsAPI.getVisitsByStatus("en espera" );
  //   let made = await visitsAPI.getVisitsByStatus("realizado" );
  //   let reassigned = await visitsAPI.getVisitsByStatus("reasignado" );

  //   thisWeek = checkResponseStatus(thisWeek, 200);
  //   accepted = checkResponseStatus(accepted, 200);
  //   onStandBy = checkResponseStatus(onStandBy, 200);
  //   made = checkResponseStatus(made, 200);
  //   reassigned = checkResponseStatus(reassigned, 200);

  //   if (thisWeek === null || accepted === null || onStandBy === null || made === null || reassigned === null) {
  //     showErrorToast();
  //     setLoading(false);
  //     return;
  //   }

  //   setVisitorsByStatusCounter({
  //     accepted: accepted.message.length,
  //     onStandBy: onStandBy.message.length,
  //     made: made.message.length,
  //     reassigned: reassigned.message.length,
  //     thisWeek: thisWeek.message.length,
  //   });
  //   setLoading(false);
  // };

  //get visits by status (FILTER)
  const filterVisitsByStatusAndCompany = async (status, company) => {
    let response = await visitsAPI.getVisitsByStatus(status, company);
    response = checkResponseStatus(response, 200)
    if (!response) {
      showErrorToast();
      return;
    }
    setListVisitors(response.message);
    setLoading(false);
  };

  // handle company change
  const handleCompanyFilterChange = (companyName) => {
    let formattedCompanyName = companyName.replace(/\s/g, "");
    setStatusCompany({
      ...statusCompany,
      company: formattedCompanyName,
    });
    filterVisitsByStatusAndCompany(statusCompany.status, formattedCompanyName);
  };
  // handle status change
  const handleStatusFilterChange = (newStatus) => {
    setStatusCompany({
      ...statusCompany,
      status: newStatus,
    });
    filterVisitsByStatusAndCompany(newStatus, statusCompany.company);
  };

  //load visitors counter
  // useEffect(() => {
  //   visitsByStatusCounter();
  // }, [listVisitors]);

  //Load visitors table
  useEffect(() => {
    // visitsByStatusCounter();
    getAllVisits();
  }, []);

  return (
    <>
      <div className="grid md:grid-cols-2 gap-5 mb-5">
        <div className="carousel-admin m-auto md:m-0">
          {listCompanies.map((company) => (
            <div className="relative company-container" key={company.name}>
              <Badge
                className="bg-red-500 text-white font-bold"
                size="lg"
                content={listVisitors.length}
              >
                <Image
                  onClick={() => handleCompanyFilterChange(company.name)}
                  className="company-logo"
                  src={company.logo}
                  alt="company logo"
                />
              </Badge>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Select label="Selecciona un estado" className="max-w-xs">
            {filterStatus.map((status) => (
              <SelectItem
                onClick={() => handleStatusFilterChange(status)}
                key={status}
                value={statusCompany.status}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>
      {/* Select rows per page */}
      <div className="flex justify-between p-3">
        <div className="flex justify-center items-center gap-5">
          <p className="text-small sm:text-md">
            Hay <span className="font-bold">{listVisitors.length}</span>{" "}
            registros
          </p>
          <FontAwesomeIcon
            onClick={() => getAllVisits()}
            className="cursor-pointer hover:text-xl hover:text-red-500"
            icon={faRotateRight}
          />
        </div>
        <label className="flex items-center text-black text-small sm:text-md">
          Filas:
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
      <ToastContainer/>
    </>
  );
}
