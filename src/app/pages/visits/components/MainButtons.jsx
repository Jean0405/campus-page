"use client"

import { InsertCode } from "./InsertCode"
import { RequireCode } from "./RequireCode"
import insertCode from "../../../../../public/assets/insertCode.svg"
import requireCode from "../../../../../public/assets/requireCode.svg"
import { useState } from "react"
import { Button } from "@nextui-org/react";
import Image from "next/image";

export const MainButtons = () => {
    const [buttonPressed, setButtonPressed] = useState(null);

    const changeView = (buttonName) => {
        setButtonPressed(buttonName);
    };
    return (
        buttonPressed === "insertCode" ? (
            <InsertCode />
        ) : buttonPressed === "requireCode" ? (
            <RequireCode />
        ) : (
            <>
                <p className="w-full ms-1 mt-[-20px]">Ingresa el código de acceso para sacar tu cita, si no cuentas con uno puedes solicitarlo</p>
                <Button
                            className="bg-[#00AA80] flex flex-col transition hover:scale-105 shadow hover:shadow-2xl  text-white text-md rounded-lg py-14 mb-8 mt-5"
                    as="a"
                    onClick={() => changeView("insertCode")}
                >
                    <Image src={insertCode} alt="insertCode" />
                    ¡Ya tengo codigo!
                </Button>
                <Button
                            className="bg-[#A5A6F6] flex flex-col transition hover:scale-105 shadow hover:shadow-2xl  text-000000 text-md rounded-lg py-14"
                    as="a"
                    onClick={() => changeView("requireCode")}
                >
                    <Image src={requireCode} alt="requireCode" />
                    Solicitar codigo de visita
                </Button>
            </>
        )
    )
}