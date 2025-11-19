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

    async function handleSubmit(e) {
        e.preventDefault();

        const contato = { nome, sobrenome, telefone, email };

        const res = await fetch('/api/agenda', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
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
                    <div>
                        <Msgbox text={msg} styleMsg={status}/>
                    </div>
                ) : (
                    <form className="my-6" onSubmit={handleSubmit}>
                    <div className="flex justify-around items-center border-b py-6">
                        <label className="w-[24%]">Nome</label>
                        <input 
                            type="text"
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                            className="
                            outline-none
                            px-2 py-1 w-[64%]
                            border border-gray-950 rounded
                            focus:border-blue-500
                            transition duration-300 ease-in-out
                            "
                        />
                    </div>
                    <div className="flex justify-around items-center border-b py-6">
                        <label className="w-[24%]">Sobrenome</label>
                        <input 
                            type="text"
                            value={sobrenome}
                            onChange={e => setSobrenome(e.target.value)}
                            className="
                            outline-none
                            px-2 py-1 w-[64%]
                            border border-gray-950 rounded
                            focus:border-blue-500
                            transition duration-300 ease-in-out
                            "
                        />
                    </div>
                    <div className="flex justify-around items-center border-b py-6">
                        <label className="w-[24%]">Telefone</label>
                        <input 
                            type="number"
                            value={telefone}
                            onChange={e => setTelefone(e.target.value)}
                            className="
                            outline-none
                            px-2 py-1 w-[64%]
                            border border-gray-950 rounded
                            focus:border-blue-500
                            transition duration-300 ease-in-out
                            "
                        />
                    </div>
                    <div className="flex justify-around items-center border-b py-6">
                        <label className="uppercase w-[24%]">email</label>
                        <input 
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="
                            outline-none
                            px-2 py-1 w-[64%]
                            border border-gray-950 rounded
                            focus:border-blue-500
                            transition duration-300 ease-in-out
                            "
                        />
                    </div>
                    <div className="px-2">
                        <button 
                            type="submit" 
                            className="
                            capitalize text-white font-medium
                            bg-blue-500 border-2 border-blue-500
                            px-3 py-1 my-6 rounded w-28
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