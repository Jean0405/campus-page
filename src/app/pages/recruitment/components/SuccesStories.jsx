import React from "react";

function SuccesStories() {
  return (
    <div className="w-full gap-5 p-5">
      <div></div>
      <div className="w-full flex flex-col items-center sm:items-end gap-3">
        <h1 className="text-center sm:text-end text-[#000087] text-5xl md:text-6xl md:text-7xl font-extrabold">
          Casos de <span className="text-yellow-500">éxito</span>
        </h1>
        <p className="text-justify sm:text-end text-MD md:text-xl max-w-[1000px]">
          Nuestra sección de casos de éxito destaca cómo nuestros estudiantes
          han superado desafíos, alcanzado metas ambiciosas y construido
          carreras sólidas en programación. Cada historia refleja el poder de
          nuestra educación de calidad y el compromiso con el crecimiento
          personal.
        </p>
      </div>
    </div>
  );
}

export default SuccesStories;
