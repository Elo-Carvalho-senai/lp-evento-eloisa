import { evento } from '../data/evento'

function Cabecalho() {
  return (
    <header class="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
      <div class="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span class="font-bold text-lg text-primaria tracking-tight">{evento.nome}</span>
        <nav aria-label="Navegação principal">
          <ul class="flex flex-wrap gap-6 text-sm font-medium text-neutral-600">
            <li><a href="#sobre" class="hover:text-destaque transition-colors py-2 block">Sobre</a></li>
            <li><a href="#programacao" class="hover:text-destaque transition-colors py-2 block">Programação</a></li>
            <li><a href="#atracoes" class="hover:text-destaque transition-colors py-2 block">Atrações</a></li>
            <li><a href="#inscricao" class="hover:text-destaque transition-colors py-2 block">Ingressos</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Cabecalho
