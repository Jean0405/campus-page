"use client"

import { useState } from "react";
import copyIcon from "../../../../../public/assets/copyClipboard.svg";
import check from "../../../../../public/assets/check.svg";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import campusland from "../../../../../public/img/logoCampus.svg";
import gbp from "../../../../../public/img/grupo_bien_pensado.svg";
import mcd from "../../../../../public/img/mcd.svg";
import hooy from "../../../../../public/img/hooy.svg";
import conexalab from "../../../../../public/img/Conexalab.svg";
import peer from "../../../../../public/img/peer.svg";

export const CodesRows = ({ item }) => {
    const [changeImg, setChangeImg] = useState(copyIcon);

    const logos = [
        {
            name: 'Campuslands_CO',
            img: campusland
        },
        {
            name: 'GBP',
            img: gbp
        },
        {
            name: 'My Conjunto Digital',
            img: mcd
        },
        {
            name: 'Hooy',
            img: hooy
        },
        {
            name: 'Conexalab',
            img: conexalab
        },
        {
            name: 'PEER',
            img: peer
        },
        {
            name: 'Betrmedia',
            img: campusland
        }
    ];
    const copyToClipboard = (value) => {
        navigator.clipboard.writeText(value)
            .then(() => {
                setChangeImg(check);
            })
            .catch((error) => {
                console.error('Error al copiar al portapapeles: ', error);
            });
    }
    return (
        <tbody className="text-center divide-y  divide-gray-200">
            <tr className="odd:bg-gray-50 h-20">
                <td className="whitespace-nowrap">
                    {
                        <Image className="ms-3 w-10" src={logos.find(image => image.name === item.nombre).img} />
                    }
                </td>
                <td className="whitespace-nowrap">
                    {item.codigo}
                </td>
                <td className="whitespace-nowrap">
                    {item.nombre}
                </td>
                <td className="whitespace-nowrap">
                    <Button className="bg-[#00AA80]   rounded-md" onClick={() => copyToClipboard(item.codigo)}><Image className="w-8" src={changeImg} alt="copy icon" /></Button>
                </td>
            </tr>
        </tbody >


    )
}