import { useState } from 'react'
import { ingressos } from '../data/evento'

function Inscricao() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [ingresso, setIngresso] = useState(ingressos[0].nome)
  const [enviado, setEnviado] = useState(false)

  function enviar(e) {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <section id="inscricao" class="bg-secundaria px-4 py-16 border-t border-neutral-200">
      <div class="max-w-md mx-auto">
        <h2 class="text-3xl font-bold text-center text-primaria mb-2">Garanta seu Ingresso</h2>
        <p class="text-center text-neutral-600 mb-8 text-sm">Preencha os dados abaixo para receber sua confirmação.</p>

        {enviado ? (
          <div role="status" class="p-6 bg-white border border-green-200 text-neutral-800 rounded-xl shadow-sm text-center">
            <p class="text-green-600 font-bold text-xl mb-2">🎉 Inscrição Confirmada!</p>
            <p class="font-medium">Obrigado, <span class="text-primaria font-bold">{nome}</span>.</p>
            <p class="text-sm text-neutral-600 mt-2">Enviamos as instruções para o e-mail: <span class="font-medium text-neutral-800">{email}</span>.</p>
            <div class="mt-4 p-3 bg-neutral-50 rounded-lg border border-neutral-200 text-xs font-semibold text-neutral-700">
              Tipo selecionado: {ingresso}
            </div>
          </div>
        ) : (
          <form onSubmit={enviar} class="flex flex-col gap-5 bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
            <label class="flex flex-col gap-1.5 text-sm font-semibold text-neutral-700">
              Nome Completo
              <input
                type="text"
                required
                placeholder="Seu nome aqui"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                class="w-full p-3 rounded-lg border border-neutral-300 bg-white font-normal focus:outline-none focus:ring-2 focus:ring-destaque transition-shadow"
              />
            </label>

            <label class="flex flex-col gap-1.5 text-sm font-semibold text-neutral-700">
              E-mail
              <input
                type="email"
                required
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                class="w-full p-3 rounded-lg border border-neutral-300 bg-white font-normal focus:outline-none focus:ring-2 focus:ring-destaque transition-shadow"
              />
            </label>

            <label class="flex flex-col gap-1.5 text-sm font-semibold text-neutral-700">
              Tipo de Ingresso
              <select
                value={ingresso}
                onChange={(e) => setIngresso(e.target.value)}
                class="w-full p-3 rounded-lg border border-neutral-300 bg-white font-normal focus:outline-none focus:ring-2 focus:ring-destaque transition-shadow cursor-pointer"
              >
                {ingressos.map((ing) => (
                  <option key={ing.id} value={ing.nome}>
                    {ing.nome}
                  </option>
                ))}
              </select>
            </label>

            <button 
              type="submit" 
              class="w-full bg-destaque hover:bg-orange-700 text-white font-bold p-3.5 rounded-lg min-h-[44px] transition-colors cursor-pointer shadow-sm text-center"
            >
              Confirmar Inscrição
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Inscricao
