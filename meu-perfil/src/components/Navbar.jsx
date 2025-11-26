export default function Navbar({ title, description }) {
    return(
        <nav className="text-center text-gray-950">
            <h1 className="text-5xl font-semibold mb-3">{title}</h1>
            <p className="text-gray-950/88">{description}</p>
        </nav>
    )
}