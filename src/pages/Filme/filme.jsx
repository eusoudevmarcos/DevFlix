import './filme-info.css'

import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { toast } from 'react-toastify'

import api from '../../services/api'

const Filme = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [filme, setFilme] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() =>{
    async function loadFilme(){
      await api.get(`/movie/${id}`, {
        params:{
          api_key: "28fc232cc001c31e8a031f419d0a14ca",
          Language: "pt-BR",
        }
      })
      .then((response)=>{
        setFilme(response.data)
        setLoading(false)
      })
      .catch(()=>{
        ("Filme não encontrado!")
        navigate('/', { replace: true })
        return
      })
    }

    loadFilme()
  }, [navigate, id])

  function salvarFilme(){
    const minhaLista = localStorage.getItem('@devflix')

    let filmesSalvos = JSON.parse(minhaLista) || []

    const hasFilme = filmesSalvos.some( (filmesSalvo => filmesSalvo.id === filme.id))

    if(hasFilme){
      toast.warn("ESSE FILME JÁ ESTÁ NA LISTA")
      return
    }

    filmesSalvos.push(filme)
    localStorage.setItem('@devflix', JSON.stringify(filmesSalvos))
    toast.success("FILME SALVO COM SUCESSO")

  }

  if(loading){
    return(
      <div className="filme-info">
        <h1>Carregando detalhes...</h1>
      </div>
    )
  }

  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={Filme.title} />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>

      <strong>Avaliação: {filme.vote_average} / 10</strong>

      <div className="area-buttons">
        <button onClick={salvarFilme}>Salvar</button>
        <button>
          <a target="blank" rel='external' href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>
            Trailer
          </a>
        </button>
      </div>

    </div>
  )
}

export default Filme
