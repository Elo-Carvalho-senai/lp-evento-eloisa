import { programacao } from '../data/evento'

function Programacao() {
  const datas = [
    '2027-06-04T18:00:00',
    '2027-06-05T11:00:00',
    '2027-06-05T15:00:00',
    '2027-06-05T19:00:00',
    '2027-06-06T12:00:00',
    '2027-06-06T17:00:00'
  ]

  return (
    <section
      id="programacao"
      className="bg-neutral-50 border-y border-neutral-200 px-4 py-16"
    >
      <div className="max-w-2xl mx-auto">

        <h2 className="text-3xl font-bold text-center text-primaria mb-10 tracking-tight">
          Programação Oficial
        </h2>

        <ol className="space-y-4">
          {programacao.map((item, index) => (
            <li
              key={item.id}
              className="flex items-start gap-4 p-4 bg-white rounded-xl border border-neutral-200 shadow-sm hover:border-orange-200 motion-safe:transition-colors"
            >
              <time
                dateTime={datas[index]}
                className="font-bold text-white bg-variacao px-3 py-1.5 rounded-lg text-xs sm:text-sm whitespace-nowrap tracking-wide uppercase"
              >
                {item.horario}
              </time>

              <p className="text-neutral-700 font-medium pt-0.5 text-sm sm:text-base">
                {item.atividade}
              </p>
            </li>
          ))}
        </ol>

      </div>
    </section>
  )
}

export default Programacao