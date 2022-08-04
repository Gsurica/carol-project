import React from 'react'
import { Header } from '../shared/components/globalComponents/Header'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { incrementLove, changeHeart } from "../features/loveSlice";
import { HeartCounter } from '../shared/components/UIElements/HeartCounter';

export const HowMuchLove = () => {

  const loveCounter = useSelector(state => state.love.loveCount);

  const dispatch = useDispatch();

  const upHeartHandler = () => {
    dispatch(incrementLove());
  }

  return (
    <div className="bg-[#FFF0F3]">
      <Header />
      <div>
        <div className="grid grid-cols-1 gap-8 mt-4">
          <div className="text-2xl font-bold">
            O quanto você ama a Carol, Fábio!?
          </div>
          <div className="flex justify-center">
            <h1 className="text-5xl">{ loveCounter }%</h1>
          </div>
          <div className="flex justify-center">
            <HeartCounter />
          </div>
          <div className="flex justify-center">
            <button className="py-2 px-5 bg-rose-500 text-black font-bold rounded-md text-2xl" onClick={upHeartHandler}>
              Ame!
            </button>
          </div>
          <div className="text-3xl flex justify-center">
            <span>😥</span>
          </div>
        </div>
      </div>
    </div>
  )
}
