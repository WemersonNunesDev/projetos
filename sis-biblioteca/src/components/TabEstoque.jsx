export default function TabEstoque() {
    return (
        <section className="w-full">
            <table className="my-6">
                <tr className="grid grid-cols-5">
                    <th className="col-span-2">Total de Livros</th>
                    <th className="col-span-2">Disponíveis</th>
                    <th>Emprestados</th>
                </tr>
                <tr className="grid grid-cols-5">
                    <td className="col-span-2">150</td>
                    <td className="col-span-2">93</td>
                    <td>57</td>
                </tr>
            </table>
            <table>
                <tr className="grid grid-cols-5">
                    <th>Livro</th>
                    <th>Total</th>
                    <th>Disponível</th>
                    <th>Emprestado</th>
                    <th>Status</th>
                </tr>
                <tr className="grid grid-cols-5">
                    <td>Duna</td>
                    <td>12</td>
                    <td>8</td>
                    <td>4</td>
                    <td>Normal</td>
                </tr>
            </table>
        </section>
    )
}