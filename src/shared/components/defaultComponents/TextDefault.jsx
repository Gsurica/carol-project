import React from 'react'

export const TextDefault = (props) => {
  return (
    <>
      <div>
        <h3 className="text-2xl font-bold mb-2">{ props.textDefaultTitle }</h3>
        <p className="text-lg">
          { props.textDefaultContent }
        </p>
      </div>
    </>
  )
}
