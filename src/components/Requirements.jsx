import Image from "next/image"
import rightArrow from '../../public/assets/Arrow8.svg'
import rightDash from '../../public/assets/rightDash.svg'
import box1 from '../../public/img/box1.svg'
import box2 from '../../public/img/box2.svg'
import box3 from '../../public/img/box3.svg'
import box4 from '../../public/img/box4.svg'
import box5 from '../../public/img/box5.svg'
import camperMen from '../../public/img/camper.svg'
import hamburguer from '../../public/img/hamburguer.svg'


export const Requirements = () => {
    return (

        <div className='grid lg:grid-cols-[1.5fr_2fr] grid-cols-1 items-center md:border border-black rounded-3xl border-0 mt-10'>
            <div className='grid grid-cols-1 grid-row '>
                <div className='flex justify-between items-center ps-10 mt-5'>
                    <Image
                        className=""
                        src={hamburguer}
                        alt="campuslands logo"
                    />
                    <a>Que necesitas  <Image
                        className="w-2 ms-2 me-8 inline"
                        src={rightDash}
                        alt="campuslands logo"
                    /></a>
                </div>

                <div className='grid lg:grid-cols-[3fr_0.5fr] grid-cols-[4fr_0.5fr] relative'>
                    <Image
                        className="xl:w-11/12 w-2/3 xl:ms-0  ms-14 z-10"
                        src={camperMen}
                        alt="campuslands logo"
                    />



                    <Image
                        className="xl:w-fit lg:w-16 md:w-20 w-14 absolute m-0 xl:bottom-64 lg:bottom-48 md:bottom-56 bottom-36 xl:right-5 lg:right-14 md:right-24 right-5 "
                        src={box1}
                        alt="campuslands logo"
                    />
                    <Image
                        className="xl:w-fit lg:w-16 md:w-20 w-14 absolute  m-0 xl:bottom-36 lg:bottom-28 md:bottom-32 bottom-20 xl:right-5 lg:right-14 md:right-24 right-5"
                        src={box2}
                        alt="campuslands logo"
                    />
                    <Image
                        className="xl:w-fit lg:w-16 md:w-20 w-14 absolute  m-0 xl:bottom-8 md:bottom-8 bottom-4 xl:right-5 lg:right-14 md:right-24 right-5"
                        src={box3}
                        alt="campuslands logo"
                    />
                    <Image
                        className="xl:w-fit lg:w-44 md:w-50  w-36 absolute m-0 xl:bottom-8 md:bottom-8 bottom-4 lg:right-36 md:right-48 right-24"
                        src={box4}
                        alt="campuslands logo"
                    />

                    <Image
                        className="xl:w-fit lg:w-24 md:w-28 w-20 absolute  m-0  xl:bottom-36 md:bottom-32 bottom-20 lg:right-36 md:right-48 right-24"
                        src={box5}
                        alt="campuslands logo"
                    />
                </div>
            </div>

            <div className='grid grid-cols-2 divide-x divide-y h-full'>
                <div className='w-full h-full flex flex-col justify-center items-center m-auto md:border-t border-s '>
                    <h2 className='md:text-xl text-md font-bold items-end'>Edad</h2>
                    <p>17 Años - 27 Años</p>
                </div>
                <div className='w-full flex flex-col justify-center items-center md:text-xl text-md md:p-0 p-8'>
                    <p className='font-bold  md:max-w-44 max-w-40 md:text-xl text-sm'>Mantener una Actitud de compromiso, dedicación y aprendizaje</p>
                </div>
                <div className='w-full flex flex-col justify-center items-center md:p-0 p-8'>
                    <p className='md:max-w-72  md:text-lg text-sm'>Estar 8 horas diarias presenciales en el Campus, de lunes a viernes. (6am - 2pm  o  2pm - 10pm)</p>
                </div>
                <div className='w-full flex flex-col justify-center items-center md:p-0 p-5'>
                    <h2 className='font-bold md:text-xl text-md'>¡Animate!</h2>
                    <p className="md:text-lg text-sm">unete a este increíble viaje</p>
                    <a>Inscripción
                        <Image
                            className="w-4 h-4 inline ms-2"
                            src={rightArrow}
                            alt="campuslands logo"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}
