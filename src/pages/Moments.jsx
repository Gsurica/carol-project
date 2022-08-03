import React from 'react';
import { Header } from '../shared/components/globalComponents/Header';
import { MomentComponent } from '../shared/components/UIElements/MomentComponent';

export const Moments = () => {
  return (
    <>
     <div className="bg-[#FFF0F3]">
      <Header />
      
      <MomentComponent moment="momento 1" momentText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare venenatis justo, eu egestas lectus. Phasellus vel nibh erat. Nunc tempus dolor sit amet ante fermentum, non scelerisque massa scelerisque. Cras et rutrum enim. Nullam dignissim, tortor vel porttitor tristique, purus ante vehicula tortor, vitae tempor leo ligula ut leo. Nulla et libero placerat," />

      <MomentComponent invert moment="momento 2" momentText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare venenatis justo, eu egestas lectus. Phasellus vel nibh erat. Nunc tempus dolor sit amet ante fermentum, non scelerisque massa scelerisque. Cras et rutrum enim. Nullam dignissim, tortor vel porttitor tristique, purus ante vehicula tortor, vitae tempor leo ligula ut leo. Nulla et libero placerat," />

      <MomentComponent moment="momento 3" momentText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare venenatis justo, eu egestas lectus. Phasellus vel nibh erat. Nunc tempus dolor sit amet ante fermentum, non scelerisque massa scelerisque. Cras et rutrum enim. Nullam dignissim, tortor vel porttitor tristique, purus ante vehicula tortor, vitae tempor leo ligula ut leo. Nulla et libero placerat," />

      <MomentComponent invert moment="momento 4" momentText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare venenatis justo, eu egestas lectus. Phasellus vel nibh erat. Nunc tempus dolor sit amet ante fermentum, non scelerisque massa scelerisque. Cras et rutrum enim. Nullam dignissim, tortor vel porttitor tristique, purus ante vehicula tortor, vitae tempor leo ligula ut leo. Nulla et libero placerat," /> 
     </div>
    </>
  )
}
