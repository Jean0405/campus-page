"use client";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { CodesList } from "./codesList";
import Image from "next/image";
import ask from "../../../../../public/assets/required_icon.svg";

export const RequireCode = () => {
    const [showCodes, setShowCodes] =
      useState(false);

  const [form, setForm] = useState({
    tipo_doc:  "",
    doc: "",
  });
 const handleSubmit = async (e) => {
   e.preventDefault();
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
     })
   }
   try {
    const response = await (await fetch("http://192.168.110.106:5017/visitanos/verificar/usuario", options)).json();         
    if (response.status === 200 ) {

      setShowCodes(true) 
    } else {
      window.location.href = "/pages/visits/askCode"
    }
   } catch (err) {
      console.error("Error al enviar el formulario:", err);
   }
  };
  return (
    <div className="max-w-2xl w-full py-5">
      <div>
        <form
          action="POST"
          method="POST"
          className="space-y-3 pt-5 "
          onSubmit={handleSubmit}
        >
          <div className="grid md:grid-cols-[0.5fr_1fr] grid-cols-1 mb-5">
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
                className="w-full rounded-sm bg-[#E7E7E7] p-3 text-sm"
                type="text"
                id="doc"
                name="doc"
                required
              />
            </div>
          </div>
          {showCodes && <CodesList />}

          <div className="flex flex-col gap-3">
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
