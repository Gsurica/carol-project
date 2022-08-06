import React from 'react';
import video from "../../../assets/videos/video.mp4";
import { useDispatch } from 'react-redux';
import { isHundred } from '../../../features/onehundredPointsSlice';

export const HundredPointsModal = () => {

  const dispatch = useDispatch();

  return (
    <>
      <div className="bg-black bg-opacity-90 absolute inset-0 flex items-center w-full justify-evenly text-white" onClick={ () => dispatch(isHundred(false)) }>
        <video autoPlay loop muted src={ video } type="video/mp4" width="320" height="240" />
      </div>
      <div className="w-full flex items-center justify-center mt-8 sm:text-7xl">
        <h1 className="animate-bounce text-white">PARABÉNS FÁBIO!</h1>
      </div>
    </>
  )
}
