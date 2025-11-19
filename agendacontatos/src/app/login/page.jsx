import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function Login() {
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
                    <p className="my-2">Faça seu login abaixo:</p>

                    <form className="px-1 flex flex-col gap-2">
                        <div className="flex flex-col">
                            <label className="uppercase pl-1 font-medium">
                                email
                            </label>
                            <input 
                                type="email"
                                className="border rounded px-2 py-1 outline-none focus:border-blue-700"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="pl-1 uppercase font-medium">
                                senha
                            </label>
                            <input 
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
                    <p className="my-2">Faça seu cadastro logo abaixo:</p>

                    <form className="px-1 flex flex-col gap-2">
                        <div className="flex flex-col">
                            <label className="uppercase pl-1 font-medium">
                                email
                            </label>
                            <input 
                                type="email"
                                className="border rounded px-2 py-1 outline-none focus:border-blue-700"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="pl-1 uppercase font-medium">
                                senha
                            </label>
                            <input 
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