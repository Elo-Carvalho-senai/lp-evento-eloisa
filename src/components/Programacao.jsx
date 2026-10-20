import { programacao } from '../data/evento'

function Programacao() {
  return (
    <section id="programacao" class="bg-neutral-50 border-y border-neutral-200 px-4 py-16">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-3xl font-bold text-center text-primaria mb-10 tracking-tight">Programação Oficial</h2>
        <ol class="space-y-4">
          {programacao.map((item) => (
            <li key={item.id} class="flex items-start gap-4 p-4 bg-white rounded-xl border border-neutral-200/80 shadow-xs hover:border-orange-200 transition-colors">
              <time class="font-bold text-white bg-variacao px-3 py-1.5 rounded-lg text-xs sm:text-sm whitespace-nowrap tracking-wide uppercase">
                {item.horario}
              </time>
              <p class="text-neutral-700 font-medium pt-0.5 text-sm sm:text-base">{item.atividade}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Programacao
