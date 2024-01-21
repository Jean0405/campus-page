"use client";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { CodesList } from "./codesList";

export const RequireCode = () => {
    const [showCodes, setShowCodes] =
      useState(false);

  const [form, setForm] = useState({
    tipoDoc: "",
    noDocumento: "",
    codigo: "",
  });
 const handleSubmit = async (e) => {
   e.preventDefault();
   if(form.noDocumento === "12345") {
     setShowCodes(true)
   } else {
    window.location.href = "/pages/visits/askCode"
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
   }
  };
  return (
    <div className="md:max-w-xl max-w-xs py-5 ">
      <div>
        <form
          action="POST"
          method="POST"
          className="space-y-3 pt-5 "
          onSubmit={handleSubmit}
        >
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
          {showCodes && <CodesList />}

          <div>
            <Button
              type="submit"
              className="block w-full rounded-md bg-[#00AA80] text-lg text-white "
            >
              Solicitar Codigo
            </Button>
            <Button
              onClick={() => window.location.reload()}
              className="block w-full rounded-md bg-[#FF5C5C] text-lg text-white "
            >
              Volver
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
