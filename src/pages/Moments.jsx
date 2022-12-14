import React from 'react';

import { Header } from '../shared/components/globalComponents/Header';
import { Footer } from '../shared/components/globalComponents/Footer';

import { MomentComponent } from '../shared/components/UIElements/MomentComponent';

import { ThemeSwitcher } from '../shared/components/UIElements/ThemeSwitcher';

export const Moments = () => {
  return (
    <>
     <div className="bg-[#FFF0F3]">
      <Header />
      <ThemeSwitcher />
      
      <MomentComponent moment="Aquela festinha..." momentText={`No dia 03/08/2019 surgiu uma ideia na minha cabeça de fazer uma festinha para você, lembra? Foi o dia mais aleatório e mais incrível da minha vida, preparei tudo com muito amor, sem intenção nenhuma até porque nós ainda éramos amigos, cuidei de cada detalhe para que o seu dia fosse fantástico e único, montei um grupo no whatsapp e coloquei todas as pessoas na qual você gostava, inclusive os seus amigos de fora que eu nem conhecia kkk, nesse dia você achou que ia pular de Bungee Jump, e foi totalmente despreparado para o que estava por vir. Eu tenho plena certeza que cada detalhe desse dia foi planejado por Deus também, foi tudo tão leve e tão natural, foi tudo muito perfeito, poder ver o brilho nos teus olhos e a sua felicidade não teve preço, eu faria tudo novamente para te ver feliz daquele jeito amor! Nesse dia, você me pediu em namoro, e desde então tu tem sido a minha melhor companhia`} />

      <MomentComponent invert moment="Aquele dia, aquele maravilhoso dia..." momentText="E quem diria que o dia 12/03/2022 seria o nosso grande dia? No mesmo lugar onde tudo começou foi onde demos o primeiro passo para uma vida juntos, você fez uma surpresa tão linda e tão especial, que eu nem conseguia acreditar, achei que era brincadeira, o mês de março estava sendo bem turbulento para mim, mas você foi perfeito amor, foi o sábado mais feliz da minha vida! Obrigada por toda dedicação a nós, eu te amo demais e quero viver o resto da minha vida ao seu lado." />

      <MomentComponent moment="O amor é algo vívido!" momentText="O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha.
      Não maltrata, não procura seus interesses, não se ira facilmente, não guarda rancor.
      O amor não se alegra com a injustiça, mas se alegra com a verdade.
      Tudo sofre, tudo crê, tudo espera, tudo suporta. 1 Coríntios 13:4-7" />
     </div>
     <div>
      <Footer />
     </div>
    </>
  )
}
