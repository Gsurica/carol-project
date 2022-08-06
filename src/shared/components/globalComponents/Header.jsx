import React from 'react'

export const Header = () => {
  return (
    <div className="bg-rose-100 px-4 py-6 shadow-md dark:bg-[#D0F4BA]">
      <div className="grid grid-cols-3 gap-4 text-white">
        <div className="bg-[#FFB3C1] dark:bg-[#EAF8DA] dark:text-black dark:shadow-md flex items-center justify-center rounded-md">
          <a href="/home" className="sm:text-3xl">Página inicial</a>
        </div>
        <div className="bg-[#FFB3C1] dark:bg-[#EAF8DA] dark:text-black dark:shadow-md flex items-center justify-center px-2 rounded-md">
        < a href="/moments" className="sm:text-3xl">Momentos inesquecíveis!</a>
        </div>
        <div className="bg-[#FFB3C1] dark:bg-[#EAF8DA] dark:text-black dark:shadow-md flex items-center justify-center rounded-md">
          <a href="/howmuchlove" className="sm:text-3xl">Amor?</a>
        </div>
      </div>
      <div className="flex justify-evenly items-center px-6 py-6 sm:text-7xl">
        <div className="text-black rounded-md p-2 flex items-center">
          <ion-icon name="heart-outline"></ion-icon>
        </div>
        <div className=" text-black rounded-md p-2 sm:text-7xl flex items-center justify-center">
          <ion-icon name="football-outline"></ion-icon>
        </div>
      </div>
      <div className="text-white w-auto">
        <div className="flex justify-end">
          <cite className="font-bold sm:text-3xl dark:text-black">- Amor, é aquilo que nutri o ser</cite>
        </div>
      </div>
    </div>
  )
}
