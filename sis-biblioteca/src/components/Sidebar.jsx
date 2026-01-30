import { NavLink } from 'react-router-dom'

export function Sidebar() {
    return (
        <aside className='w-64 bg-slate-900 text-slate-200 flex flex-col'>
            <h3 className='p-4 text-xl font-bold'>Biblioteca</h3>
            <nav className='flex flex-col text-left px-4'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/cadastro'>Cadastro</NavLink>
                <NavLink to='/estoque'>Estoque</NavLink>
                <NavLink to='/pendencias'>Pendências</NavLink>
                <NavLink to='/relatorio'>Relatório</NavLink>
                <NavLink to='/reservas'>Reservas</NavLink>
            </nav>
        </aside>
    )
}