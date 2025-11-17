import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function erro404() {
    return(
        <div>
            <Navbar />
            <section className="w-full mx-auto p-4">
                <h1 className="text-4xl">Erro 404</h1>
                <p>A página que você procura não foi encontrada.</p>
            </section>
            <Footer />
        </div>
    )
}