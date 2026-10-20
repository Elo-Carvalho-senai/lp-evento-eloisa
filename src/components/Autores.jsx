import { autores } from '../data/evento'
function Autores() {
    return (
        <ul>
            {autores.map((autor) => (
                <CartaoAutor key={autor.nome} nome={autor.nome} genero={autor.genero} />
            ))}
        </ul>
    )
}

export default Autores