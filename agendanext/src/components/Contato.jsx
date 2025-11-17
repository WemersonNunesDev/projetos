export default function Contato({ nome, sobrenome, celular, email }) {
    return(
        <tr className="grid grid-cols-4 border-b border-gray-950 px-2 py-3">
            <td className="capitalize">{nome}</td>
            <td className="capitalize">{sobrenome}</td>
            <td className="">{celular}</td>
            <td className="">{email}</td>
        </tr>
    )
}