import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <Link className='logo' to='/'>DevFlix</Link>
        <Link className='favoritos' to='/favoritos'>Meus Filmes</Link>



    </header>
  )
}

export default Header
