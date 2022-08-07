import React from 'react'
import { backgroundImageStyle } from '../../../css/defaultStyles'

export const Hero = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="text-white md:max-w-lg" style={backgroundImageStyle}>
        <div className="bg-gradient-to-r from-black px-8 py-16">
          <div className="max-w-xl grid grid-cols-1 gap-8">
            <h2 className="sm:text-2xl uppercase font-bold">sejam felizes!</h2>
            <h1 className="text-5xl font-bold">Com toda certeza, é mútuo!</h1>
            <p className="sm:text-3xl">
              E apenas vocês sabem como começou, caminhou e apenas vocês sabem como vai terminar. Mas, pode ter certeza que é bela e magnífica a história que vocês têm!
            </p>
            <a href="/moments" className="bg-gradient-to-r from-[#ffafcc] to-[#FFCCD5] py-3 px-6 sm:text-3xl rounded-md w-64 dark:bg-gradient-to-r dark:from-[#EAF8DA] dark:to-[#A1EF7A] dark:text-black">Lembrem-se dos momentos</a>
          </div>
        </div>
      </div>
    </div>
  )
}
