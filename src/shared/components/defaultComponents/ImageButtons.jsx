import React from 'react';
import { useScrollLock } from '../../hooks/useScrollLock';

import { useSelector, useDispatch } from "react-redux";
import { setYaiaDancing } from '../../../features/yaiaState';

import imagebuttonOne from "../../../assets/images/image-1.jpeg";
import imagebuttonTwo from "../../../assets/images/image-2.jpeg";
import imagebuttonThree from "../../../assets/images/image-3.jpeg";
import imagebuttonFour from "../../../assets/images/image-4.jpeg";
import { buttonImage, images } from "../../../css/defaultStyles";

import { Modal } from '../UIElements/Modal';

import audioOne from "../../../assets/audios/Ed Sheeran - Photograph (legendado).mp3";
import audioTwo from "../../../assets/audios/Ed Sheeran - The A Team (Acoustic Boat Sessions).mp3";
import audioThree from "../../../assets/audios/Gotye Somebody That I Used To Know (ft. The Basics  Monty Cotton) [Official Video].mp3";
import audioFour from "../../../assets/audios/Riptide.mp3";

import { Howl, Howler } from "howler";

const audioClips = {
  firstAudio: {
    main: audioOne
  },
  secondAudio: {
    main: audioTwo
  },
  thirdAudio: {
    main: audioThree
  },
  fouthAudio: {
    main: audioFour
  }
}

export const ImageButtons = () => {

  const { lockScroll, unlockScroll } = useScrollLock();

  const isYaiaDancing = useSelector(state => state.yaia.isYaiaDancing);
  const dispatch = useDispatch();

  const scrollToTheTop = () => {
    window.scrollTo(0, 0); 
    lockScroll();
  }

  const soundPlay = (src) => {
    const sound = new Howl({
      src
    });

    sound.play();

    scrollToTheTop();
  }

  Howler.volume(0.5);

  return (
    <>

      { isYaiaDancing && (
        <Modal />
      ) }

      <div className="flex justify-center mb-6">
        <div className="h-80 w-80 grid grid-cols-2 gap-8">
          <div className=" flex items-center justify-center">
            <div style={ buttonImage }>
              <button style={ images } onClick={ () => {
                  soundPlay(audioClips.firstAudio.main)
                  dispatch(setYaiaDancing());
                } }>
                <img src={ imagebuttonOne } style={ images } />
              </button>
            </div>
          </div>
          <div className=" flex items-center justify-center" >
            <div style={ buttonImage }>
              <button style={ images } onClick={ () => {
                soundPlay(audioClips.secondAudio.main);
                dispatch(setYaiaDancing());
              } }>
                <img src={ imagebuttonTwo } style={ images } />
              </button>
            </div>
          </div>
          <div className=" flex items-center justify-center">
            <div style={ buttonImage }>
              <button style={ images } onClick={ () => {
                soundPlay(audioClips.thirdAudio.main);
                dispatch(setYaiaDancing());
              } }>
                <img src={ imagebuttonThree } style={ images } />
              </button>
            </div>
          </div>
          <div className=" flex items-center justify-center">
            <div style={ buttonImage }>
              <button style={ images } onClick={ () => {
                soundPlay(audioClips.fouthAudio.main);
                dispatch(setYaiaDancing());
              } }>
                <img src={ imagebuttonFour } style={ images } />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
