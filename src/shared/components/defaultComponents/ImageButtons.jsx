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

import audioOne from "../../../assets/audios/Guga Nandes - Presentinho.mp3";
import audioTwo from "../../../assets/audios/John Legend - All of Me.mp3";
import audioThree from "../../../assets/audios/Eminem - Lose Yourself (Lyrics).mp3";
import audioFour from "../../../assets/audios/A CARA DO CRIME NOS INCOMODA- MC poze do rodo VIDEO CLIPE (LETRA).mp3";

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

  const audioPlay = (newAudio) => {
    const audio = new Audio(newAudio);
    console.log(audio)
    audio.play();
  }

  const dispatch = useDispatch();

  const soundPlay = (src) => {
    const sound = new Howl({
      src
    });

    sound.play();
  }

  Howler.volume(0.5);

  return (
    <>

      <div className="flex justify-center mb-6 -z-50">
        <div className="h-80 w-80 grid grid-cols-2 gap-8">
          <div className=" flex items-center justify-center">
            <div style={ buttonImage }>
              <audio id="audio1" src={ audioOne } />
              <button style={ images } onClick={ () => {
                  audioPlay(audioOne);
                  dispatch(setYaiaDancing());
                } }>
                <img src={ imagebuttonOne } style={ images } />
              </button>
            </div>
          </div>
          <div className=" flex items-center justify-center" >
            <div style={ buttonImage }>
              <button style={ images } onClick={ () => {
                audioPlay(audioTwo)
                dispatch(setYaiaDancing());
              } }>
                <img src={ imagebuttonTwo } style={ images } />
              </button>
            </div>
          </div>
          <div className=" flex items-center justify-center">
            <div style={ buttonImage }>
              <button style={ images } onClick={ () => {
                audioPlay(audioThree);
                dispatch(setYaiaDancing());
              } }>
                <img src={ imagebuttonThree } style={ images } />
              </button>
            </div>
          </div>
          <div className=" flex items-center justify-center">
            <div style={ buttonImage }>
              <button style={ images } onClick={ () => {
                audioPlay(audioFour);
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
