
import { CodesRows } from "./CodesRows";

export  function CodesList ({CODES}) {
 
  return (
      <div className="overflow-x-auto">

      <table className="min-w-full divide-y-2  divide-gray-200 bg-white text-sm">

      <thead className="ltr:text-left rtl:text-right">
        <tr>
            <th className="whitespace-nowrap text-black font-bold text-medium"></th>
          <th className="whitespace-nowrap text-black font-bold text-medium">Codigos</th>
          <th className="whitespace-nowrap text-black font-bold text-medium">Lugar</th>
          <th className="whitespace-nowrap text-black font-bold text-medium">Copiar</th>
        </tr>

      </thead>
      {
        CODES.map((item, index) => (
          <CodesRows key={index} item={item}  />

        ))
      }
      </table>
       </div>

      
  );
}   
