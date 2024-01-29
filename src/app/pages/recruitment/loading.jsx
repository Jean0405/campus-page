import { Spinner } from "@nextui-org/react";

function Loading() {
  return (
    <div className="h-screen grid place-items-center text-center">
      <Spinner color="warning" label="Cargando..." />
    </div>
  );
}
export default Loading;
