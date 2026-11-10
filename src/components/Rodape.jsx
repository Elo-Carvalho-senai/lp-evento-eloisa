import { evento } from '../data/evento'

function Rodape() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 text-center py-10 px-4 text-xs sm:text-sm border-t border-neutral-800">
      <div className="max-w-4xl mx-auto space-y-2">

        <p className="font-semibold text-white">
          {evento.nome} — {evento.local}
        </p>

        <p className="text-neutral-400">
          Evento fictício criado para fins didáticos.
        </p>

      </div>
    </footer>
  )
}

export default Rodape