'use client'
export default function ItemTable({ name, secondName, phone, email, options }) {
    return(
        <tr className="grid grid-cols-6 px-4 py-2 items-center border-b">
                <td className="capitalize">{name}</td>
                <td className="capitalize">{secondName}</td>
                <td>{phone}</td>
                <td className="col-span-2">{email}</td>
                <td>{options}</td>
        </tr>
    )
}