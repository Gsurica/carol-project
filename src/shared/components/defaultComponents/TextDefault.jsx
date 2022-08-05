import React from 'react'

export const TextDefault = (props) => {
  return (
    <>
      <div>
        <h3 className="sm:text-4xl font-bold mb-2 px-2 py-4 bg-rose-100 rounded-tr-lg rounded-tl-lg shadow-lg">{ props.textDefaultTitle }</h3>
        <p className="sm:text-3xl px-2 py-4 bg-rose-300 rounded-br-lg rounded-bl-lg shadow-lg">
          { props.textDefaultContent }
        </p>
      </div>
    </>
  )
}
