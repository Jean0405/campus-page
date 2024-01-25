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
import taxtnework from "../../../../../public/img/taxnetwork.svg";
import betmedia from "../../../../../public/img/betmedia.svg";
import notfound from "../../../../../public/img/notFound.png";
export const CodesRows = ({ item }) => {
    const [changeImg, setChangeImg] = useState(copyIcon);

    const logos = [
        {
            name: 'Campuslands_CO',
            img: campusland
        },
        {
            name: 'Campuslands_AC',
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
            name: 'HOOY',
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
            img: betmedia
        },
        {
            name: 'Colombia Taxnetwork',
            img: taxtnework
        }
    ];
 const copyToClipboard = (text) => {
  const el = document.createElement('textarea');
  el.value = text;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  setChangeImg(check);
  document.body.removeChild(el);
};
    return (
        <tbody className="text-center divide-y  divide-gray-200">
            <tr className="odd:bg-gray-50 h-20">
                <td className="whitespace-nowrap">
                    {
                        <Image className="ms-3 w-10" src={(logos.find((image) => image.name === item.nombre) || { img: notfound }).img} alt="logo" />
                    }
                </td>
                <td className="whitespace-nowrap">
                    {item.codigo}
                </td>
                <td className="whitespace-nowrap max-w-12 md:max-w-fit overflow-x- scroll md:overflow-hidden">
                    {item.nombre}
                </td>
                <td className="whitespace-nowrap">
                    <Button className="bg-[#00AA80]   rounded-md" onClick={() => copyToClipboard(item.codigo)}><Image className="w-8" src={changeImg} alt="copy icon" /></Button>
                </td>
            </tr>
        </tbody >


    )
}