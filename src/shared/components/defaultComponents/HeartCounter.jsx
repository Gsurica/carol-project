import React from 'react'
import { ProgressBar } from '../UIElements/ProgressBar';
import {  useDispatch, useSelector } from 'react-redux';
import { incrementLove, checkLoveHandler } from "../../../features/progressBarSlice";

export const HeartCounter = () => {

  const love = useSelector(state => state.progress.counter);
  const dispatch = useDispatch();

  const checkLoveCounts = () => {
    dispatch(incrementLove());
    if (love >= 100) { 
      dispatch(checkLoveHandler(100));
    }
  }

  return (
    <div className="p-4 bg-rose-100 opacity-70 grid grid-cols-1 gap-8">
      <div className="items-center justify-center flex">
        <ProgressBar />
      </div>
      <div className="bg-white px-3 py-4 rounded-md flex justify-center items-center text-5xl">
        <p className="animate-pulse"><ion-icon name="heart-sharp"></ion-icon></p>
      </div>
      <button
        onClick={ () => {
          checkLoveCounts()
        } }
      >
        <div className="bg-white px-3 py-4 rounded-md flex justify-center items-center text-5xl">
          <ion-icon name="heart-circle-sharp"></ion-icon>
        </div>
      </button>
      <div className="text-zinc-600 flex items-center justify-center">
        <p className="sm:text-3xl animate-pulse ">(ame-a o quanto você puder... existe apenas uma dela no mundo)</p>
      </div>
    </div>
  )
}
