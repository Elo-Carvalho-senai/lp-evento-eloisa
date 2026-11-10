import { atracoes } from '../data/evento'
import CartaoAtracao from './CartaoAtracao'

function Atracoes() {
  return (
    <section
      id="atracoes"
      className="max-w-6xl mx-auto px-4 py-16"
    >
      <h2 className="text-3xl font-bold text-center text-primaria mb-10">
        Atrações Principais
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {atracoes.map((atracao) => (
          <CartaoAtracao
            key={atracao.id}
            nome={atracao.nome}
            detalhe={atracao.detalhe}
          />
        ))}
      </div>
    </section>
  )
}

export default Atracoes