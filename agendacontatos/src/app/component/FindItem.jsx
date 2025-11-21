import ItemTable from "@/components/ItemTable";
import Msgbox from "@/components/Msgbox";
import EditOption from "./EditOptions";

export default async function FindItem() {
    const res = await fetch('http://localhost:3000/api/agenda', { cache: 'no-store' });
    const contatos = await res.json();

    const lista = Array.isArray(contatos) 
        ? contatos 
        : contatos?.dados ?? [];

    return(
        <table className="w-full">
            <tbody>
                {lista.length > 0 ? (
                    lista.map((item, index) => (
                        <ItemTable 
                            key={index}
                            name={item.nome}
                            secondName={item.sobrenome}
                            phone={item.telefone}
                            email={item.email}
                            options={<EditOption id={item._id}/>}
                        />
                    ))
                ) : (
                    <tr>
                        <td colSpan={4}>
                            <Msgbox
                                text={'Nenhum contato encontrado.'}
                                styleMsg={'alert'}
                            />
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}