import React from 'react'
import tw from "tailwind-styled-components"

export default function Prueba () {
   return (
      <Contenedor>
         Contenedor
      </Contenedor>
   )
};

const Contenedor = tw.div`
   bg-red-200
   flex
   items-center
   justify-center
   text-red-800
   text-6xl
`;



