import React from 'react';

import imagebuttonOne from "../../../assets/images/image-1.jpeg";
import imagebuttonTwo from "../../../assets/images/image-2.jpeg";
import imagebuttonThree from "../../../assets/images/image-3.jpeg";
import imagebuttonFour from "../../../assets/images/image-4.jpeg";
import { buttonImage, images } from "../../../css/defaultStyles"


export const ImageButtons = () => {
  return (
    <>
      <div className="flex justify-center mb-6">
        <div className="h-80 w-80 bg-red-800 grid grid-cols-2">
          <div className="bg-rose-100 flex items-center justify-center">
            <div style={ buttonImage }>
              <img src={ imagebuttonOne } style={ images } />
            </div>
          </div>
          <div className="bg-rose-200 flex items-center justify-center" >
            <div style={ buttonImage }>
              <img src={ imagebuttonTwo } style={ images } />
            </div>
          </div>
          <div className="bg-rose-300 flex items-center justify-center">
            <div style={ buttonImage }>
              <img src={ imagebuttonThree } style={ images } />
            </div>
          </div>
          <div className="bg-rose-400 flex items-center justify-center">
            <div style={ buttonImage }>
              <img src={ imagebuttonFour } style={ images } />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
