import React from 'react'

export const Header = () => {
  return (
    <div className="bg-rose-100 px-4 py-6 shadow-md ">
      <div className="grid grid-cols-3 gap-4 text-white">
        <div className="bg-[#FFB3C1] flex items-center justify-center rounded-md">
          <a href="/home" className="sm:text-3xl">Página inicial</a>
        </div>
        <div className="bg-[#FFB3C1] flex items-center justify-center px-2 rounded-md">
        < a href="/moments" className="sm:text-3xl">Momentos inesquecíveis!</a>
        </div>
        <div className="bg-[#FFB3C1] flex items-center justify-center rounded-md">
          <a href="/howmuchlove" className="sm:text-3xl">Amor?</a>
        </div>
      </div>
      <div className="flex justify-evenly items-center px-6 py-6 sm:text-3xl">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </div>
      <div className="text-white w-auto">
        <div className="flex justify-end">
          <cite className="font-bold sm:text-3xl">- Amor, é aquilo que nutri o ser</cite>
        </div>
      </div>
    </div>
  )
}
