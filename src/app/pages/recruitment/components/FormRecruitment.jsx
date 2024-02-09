import { Button } from '@nextui-org/react';
import React from 'react'

const FormRecruitment = ({setIsFormActive}) => {
  return (
    <div className='min-h-screen bg-white grid place-items-center'>
      <h1 className='font-bold text-2xl'>FORMULARIO DE CONTRATACIÓN</h1>
      <Button className='bg-yellow-500' onClick={()=>setIsFormActive(true)}>Enviar</Button>
    </div>
  )
}

export default FormRecruitment;