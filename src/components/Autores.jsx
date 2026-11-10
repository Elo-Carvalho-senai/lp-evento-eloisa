
import { autores } from '../data/evento'
import CartaoAutor from './CartaoAutor'

function Autores() {
  return (
    <ul className="grid gap-4">
      {autores.map((autor) => (
        <li key={autor.nome}>
          <CartaoAutor
            nome={autor.nome}
            genero={autor.genero}
          />
        </li>
      ))}
    </ul>
  )
}

export default Autores
