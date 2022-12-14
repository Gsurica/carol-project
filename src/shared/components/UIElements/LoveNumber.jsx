import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const LoveNumber = () => {

  const love = useSelector(state => state.progress.counter );

  const getLove = () => {
    return love
  }

  useEffect(() => {
    getLove()
  }, [love])

  return (
    <div className="w-full flex items-center justify-center py-4 dark:text-[#A1EF7A] text-[#FFB3C1] bg-zinc-800">
      <h1 className="text-6xl">{ getLove() }%</h1>
    </div>
  )
}
