import { evento } from '../data/evento'

function Hero() {
  return (
    <section class="bg-gradient-to-br from-primaria to-[#2d1102] px-4 py-24 sm:py-32 text-white text-center border-b-4 border-destaque">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
          {evento.nome}
        </h1>
        <p class="mt-6 text-lg sm:text-xl text-orange-100/90 font-light max-w-xl mx-auto">
          {evento.slogan}
        </p>
        <p class="mt-6 font-medium text-primaria bg-secundaria inline-block px-5 py-2 rounded-full text-xs sm:text-sm border border-orange-200/50 shadow-sm">
          📍 {evento.local} <span class="mx-2 text-orange-300">|</span> 📅 {evento.data}
        </p>
        <div class="mt-12">
          <a href="#inscricao" class="inline-flex items-center justify-center bg-destaque hover:bg-orange-800 hover:scale-105 transform text-white font-bold px-8 py-4 rounded-xl min-h-[48px] shadow-xl transition-all tracking-wide text-sm uppercase">
            Garantir Meu Ingresso
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
