export default function ItemTable({ name, secondName, phone, email }) {
    return(
        <tr className="grid grid-cols-4 px-4 py-2 border-b">
                <td className="capitalize">{name}</td>
                <td className="capitalize">{secondName}</td>
                <td>{phone}</td>
                <td>{email}</td>
        </tr>
    )
}