import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function pageErro() {
    return (
        <div>
        <Navbar />
        <main className="lg:w-5xl mx-auto p-4">
            <PageHeader 
            title={'Erro 404'}
            description={'A página que estava procurando não foi entrada!'}
            />
        </main>
        <Footer />
        </div>
    );
}
