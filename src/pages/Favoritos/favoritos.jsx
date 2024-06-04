import './favoritos.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { toast } from "react-toastify"


function Favoritos(){

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const minhaLista = localStorage.getItem('@devflix')
        setFilmes(JSON.parse(minhaLista) || [])

    }, [])

    function excluirFilme(title){
        let filtroFilmes = filmes.filter((item) => {
            return (item.title !== title)
        })

        setFilmes(filtroFilmes)
        localStorage.setItem('@devflix', JSON.stringify(filtroFilmes))
        toast.success("Filme removido com sucesso!")
}



  return (
    <div className="meus-filmes">
        <h1>Meus Filmes</h1>

        {filmes.length ===0 && <span>Você não possui filmes salvos</span> }

        <ul>
            {filmes.map((item) => {
                return(
                    <li key={item.id}>
                        <span>{item.title}</span>
                        <div>
                            <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                            <button onClick={() => excluirFilme(item.title)}>Excluir</button>
                        </div>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Favoritos
