import React from 'react'
import { turnOn } from '../../../features/presentModalSlice';
import { useDispatch } from 'react-redux';

export const PresentModal = () => {

  const dispatch= useDispatch();

  return (
    <>
      <div className="bg-black bg-opacity-90 absolute inset-0 flex items-center w-full justify-evenly text-white">
        <div className="px-8 py-6 sm:text-8xl grid grid-cols-2 gap-16"> 
          <div className="animate-bounce bg-zinc-600 px-6 py-4 w-full flex items-center justify-center rounded-xl">
            <a href="https://www.youtube.com/watch?v=8O8Ix0M8o6I">
              <ion-icon name="gift-outline"></ion-icon>
            </a>
          </div>
          <div className="animate-bounce bg-zinc-600 px-6 py-4 w-full flex items-center justify-center rounded-xl">
            <a href="https://www.youtube.com/watch?v=a50fqW7ccpo">
              <ion-icon name="gift-outline"></ion-icon>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center mt-8 z-40">
        <button className="sm:text-4xl px-4 py-8"
          onClick={ () => {
            dispatch(turnOn(false));
          } }
        >
          Sair
        </button>
      </div>
      </div>
    </>
  )
}
