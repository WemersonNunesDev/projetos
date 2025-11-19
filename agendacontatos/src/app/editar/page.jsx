'use client';

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function Home() {
    const [busca, setBusca] = useState("");
    const [resultados, setResultados] = useState([]);

    // 🔎 Função para buscar contatos conforme digita
    useEffect(() => {
        async function fetchResultados() {
            if (busca.trim().length < 1) {
                setResultados([]);
                return;
            }

            const res = await fetch(`/api/agenda`);
            const dados = await res.json();

            // Filtra contatos que contem as letras digitadas
            const filtrados = dados.filter(item =>
                `${item.nome} ${item.sobrenome}`
                    .toLowerCase()
                    .includes(busca.toLowerCase())
            );

            setResultados(filtrados);
        }

        fetchResultados();
    }, [busca]);

    return (
        <div>
            <Navbar />

            <main className="lg:w-5xl mx-auto p-4">
                <PageHeader
                    title={'Editar contato'}
                    description={'Digite o nome para encontrar seu contato'}
                />

                <section className="mt-8">
                    <div className="bg-gray-200 rounded-3xl border-2 border-gray-800 p-3">
                        <input 
                            type="text"
                            placeholder="Pesquisar contato..."
                            value={busca}
                            onChange={e => setBusca(e.target.value)}
                            className="outline-none bg-transparent px-2 py-1 w-full"
                        />
                    </div>

                    {/* 🔽 Lista de sugestões */}
                    {resultados.length > 0 && (
                        <ul className="bg-white border rounded-xl shadow mt-2 p-2">
                            {resultados.map((contato, index) => (
                                <li
                                    key={index}
                                    className="p-2 border-b last:border-none cursor-pointer hover:bg-gray-100"
                                >
                                    {contato.nome} {contato.sobrenome} — {contato.telefone}
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* Nenhum resultado */}
                    {busca.length > 1 && resultados.length === 0 && (
                        <p className="mt-3 text-gray-600">Nenhum contato encontrado.</p>
                    )}
                </section>
            </main>

            <Footer />
        </div>
    );
}
