
import { TextDefault } from "../shared/components/defaultComponents/TextDefault";
import { LoveLetter } from "../shared/components/defaultComponents/LoveLetter";
import { Hero } from "../shared/components/defaultComponents/Hero";
import { ImageButtons } from "../shared/components/defaultComponents/ImageButtons";

export const Home = () => {

  return (
    <div className="bg-[#FFF0F3]">
      <Hero />
      <div className="px-8 py-16">
        <div className="max-w-xl mb-16 shadow-lg p-2">
          <h2 className="text-5xl">
            Compartilhem da dor e da felicidade, porque a cada capítulo uma nova adversidade, mais uma luta e mais uma vitória!
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 text-slate-600">
          <TextDefault textDefaultTitle="Diga o que sente!" textDefaultContent="
          Você é a minha escolha. E eu nunca acertei tanto como quando eu disse “sim”. E eu nunca quis tanto continuar dizendo “sim” todos os dias, para a mesma pessoa, o resto da minha vida."/>
          <TextDefault textDefaultTitle="A escolha certa!" textDefaultContent=" Algumas escolhas mudam nossas vidas completamente. Agradeço todos os dias por escolher você." />
          <TextDefault textDefaultTitle="Somos felizes!" textDefaultContent="O amor não é viver felizes para sempre, isso é um conto de fadas. O amor é saber como enfrentar a vida juntos." />
          <TextDefault textDefaultTitle="Minha paixão!" textDefaultContent="Você é a pessoa pela qual me apaixono todos os dias como se fosse a primeira vez, e aquela pela qual irei me apaixonar a minha vida toda." />
        </div>
      </div>
      <div>
        <LoveLetter specialPerson="Amor" bodyLetter="
        Você mudou a minha vida por completo e a tornou melhor.
        Você fez dos meus dias tristes, dias felizes.
        Você me encheu de amor, de carinho.
        Você deixou minha vida cheia de prazer e com muitos motivos para sorrir.
        Você fez minha vida ganhar cor. Você deu sentido a ela.
        Você conseguiu me transformar em uma mulher de verdade. Muito mais que isso, você se transformou no homem da minha vida.
        Você me mostrou que amar não é sofrer, muito pelo contrário, amar é a coisa mais maravilhosa desse mundo e foi você que me ensinou a amar de verdade.
        Você trouxe paz e felicidade para a minha vida.
        Você conseguiu fazer meu coração sentir muito mais do que amor, um sentimento mais forte, mais intenso, mais verdadeiro, um sentimento muito além da vida e muito além do amor." />
      </div>
      <ImageButtons />
    </div>
  )
}
