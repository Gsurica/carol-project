import backgroundImage from "../assets/images/image-1.jpeg";

export const Home = () => {

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    height: "50%",
    position: "relative",
  }

  return (
    <div>
      <div className="text-white" style={backgroundImageStyle}>
        <div className="bg-gradient-to-r from-black px-8 py-16">
          <div className="max-w-xl grid grid-cols-1 gap-8">
            <h2 className="text-xl uppercase font-bold">sejam felizes!</h2>
            <h1 className="text-5xl font-bold">Com toda certeza, é mútuo!</h1>
            <p className="text-lg">
              E apenas vocês sabem como começou, caminhou e apenas vocês sabem como vai terminar. Mas, pode ter certeza que é bela e magnífica a história que vocês têm!
            </p>
            <a href="/moments" className="bg-gradient-to-r from-pink-600 to-orange-600 py-3 px-6 text-lg rounded-md w-64">Lembrem-se dos momentos</a>
          </div>
        </div>
      </div>
      <div className="px-8 py-16">
        <div className="max-w-xl mb-16">
          <h2 className="text-5xl">
            Compartilhem da dor e da felicidade, porque a cada capítulo uma nova adversidade, mais uma luta e mais uma vitória!
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 text-slate-600">
          <div>
            <h3 className="text-2xl font-bold mb-2">Diga o que sente!</h3>
            <p className="text-lg">
              Você é a minha escolha. E eu nunca acertei tanto como quando eu disse “sim”. E eu nunca quis tanto continuar dizendo “sim” todos os dias, para a mesma pessoa, o resto da minha vida.
            </p>
          </div>
          <div>
          <h3 className="text-2xl font-bold mb-2">A escolha certa!</h3>
            <p className="text-lg">
              Algumas escolhas mudam nossas vidas completamente. Agradeço todos os dias por escolher você.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Somos felizes!</h3>
            <p className="text-lg">
              O amor não é viver felizes para sempre, isso é um conto de fadas. O amor é saber como enfrentar a vida juntos.
            </p>
          </div>
          <div>
          <h3 className="text-2xl font-bold mb-2">Minha paixão!</h3>
            <p className="text-lg">
              Você é a pessoa pela qual me apaixono todos os dias como se fosse a primeira vez, e aquela pela qual irei me apaixonar a minha vida toda.
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="p-5">
          <h1 className="text-2xl font-bold italic mb-4">Feliz Aniversário, Fábio!</h1>
          <p className="text-lg indent-8 bg-zinc-800 py-3 px-4 text-white rounded-md">
          Você mudou a minha vida por completo e a tornou melhor.
          Você fez dos meus dias tristes, dias felizes.
          Você me encheu de amor, de carinho.
          Você deixou minha vida cheia de prazer e com muitos motivos para sorrir.
          Você fez minha vida ganhar cor. Você deu sentido a ela.
          Você conseguiu me transformar em uma mulher de verdade. Muito mais que isso, você se transformou no homem da minha vida.
          Você me mostrou que amar não é sofrer, muito pelo contrário, amar é a coisa mais maravilhosa desse mundo e foi você que me ensinou a amar de verdade.
          Você trouxe paz e felicidade para a minha vida.
          Você conseguiu fazer meu coração sentir muito mais do que amor, um sentimento mais forte, mais intenso, mais verdadeiro, um sentimento muito além da vida e muito além do amor.
          </p>
        </div>
      </div>
    </div>
  )
}
