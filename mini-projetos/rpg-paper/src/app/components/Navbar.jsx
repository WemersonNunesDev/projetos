import Link from "next/link"

export default function Navbar({ titlePage }) {
    return (
        <header>
            <Link href='/' className="text-3xl font-semibold text-gray-950" > {titlePage}</Link>

            <nav className="flex gap-4 mt-4">
                <Link href='/caracteres'>Personagens</Link>
                <Link href='/rolls'>Rolagens</Link>
                <Link href='/itens'>Itens</Link>
            </nav>
        </header>
    )
}