import { evento, numerosDestaque } from '../data/evento'

function Sobre() {
  return (
    <section id="sobre" class="max-w-4xl mx-auto px-4 py-16 text-center">
      <h2 class="text-3xl font-bold text-primaria mb-6">Sobre o Evento</h2>
      <p class="text-neutral-600 leading-relaxed text-lg max-w-2xl mx-auto">
        {evento.sobreTexto}
      </p>
      
      <div class="grid grid-cols-3 gap-4 mt-12 max-w-xl mx-auto">
        {numerosDestaque.map((num) => (
          <div key={num.id} class="p-4 bg-secundaria rounded-xl">
            <span class="block text-3xl sm:text-4xl font-black text-primaria">{num.valor}</span>
            <span class="text-xs sm:text-sm font-medium text-neutral-700 block mt-1">{num.rótulo}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Sobre
