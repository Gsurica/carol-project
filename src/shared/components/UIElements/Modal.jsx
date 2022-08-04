import React from 'react'
import yaiaDancing from "../../../assets/images/yaia-dance.gif";

export const Modal = () => {

  return (
    <div className="bg-black bg-opacity-80 absolute inset-0 flex justify-center items-center flex-col px-4 text-white" onClick={ () => window.location.reload()}>
      <div className="text-2xl font-bold tracking-tight mb-4">
        <h1>Uma música está rolando...</h1>
      </div>
      <div>
        <h2>Dance com a Yaia! vamos casal, dancem!</h2>
      </div>
      <div> 
        <img src={ yaiaDancing } className="rounded-xl mt-8" />
      </div>
    </div>  
  )
}
