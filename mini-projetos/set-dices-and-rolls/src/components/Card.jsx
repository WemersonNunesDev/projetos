export function Card({ title, description}) {
    return (
        <div>
            <header>
                <h1 className="text-2xl text-shadow-gray-900">{title}</h1>
            </header>
            <p className="
            ">{description}</p>
        </div>
    )
}