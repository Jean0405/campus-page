import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Switch,
  Divider,
} from "@nextui-org/react";
import { formatDateWithTime } from "@/helpers/formatDateWithTime";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getVisits, reassignVisit, acceptVisit } from "@/utils/visits";
import { redirectToWhatsApp } from "@/helpers/sendMessageToWhatsapp";


export default function ModalVisits({ visitor, setListVisitors}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isSelected, setIsSelected] = useState(false);
  const [reassignDate, setReassignDate] = useState("");


  async function reassign() {
    const data = await reassignVisit(reassignDate, visitor.id);
    const res = await getVisits();
    setListVisitors(res.message);
    setIsSelected(!isSelected);
  }
  async function acceptVisits() {;
    const data = await acceptVisit(visitor.id);
    const res = await getVisits();
    setListVisitors(res.message);
    setIsSelected(!isSelected);
    redirectToWhatsApp(visitor);
  }

  //show or hidde reassign section
  function showReassign() {
    setIsSelected(!isSelected);
  }

  return (
    <>
      <Button className="bg-neutral-300 rounded-lg" onPress={onOpen}>
        <FontAwesomeIcon icon={faEye} />
      </Button>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex gap-1">
                SOLICITUD PARA{" "}
                <span className="text-red-500 uppercase">
                  {visitor.interes}
                </span>
              </ModalHeader>
              <ModalBody>
                <div className="bg-neutral-200 rounded-xl p-4">
                  <h3 className="text-center font-bold">
                    Información personal
                  </h3>
                  <h3 className="text-center text-neutral-700 font-bold pt-3 pb-4">
                    {visitor.visitante.nombre}
                  </h3>
                  <div className="flex justify-around">
                    <div className="text-center">
                      <h3 className="font-bold">Cédula</h3>
                      <p>{visitor.visitante.tipo_doc}. {visitor.visitante.doc}</p>
                    </div>
                    <div className="text-center">
                      <h3 className="font-bold">Contacto</h3>
                      <p>{visitor.visitante.tel}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <h3 className="font-bold">Cargo:</h3>
                  <p>{visitor.visitante.cargo}</p>
                </div>
                <div className="flex gap-2">
                  <h3 className="font-bold">Empresa:</h3>
                  <p>{visitor.visitante.empresa}</p>
                </div>
                <div className="flex gap-2">
                  <h3 className="font-bold">Desea visitar:</h3>
                  <p>{visitor.codigo.nombre}</p>
                </div>
                <div className="flex gap-2">
                  <h3 className="font-bold">Fecha visita:</h3>
                  <p>{formatDateWithTime(visitor.fecha_visita)}</p>
                </div>
                <div className="flex gap-2">
                  <h3 className="font-bold">Vehículo:</h3>
                  <p>{!visitor.vehiculo ? "Ninguno" : visitor.vehiculo}</p>
                </div>
                <div className="flex gap-2">
                    <h3 className="font-bold">Estado:</h3>
                    <p className="capitalize">{visitor.estado}</p>
                </div>
                <Divider/>
                <div className="flex flex-col gap-3">
                  <h3>¿Desea reasignar la visita?</h3>
                  <Switch onChange={showReassign} isSelected={isSelected}/>
                  {isSelected && (
                    <input
                    type="datetime-local"
                    value={reassignDate}
                    onChange={(e) => setReassignDate(e.target.value)}
                    className="bg-neutral-300 focus:bg-neutral-500 outline-none rounded-xl p-2"
                  />
                  )}
                </div>
              </ModalBody>
              <ModalFooter>
              {!isSelected ? (
                  <>
                    <Button className="bg-green-300" onPress={()=>{onClose(); acceptVisits()}}>
                      Aceptar
                    </Button>
                  </>
                ):(
                  <Button className="bg-yellow-300" onPress={()=>{onClose(); reassign();}}>
                      Reasignar
                    </Button>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
