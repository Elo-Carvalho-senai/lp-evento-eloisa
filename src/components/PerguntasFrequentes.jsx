import { useState } from 'react'

const perguntas = [
  {
    pergunta: 'Aceita cartão?',
    resposta: 'Sim, todas as barracas aceitam cartão e Pix.'
  },
  {
    pergunta: 'Tem opção vegetariana?',
    resposta: 'Sim, pelo menos cinco barracas têm pratos sem carne.'
  },
  {
    pergunta: 'Posso levar meu cachorro?',
    resposta: 'Pode, desde que na coleira.'
  }
]

function PerguntasFrequentes() {
  const [aberta, setAberta] = useState(null)

  return (
    <section id="duvidas" className="bg-white px-4 py-16">

      <div className="max-w-3xl mx-auto">

        <h2 className="mb-6 text-3xl font-bold text-primaria">
          Perguntas frequentes
        </h2>

        {perguntas.map((item, index) => (

          <div key={item.pergunta} className="border-b border-neutral-200 py-4">

            <h3>

              <button
                type="button"
                aria-expanded={aberta === index}
                aria-controls={`resposta-${index}`}
                onClick={() => setAberta(aberta === index ? null : index)}
                className="w-full text-left font-semibold text-primaria py-2 hover:text-destaque"
              >
                {item.pergunta}
              </button>

            </h3>

            <p
              id={`resposta-${index}`}
              hidden={aberta !== index}
              className="mt-2 text-neutral-700"
            >
              {item.resposta}
            </p>

          </div>

        ))}

      </div>

    </section>
  )
}

export default PerguntasFrequentes