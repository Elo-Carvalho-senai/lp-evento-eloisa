function CartaoAtracao({ nome, detalhe }) {
  return (
    <article class="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
      <h3 class="text-xl font-bold text-primaria">{nome}</h3>
      <p class="mt-3 text-neutral-600 leading-relaxed text-sm flex-grow">{detalhe}</p>
    </article>
  )
}

export default CartaoAtracao
