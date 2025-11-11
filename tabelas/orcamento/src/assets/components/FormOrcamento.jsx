import { useState } from "react"
import { Calcular } from "../utils/Calcular";

export default function FormOrcamento() {
    const [tipoTijolo, setTipoTijolo] = useState('');
    const [alturaTijolo, setAlturaTijolo] = useState('');
    const [compTijolo, setCompTijolo] = useState('');
    const [precoTijolo, setPrecoTijolo] = useState('');
    const [alturaParede, setAlturaParede] = useState('');
    const [frente, setFrente] = useState('');
    const [profundidade, setProfundidade] = useState('');
    const [resultado, setResultado] = useState(null);
    const [valorTotal, setValorTotal] = useState(null);

    const tipos = {
        vermelho: { altura: 18, comprimento: 28 },
        ecologico: { altura: 6.5, comprimento: 25 },
    }

    const handleTipoTijolo = tipo => {
        setTipoTijolo(tipo);
        setAlturaTijolo(tipos[tipo].altura);
        setCompTijolo(tipos[tipo].comprimento);
    }

    const handleSubmit = e => {
        e.preventDefault();

        const calcular = new Calcular(
            parseFloat(alturaTijolo),
            parseFloat(compTijolo),
            parseFloat(precoTijolo),
            parseFloat(alturaParede),
            parseFloat(frente),
            parseFloat(profundidade)
        );
        const totalTijolos = calcular.totalTijolos();
        const valorTotal = calcular.precoTotal();

        setResultado(totalTijolos);
        setValorTotal(valorTotal);
    }

    const handleVoltar = () => setResultado(null);

    return (
        <div className="my-4">
            {!resultado ? (
                <form onSubmit={handleSubmit}>
                <section className="flex flex-col gap-2">
                    <label className="font-bold p-1">Qual é o tipo de tijolo?</label>
                    <div className="flex gap-3 px-2 my-2">
                        <button 
                            type="button"
                            onClick={() => handleTipoTijolo("vermelho")}
                            className={`uppercase text-sm border border-gray px-2 py-1 hover:cursor-pointer transition ${
                                tipoTijolo === "vermelho"
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-200 hover:bg-gray-300 text-gray-900"
                            }`}
                        >
                            Tijolo Vermelho
                        </button>
                        <button
                            type="button"
                            onClick={() => handleTipoTijolo("ecologico")}
                            className={`uppercase text-sm border border-gray px-2 py-1 hover:cursor-pointer transition ${
                                tipoTijolo === "ecologico"
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-200 hover:bg-gray-300 text-gray-900"
                            }`}
                        >
                            Tijolo ecologico
                        </button>
                    </div>

                    <input 
                        type="number"
                        step='any'
                        placeholder="Preço da unidade"
                        onChange={e => setPrecoTijolo(e.target.value)}
                        className="px-2 py-1 outline rounded required"
                    />
                </section>

                <section className="my-2 grid grid-cols-2">
                    <h3 className="text-lg font-bold col-span-2 pb-2">Perimetro</h3>
                    <div className="flex flex-col gap-2 mr-4">
                        <input 
                            type="number"
                            placeholder="Frente (m)"
                            value={frente}
                            onChange={e => setFrente(e.target.value)} 
                            className="px-2 py-1 outline rounded required" 
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <input 
                            type="number"
                            placeholder="Profundidade"
                            onChange={e => setProfundidade(e.target.value)}
                            className="px-2 py-1 outline rounded required" 
                        />
                    </div>
                </section>

                <section className="mt-4">
                    <input 
                        type="number" 
                        step='any'
                        placeholder="Altura das paredes"
                        value={alturaParede}
                        onChange={e => setAlturaParede(e.target.value)}
                        className="px-2 py-1 outline rounded required w-full"
                    />
                </section>

                <div className="border-t flex justify-end items-center p-4 mt-6">
                    <button 
                        type="submit"
                        disabled={!tipoTijolo}
                        className="bg-blue-500 px-2 py-1 rounded font-medium hover:cursor-pointer"
                    >
                        Calcular
                    </button>
                </div>
            </form>
            ) : (
                <div>
                    <h2 className="text-xl font-bold">Resultado</h2>
                    <p>
                        Você precisará de <strong>{resultado}</strong> tijolos.
                    </p>
                    <p>
                        Total: <strong>{valorTotal}</strong>
                    </p>
                    <button
                        onClick={handleVoltar}
                        className="mt-6 w-full bg-blue-500 py-2 rounded-lg hover:bg-blue-400 transition"
                    >
                        Voltar
                    </button>
                </div>
            )}
        </div>
    )
}