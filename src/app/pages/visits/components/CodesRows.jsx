"use client"

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import copyIcon from "../../../../../public/assets/copyClipboard.svg";
import check from "../../../../../public/assets/check.svg";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@nextui-org/react";

export const CodesRows = ({ item, setData }) => {

    const [changeImg, setChangeImg] = useState(copyIcon);

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
        <tbody className="text-center divide-y divide-gray-200">

            <tr className="odd:bg-gray-50">
                    <td className="whitespace-nowrap">
                        {item.code}
                    </td>
                    <td className="whitespace-nowrap">
                        {item.place}
                    </td>
                    <td className="whitespace-nowrap">
                        <Button className="bg-[#00AA80]   rounded-md" onClick={() => copyToClipboard(item.code)}><Image className="w-8" src={changeImg} alt="copy icon" /></Button>
                    </td>
                </tr>
            </tbody >


    )
}