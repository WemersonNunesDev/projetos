export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
            <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

            <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Email</label>
                <input
                type="email"
                className="border p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Digite seu email"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Senha</label>
                <input
                type="password"
                className="border p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Digite sua senha"
                />
            </div>

            <button
                type="submit"
                className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
                Entrar
            </button>
            </form>
        </div>
        </div>
    );
}
