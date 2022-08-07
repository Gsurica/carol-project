import React from 'react'

export const MomentComponent = (props) => {

  if (props.invert) {
    return (
      <>
        <div className="h-28 flex items-center justify-end">
        <div className="py-4 px-10 bg-[#FFCCD5] dark:bg-[#EAF8DA] dark:text-black w-1/2 rounded-tl-md rounded-bl-md italic animate-pulse sm:text-2xl shadow-lg">
          { props.moment }
        </div>
      </div>
        <div className="md:w-full md:flex md:justify-end md:items-center">
          <div className="px-2 py-4 bg-[#FFB3C1] dark:bg-[#D0F4BA] dark:text-black sm:text-3xl shadow-lg md:max-w-5xl">
            <p>
              { props.momentText }
            </p>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="h-28 flex items-center">
        <div className="py-4 px-10 bg-red-100 w-1/2 dark:bg-[#EAF8DA] dark:text-black rounded-tr-md rounded-br-md italic font-bold tracking-wide sm:text-2xl shadow-lg">
          { props.moment }
        </div>
      </div>
      <div className="px-2 py-4 bg-red-100 sm:text-3xl dark:bg-[#D0F4BA] dark:text-black shadow-lg md:max-w-4xl md:flex md:justify-end">
        <p>
          { props.momentText }
        </p>
      </div>
    </>
  )
}
