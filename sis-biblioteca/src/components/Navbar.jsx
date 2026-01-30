import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <header className="bg-gray-900/88 text-white/80">
            <nav className='flex justify-eveelen'>
                <Link to='/'>Home</Link>
                <Link to='/CadastroLivros'>Cadastrar Livros</Link>
            </nav>
        </header>
    )
}