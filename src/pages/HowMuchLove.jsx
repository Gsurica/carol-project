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
import { HundredPointsModal } from '../shared/components/UIElements/HundredPointsModal';

import { HeartCounter } from '../shared/components/defaultComponents/HeartCounter';
import { ThemeSwitcher } from '../shared/components/UIElements/ThemeSwitcher';

export const HowMuchLove = () => {

  const presentModal = useSelector(state => state.presentLink.state);
  const hundredModal = useSelector(state => state.oneHundred.isOneHundred);

  console.log(hundredModal)

  if (presentModal) {
    return (
      <PresentModal />
    )
  }

  if (hundredModal) {
    return (
      <HundredPointsModal />
    )
  }

  return (
    <>
      <Header />
      <ThemeSwitcher />
      <div>
        <div className="grid grid-cols-2 gap-4 mt-6 p-4 rounded-md">
          <div className="flex items-center justify-center bg-rose-100 dark:bg-[#EAF8DA] px-2 py-4">
            <div style={ cardImage }>
              <img src={ imageFive } style={ cardImageContent } alt="card image" />
            </div>
          </div>
          <div className="flex items-center justify-center dark:bg-[#EAF8DA] bg-rose-100 px-2 py-4">
            <div style={ cardImage }>
              <img src={ imageSix } style={ cardImageContent } alt="card image" />
            </div>
          </div>
        </div>
        <div>
          <MomentComponent invert moment="O momento mais esperado..." momentText="Nesse campo eu deixo para registrarmos o nosso casamento, a nossa vida sendo marido e mulher, nossa vida de casados, nossas viagens e futuramente papais! Espero que tenha gostado" />
        </div>
        <div className="flex items-center justify-center px-2 py-4 bg-red-200 mt-6 dark:bg-[#BAF19C]">
          <h1 className="text-white font-bold tracking-tight sm:text-3xl dark:text-black">Ei Fábio! O quanto você ama a Carol!?</h1>
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
