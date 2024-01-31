"use client"

import { Button } from "@nextui-org/react";
import { useState } from "react";
import Image from "next/image";

import ask from "../../../../../public/assets/required_icon.svg";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ExistedUserForm } from "../components/ExistedUserForm";
import { NewUserForm } from "../components/NewUserForm";
import { invalidCodeToast, showErrorToast } from "@/helpers/Toasts";
import { MainButtons } from "./MainButtons";
export const InsertCode = () => {
  const [showForm, setShowForm] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [show, setShow] = useState(false);

  const [form, setForm] = useState({
    tipo_doc: "",
    doc: "",
    codigo: "",
  });
  const handleGoBack = () => {
    setShow(false);
    setShowForm(false);
    setFormSubmitted(false);
  };
  const CODELIST = ["CAMAC24", "CAMCO24", "GBPSA24", "PEERN24", "HOOYD24", "MYDIG24", "BETRM24", "CONEX24", "COLTX24"]
 const handleSubmit = async (e) => {
   e.preventDefault();
  
   if(!CODELIST.includes(form.codigo)) { 
     invalidCodeToast();
     setShowForm(true);
   } else {
     try {
       localStorage.setItem('codigo', form.codigo);
       localStorage.setItem('tipo', form.tipo_doc);
       localStorage.setItem('doc', form.doc);

       let options = {
         method: "POST",
         headers: new Headers({
           "Content-Type": "application/json",
         }),
         body: JSON.stringify({
           tipo_doc: form.tipo_doc,
           doc: form.doc,
           codigo: form.codigo,
         })
       };
       setFormSubmitted(true);
       const response = await (await fetch(`http://${process.env.NEXT_PUBLIC_API_HOSTNAME}:${process.env.NEXT_PUBLIC_API_PORT}/visitantes/verificar`, options)).json();
       if (response.status === 200 ) {
         setFormSubmitted(true);
         setShow(true);
         setShowForm(false);
       } else {
         setFormSubmitted(true);
         setShow(false);
         setShowForm(false);
       }
     } catch (err) {
      showErrorToast()
     }
   }
  
  
 };
  return (
    <div className=" w-full ">  
      <ToastContainer  />
      {showForm ? (
        <div>
          <p className="w-full ms-1 mt-[-20px]">
          Ingresa el código de acceso para solicitar tu cita, si no cuentas con
          un codigo, puedes solicitarlo.
          </p>
          <form action="POST" method="POST" onSubmit={handleSubmit} className="space-y-3 pt-5 ">
            <div className="grid md:grid-cols-[0.5fr_1fr] grid-cols-1">
              <div>
                <label htmlFor="tipo_doc" className="block ">
                  Tipo Doc.
                  <Image
                    className="w-2 h-2 inline mb-3"
                    src={ask}
                    alt="campuslands logo"
                  />
                </label>
                <select
                  name="tipo_doc"
                  id="tipo_doc"
                  onChange={(e) => setForm({ ...form, tipo_doc: e.target.value })}
                  className=" w-full  rounded-sm py-[11.5px]  bg-[#E7E7E7] sm:text-sm -5  dark:bg-slate-800"
                  required
                >
                  <option value=""></option>
                  <option value="CC">C.C</option>
                  <option value="TI">T.I</option>
                  <option value="PP">P.P</option>
                </select>
              </div>

              <div className="md:ms-5 m-0">
                <label htmlFor="doc" className="block ">
                  No. Documento
                  <Image
                    className="w-2 h-2 inline mb-3"
                    src={ask}
                    alt="campuslands logo"
                  />
                </label>
                <input
                  onChange={(e) =>
                    setForm({ ...form, doc: e.target.value })
                  }
                  className="w-full rounded-sm bg-[#E7E7E7] p-3 text-sm ... peer"
                  type="text"
                  id="doc"
                  name="doc"
                  minLength={8}
                  maxLength={10}
                  placeholder=" "
                  pattern="^\d{8,10}$"
                  required
                />
                <span className="hidden rounded-md text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">El documento debe ser de 8 a 10 digitos</span>

              </div>
            </div>

            <div className="">
              <label htmlFor="codigo">Código
                <Image
                  className="w-2 h-2 inline mb-3"
                  src={ask}
                  alt="campuslands logo"
                /> </label>
              <input
                onChange={(e) => setForm({ ...form, codigo: e.target.value })}
                className="w-full rounded-sm bg-[#E7E7E7] p-3 text-sm"
                type="text"
                name="codigo"
                id="codigo"
                maxLength={7}
                required
              />
            </div>

            <div className="flex flex-col gap-4 ">
              <Button
                type="submit"
                className="block w-full rounded-md bg-[#ECAC22] text-lg text-white "
              >
                Enviar
              </Button>
              <Button
                onClick={handleGoBack}
                className="block w-full rounded-md bg-[#FF5C5C] text-lg text-white "
              >
                Volver
              </Button>
            </div>
          </form>
        </div>
      ) : formSubmitted ? (
          show ? <ExistedUserForm /> : <NewUserForm/> 
      ) : (
       <MainButtons />
      )
}
    </div>
  );
};
