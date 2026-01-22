import Navbar from "../components/Navbar"

export default function Caracteres() {
    return (
        <div className="container mx-auto p-4">
            <Navbar titlePage='Personagens'/>
            <main className="mt-8">
                <h1 className="text-3xl text-gray-950 font-semibold uppercase">Seus Personagens</h1>
            </main>
        </div>
    )
}