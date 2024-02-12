import React, { useState } from "react";
import { Button, Select, SelectItem, Textarea } from "@nextui-org/react";
import Image from "next/image";

// Assets Imports
import logo from "@/../../public/img/logoCampus.svg";

// Icons imports
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const englishLevels = ["A1", "A2", "B1", "B2", "C1"];

const FormRecruitment = ({ setIsFormActive, setFormData, formData }) => {
  const [IsFirstTime, SetIsFirstTime] = useState(true);

  const handleBasicInfoSubmit = (e) => {
    e.preventDefault();
    SetIsFirstTime(false);
  };

  const handleFullInfoSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsFormActive(false);
  };

  return (
    <div className="min-h-screen bg-white grid md:grid-cols-3">
      <div className="col-span-3 md:col-span-2 flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col justify-center items-start mb-5 gap-5 sm:w-[400px] md:w-[500px]">
          <Image className="w-[5rem]" src={logo} alt="Campus logo" priority />
          <h1 className="text-gray-600 font-bold">
            Gracias por tu interés. Ahora validemos si es tu primera vez por
            aquí.
          </h1>
        </div>
        {IsFirstTime ? (
          <form
            onSubmit={handleBasicInfoSubmit}
            className="flex flex-col items-end gap-5"
          >
            <div className="flex flex-col gap-2 sm:w-[400px] md:w-[500px]">
              <label className="text-gray-600">Nombre de la empresa <span className="text-red-500">*</span></label>
              <input
                required
                maxLength={80}
                type="text"
                placeholder="Empresa"
                className="bg-gray-200 outline-none p-3 border-1 focus:border-[#2CA2FF]"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    company_name: e.target.value.toLowerCase(),
                  })
                }
              />
            </div>
            <div className="flex flex-col gap-2 sm:w-[400px] md:w-[500px]">
              <label className="text-gray-600">Nit de la empresa <span className="text-red-500">*</span></label>
              <input
                required
                maxLength={13}
                type="text"
                placeholder="Nit de la empresa"
                className="bg-gray-200 outline-none p-3 border-1 focus:border-[#2CA2FF]"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    company_nit: e.target.value.toLowerCase(),
                  })
                }
              />
            </div>
            <div className="flex flex-col gap-2 sm:w-[400px] md:w-[500px]">
              <label className="text-gray-600">Correo Electrónico <span className="text-red-500">*</span></label>
              <input
                required
                maxLength={70}
                type="email"
                placeholder="Correo"
                className="bg-gray-200 outline-none p-3 border-1 focus:border-[#2CA2FF]"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value.toLowerCase(),
                  })
                }
              />
            </div>
            <Button
              type="submit"
              className="group bg-[#2CA2FF] font-bold rounded-none mt-5 hover:bg-gray-700 text-white duration-700 gap-3"
            >
              <span>SIGUIENTE</span>
              <FontAwesomeIcon
                className="group-hover:animate-ping text-white"
                icon={faArrowRight}
              />
            </Button>
          </form>
        ) : (
          <form
            onSubmit={handleFullInfoSubmit}
            className="flex flex-col items-end gap-5"
          >
            <div className="flex flex-col gap-2 sm:w-[400px] md:w-[500px]">
              <label className="text-gray-600">Nombre completo <span className="text-red-500">*</span></label>
              <input
                required
                maxLength={70}
                type="text"
                placeholder="Nombre completo"
                className="bg-gray-200 outline-none p-3 border-1 focus:border-[#2CA2FF]"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    full_name: e.target.value.toLowerCase(),
                  })
                }
              />
            </div>
            <div className="flex flex-col gap-2 sm:w-[400px] md:w-[500px]">
              <label className="text-gray-600">Cargo <span className="text-red-500">*</span></label>
              <input
                required
                maxLength={20}
                type="text"
                placeholder="Tu cargo en la empresa"
                className="bg-gray-200 outline-none p-3 border-1 focus:border-[#2CA2FF]"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    role: e.target.value.toLowerCase(),
                  })
                }
              />
            </div>
            <div className="flex flex-col gap-2 sm:w-[400px] md:w-[500px]">
              <label className="text-gray-700">Teléfono <span className="text-red-500">*</span></label>
              <input
                required
                maxLength={10}
                type="text"
                placeholder="Teléfono"
                className="bg-gray-200 outline-none p-3 border-1 focus:border-[#2CA2FF]"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value.toLowerCase(),
                  })
                }
              />
            </div>
            <div className="w-full flex flex-col gap-2 sm:w-[400px] md:w-[500px]">
              <label className="text-gray-700">Nivel de inglés</label>
              <Select
                color="primary"
                radius="none"
                label="Nivel de inglés"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    english_level: e.target.value,
                  })
                }
              >
                {englishLevels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <div className="w-full flex flex-col gap-2 sm:w-[400px] md:w-[500px]">
              <label className="text-gray-700">Nivel de inglés <span className="text-red-500">*</span></label>
              <Textarea
                isRequired
                radius="none"
                color="primary"
                placeholder="Describa a que se dedica su empresa"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    english_level: e.target.value,
                  })
                }
              />
            </div>
            <Button
              type="submit"
              className="group bg-[#2CA2FF] font-bold rounded-none mt-5 hover:bg-gray-700 text-white duration-700 gap-3"
            >
              <span>SIGUIENTE</span>
              <FontAwesomeIcon
                className="group-hover:animate-ping text-white"
                icon={faArrowRight}
              />
            </Button>
          </form>
        )}
        <div>
          <div className="w-10 h-2 bg-blue-500"></div>
        </div>
      </div>
      <div className="col-span-3 md:col-span-1 bg-gray-700"></div>
    </div>
  );
};

export default FormRecruitment;
