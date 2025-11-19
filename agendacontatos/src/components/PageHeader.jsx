export default function PageHeader({ title, description }) {
    return(
        <header className="flex flex-col gap-3 text-center text-gray-950">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p>{description}</p>
        </header>
    )
}