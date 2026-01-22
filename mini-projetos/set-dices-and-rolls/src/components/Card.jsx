import { Link } from 'react-router-dom';

export function Card({ title, description, txtBtn, route}) {
    return (
        <div className="text-left flex flex-col gap-2 border-2 border-indigo-600">
            <header className="text-indigo-950 bg-amber-400 py-2 px-4">
                <h1 className="text-2xl">{title}</h1>
            </header>
            <div className="flex justify-between items-center py-2 pr-2">
                <p className="text-base text-gray-950 py-2 px-4">
                    {description}
                </p>

                <a 
                    className="text-white px-4 py-2 bg-yellow-500 rounded"
                    href={route}
                >
                    {txtBtn || 'Acessar'}
                </a>
            </div>
        </div>
    )
}