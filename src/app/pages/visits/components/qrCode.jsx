import Image from "next/image";
import qrcode from "../../../../../public/assets/qrCode.svg";

import { Button } from "@nextui-org/react";

export const QRCode = () => {
  return (
    <div className="h-full max-w-lg mt-12">
      <Image src={qrcode} />
      <Button className="block w-full rounded-md bg-[#00AA80] text-lg text-white">
        Chat
      </Button>
      <Button className="block w-full rounded-md bg-[#00AA80] text-lg text-white">
        3487815
      </Button>
      <Button
        onClick={() => (window.location.href = "/pages/visits")}
        className="block w-full rounded-md bg-[#FF5C5C] text-lg text-white "
      >
        Atras
      </Button>{" "}
    </div>
  );
}
  
