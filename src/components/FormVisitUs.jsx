"use client"
import ask from "../../public/assets/required_icon.svg";
import whatsapp from "../../public/assets/whatsapp.svg";
import calendar from "../../public/assets/calendar_icon.svg";
import id from "../../public/assets/id.svg";
import Image from "next/image";
import React,{ useState } from "react";



export const FormVisitUs = () => {
    const [isChecked, setIsChecked] = useState(false); 
    return (
        <section className=" grid xl:grid-cols-2 grid-cols-1 ">
            <div className="mx-16 max-w-xl  py-16 ">
                <h1 className="max-w-xl text-6xl font-bold ">Visítanos</h1>
                <p className=" ms-3"> llenando el siguiente formulario</p>

                <div className="rounded-lg  pt-14 pl-3 ">
                    <form action="" className="space-y-4">
                        <label htmlFor="name">
                            Nombre{" "}
                            <Image
                                className="w-2 h-2 inline mb-3"
                                src={ask}
                                alt="campuslands logo"
                            />
                        </label>
                        <input
                            className="w-full rounded-sm bg-[#E7E7E7] p-3 text-sm"
                            type="text"
                            id="name"
                        />
                        <div className="grid grid-cols-[0.5fr_1fr]">
                            <div>
                                <label htmlFor="age">
                                    Edad{" "}
                                    <Image
                                        className="w-2 h-2 inline mb-3"
                                        src={ask}
                                        alt="campuslands logo"
                                    />
                                </label>
                                <input
                                    className="w-full rounded-sm bg-[#E7E7E7] p-3 text-sm"
                                    type="text"
                                    id="name"
                                />
                            </div>

                            <div className="ms-5">
                                <label
                                    htmlFor="HeadlineAct"
                                    className="block "
                                >
                                    Interes  <Image
                                        className="w-2 h-2 inline mb-3"
                                        src={ask}
                                        alt="campuslands logo"
                                    />
                                </label>
                                <select
                                    name="HeadlineAct"
                                    id="HeadlineAct"
                                    className=" w-full  rounded-sm py-[11.5px]  bg-[#E7E7E7] sm:text-sm -5"
                                >
                                    <option value=""></option>
                                    <option value="JM">John Mayer</option>
                                    <option value="SRV">Stevie Ray Vaughn</option>
                                    <option value="JH">Jimi Hendrix</option>
                                    <option value="BBK">B.B King</option>
                                    <option value="AK">Albert King</option>
                                    <option value="BG">Buddy Guy</option>
                                    <option value="EC">Eric Clapton</option>
                                </select>
                            </div>
                        </div>




                        <div className="">
                            <label htmlFor="name">
                                Nombre{" "}
                                <Image
                                    className="w-2 h-2 inline mb-3"
                                    src={ask}
                                    alt="campuslands logo"
                                />
                            </label>
                            <div className="flex items-center  bg-[#E7E7E7]">
                                <div className="flex items-center relative ">
                                    <Image
                                        className="w-8 h-8  ms-2  "
                                        src={whatsapp}
                                        alt="campuslands logo"
                                    />
                                    <svg className="absolute left-12" xmlns="http://www.w3.org/2000/svg" width="1" height="30" viewBox="0 0 1 40" fill="none">
                                        <line x1="0.5" y1="2.18557e-08" x2="0.499998" y2="40" stroke="#515151" />
                                    </svg>
                                </div>



                                <input
                                    className="w-full  rounded-sm bg-[#E7E7E7] p-3 text-sm ps-8 outline-none"
                                    type="text"
                                    id="name"
                                />

                            </div>

                        </div>

                        <div className="">
                            <label htmlFor="name">
                                Cedula{" "}
                                <Image
                                    className="w-2 h-2 inline mb-3"
                                    src={ask}
                                    alt="campuslands logo"
                                />
                            </label>
                            <div className="flex items-center  bg-[#E7E7E7]">
                                <div className="flex items-center relative ">
                                    <Image
                                        className="w-6 h-6  ms-3 z-20  "
                                        src={id}
                                        alt="campuslands logo"
                                    />
                                    <svg className="absolute left-12" xmlns="http://www.w3.org/2000/svg" width="1" height="30" viewBox="0 0 1 40" fill="none">
                                        <line x1="0.5" y1="2.18557e-08" x2="0.499998" y2="40" stroke="#515151" />
                                    </svg>
                                </div>



                                <input
                                    className="w-full  rounded-sm bg-[#E7E7E7] p-3 text-sm ps-8 outline-none"
                                    type="text"
                                    id="name"
                                />

                            </div>

                        </div>

                        <div className="grid grid-cols-[0.5fr_1fr]">
                            <div className="">
                                <label htmlFor="name">
                                    Fecha de la visita{" "}
                                    <Image
                                        className="w-2 h-2 inline mb-3"
                                        src={ask}
                                        alt="campuslands logo"
                                    />
                                </label>
                                <div className="flex items-center  bg-[#E7E7E7]">
                                    <div className="flex items-center relative ">
                                        <Image
                                            className="w-6 h-6  ms-3 z-20  "
                                            src={calendar}
                                            alt="campuslands logo"
                                        />
                                        <svg className="absolute left-12" xmlns="http://www.w3.org/2000/svg" width="1" height="30" viewBox="0 0 1 40" fill="none">
                                            <line x1="0.5" y1="2.18557e-08" x2="0.499998" y2="40" stroke="#515151" />
                                        </svg>
                                    </div>



                                    <input
                                        className="w-full  rounded-sm bg-[#E7E7E7] p-3 text-sm ps-8 outline-none"
                                        type="text"
                                        id="name"
                                    />

                                </div>

                            </div>

                            <div className="ms-5">
                                <label
                                    htmlFor="enterprise"
                                    className="block "
                                >
                                    Empresa  <Image
                                        className="w-2 h-2 inline mb-3"
                                        src={ask}
                                        alt="campuslands logo"
                                    />
                                </label>
                                <input
                                    className="w-full  rounded-sm bg-[#E7E7E7] p-3 text-sm "
                                    type="text"
                                    id="enterprise"
                                    name="enterprise"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-[0.5fr_1fr]">
                            <div className="">
                                <label htmlFor="name" className="block">
                                    Vehiculo{" "}
                                    <Image
                                        className="w-2 h-2 inline mb-3"
                                        src={ask}
                                        alt="campuslands logo"
                                    />
                                </label>

                                <label class="relative inline-flex items-center mb-5 cursor-pointer">
                                    <input type="checkbox" value="" onChange={()=> setIsChecked(!isChecked)} checked={isChecked}  class="sr-only peer" />
                                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>

                            </div>
                            
                            <div className={`ms-5 ${isChecked ? '' : 'hidden'}`}>
                                <label
                                    htmlFor="HeadlineAct"
                                    className="block "
                                >
                                    Tipo  <Image
                                        className="w-2 h-2 inline mb-3"
                                        src={ask}
                                        alt="campuslands logo"
                                    />
                                </label>
                                <select
                                    name="HeadlineAct"
                                    id="HeadlineAct"
                                    className=" w-full  rounded-sm py-[11.5px]  bg-[#E7E7E7] sm:text-sm -5"
                                >
                                    <option value=""></option>
                                    <option value="JM">John Mayer</option>
                                    <option value="SRV">Stevie Ray Vaughn</option>
                                    <option value="JH">Jimi Hendrix</option>
                                    <option value="BBK">B.B King</option>
                                    <option value="AK">Albert King</option>
                                    <option value="BG">Buddy Guy</option>
                                    <option value="EC">Eric Clapton</option>
                                </select>
                            </div>
                        </div>

                        <hr />
                        <h3 className="font-bold">Condiciones</h3>
                        <div className='bg-[#FF6161] text-transparent rounded-full inline-block '>{'***'}</div>
                        <p className='inline-block ms-2'>No se permiten mascotas</p>
                        <br />
                        <div className='bg-[#00AA80] text-transparent rounded-full inline-block '>{'***'}</div>
                        <p className='inline-block ms-2 '>No se permiten mascotas</p>

                        <hr />

                        <div class="flex items-center">
                            <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-800 focus:ring-2 dark:bg-blue-700 dark:border-blue-600" />
                            <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
                        </div>

                        <div className="mt-4">
                            <button
                                type="submit"
                                className="block w-full rounded-md bg-[#ECAC22] px-5 py-3 text-lg text-white "
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
