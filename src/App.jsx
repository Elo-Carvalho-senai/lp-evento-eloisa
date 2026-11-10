import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Programacao from './components/Programacao'
import Atracoes from './components/Atracoes'
import Inscricao from './components/Inscricao'
import Rodape from './components/Rodape'
import PerguntasFrequentes from './components/PerguntasFrequentes'

function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:p-4"
      >
        Pular para o conteúdo
      </a>

      <Cabecalho />

      <main id="conteudo" tabIndex="-1">
        <Hero />
        <Sobre />
        <Programacao />
        <Atracoes />
        <Inscricao />
        <PerguntasFrequentes />
      </main>

      <Rodape />
    </>
  )
}

export default App