import React from 'react';

import { useSelector } from "react-redux";

export const HeartCounter = () => {

  const heartColor = useSelector(state => state.love.heartColor);

  return (
    <>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-48 w-48" viewBox="0 0 20 20" fill={ heartColor }>
        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
      </div>
    </>
  )
}