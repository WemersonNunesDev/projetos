export default function Navbar() {
    return(
        <nav className="w-full mx-auto bg-emerald-950 text-white p-4">
            <div className="flex items-center justify-between">
                <a 
                    href="/"
                    className="text-3xl"
                >
                    Agenda
                </a>
                <div className="flex gap-3">
                    <a href="/login">Entrar</a>
                    <a href="/cadastro">Cadastrar</a>
                    <a href="/editar">Editar</a>
                </div>
            </div>
        </nav>
    )
}