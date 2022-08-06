import React from 'react'
import yaiaDancing from "../../../assets/images/yaia-dance.gif";

export const Modal = () => {

  return (
    <div className="bg-black bg-opacity-90 absolute inset-0 flex justify-center items-center flex-col px-4 text-white" onClick={ () => window.location.reload()}>
      <div className="sm:text-4xl font-bold tracking-wide mb-4 px-4 py-4 bg-rose-200 dark:bg-[#EAF8DA] dark:text-black rounded-md animate-pulse">
        <h1>Uma música está rolando...</h1>
      </div>
      <div className="sm:text-3xl font-bold tracking-wide">
        <h2>Vamos casal, dancem!</h2>
      </div>
      <div> 
        <img src={ yaiaDancing } className="rounded-xl mt-8" />
      </div>
      <div className="mt-8 flex justify-around w-full text-6xl animate-bounce">
        <ion-icon name="musical-notes-outline"></ion-icon>
        <ion-icon name="musical-note-outline"></ion-icon>
        <ion-icon name="musical-notes-outline"></ion-icon>
      </div>
      <div className="mt-8">
        <h1 className="font-bold sm:text-3xl">Clique na tela para sair!</h1>
      </div>
    </div>  
  )
}
