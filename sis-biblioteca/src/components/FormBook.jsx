import { useState } from "react"

export default function FormBook() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [isbn, setIsbn] = useState('');
    const [editora, setEditora] = useState('');
    const [ano, setAno] = useState('');
    const [quantidade, setQuantidade] = useState('');

    function handleLimpar() {
        setTitle('');
        setAuthor('');
        setCategory('');
        setIsbn('');
        setEditora('');
        setAno('');
        setQuantidade('');
    }

    return (
        <form className="w-auto flex flex-col justify-center gap-2 text-left py-4">
            <h2 className="font-bold">Dados básicos</h2>
            <section className="border rounded py-1 px-2 bg-slate-50 flex flex-col gap-2">
                <div className="flex  gap-2 py-2">
                    <label htmlFor="">Título</label>
                    <input 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        type="text" 
                        className="focus:outline-none" 
                        placeholder="Insira o título do livro" 
                    />
                </div>
                <div className="flex items-center gap-2 py-2 border-y">
                    <label htmlFor="">Autor</label>
                    <input 
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                        type="text" 
                        className="focus:outline-none" 
                        placeholder="Insira o autor do livro" 
                    />
                </div>
                <div className="flex items-center gap-2 py-2">
                    <label htmlFor="">Categoria</label>
                    <input 
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                        type="text" 
                        className="focus:outline-none" 
                        placeholder="Insira a categoria do livro" 
                    />
                </div>
            </section>

            <h2 className="font-bold">Detalhes do livro</h2>

            <section className="border rounded py-1 px-2 bg-slate-50 flex flex-col gap-2">
                <div className="border-b py-2 flex gap-2">
                    <label htmlFor="">ISBN</label>
                    <input 
                        value={isbn}
                        onChange={e => setIsbn(e.target.value)}
                        type="text" 
                        className="focus:outline-none" 
                        placeholder="Insira o ISBN do livro" 
                    />
                </div>
                <div className="border-b py-2 flex itenms-center gap-2">
                    <label htmlFor="">Editora</label>
                    <input 
                        value={editora}
                        onChange={e => setEditora(e.target.value)}
                        type="text" 
                        className="focus:outline-none" 
                        placeholder="Insira a editora do livro" 
                    />
                </div>
                <div className="border-b py-2 flex itenms-center gap-2">
                    <label htmlFor="">Ano</label>
                    <input 
                        value={ano}
                        onChange={e => setAno(e.target.value)}
                        type="text" 
                        className="focus:outline-none" 
                        placeholder="Insira o ano do livro" 
                    />
                </div>
                <div className="py-2 flex itenms-center gap-2">
                    <label htmlFor="">Quantidade</label>
                    <input 
                        value={quantidade}
                        onChange={e => setQuantidade(e.target.value)}
                        type="text" 
                        className="focus:outline-none" 
                        placeholder="Insira a quantidade do livro" 
                    />
                </div>
            </section>

            <div className="flex justify-end-safe gap-4 mt-6">
                <button 
                    className="bg-blue-600 px-2 py-1 rounded text-white/88 font-medium w-24 hover:bg-blue-200 border-2 hover:border-blue-700 hover:text-blue-700 transition-colors duration-300 ease-in-out"
                >
                    Salvar
                </button>
                <button
                    onClick={handleLimpar} 
                    className="bg-gray-400 px-2 py-1 rounded text-white/96 font-medium w-24
                    hover:bg-gray-100 border-2 hover:border-gray-700 hover:text-gray-700 transition-colors duration-300 ease-in-out"
                >
                    Limpar
                </button>
            </div>
        </form>
    )
}