import React from 'react'

export const Footer = () => {
  return (
    <div>
      <div className="bg-red-400 grid grid-cols-1 gap-4 dark:bg-[#B0EF8E]">
        <div className="flex justify-evenly sm:text-4xl text-white dark:text-black font-bold py-4">
          <ion-icon name="leaf-outline"></ion-icon>
          <ion-icon name="leaf-outline"></ion-icon>
          <ion-icon name="leaf-outline"></ion-icon>
        </div>
      </div>
    </div>
  )
}
