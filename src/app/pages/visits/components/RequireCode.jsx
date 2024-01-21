"use client";
import { Button } from "@nextui-org/react";

export const RequireCode = () => {
  return (
    <div className="md:max-w-xl max-w-xs py-5 ">
      <div>
        <form action="POST" method="POST" className="space-y-3 pt-5 ">
          <div className="grid md:grid-cols-[0.5fr_1fr] grid-cols-1">
            <div className="">
              <label htmlFor="name">Tipo Doc.</label>
              <div className="flex items-center  bg-[#E7E7E7]">
                <input
                  onChange={(e) =>
                    setForm({ ...form, fecha_visita: e.target.value })
                  }
                  className="w-full  rounded-sm bg-[#E7E7E7] p-3 text-sm ps-8 outline-none"
                  type="datetime-local"
                  id="fecha_visita"
                  name="fecha_visita"
                />
              </div>
            </div>

            <div className="md:ms-5 m-0">
              <label htmlFor="empresa" className="block ">
                No. Documento
              </label>
              <input
                onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                className="w-full rounded-sm bg-[#E7E7E7] p-3 text-sm"
                type="text"
                id="empresa"
                name="empresa"
              />
            </div>
          </div>

          <div>
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
              Volver
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
