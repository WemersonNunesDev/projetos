export default function FormBook() {
    return (
        <form className="w-auto flex flex-col justify-center gap-2 text-left py-4">
            <h2 className="font-bold">Dados básicos</h2>
            <section className="border-1 rounded py-1 px-2 bg-slate-50 flex flex-col gap-2">
                <div className="flex  gap-2 py-2">
                    <label htmlFor="">Título</label>
                    <input type="text" className="focus:outline-none" placeholder="Insira o título do livro" />
                </div>
                <div className="flex items-center gap-2 py-2 border-y">
                    <label htmlFor="">Autor</label>
                    <input type="text" className="focus:outline-none" placeholder="Insira o autor do livro" />
                </div>
                <div className="flex items-center gap-2 py-2">
                    <label htmlFor="">Categoria</label>
                    <input type="text" className="focus:outline-none" placeholder="Insira a categoria do livro" />
                </div>
            </section>

            <h2 className="font-bold">Detalhes do livro</h2>

            <section className="border-1 rounded py-1 px-2 bg-slate-50 flex flex-col gap-2">
                <div className="border-b py-2 flex gap-2">
                    <label htmlFor="">ISBN</label>
                    <input type="text" className="focus:outline-none" placeholder="Insira o ISBN do livro" />
                </div>
                <div className="border-b py-2 flex itenms-center gap-2">
                    <label htmlFor="">Editora</label>
                    <input type="text" className="focus:outline-none" placeholder="Insira a editora do livro" />
                </div>
                <div className="border-b py-2 flex itenms-center gap-2">
                    <label htmlFor="">Ano</label>
                    <input type="text" className="focus:outline-none" placeholder="Insira o ano do livro" />
                </div>
                <div className="py-2 flex itenms-center gap-2">
                    <label htmlFor="">Quantidade</label>
                    <input type="text" className="focus:outline-none" placeholder="Insira a quantidade do livro" />
                </div>
            </section>

            <div className="flex justify-end-safe gap-4 mt-6">
                <button className="bg-blue-600 px-2 py-1 rounded text-white/88 font-medium w-24">Salvar</button>
                <button className="bg-gray-400 px-2 py-1 rounded text-white/88 font-medium w-24">Limpar</button>
            </div>
        </form>
    )
}