export default function FormOrcamento() {
    return (
        <div className="my-4">
            <form action="">
                <section className="flex flex-col gap-2">
                    <label className="font-bold p-1">Qual é o tipo de tijolo?</label>
                    <div className="flex gap-3 px-2 mt-2">
                        <button className="uppercase text-sm border border-gray px-2 py-1 hover:cursor-pointer">Tijolo Vermelho</button>
                        <button className="uppercase text-sm border border-gray px-2 py-1 hover:cursor-pointer">Tijolo ecologico</button>
                    </div>

                    <label>Preço unidade:</label>
                    <input type="number" name="" id="" />
                </section>

                <div className="my-2 grid grid-cols-2">
                    <h3 className="text-lg font-bold col-span-2 pb-2">Perimetro</h3>
                    <div className="flex flex-col gap-2 mr-4">
                        <label>Frente</label>
                        <input type="number" className="outline rounded" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label>Profundidade</label>
                        <input type="number" className="outline rounded" />
                    </div>
                </div>

                <section className="flex flex-col gap-2">
                    <label>Altura da parede:</label>
                    <input type="number" className="outline rounded" />
                </section>

                <div className="border-t flex justify-end items-center p-4 mt-6">
                    <button className="bg-blue-500 px-2 py-1 rounded font-medium hover:cursor-pointer">Salvar</button>
                </div>
            </form>
        </div>
    )
}