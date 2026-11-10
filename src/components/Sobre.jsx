import { evento, numerosDestaque } from '../data/evento'

function Sobre() {
  return (
    <section
      id="sobre"
      className="max-w-4xl mx-auto px-4 py-16 text-center"
    >
      <h2 className="text-3xl font-bold text-primaria mb-6">
        Sobre o Evento
      </h2>

      <p className="text-neutral-600 leading-relaxed text-lg max-w-2xl mx-auto">
        {evento.sobreTexto}
      </p>

      <div className="grid grid-cols-3 gap-4 mt-12 max-w-xl mx-auto">
        {numerosDestaque.map((num) => (
          <div
            key={num.id}
            className="p-4 bg-secundaria rounded-xl"
          >
            <span className="block text-3xl sm:text-4xl font-black text-primaria">
              {num.valor}
            </span>

            <span className="text-xs sm:text-sm font-medium text-neutral-700 block mt-1">
              {num.rótulo}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Sobre