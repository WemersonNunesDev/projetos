import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FindItem from "./component/FindItem";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="lg:w-5xl mx-auto p-4">
        <PageHeader 
          title={'Agenda'}
          description={'Seus contatos estão listados abaixo'}
        />

        <section className="my-8">
          <FindItem />
        </section>
      </main>
      <Footer />
    </div>
  );
}
