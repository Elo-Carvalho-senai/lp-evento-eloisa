
function CartaoAutor({ nome, genero }) {
  return (
    <article className="rounded-xl bg-white p-6 shadow">
      <h3 className="text-xl font-bold text-primaria">{nome}</h3>
      <p className="mt-2 text-sm text-neutral-600">{genero}</p>
    </article>
  )
}

export default CartaoAutor
