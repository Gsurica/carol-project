import React from 'react'

export const MomentComponent = (props) => {

  if (props.invert) {
    return (
      <>
        <div className="h-28 flex items-center justify-end">
        <div className="py-4 px-10 bg-[#FFCCD5] w-48 rounded-tl-md rounded-bl-md italic font-bold tracking-wide animate-pulse">
          { props.moment }
        </div>
      </div>
        <div className="px-2 py-4 bg-[#FFB3C1]">
          <p>
            { props.momentText }
          </p>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="h-28 flex items-center">
        <div className="py-4 px-10 bg-red-100 w-48 rounded-tr-md rounded-br-md italic font-bold tracking-wide">
          { props.moment }
        </div>
      </div>
      <div className="px-2 py-4 bg-red-100">
        <p>
          { props.momentText }
        </p>
      </div>
    </>
  )
}
