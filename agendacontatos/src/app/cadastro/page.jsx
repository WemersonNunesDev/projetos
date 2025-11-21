'use client';
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Msgbox from "@/components/Msgbox";

export default function Home() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState(null);
    const [status, setStatus] = useState(null);

    const handleVoltar = () => setMsg(null);

    async function handleSubmit(e) {
        e.preventDefault();

        const contato = { nome, sobrenome, telefone, email };

        const res = await fetch('/api/agenda', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contato),
        });

        if (res.ok) {
            setMsg('Contato cadastrado com sucesso!');
            setStatus('succefull')
            setNome('');
            setSobrenome('');
            setTelefone('');
            setEmail('');
        } else {
            setMsg('Erro ao cadastrar o contato!');
            setStatus('alert');
        }
    }

    return (
        <div>
            <Navbar />
            <main className="lg:w-5xl mx-auto p-4">
                <PageHeader 
                    title={'Cadastrar'}
                    description={'Cadastre seu contato no formulario abaixo.'}
                />

                {msg ? (
                    <div className="">
                        <Msgbox text={msg} styleMsg={status} className={'col-span-4'}/>
                        <button
                        onClick={handleVoltar}
                            className="capitalize bg-gray-400 text-white font-medium px-2 py-1 rounded my-2 border-2 border-gray-400 hover:bg-transparent hover:text-gray-600 hover:border-gray-600 transition duration-300 ease-in-out"
                        >
                            voltar
                        </button>
                    </div>
                ) : (
                    <form className="my-6 flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="bg-gray-300 flex flex-col justify-center p-4 rounded  border-2 border-gray-700 focus-within:border-indigo-500">
                        <label className="font-medium">Nome</label>
                        <input 
                            type="text"
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                            className="outline-none"
                        />
                    </div>
                    <div className="bg-gray-300 flex flex-col justify-center p-4 rounded  border-2 border-gray-700 focus-within:border-indigo-500">
                        <label className="font-medium">Sobrenome</label>
                        <input 
                            type="text"
                            value={sobrenome}
                            onChange={e => setSobrenome(e.target.value)}
                            className="
                            outline-none
                            "
                        />
                    </div>
                    <div className="bg-gray-300 flex flex-col justify-center p-4 rounded  border-2 border-gray-700 focus-within:border-indigo-500">
                        <label className="font-medium">Telefone</label>
                        <input 
                            type="number"
                            value={telefone}
                            onChange={e => setTelefone(e.target.value)}
                            className="
                            outline-none
                            "
                        />
                    </div>
                    <div className="bg-gray-300 flex flex-col justify-center p-4 rounded  border-2 border-gray-700 focus-within:border-indigo-500">
                        <label className="uppercase font-medium">email</label>
                        <input 
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="
                            outline-none
                            "
                        />
                    </div>
                    <div className="px-2">
                        <button 
                            type="submit" 
                            className="
                            capitalize text-white font-medium
                            bg-blue-500 border-2 border-blue-500
                            px-3 py-1 rounded w-28
                            hover:bg-transparent hover:text-blue-500
                            transition duration-300 ease-in-out
                            focus:bg-cyan-300 focus:text-cyan-50 focus:border-cyan-500
                            "
                        >
                            salvar
                        </button>
                    </div>
                </form>
                )}
            </main>
            <Footer />
        </div>
    );
}