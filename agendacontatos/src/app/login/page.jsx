'use client';

import { signIn } from 'next-auth/react';
import { useState } from "react";
import { useRouter } from 'next/navigation';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Msgbox from "@/components/Msgbox";

export default function Login() {
    const router = useRouter();
    const [msg, setMsg] = useState(null);
    const [status, setStatus] = useState('');

    async function handleRegister(e) {
        e.preventDefault();
        const email = e.target.emailCadastro.value;
        const senha = e.target.senhaCadastro.value;

        const res = await fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify({ email, senha }),
            headers: { 'Content-Tyoe': 'appplication/json' }
        });

        const data = await res.json();

        if (data.error) {
            setMsg(res.error)
            setStatus('alert')
            return
        };
        
        setMsg('Usuário cadastrado!');
        setStatus('succefull');
    }

    async function handleLogin(e) {
        e.preventDefault();
        setMsg(null);
        
        const email = e.target.emailLogin.value;
        const senha = e.target.senhaLogin.value;

        const res = await signIn('credentials', {
            redirect: false,
            email,
            senha,
        });

        if (res.error) setMsg('Dados inválidos!'), setStatus('alert');
        else router.push('/');
    }

    return (
        <div>
        <Navbar />
        <main className="lg:w-5xl mx-auto p-4">
            <PageHeader 
            title={'Login'}
            description={'Faça login ou cadastre-se abaixo.'}
            />

            <section className="grid grid-cols-2 gap-4 my-6">
                <div className="px-2 py-3">
                    <h3 className="text-2xl font-medium">Faça login</h3>
                    <p className="my-2">Se já tiver uma conta, faça seu login abaixo:</p>

                    <form onSubmit={handleLogin} className="px-1 flex flex-col gap-2">
                        <div className="flex flex-col">
                            <label className="uppercase pl-1 font-medium">
                                email
                            </label>
                            <input 
                                name="emailLogin"
                                type="email"
                                className="border rounded px-2 py-1 outline-none focus:border-blue-700"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="pl-1 uppercase font-medium">
                                senha
                            </label>
                            <input 
                                name="senhaLogin"
                                type="password"
                                className="border rounded px-2 py-1 outline-none focus:border-blue-700"
                            />
                        </div>

                        <button 
                            type="submit"
                            className="capitalize font-medium border-2 border-blue-500 bg-blue-500 text-white px-3 py-1.5 rounded 
                            hover:bg-sky-400 hover:border-white"
                        >
                            entrar
                        </button>
                    </form>
                </div>

                <div className="px-2 py-3">
                    <h3 className="text-2xl font-medium">Faça seu cadastro</h3>
                    <p className="my-2">Se ainda não tiver uma conta, faça seu cadastro logo abaixo:</p>

                    <form onSubmit={handleRegister} className="px-1 flex flex-col gap-2">
                        <div className="flex flex-col">
                            <label className="uppercase pl-1 font-medium">
                                email
                            </label>
                            <input
                                name="emailCadastro"
                                type="email"
                                className="border rounded px-2 py-1 outline-none focus:border-blue-700"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="pl-1 uppercase font-medium">
                                senha
                            </label>
                            <input
                                name="senhaCadastro"
                                type="password"
                                className="border rounded px-2 py-1 outline-none focus:border-blue-700"
                            />
                        </div>

                        <button 
                            type="submit"
                            className="capitalize font-medium border-2 border-blue-500 bg-blue-500 text-white px-3 py-1.5 rounded 
                            hover:bg-sky-400 hover:border-white"
                        >
                            cadastrar
                        </button>
                    </form>
                </div>
            </section>
        </main>
        <Footer />
        </div>
    );
}