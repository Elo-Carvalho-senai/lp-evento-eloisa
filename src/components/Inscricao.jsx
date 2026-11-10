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
    <section id="inscricao" className="bg-secundaria px-4 py-16 border-t border-neutral-200">

      <div className="max-w-md mx-auto">

        <h2 className="text-3xl font-bold text-center text-primaria mb-2">
          Garanta seu Ingresso
        </h2>

        <p className="text-center text-neutral-700 mb-8 text-sm">
          Preencha os dados abaixo para receber sua confirmação.
        </p>

        {enviado ? (

          <div
            role="status"
            className="p-6 bg-white border border-green-200 text-neutral-800 rounded-xl shadow-sm text-center"
          >
            <p className="text-green-700 font-bold text-xl mb-2">
              <span aria-hidden="true">🎉 </span>
              Inscrição Confirmada!
            </p>

            <p className="font-medium">
              Obrigado, <span className="text-primaria font-bold">{nome}</span>.
            </p>

            <p className="text-sm text-neutral-700 mt-2">
              Enviamos as instruções para o e-mail:
              <span className="font-medium text-neutral-800"> {email}</span>.
            </p>

            <div className="mt-4 p-3 bg-neutral-50 rounded-lg border border-neutral-200 text-xs font-semibold text-neutral-700">
              Tipo selecionado: {ingresso}
            </div>

          </div>

        ) : (

          <form
            onSubmit={enviar}
            className="flex flex-col gap-5 bg-white p-6 rounded-xl shadow-sm border border-neutral-200"
          >

            <label className="flex flex-col gap-1.5 text-sm font-semibold text-neutral-700">
              Nome Completo

              <input
                type="text"
                name="nome"
                autoComplete="name"
                required
                placeholder="Seu nome aqui"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full p-3 rounded-lg border border-neutral-300 bg-white font-normal focus:ring-2 focus:ring-destaque motion-safe:transition-shadow"
              />
            </label>

            <label className="flex flex-col gap-1.5 text-sm font-semibold text-neutral-700">
              E-mail

              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-lg border border-neutral-300 bg-white font-normal focus:ring-2 focus:ring-destaque motion-safe:transition-shadow"
              />
            </label>

            <label className="flex flex-col gap-1.5 text-sm font-semibold text-neutral-700">
              Tipo de Ingresso

              <select
                name="ingresso"
                value={ingresso}
                onChange={(e) => setIngresso(e.target.value)}
                className="w-full p-3 rounded-lg border border-neutral-300 bg-white font-normal focus:ring-2 focus:ring-destaque cursor-pointer"
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
              className="w-full bg-destaque hover:bg-orange-700 text-white font-bold p-3.5 rounded-lg min-h-[44px] motion-safe:transition-colors cursor-pointer shadow-sm text-center"
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