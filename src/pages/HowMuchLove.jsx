import React from 'react';

import { Header } from '../shared/components/globalComponents/Header';
import { Footer } from '../shared/components/globalComponents/Footer';
import { PresentLink } from '../shared/components/defaultComponents/presentLink';

import { useSelector } from 'react-redux';

import imageFive from "../assets/images/image-5.jpeg";
import imageSix from "../assets/images/image-6.jpeg";

import { cardImage } from '../css/defaultStyles';
import { cardImageContent } from '../css/defaultStyles';
import { MomentComponent } from '../shared/components/UIElements/MomentComponent';
import { PresentModal } from '../shared/components/UIElements/PresentModal';

import { HeartCounter } from '../shared/components/defaultComponents/HeartCounter';

export const HowMuchLove = () => {

  const presentModal = useSelector(state => state.presentLink.state);

  if (presentModal) {
    return (
      <PresentModal />
    )
  }

  return (
    <>
      <Header />
      <div>
        <div className="grid grid-cols-2 gap-4 mt-6 p-4 rounded-md">
          <div className="flex items-center justify-center bg-rose-100 px-2 py-4">
            <div style={ cardImage }>
              <img src={ imageFive } style={ cardImageContent } alt="card image" />
            </div>
          </div>
          <div className="flex items-center justify-center  bg-rose-100 px-2 py-4">
            <div style={ cardImage }>
              <img src={ imageSix } style={ cardImageContent } alt="card image" />
            </div>
          </div>
        </div>
        <div>
          <MomentComponent invert moment="heart moment" momentText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique lobortis augue eget fermentum. Suspendisse pharetra turpis eu ipsum feugiat elementum. Sed finibus libero id eros pulvinar, vitae pharetra leo tincidunt. Suspendisse quis ex vel libero gravida vulputate." />
        </div>
        <div className="flex items-center justify-center px-2 py-4 bg-red-200 mt-6">
          <h1 className="text-white font-bold tracking-tight sm:text-3xl">Ei Fábio! O quanto você ama a Carol!?</h1>
        </div>
        <div>
          <HeartCounter />
        </div>
        <div>
          <PresentLink />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  )
}
