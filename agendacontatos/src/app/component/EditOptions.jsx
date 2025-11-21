'use client'

import { useRouter } from "next/navigation";

export default function EditOption({ id }) {
    const router = useRouter();

    async function delet(e) {
        e.preventDefault();

        await fetch(`/api/agenda?id=${id}`, {
            method: 'DELETE',
        })

        router.refresh();
    }

    return(
        <div>
            <button 
                onClick={delet}
                className="bg-rose-600 text-white text-sm font-medium px-2 py-1 rounded border-2 hover:bg-transparent hover:text-rose-600 transition duration-200 ease-in-out"
            >Apagar</button>
        </div>
    )
}