"use client";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { CodesList } from "./codesList";
import Image from "next/image";

import ask from "../../../../../public/assets/required_icon.svg";
import { QRCode } from "./QRCode";
import { InsertCode } from "./InsertCode";
import insertCode from "../../../../../public/assets/insertCode.svg";
import requireCode from "../../../../../public/assets/requireCode.svg";

export const RequireCode = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const [buttonPressed, setButtonPressed] = useState(null);
  const changeView = (buttonName) => {
    setButtonPressed(buttonName);
  };

  const [CODES, setCODES] = useState([]);
  const [showCodes, setShowCodes] =
    useState(false);
  const [showForm, setShowForm] = useState(true);

  const [form, setForm] = useState({
    tipo_doc: "",
    doc: "",
  });
  const handleGoBack = () => {
    setShowCodes(false);
    setShowForm(false);
    setFormSubmitted(false);
  };
  const handleGoBackwithForm = () => {
    setShowForm(false);
    setFormSubmitted(true);
  };
  const getCodes = async () => {
    try {
      const response = await fetch(`http://192.168.110.106:5017/visitantes/codigos?tipo_doc=${form.tipo_doc}&doc=${form.doc}`)
      if (response.status === 200) {
        const data = await response.json();
        setCODES(data.message[0].codigos)
      } else {
        setCODES([])
      }
    } catch (err) {
      console.error(err)
    }
  }
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
      const response = await (await fetch("http://192.168.110.106:5017/visitantes/verificar", options)).json();
      if (response.status === 200) {
        setFormSubmitted(true);
        getCodes()
        setShowCodes(true)

      } else {
        setFormSubmitted(false);
        setShowForm(false)
        setShowCodes(true)
      }
    } catch (err) {
      console.error("Error al enviar el formulario:", err);
    }
  };

  return (
    <div className="max-w-2xl w-full ">
      {
        showForm ? (
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
                {showCodes && <CodesList CODES={CODES} />}

                <div className="flex flex-col gap-3">
                  {
                    showCodes ? (
                    <Button onClick={() => handleGoBack()}
                        className="block w-full rounded-md bg-[#00AA80] text-lg text-white "
                      >
                        Solicitar Nuevo Codigo
                      </Button>
                    ) : (
                      <Button type="submit"
                        className="block w-full rounded-md bg-[#00AA80] text-lg text-white "
                      >
                        Solicitar Codigo
                      </Button>
                    )
                  }

                  <Button
                    onClick={() => handleGoBackwithForm()}
                    className="block w-full rounded-md bg-[#FF5C5C] text-lg text-white "
                  >
                    Volver
                  </Button>
                </div>
              </form>
            </div>
          ) : formSubmitted ? (
            buttonPressed === "insertCode" ? (
              <InsertCode />
            ) : buttonPressed === "requireCode" ? (
              <RequireCode />
            ) : (
              <>
                <p className="w-full ms-1 mt-[-20px]">Ingresa el código de acceso para sacar tu cita, si no cuentas con uno puedes solicitarlo</p>
                <Button
                  className="bg-[#00AA80] flex flex-col  text-white text-md rounded-lg py-14 mb-5 mt-5"
                  as="a"
                  onClick={() => changeView("insertCode")}
                >
                  <Image src={insertCode} />
                  ¡Ya tengo codigo!
                </Button>
                <Button
                  className="bg-[#A5A6F6] flex flex-col  text-000000 text-md rounded-lg py-14"
                  as="a"
                  onClick={() => changeView("requireCode")}
                >
                  <Image src={requireCode} />
                  Solicitar codigo de visita
                </Button>
              </>
          ) 
        ) : (
          
          <QRCode />
        )
      }
    </div>
  );
}
