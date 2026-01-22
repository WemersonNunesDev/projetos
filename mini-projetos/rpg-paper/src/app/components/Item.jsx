export default function Item({ description, weight }) {
    return (
        <tr className="grid grid-cols-2">
            <td>{description}</td>
            <td>{weight}</td>
        </tr>
    )
}