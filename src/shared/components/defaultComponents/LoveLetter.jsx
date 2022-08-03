import React from 'react'

export const LoveLetter = (props) => {
  return (
    <div>
      <div className="p-5">
        <h1 className="text-2xl font-bold italic mb-4">Feliz aniversário { props.specialPerson }</h1>
        <p className="text-lg indent-8 bg-[#FFCCD5] py-3 px-4 text-white rounded-md">
        { props.bodyLetter }
        </p>
      </div>
    </div>
  )
}
