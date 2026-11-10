
function CartaoAtracao({ nome, detalhe }) {
  return (
    <article className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md motion-safe:transition-shadow flex flex-col h-full">
      <h3 className="text-xl font-bold text-primaria">{nome}</h3>
      <p className="mt-3 text-neutral-600 leading-relaxed text-sm flex-grow">
        {detalhe}
      </p>
    </article>
  )
}

export default CartaoAtracao
