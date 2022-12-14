import React from 'react';
import { useSelector } from 'react-redux';

export const ProgressBar = () => {
  const love = useSelector(state => state.progress.counter);

  const progressBarStyle = {
    width: `${love}%`,
    height: 30
  }


  return (
  <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
    <div className="bg-gradient-to-r bg-rose-400 from-red-400 dark:from-[#A1EF7A] dark:to-[#EAF8DA] dark:text-black  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full sm:text-2xl" style={ progressBarStyle }>
    </div>
  </div>
  )
}
