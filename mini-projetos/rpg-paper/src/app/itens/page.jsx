import Navbar from "../components/Navbar"
import Item from "../components/Item"

export default function Itens() {
    return (
        <div className="container mx-auto p-4">
            <Navbar titlePage='Itens'/>
            <main className="mt-8">
                <h1 className="text-3xl font-semibold uppercase">Seus itens</h1>

                <p className="uppercase my-4">Carga maxima (3x Força)</p>

                <table className="w-full">
                    <tr className="grid grid-cols-2 text-left border-b border-gray-950 mb-2">
                        <th>Item</th>
                        <th>Peso</th>
                    </tr>
                    <Item description="Espada Curta" weight="1kg"/>
                    <Item description="Espada Longa" weight="2kg"/>
                    <Item description="Brunea" weight="15kg"/>
                    <Item description="Escudo Leve" weight="3kg"/>
                </table>
            </main>
        </div>
    )
}