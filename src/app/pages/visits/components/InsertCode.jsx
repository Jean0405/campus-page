"use client"

import { Button } from "@nextui-org/react";
import { useState } from "react";
export const InsertCode = () => {
  const [form, setForm] = useState({
    tipoDoc: "",
    noDocumento: "",
    codigo: "",
  });
 const handleSubmit = async (e) => {
   e.preventDefault();
   if(form.noDocumento === "12345") {
     window.location.href = "/pages/visits/existedVisit"
   } else {
    window.location.href = "/pages/visits/newVisit"
   }
   let options = {
     method: "POST",
     headers: new Headers({
       "Content-Type": "application/json",
     }),
     body: JSON.stringify({
       tipoDoc: form.tipoDoc,
       noDocumento: form.noDocumento,
       codigo: form.codigo,
     })
   };
  
 };
  return (
    <div className="md:max-w-xl max-w-xs py-5 ">
      <div>
        <form action="POST" method="POST" onSubmit={handleSubmit} className="space-y-3 pt-5 ">
          <div className="grid md:grid-cols-[0.5fr_1fr] grid-cols-1">
            <div>
              <label htmlFor="tipoDoc" className="block ">
                Tipo Doc.
              </label>
              <select
                name="tipoDoc"
                id="tipoDoc"
                onChange={(e) => setForm({ ...form, tipoDoc: e.target.value })}
                className=" w-full  rounded-sm py-[11.5px]  bg-[#E7E7E7] sm:text-sm -5"
              >
                <option value=""></option>
                <option value="Empleabilidad">Empleabilidad</option>
                <option value="Networking">Networking</option>
                <option value="Conocer">Conocer</option>
                <option value="Negocios">Negocios</option>
              </select>
            </div>

            <div className="md:ms-5 m-0">
              <label htmlFor="noDocumento" className="block ">
                No. Documento
              </label>
              <input
                onChange={(e) =>
                  setForm({ ...form, noDocumento: e.target.value })
                }
                className="w-full rounded-sm bg-[#E7E7E7] p-3 text-sm"
                type="text"
                id="noDocumento"
                name="noDocumento"
              />
            </div>
          </div>

          <div>
            <label htmlFor="age">Codigo </label>
            <input
              onChange={(e) => setForm({ ...form, codigo: e.target.value })}
              className="w-full rounded-sm bg-[#E7E7E7] p-3 text-sm"
              type="text"
              name="codigo"
              id="codigo"
            />
          </div>

          <div className="flex flex-col gap-3 mt-4">
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
    </div>
  );
};
