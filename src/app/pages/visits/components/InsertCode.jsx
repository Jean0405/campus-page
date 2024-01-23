"use client"

import { Button } from "@nextui-org/react";
import { useState } from "react";
import Image from "next/image";

import ask from "../../../../../public/assets/required_icon.svg";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Textarea } from "@nextui-org/react";
import { ExistedUserForm } from "../components/ExistedUserForm";
import { NewUserForm } from "../components/NewUserForm";

export const InsertCode = () => {
  const [showForm, setShowForm] = useState(true);

  const [show, setShow] = useState(true);
  const [form, setForm] = useState({
    tipo_doc: "",
    doc: "",
    codigos: "",
  });
  const CODELIST = ["CAMAC24", "CAMCO24", "GBPSA24", "PEERN24", "HOOYD24", "MYDIG24", "BETRM24", "CONEX24", "COLTX24"]
 const handleSubmit = async (e) => {
   e.preventDefault();
   setShowForm(false);

   if(!CODELIST.includes(form.codigos)) { 
     toast.info('Ingresaste un codigo invalido', {
       position: "bottom-right",
       autoClose: 5000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "colored",
     });
     return   
   }
   localStorage.setItem('codigo', form.codigos);
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
       codigos: form.codigos,
     })
   };
   try {
     const response = await (await fetch("http://192.168.110.106:5017/visitantes/verificar", options)).json();
    if (response.status === 200 ) {
      setShow(true);
      
    } else {
      setShow(false);
    }
   } catch (err) {
      console.error("Error al enviar el formulario:", err);
   }

  
 };
  return (
    <div className="lg:max-w-xl w-full pt-5 ">
      
      <ToastContainer  />
      {showForm ? (
   
        <div>
          <p className="w-full ms-1">
            Ingresa el código de acceso para sacar tu cita, si no cuentas con
            uno puedes solicitarlo
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
                  className=" w-full  rounded-sm py-[11.5px]  bg-[#E7E7E7] sm:text-sm -5"
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
                <Textarea
                  isReadOnly
                  maxRows={2}
                  variant="bordered"
                  labelPlacement="outside"
                  defaultValue="Ingresa un documento de 8 a 10 digitos"
                  className="mt-1 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block"
                />

              </div>
            </div>

            <div className="">
              <label htmlFor="age">Codigo
                <Image
                  className="w-2 h-2 inline mb-3"
                  src={ask}
                  alt="campuslands logo"
                /> </label>
              <input
                onChange={(e) => setForm({ ...form, codigos: e.target.value })}
                className="w-full rounded-sm bg-[#E7E7E7] p-3 text-sm"
                type="text"
                name="codigos"
                id="codigos"
                required
              />
            </div>

            <div className="flex flex-col gap-4 mt-12">
              <Button
                type="submit"
                className="block w-full rounded-md bg-[#ECAC22] text-lg text-white "
              >
                Enviar
              </Button>
              <Button
                onClick={() => window.location.reload()}
                className="block w-full rounded-md bg-[#FF5C5C] text-lg text-white "
              >
                Atras
              </Button>
            </div>
          </form>
        </div>
      ) : (
          show ? <ExistedUserForm /> : <NewUserForm />

      )}
    </div>
  );
};
