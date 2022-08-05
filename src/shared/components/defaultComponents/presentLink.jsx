import React from 'react';

import { useDispatch } from "react-redux";

import { turnOn } from "../../../features/presentModalSlice";

export const PresentLink = () => {

  const dispatch = useDispatch();

  return (
    <div>
      <button className="flex items-center justify-evenly w-full"
        onClick={ () => {
          dispatch(turnOn(true));
        } }
      >
        <div className="animate-bounce">
          <span className="sm:text-4xl">🎁</span>
        </div>
        <div className="sm:text-4xl px-4 py-6 uppercase text-rose-400 italic">
          presente
        </div>
        <div className="animate-bounce">
          <span className="sm:text-4xl">🎁</span>
        </div>
      </button>
    </div>
  )
}
