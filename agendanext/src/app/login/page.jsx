import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer";

export default function Login() {

    async function enviar(e) {
        e.preventDefault();

        const email = e.target.email.value;
        const senha = e.target.senha.value;

        const res = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ email, senha })
        });

        const result = await res.json();

        if (result.redirected) {
            window.location.href = result.redirect;
            return;
        }

        console.log('Login OK');
    }

    return(
        <div>
            <Navbar />
                <main className="w-4xl mx-auto">
                    <section className="text-center text-gray-950 mt-4 mb-8">
                        <h1 className="text-5xl font-semibold">Login</h1>
                        <p className="my-3">Faça login ou crie sua conta abaixo</p>
                        
                        <div className="my-4 grid grid-cols-2 gap-6">
                            <div className="px-3 py-2">
                                <div className="text-left flex flex-col gap-2">
                                    <h4 className="text-2xl">Faça seu login</h4>
                                    <p>Se já tiver uma conta faça seu login abaixo:</p>
                                </div>

                                <form 
                                    method="POST" 
                                    onSubmit={enviar}
                                    className="my-4" 
                                >
                                    <div className="flex flex-col text-left">
                                        <label className="px-2">Email</label>
                                        <input 
                                            type="email" 
                                            name="email"
                                            className="
                                            border-2 border-gray-950 
                                            px-2 py-1 
                                            rounded
                                            outline-none
                                            focus:border-blue-500
                                            " 
                                        />
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <label className="px-2">Senha</label>
                                        <input 
                                            type="password"
                                            name="senha"
                                            className="
                                            border-2 border-gray-950
                                            px-2 py-1
                                            rounded
                                            outline-none
                                            focus:border-blue-500
                                            "
                                        />
                                    </div>
                                    <div className="flex">
                                        <button
                                            type="submit"
                                            className="py-2 px-4 bg-blue-500 text-white font-medium
                                            my-4 rounded"
                                        >
                                            Entrar
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div className="px-3 py-2">
                                <div className="text-left flex flex-col gap-2">
                                    <h4 className="text-left text-2xl">Faça seu cadastro</h4>
                                    <p>Ainda não tem conta? Cadastre-se abaixo:</p>
                                </div>

                                <form className="my-4" method="POST">
                                    <div className="flex flex-col text-left">
                                        <label className="px-2">Email</label>
                                        <input 
                                            type="email" 
                                            name="email"
                                            className="
                                            border-2 border-gray-950 
                                            px-2 py-1 
                                            rounded
                                            outline-none
                                            focus:border-blue-500
                                            " 
                                        />
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <label className="px-2">Senha</label>
                                        <input 
                                            type="password"
                                            name="password"
                                            className="
                                            border-2 border-gray-950
                                            px-2 py-1
                                            rounded
                                            outline-none
                                            focus:border-blue-500
                                            "
                                        />
                                    </div>
                                    <div className="flex">
                                        <button
                                            type="submit"
                                            className="py-2 px-4 bg-blue-500 text-white font-medium
                                            my-4 rounded"
                                        >
                                            Cadastrar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </main>
            <Footer />
        </div>
    )
}